import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Interface for job application emails
export interface JobApplicationData {
  name: string;
  email: string;
  phone: string;
  position: string;
  resumeBuffer: Buffer;
  resumeFileName: string;
}

// Interface for contact form emails
export interface ContactFormData {
  // Contact Information
  name: string;
  email: string;
  phoneNumber: string;
  mobileNumber?: string;
  landlineNumber?: string;

  // Company Information
  companyName?: string;
  companyAddress?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  comments?: string;

  // Further Details
  positionTitle?: string;
  numberOfPositions?: string;
  siteAddress?: string;
  lengthOfAssignment?: string;
  startDate?: string;
  detailedDescription?: string;
  awardName?: string;
  shiftRequirements?: string;
}

// Function for sending job application emails
export const sendJobApplicationEmail = async (data: JobApplicationData) => {
  const { name, email, phone, position, resumeBuffer, resumeFileName } = data;

  // Verify SMTP configuration
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'set' : 'missing',
      pass: process.env.SMTP_PASS ? 'set' : 'missing'
    });
    return { success: false, error: new Error('SMTP configuration is incomplete') };
  }

  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Job Application: ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Job Application Received</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #444; margin-top: 0;">Applicant Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Resume:</strong> Attached as ${resumeFileName}</p>
          </div>

          <p style="margin-top: 20px; color: #666; font-size: 0.9em;">
            This is an automated message from the job application form.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: resumeFileName,
          content: resumeBuffer
        }
      ]
    };

    console.log('Attempting to send job application email:', {
      ...mailOptions,
      html: 'HTML content present',
      attachments: [{ filename: resumeFileName, content: 'File content present' }]
    });
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Job application email sent successfully:', info);
    return { success: true };
  } catch (error) {
    console.error('Detailed job application email error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return { success: false, error };
  }
};

// Function for sending contact form emails
export const sendContactFormEmail = async (data: ContactFormData) => {
  const {
    name,
    email,
    phoneNumber,
    mobileNumber,
    landlineNumber,
    companyName,
    companyAddress,
    suburb,
    state,
    postcode,
    comments,
    positionTitle,
    numberOfPositions,
    siteAddress,
    lengthOfAssignment,
    startDate,
    detailedDescription,
    awardName,
    shiftRequirements,
  } = data;

  // Verify SMTP configuration
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'set' : 'missing',
      pass: process.env.SMTP_PASS ? 'set' : 'missing'
    });
    return { success: false, error: new Error('SMTP configuration is incomplete') };
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `New Contact Form Submission: ${positionTitle || 'General Inquiry'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #444; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          ${mobileNumber ? `<p><strong>Mobile:</strong> ${mobileNumber}</p>` : ''}
          ${landlineNumber ? `<p><strong>Landline:</strong> ${landlineNumber}</p>` : ''}
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #444; margin-top: 0;">Company Information</h3>
          ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ''}
          ${companyAddress ? `<p><strong>Company Address:</strong> ${companyAddress}</p>` : ''}
          ${suburb ? `<p><strong>Suburb:</strong> ${suburb}</p>` : ''}
          ${state ? `<p><strong>State:</strong> ${state}</p>` : ''}
          ${postcode ? `<p><strong>Postcode:</strong> ${postcode}</p>` : ''}
          ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ''}
        </div>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
          <h3 style="color: #444; margin-top: 0;">Further Details</h3>
          ${positionTitle ? `<p><strong>Position Title:</strong> ${positionTitle}</p>` : ''}
          ${numberOfPositions ? `<p><strong>Number of Positions:</strong> ${numberOfPositions}</p>` : ''}
          ${siteAddress ? `<p><strong>Site Address:</strong> ${siteAddress}</p>` : ''}
          ${lengthOfAssignment ? `<p><strong>Length of Assignment:</strong> ${lengthOfAssignment}</p>` : ''}
          ${startDate ? `<p><strong>Start Date:</strong> ${startDate}</p>` : ''}
          ${detailedDescription ? `<p><strong>Detailed Description:</strong> ${detailedDescription}</p>` : ''}
          ${awardName ? `<p><strong>Award Name/EBA:</strong> ${awardName}</p>` : ''}
          ${shiftRequirements ? `<p><strong>Shift Requirements:</strong> ${shiftRequirements}</p>` : ''}
        </div>

        <p style="margin-top: 20px; color: #666; font-size: 0.9em;">
          This is an automated message from the contact form.
        </p>
      </div>
    `,
  };

  try {
    console.log('Attempting to send contact form email:', {
      ...mailOptions,
      html: 'HTML content present'
    });
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully:', info);
    return { success: true };
  } catch (error) {
    console.error('Detailed contact form email error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    return { success: false, error };
  }
}; 