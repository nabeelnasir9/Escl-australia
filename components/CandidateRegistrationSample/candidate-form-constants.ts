/** Workpay-hosted WHS training videos (same sources as reference form). */
export const WHS_MODULE_VIDEOS = [
  "https://www.workpay.com.au/video/1_Safety_at_work.mp4",
  "https://www.workpay.com.au/video/2_Diversity_at_work.mp4",
  "https://www.workpay.com.au/video/3_Manual_handling_at_work.mp4",
  "https://www.workpay.com.au/video/4_Emergencies_at_work.mp4",
] as const;

/** Copy of Section A labels from the reference candidate registration form. */
export const SECTION_A_QUESTIONS = [
  "Have you ever been medically retired on the grounds of ill health?",
  "Do you have a physical or psychological condition that might preclude you from some work duties or certain workplace environments (eg. asthma, Hay fever, vertigo)?",
  "Do you suffer from any allergies?",
  "Some work duties and workplace environments may not be advisable for pregnant women. If you wish to indicate that you are pregnant you may do so voluntarily here.",
  "Any neck or shoulder injuries/pain",
  "Any arm, hand, elbow or wrist injury/pain",
  "Repetitive strains or overuse injury",
  "Epilepsy, fits, seizures, blackouts",
  "Loss of hearing, Impaired Hearing",
  "Stress/Anxiety or nervous disorder",
  "Fatigue / tiredness related issues",
  "Asthma or other respiratory/breathing problems",
  "Arthritis, rheumatism",
  "Dizziness, fainting, vertigo",
  "Head Injury",
  "Speech impairment",
  "Any back injury/pain e.g. Scoliosis",
  "Any knee, leg or ankle pain/injury",
  "Persistent or frequent headaches, migraines",
  "Skin disorders, dermatitis, eczema",
  "Any stomach strains/hernias etc.",
  "Difficulty with vision or sight in either eye, Impaired Vision",
  "Any problems with bones/joints or muscles",
  "High / Low blood pressure",
  "Lung disorders/ Nerve disorders",
  "Any operations or surgery? If Yes Please give details",
  "Stomach problems, ulcers",
  "Heart trouble, angina",
  "Infectious disease",
] as const;

export const SECTION_B_QUESTIONS = [
  "Are you currently receiving any medical treatment for illness, injury or medical condition?",
  "Are you taking any medication that has the potential to cause drowsiness or affect your work performance (including operating machinery?",
  "Do you have any pre-existing and/or chronic and/or long term injuries or illness?",
  "Have you ever had a work related injury?",
  "Was a Workcover claim lodged? (Question not applicable to QLD. Applicants)",
] as const;

export const SECTION_C_ACTIVITIES = [
  "Crouching/bending/ Kneeling (repeatedly)",
  "Sitting for up to 30 minutes",
  "Working above shoulder height",
  "Hearing a normal conversation",
  "Climbing a ladder/working at heights",
  "Walking/working on uneven ground",
  "Handling meat and/or food produce",
  "Performing Shift Work",
  "Standing for 30 minutes",
  "Lifting objects weighing 15 kilograms or more",
  "Gripping objects firmly with both hands",
  "Repetitive movement of hands or arms",
  "Walking up and down stairs",
  "Using hand tools/operating machinery",
  "Wearing personal protective equipment (PPE)",
  "Working in confined spaces or underground",
  "Working in hot/cold environments inc. refrigerated storage",
] as const;

export const HEALTH_INTRO = `Health and safety of our employees is of utmost importance to chandler recruitment. This questionnaire is designed to assist us in ensuring that our employees are only placed in the assignments which they are capable of performing efficiently and in a safely manner.

Please read this document carefully and discuss any queries that you may have prior to completing the form with your respective Chandler Recruitment Consultants.

IMPORTANT: The information obtained in this questionnaire will be treated in strict confidence and will only be used in conjunction with the requirements of an assignment.`;

export const INJURY_DECLARATION = `You are required to disclose to Chandler Recruitment Consultants any or all existing or pre-existing injuries, illnesses or diseases suffered by you which could be accelerated, aggravated, deteriorate or recur by you performing the responsibilities associated with the employment for which you are applying with Chandler Recruitment Consultants.

If you fail to disclose this information or if you provide false and misleading information in relation to any pre-existing injury/condition you and your dependents may not be entitled to any form of workers' compensation and this may also constitute grounds for disciplinary action or dismissal.`;

