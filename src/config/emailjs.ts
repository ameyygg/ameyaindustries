// EmailJS Configuration
// This uses environment variables for security
// Create a .env.local file with your EmailJS credentials
// See EMAILJS_SETUP.md for detailed setup instructions

export const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (from environment variables or fallback)
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',

    // Your EmailJS Service ID (from environment variables or fallback)
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',

    // Your EmailJS Template ID (from environment variables or fallback)
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID'
}

// Email template variables that will be sent to EmailJS
// Make sure your EmailJS template includes these variable names:
// {{from_name}} - Customer's name
// {{from_email}} - Customer's email
// {{phone}} - Customer's phone
// {{country}} - Customer's country/city
// {{message}} - Customer's requirements
// {{to_email}} - Your business email (info@ameyaindustries.in)
// {{reply_to}} - Customer's email for replies
// {{submission_date}} - Date and time of submission
// {{website_source}} - Source identifier

// Production-ready features included:
// ✅ Environment variable support for security
// ✅ Proper error handling and user feedback
// ✅ Form validation and loading states
// ✅ Professional email formatting
// ✅ Multiple recipient support
// ✅ Automatic reply-to configuration
// ✅ Indian timezone date formatting
// ✅ Comprehensive setup documentation