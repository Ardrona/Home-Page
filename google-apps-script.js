/**
 * Google Apps Script for Ardrona Form Submissions
 * This script receives form data and saves it to Google Sheets
 */

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    
    // Route to appropriate handler based on form type
    if (formType === 'business-partnership') {
      return handleBusinessPartnership(spreadsheet, data);
    } else if (formType === 'customer-signup') {
      return handleCustomerSignup(spreadsheet, data);
    } else {
      throw new Error('Invalid form type');
    }
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSpreadsheet() {
  const spreadsheetName = 'Ardrona Form Submissions';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);
  
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.openById(file.getId());
  } else {
    // Create new spreadsheet
    const spreadsheet = SpreadsheetApp.create(spreadsheetName);
    setupBusinessPartnershipSheet(spreadsheet);
    setupCustomerSignupSheet(spreadsheet);
    return spreadsheet;
  }
}

function setupBusinessPartnershipSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Business Partnerships');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Business Name',
    'Contact Name', 
    'Email',
    'Phone',
    'Address',
    'Business Type',
    'Delivery Volume',
    'Additional Info'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}

function setupCustomerSignupSheet(spreadsheet) {
  const sheet = spreadsheet.insertSheet('Customer Signups');
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Email',
    'City'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#34a853');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
}

function handleBusinessPartnership(spreadsheet, data) {
  const sheet = spreadsheet.getSheetByName('Business Partnerships') || 
                 setupBusinessPartnershipSheet(spreadsheet).getSheetByName('Business Partnerships');
  
  const timestamp = new Date();
  const rowData = [
    timestamp,
    data.businessName || '',
    data.contactName || '',
    data.email || '',
    data.phone || '',
    data.address || '',
    data.businessType || '',
    data.deliveryVolume || '',
    data.additionalInfo || ''
  ];
  
  // Add the data to the sheet
  sheet.appendRow(rowData);
  
  // Send email notification (optional)
  sendEmailNotification('business-partnership', data);
  
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Business partnership request submitted successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleCustomerSignup(spreadsheet, data) {
  const sheet = spreadsheet.getSheetByName('Customer Signups') || 
                 setupCustomerSignupSheet(spreadsheet).getSheetByName('Customer Signups');
  
  const timestamp = new Date();
  const rowData = [
    timestamp,
    data.email || '',
    data.city || ''
  ];
  
  // Add the data to the sheet
  sheet.appendRow(rowData);
  
  // Send email notification (optional)
  sendEmailNotification('customer-signup', data);
  
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Customer signup submitted successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendEmailNotification(formType, data) {
  try {
    const emailAddress = 'admin@ardrona.com'; // Replace with your email
    
    if (formType === 'business-partnership') {
      const subject = `New Business Partnership Request - ${data.businessName}`;
      const body = `
New Business Partnership Request:

Business Name: ${data.businessName}
Contact Name: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
Business Type: ${data.businessType}
Expected Daily Deliveries: ${data.deliveryVolume}
Additional Info: ${data.additionalInfo}

Submitted at: ${new Date().toLocaleString()}
      `;
      
      MailApp.sendEmail(emailAddress, subject, body);
      
    } else if (formType === 'customer-signup') {
      const subject = `New Customer Signup - ${data.city}`;
      const body = `
New Customer Signup:

Email: ${data.email}
City: ${data.city}

Submitted at: ${new Date().toLocaleString()}
      `;
      
      MailApp.sendEmail(emailAddress, subject, body);
    }
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't fail the form submission if email fails
  }
}

// Test function (optional)
function testScript() {
  const testData = {
    formType: 'business-partnership',
    businessName: 'Test Restaurant',
    contactName: 'John Doe',
    email: 'test@example.com',
    phone: '555-1234',
    address: '123 Main St, NYC',
    businessType: 'Restaurant',
    deliveryVolume: '20-30 per day',
    additionalInfo: 'Looking forward to drone delivery!'
  };
  
  const result = handleBusinessPartnership(getOrCreateSpreadsheet(), testData);
  console.log(result.getContent());
}