export const PRIVACY_POLICY_HTML = `
<p class="mb-3">Your privacy is important to Chandler Services. It is our commitment to protect the privacy of the information of our employees and others. This statement outlines our privacy policy and how we manage and disclose personal information.</p>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">What is your personal information?</h3>
<p class="mb-3">Personal information is any information or an opinion (whether true or not) about you. It may range from the very sensitive (eg. criminal history, medical history or condition) to the everyday information (eg. full name, address, and phone number). It would include the opinions of others about your work performance (whether true or not), your work experience and qualifications, aptitude test results and other information obtained by us in connection with your possible work placements.</p>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">Why is your personal information collected?</h3>
<p class="mb-3">Your personal information will be collected by the experienced team of consultants at Chandler Services. It is collected and held to assist Chandler Services in determining your suitability for work placements. It is also used for staff management and in order to identify any training requirements.</p>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">How will your information be collected?</h3>
<p class="mb-2">Personal information will be collected from you directly when you fill out and submit one of our registration forms or any other information in connection with your application to us for registration. Personal information will also be collected when:</p>
<ul class="list-disc pl-5 space-y-1 mb-3">
<li>we receive any reference about you</li>
<li>we receive the results of any competency or medical test</li>
<li>we receive performance feedback (whether positive or negative)</li>
<li>we receive any complaint from or about you in the workplace</li>
<li>we receive any information about a workplace accident in which you are involved</li>
<li>we receive any information about any insurance investigation, litigation, registration or professional disciplinary matter, criminal matter, inquest or inquiry in which you are involved</li>
<li>you provide us with any additional information about you</li>
</ul>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">How will your information be used?</h3>
<p class="mb-2">Your personal information may be used in connection with:</p>
<ul class="list-disc pl-5 space-y-1 mb-3">
<li>your actual or possible work placement</li>
<li>your performance appraisals our assessment of your ongoing performance and prospects</li>
<li>any test or assessment (including medical tests and assessments) that you might be required to undergo</li>
<li>our identification of your training needs</li>
<li>any workplace rehabilitation</li>
<li>our management of any complaint, investigation or inquiry in which you are involved</li>
<li>any insurance claim or proposal that requires disclosure of your personal information</li>
</ul>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">Who might your personal information be disclosed to?</h3>
<ul class="list-disc pl-5 space-y-1 mb-3">
<li>potential and actual employers and clients of Chandler Services</li>
<li>Referees</li>
<li>companies within the Chandler Services Group</li>
<li>our insurers</li>
<li>a professional association or registration body that has a proper interest in the disclosure of your personal information</li>
<li>a workers compensation body</li>
<li>our contractors and suppliers (eg. IT contractors and database designers)</li>
<li>any person with a lawful entitlement to obtain the information</li>
</ul>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">How can you gain access to your personal information that we hold?</h3>
<p class="mb-3">Under privacy legislation you have a right to see any personal information about you that we may hold. If you are able to establish that any of the information that we hold about you is not accurate, complete and up to date we will take reasonable steps to correct this.</p>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">How is your personal information stored?</h3>
<p class="mb-3">Chandler Services takes all reasonable steps to ensure that information held in paper or electronic form is secure, and that it is protected from misuse, loss, unauthorized access, modification or disclosure. All staff at Chandler Services will take reasonable steps to ensure that personal information is only used for recruitment purposes or disclosed to other organisations to the extent necessary for our business purposes. When personal information is no longer required it will be destroyed.</p>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">Changes to our Privacy Policy?</h3>
<p class="mb-3">If any changes are made to Chandler Services' Privacy Policy, they will be posted on our website so that you are always kept up to date about the information we might use and whether it will be disclosed to anyone.</p>

<h3 class="font-semibold text-gray-900 mt-4 mb-2">Inquiries or Feedback?</h3>
<p>If you have any questions or concerns about our commitment to your privacy, please don't hesitate to contact us on 1300 499 449.</p>
`;
