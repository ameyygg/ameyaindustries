# EmailJS Setup Guide for Ameya Industries Contact Form

This guide will help you set up EmailJS to make the contact form fully functional in production.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Use the email address that will send the emails (e.g., a company Gmail account)
6. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Settings:
- **Template Name**: "Ameya Industries Contact Form"
- **Subject**: `New Contact Form Submission from {{from_name}}`

### Template Content (HTML):
```html
<h2>New Contact Form Submission</h2>
<p><strong>Submission Date:</strong> {{submission_date}}</p>
<p><strong>Source:</strong> {{website_source}}</p>

<hr>

<h3>Customer Information:</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Country/City:</strong> {{country}}</p>

<h3>Requirements:</h3>
<p>{{message}}</p>

<hr>

<p><strong>Reply To:</strong> {{reply_to}}</p>
<p><strong>Send To:</strong> {{to_email}}</p>

<p><small>This email was automatically generated from the Ameya Industries website contact form.</small></p>
```

4. In the "Settings" tab:
   - **To Email**: Enter `info@ameyaindustries.in, purchase@ameyaindustries.in`
   - **From Name**: Enter `Ameya Industries Website`
   - **Reply To**: Use `{{reply_to}}` (this will be the customer's email)

5. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., "user_abcdefghijk123456")

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts` in your project
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here', 
  TEMPLATE_ID: 'your_actual_template_id_here'
}
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check both email addresses (info@ameyaindustries.in and purchase@ameyaindustries.in) for the email

## Step 7: Production Deployment

The contact form is now production-ready! When you deploy your website, the EmailJS integration will work automatically.

## Troubleshooting

### Common Issues:

1. **"EmailJS is not configured" error**
   - Make sure you've updated the config file with real values
   - Check that none of the values contain "YOUR_EMAILJS_"

2. **Emails not being received**
   - Check your spam/junk folder
   - Verify the email addresses in the template settings
   - Make sure your EmailJS service is properly connected

3. **"Failed to send email" error**
   - Check the browser console for detailed error messages
   - Verify your EmailJS service is active
   - Check your EmailJS usage limits (free plan has monthly limits)

### EmailJS Free Plan Limits:
- 200 emails per month
- 50 emails per day
- If you need more, consider upgrading to a paid plan

## Security Notes

- Your EmailJS Public Key is safe to expose in frontend code
- EmailJS handles all the email authentication securely
- The actual email credentials are stored securely on EmailJS servers

## Support

If you need help with EmailJS setup:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard

---

Once configured, your contact form will:
✅ Send emails to both info@ameyaindustries.in and purchase@ameyaindustries.in
✅ Include all form data in a professional format
✅ Allow customers to reply directly to the inquiry
✅ Work reliably in production
✅ Provide proper error handling and user feedback