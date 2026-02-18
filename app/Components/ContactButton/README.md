# ContactButton Component

A reusable, animated contact button component with modal functionality built with Framer Motion and Aceternity UI design patterns.

## Features

- 🎨 **Beautiful Design**: Matches the reference design with smooth animations
- 📱 **Responsive**: Works perfectly on all device sizes
- ⚡ **Animated Modal**: Smooth entrance/exit animations with backdrop blur
- 🎯 **Customizable**: Multiple variants and customization options
- 📋 **Complete Form**: Full contact form with validation
- 🔧 **Reusable**: Easy to integrate anywhere in your app
- 🌙 **Dark Mode**: Built-in dark mode support

## Installation

The component uses the following dependencies:
- `framer-motion` - For animations
- `clsx` - For conditional classes
- `tailwind-merge` - For merging Tailwind classes

```bash
npm install framer-motion clsx tailwind-merge
```

## Usage

### Basic Usage

```jsx
import ContactButton from './Components/ContactButton/ContactButton';

function MyComponent() {
  const handleFormSubmit = async (formData) => {
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <ContactButton
      buttonText="View Experiences"
      modalTitle="Let's Get Started"
      modalSubtitle="Tell us about your project"
      onFormSubmit={handleFormSubmit}
    />
  );
}
```

### Advanced Usage

```jsx
<ContactButton
  buttonText="Start Your Journey"
  modalTitle="Transform Your Ideas"
  modalSubtitle="Let's discuss how we can help you achieve your goals."
  onFormSubmit={handleCustomSubmission}
  variant="outline"
  className="custom-button-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `buttonText` | `string` | `"View Experiences"` | Text displayed on the button |
| `modalTitle` | `string` | `"Let's Start Your Journey"` | Title shown in the modal |
| `modalSubtitle` | `string` | `"Tell us about your project..."` | Subtitle shown in the modal |
| `onFormSubmit` | `function` | `undefined` | Callback function when form is submitted |
| `className` | `string` | `""` | Additional CSS classes for the button |
| `variant` | `"primary" \| "secondary" \| "outline"` | `"primary"` | Button style variant |

## Form Data Structure

The `onFormSubmit` callback receives an object with the following structure:

```javascript
{
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  company: string,
  message: string
}
```

## Variants

### Primary (Default)
- Black background with white text
- Hover: White background with black text

### Secondary
- White background with black text
- Hover: Black background with white text

### Outline
- Transparent background with black border
- Hover: Black background with white text

## Customization

### Custom Styling
You can add custom classes to override the default styling:

```jsx
<ContactButton
  className="bg-gradient-to-r from-purple-600 to-blue-600 border-transparent"
  variant="primary"
/>
```

### Custom Form Submission
Handle form submissions with your own logic:

```jsx
const handleFormSubmit = async (formData) => {
  try {
    // Send to your API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Success handling
      alert('Message sent successfully!');
    }
  } catch (error) {
    // Error handling
    console.error('Error:', error);
  }
};
```

## Integration Examples

### With Email Services

```jsx
// Using EmailJS
const handleFormSubmit = async (formData) => {
  try {
    await emailjs.send(
      'your_service_id',
      'your_template_id',
      formData,
      'your_public_key'
    );
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message. Please try again.');
  }
};
```

### With API Endpoints

```jsx
// Sending to your backend API
const handleFormSubmit = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'contact-button'
    })
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
};
```

## File Structure

```
Components/
├── ContactButton/
│   ├── ContactButton.jsx      # Main button component
│   ├── ContactButton.css      # Additional styles
│   ├── ContactButtonExample.jsx # Usage examples
│   └── README.md             # This documentation
├── ContactForm/
│   └── ContactForm.jsx       # Contact form component
└── UI/
    └── AnimatedModal.jsx     # Modal component
```

## Accessibility

The component includes:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When modifying the component:
1. Maintain the existing API
2. Test on different screen sizes
3. Ensure accessibility standards
4. Update documentation if needed

## License

This component is part of the Momentify project.