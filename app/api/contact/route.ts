import { NextRequest, NextResponse } from 'next/server';
import { sendJobApplicationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Get form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const resume = formData.get('resume') as File;

    if (!name || !email || !phone || !position || !resume) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const resumeFileName = resume.name;

    // Send email with resume attachment
    const emailResult = await sendJobApplicationEmail({
      name,
      email,
      phone,
      position,
      resumeBuffer,
      resumeFileName
    });

    if (!emailResult.success) {
      throw new Error(emailResult.error instanceof Error ? emailResult.error.message : 'Failed to send email');
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to process application',
      },
      { status: 500 }
    );
  }
} 