# EmailJS Setup Guide for Your Portfolio Contact Form

Follow these steps to enable email functionality on your portfolio website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. The free tier allows **200 emails per month** which is sufficient for a portfolio

## Step 2: Add an Email Service

1. After logging in, go to **Email Services** in the sidebar
2. Click **Add New Service**
3. Select your email provider (e.g., **Gmail**, **Outlook**, etc.)
4. Follow the prompts to connect your email account
5. **Copy your Service ID** (e.g., `service_abc123`) - you'll need this

## Step 3: Create an Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Design your email template. Here's a suggested template:

### Template Content:

**Subject:** `New Portfolio Message: {{subject}}`

**Content (HTML):**
```html
<h2>New Message from Your Portfolio</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<hr>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>

<p><em>This message was sent from your portfolio website contact form.</em></p>
```

4. In the template settings:
   - Set **To Email** to your email address (e.g., `kipyegonaldo@gmail.com`)
   - Set **From Name** to `{{from_name}}`
   - Set **Reply To** to `{{from_email}}`

5. Click **Save** and **copy your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** in the sidebar
2. Under **API Keys**, copy your **Public Key** (e.g., `user_AbCdEfGh123456`)

## Step 5: Update Your Code

Open `js/script.js` and replace the placeholder values:

```javascript
// Replace 'YOUR_PUBLIC_KEY' with your actual public key
emailjs.init('user_AbCdEfGh123456');

// Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### Example with real values:
```javascript
emailjs.init('user_AbCdEfGh123456');  // Your Public Key

emailjs.send('service_abc123', 'template_xyz789', templateParams)  // Service ID, Template ID
```

## Step 6: Test Your Form

1. Open your portfolio in a browser
2. Fill out the contact form
3. Submit and check your email inbox

## Template Variables Reference

Your template can use these variables (already configured in the code):

| Variable | Description |
|----------|-------------|
| `{{from_name}}` | The visitor's name |
| `{{from_email}}` | The visitor's email address |
| `{{subject}}` | The message subject |
| `{{message}}` | The message content |
| `{{to_name}}` | Your name (Aldo) |

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all three IDs (Public Key, Service ID, Template ID) are correct
- Make sure your email service is connected properly

### Gmail not working?
- You may need to allow less secure apps or use an App Password
- Consider using Gmail with OAuth2 in EmailJS settings

### Rate limited?
- Free tier: 200 emails/month
- Consider upgrading if you need more

## Security Note

The Public Key is safe to use in frontend code. It can only be used to send emails through your configured templates.

---

Need help? Visit the [EmailJS Documentation](https://www.emailjs.com/docs/)

