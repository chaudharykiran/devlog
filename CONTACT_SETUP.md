# Contact Page Setup

The contact page (`/app/routes/contact.tsx`) includes two functional forms:

## Newsletter Subscription
- **Service**: Buttondown Email
- **URL**: `https://buttondown.email/api/emails/embed-subscribe/devlog`
- **Status**: ✅ Ready to use
- **Functionality**: Fully functional newsletter signup

## Contact Form  
- **Service**: Formspree (ready to integrate)
- **Status**: 🔧 Demo mode (needs Formspree form ID)
- **Current behavior**: Simulates form submission with success/error states

### To activate the contact form with Formspree:

1. Create a Formspree account at https://formspree.io
2. Create a new form and get your form ID
3. In `/app/routes/contact.tsx`, replace:
   ```javascript
   // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```
   with:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_ACTUAL_FORM_ID", {
   ```
4. Remove the demo simulation code and use the actual response handling

### Current Features:
- ✅ Form validation (required fields)
- ✅ Loading states (button disabled during submission)
- ✅ Success/error messaging
- ✅ Form reset after successful submission
- ✅ Proper form field names for submission services
- ✅ Accessible form design with labels and icons