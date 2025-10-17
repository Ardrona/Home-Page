# Ardrona Home Page

## Project Info

Ardrona is a modern delivery service platform connecting businesses and customers in NYC. This homepage features:

- **Business Partnership Forms** - Restaurants and businesses can apply to partner with Ardrona
- **Customer Signup** - Users can join the waitlist for delivery services
- **Google Sheets Integration** - All form submissions are automatically saved to Google Sheets
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Responsive Design** - Optimized for all devices



## How can I edit this code?

There are several ways of editing your application.



**Use your preferred IDE**



The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables (optional)
cp .env.example .env
# Edit .env with your Google Apps Script URL

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Google Sheets Integration Setup

To enable form submissions to Google Sheets:

1. **Deploy Google Apps Script**:
   - Copy the code from `google-apps-script.js`
   - Create a new project at [script.google.com](https://script.google.com)
   - Deploy as Web App (Execute as: Me, Access: Anyone)

2. **Configure Environment**:
   - Copy the Web App URL
   - Update `src/config/forms.ts` with your URL
   - Or set `VITE_GOOGLE_APPS_SCRIPT_URL` in `.env`

3. **Test Forms**:
   - Business partnership form in hero section
   - Customer signup form
   - Check Google Sheets for submissions

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## How can I deploy this project?

Deploy using your preferred platform (Vercel, Netlify, AWS, etc.) or Ardrona's recommended deployment method.


## Can I connect a custom domain to my Ardrona project?

Yes, you can!

To connect a domain, configure your DNS settings to point to Ardrona's hosting or deployment platform.

Refer to Ardrona documentation or support for details.
