import { NextRequest, NextResponse } from 'next/server';
import { sendGeneralContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phoneNumber, companyName, message } = await request.json();
    if (!name || !email || !phoneNumber || !companyName || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    const emailResult = await sendGeneralContactEmail({ name, email, phoneNumber, companyName, message });
    if (!emailResult.success) {
      throw new Error(emailResult.error instanceof Error ? emailResult.error.message : 'Failed to send email');
    }
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing general contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to process message',
      },
      { status: 500 }
    );
  }
} 