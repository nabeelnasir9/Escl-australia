import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { sendJobApplicationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const resume = formData.get('resume') as File;

    if (!name || !email || !phone || !position || !resume) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (resume.type !== 'application/pdf') {
      return NextResponse.json(
        { success: false, message: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Save file temporarily
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempDir = join(process.cwd(), 'tmp');
    const fileName = `${Date.now()}-${resume.name}`;
    const filePath = join(tempDir, fileName);

    try {
      await writeFile(filePath, buffer);
    } catch (writeError) {
      console.error('Error writing file:', writeError);
      return NextResponse.json(
        { success: false, message: 'Failed to save resume file' },
        { status: 500 }
      );
    }

    // Send email
    try {
      const emailResult = await sendJobApplicationEmail({
        name,
        email,
        phone,
        position,
        resumePath: filePath,
      });

      if (!emailResult.success) {
        console.error('Email sending failed:', emailResult.error);
        return NextResponse.json(
          { success: false, message: 'Failed to send email: ' + (emailResult.error as Error)?.message },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'Application submitted successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error in email sending:', emailError);
      return NextResponse.json(
        { success: false, message: 'Email sending error: ' + (emailError as Error)?.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to process application',
      },
      { status: 500 }
    );
  }
} 