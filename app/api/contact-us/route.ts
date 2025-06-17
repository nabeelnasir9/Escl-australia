import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = [
      'name',
      'email',
      'phoneNumber',
      'mobileNumber',
      'companyName',
      'companyAddress',
      'suburb',
      'state',
      'postcode',
      'positionTitle',
      'numberOfPositions',
      'siteAddress',
      'lengthOfAssignment',
      'startDate',
      'detailedDescription',
      'awardName',
      'shiftRequirements',
    ];

    const missingFields = requiredFields.filter((field) => !data[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Send email with all form data
    const emailResult = await sendContactFormEmail({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      mobileNumber: data.mobileNumber,
      landlineNumber: data.landlineNumber,
      companyName: data.companyName,
      companyAddress: data.companyAddress,
      suburb: data.suburb,
      state: data.state,
      postcode: data.postcode,
      comments: data.comments,
      positionTitle: data.positionTitle,
      numberOfPositions: data.numberOfPositions,
      siteAddress: data.siteAddress,
      lengthOfAssignment: data.lengthOfAssignment,
      startDate: data.startDate,
      detailedDescription: data.detailedDescription,
      awardName: data.awardName,
      shiftRequirements: data.shiftRequirements,
    });

    if (!emailResult.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to process contact form',
      },
      { status: 500 }
    );
  }
} 