/**
 * Form Configuration
 * Update the GOOGLE_APPS_SCRIPT_URL with your deployed Google Apps Script URL
 */

// Google Apps Script URL from environment variables or fallback
export const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycby9CWajrxYZy4Mjail9N2xh51jghFI6xpgAoZiCCAnF64kwjBm-zQNrfpqXxsDG4il51Q/exec'

// Form submission configuration
export const FORM_CONFIG = {
  // Timeout for form submissions (in milliseconds)
  timeout: 10000,
  
  // Retry configuration
  retries: 2,
  
  // Form types
  formTypes: {
    BUSINESS_PARTNERSHIP: 'business-partnership',
    CUSTOMER_SIGNUP: 'customer-signup'
  }
}

// Email configuration for notifications
export const EMAIL_CONFIG = {
  // Your notification email (update this in Google Apps Script too)
  notificationEmail: import.meta.env.VITE_NOTIFICATION_EMAIL || 'admin@ardrona.com'
}