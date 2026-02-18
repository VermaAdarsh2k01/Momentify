import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, message } = formData;
    
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Here you can add your logic to handle the form data:
    // - Save to database
    // - Send email notification
    // - Integrate with CRM
    // - Send to third-party services
    
    console.log('Contact form submission:', {
      ...formData,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });
    
    // Example: Send email notification (you would implement this)
    // await sendEmailNotification(formData);
    
    // Example: Save to database (you would implement this)
    // await saveToDatabase(formData);
    
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: `contact_${Date.now()}` // Generate a simple ID
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests to return form configuration
export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint is working',
    fields: ['firstName', 'lastName', 'email', 'phone', 'company', 'message'],
    requiredFields: ['firstName', 'lastName', 'email', 'message']
  });
}