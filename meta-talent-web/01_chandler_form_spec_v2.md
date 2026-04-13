# Chandler Recruitment — Candidate Registration Form

**Spec version:** 2.0 (synced with actual code)
**Source files:**
- `app/.../page.tsx`
- `components/CandidateRegistrationSample/CandidateRegistrationSampleForm.tsx`
- `components/CandidateRegistrationSample/candidate-form-constants.ts`

**Total sections:** 13
**Total form fields:** ~136

---

## 1. Personal Information

### Name & identity (4 fields)

| # | Label | `name` attribute | Type | Options / Notes |
|---|---|---|---|---|
| 1 | Title | `title` | `<select>` | Mr / Mrs / Ms / Miss / Mx / Dr (default: Mr) |
| 2 | First Name | `firstName` | text | |
| 3 | Middle Name | `middleName` | text | |
| 4 | Last Name | `lastName` | text | |

### Demographics (2 fields)

| # | Label | `name` attribute | Type | Options / Notes |
|---|---|---|---|---|
| 5 | Gender | `gender` | `<select>` | Select / Male / Female / Intersex / Unknown |
| 6 | Date of birth | `dob` | `type="date"` | Note: years before 1971 require reselecting from dropdown |

### Address (8 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 7 | Full Address — Address Search and Address Line 1 | `addressSearch` | text |
| 8 | Full Address | `fullAddress` | text |
| 9 | Unit Number | `unitNumber` | text |
| 10 | Street Number | `streetNumber` | text |
| 11 | Street Name | `streetName` | text |
| 12 | Suburb | `suburb` | text |
| 13 | State | `state` | text |
| 14 | Post code | `postcode` | text |

### Contact (2 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 15 | Mobile | `mobile` | `type="tel"` |
| 16 | Email | `email` | `type="email"` |

### Photo upload (1 field)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 17 | Attach your photo | `photo` | `type="file"` |

### Jobactive provider (2 fields)

| # | Label | `name` attribute | Type | Notes |
|---|---|---|---|---|
| 18 | Currently registered with jobactive provider? | `jobactiveRegistered` | radio (yes/no) | |
| 19 | Provider name (if yes) | `jobactiveProviderName` | text | Always rendered (not conditional in current code) |

### Residential status (1 radio group)

| # | Label | `name` attribute | Type | Options |
|---|---|---|---|---|
| 20 | Residential Status | `residentialStatus` | radio | Australian Citizen / Australian Permanent Resident / Working Visa / Temporary Resident Visa / Student Visa |

### Identity document uploads (8 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 21 | Attach Passport image | `passport` | `type="file"` |
| 22 | Attach Birth certificate | `birthCert` | `type="file"` |
| 23 | Attach Australian Citizenship certificate | `citizenship` | `type="file"` |
| 24 | Attach Driving Licence | `licence` | `type="file"` |
| 25 | Attach Australian Medicare certificate | `medicare` | `type="file"` |
| 26 | Attach Australian Student card | `studentCard` | `type="file"` |
| 27 | Attach White card | `whiteCard` | `type="file"` |
| 28 | Attach Forklift licence | `forklift` | `type="file"` |

**Section 1 total: 28 fields**

---

## 2. Emergency Contact Information (4 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 29 | Full Name | `emergencyFullName` | text |
| 30 | Relationship | `emergencyRelationship` | text |
| 31 | Mobile Phone Number | `emergencyMobile` | text |
| 32 | Home Phone Number | `emergencyHome` | text |

---

## 3. Referee 1 Information (6 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 33 | Referee 1 Name | `ref1Name` | text |
| 34 | Referee 1 CompanyName | `ref1Company` | text |
| 35 | Referee 1 Position | `ref1Position` | text |
| 36 | Referee 1 Relationship | `ref1Relationship` | text |
| 37 | Referee 1 Mobile | `ref1Mobile` | text |
| 38 | Referee 1 Email | `ref1Email` | `type="email"` |

---

## 4. Referee 2 Information (6 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 39 | Referee 2 Name | `ref2Name` | text |
| 40 | Referee 2 CompanyName | `ref2Company` | text |
| 41 | Referee 2 Position | `ref2Position` | text |
| 42 | Referee 2 Relationship | `ref2Relationship` | text |
| 43 | Referee 2 Mobile | `ref2Mobile` | text |
| 44 | Referee 2 Email | `ref2Email` | `type="email"` |

---

## 5. Bank Account Information (4 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 45 | Account Name | `bankAccountName` | text |
| 46 | Bank Name | `bankName` | text |
| 47 | BSB | `bsb` | text (placeholder `XXX-XXX`) |
| 48 | Account Number | `accountNumber` | text |

---

## 6. Tax File Number Declaration (5 field groups)

| # | Label | `name` attribute | Type | Options |
|---|---|---|---|---|
| 49 | Tax File Number | `tfn` | text | |
| 50 | On what basis are you paid? | `paidBasis` | radio | Full-time employment / Part-time employment / Labour hire / Superannuation or annuity income stream / Casual employment |
| 51 | Are you: | `taxResidency` | radio | An Australian resident for tax purposes / A foreign resident for tax purposes / A working holiday maker |
| 52 | Claim tax-free threshold from this payer? | `taxFreeThreshold` | radio (yes/no) | Note: Only claim from one payer at a time |
| 53 | Have HELP/VSL/FS/SSL/TSL debt? | `studyLoanDebt` | radio (yes/no) | Note: Additional withholding applies if yes |

---

## 7. Super Fund Information (9 fields)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 54 | DO NOT HAVE OWN SUPER ACCOUNT | `noOwnSuperAccount` | checkbox |
| 55 | Super Account Name | `superAccountName` | text |
| 56 | Super Fund Name | `superFundName` | text |
| 57 | Super Membership Number | `superMembershipNumber` | text |
| 58 | Super Fund Address | `superFundAddress` | text |
| 59 | Super Phone No | `superPhone` | text (Business/Landline) |
| 60 | Super Website | `superWebsite` | text |
| 61 | Super Fund ABN | `superAbn` | text |
| 62 | Super Fund USI | `superUsi` | text |

> **Footnote in code:** *"Your employer is not required to accept your choice of fund if you have not provided the appropriate documents."*

---

## 8. Police Check Information (1 field)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 63 | Do you have an Australian police clearance | `policeClearanceAu` | radio (yes/no) |

---

## 9. Workplace Health & Safety Training (4 checkboxes + 4 video links)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 64 | Module 1 — Watched & understood | `whsModule1Confirmed` | checkbox |
| 65 | Module 2 — Watched & understood | `whsModule2Confirmed` | checkbox |
| 66 | Module 3 — Watched & understood | `whsModule3Confirmed` | checkbox |
| 67 | Module 4 — Watched & understood | `whsModule4Confirmed` | checkbox |

> Each module has a "Download & View" link (placeholder `href="#"` in current code).

---

## 10. COVID-19 Vaccinations (3 file uploads)

| # | Label | `name` attribute | Type |
|---|---|---|---|
| 68 | Attach COVID19 Vaccination 1 | `covidVaccination1` | `type="file"` |
| 69 | Attach COVID19 Vaccination 2 | `covidVaccination2` | `type="file"` |
| 70 | Attach COVID19 Vaccination 3 | `covidVaccination3` | `type="file"` |

---

## 11. Health Questionnaire

> **Health intro** (`HEALTH_INTRO` constant):
> Health and safety of our employees is of utmost importance to chandler recruitment. This questionnaire is designed to assist us in ensuring that our employees are only placed in the assignments which they are capable of performing efficiently and in a safely manner.
>
> **Injury declaration** (`INJURY_DECLARATION` constant):
> You are required to disclose any pre-existing injuries, illnesses or diseases that could be aggravated by your work duties. Failure to disclose may void workers' compensation entitlements.

### Section A — Health History (29 questions)

All rendered via `SECTION_A_QUESTIONS.map((q, i) => ...)` with `name="sectionA_${i}"`.

| # | Question | `name` attribute |
|---|---|---|
| 71 | Have you ever been medically retired on the grounds of ill health? | `sectionA_0` |
| 72 | Do you have a physical or psychological condition that might preclude you from some work duties or certain workplace environments (eg. asthma, Hay fever, vertigo)? | `sectionA_1` |
| 73 | Do you suffer from any allergies? | `sectionA_2` |
| 74 | Some work duties and workplace environments may not be advisable for pregnant women. If you wish to indicate that you are pregnant you may do so voluntarily here. | `sectionA_3` |
| 75 | Any neck or shoulder injuries/pain | `sectionA_4` |
| 76 | Any arm, hand, elbow or wrist injury/pain | `sectionA_5` |
| 77 | Repetitive strains or overuse injury | `sectionA_6` |
| 78 | Epilepsy, fits, seizures, blackouts | `sectionA_7` |
| 79 | Loss of hearing, Impaired Hearing | `sectionA_8` |
| 80 | Stress/Anxiety or nervous disorder | `sectionA_9` |
| 81 | Fatigue / tiredness related issues | `sectionA_10` |
| 82 | Asthma or other respiratory/breathing problems | `sectionA_11` |
| 83 | Arthritis, rheumatism | `sectionA_12` |
| 84 | Dizziness, fainting, vertigo | `sectionA_13` |
| 85 | Head Injury | `sectionA_14` |
| 86 | Speech impairment | `sectionA_15` |
| 87 | Any back injury/pain e.g. Scoliosis | `sectionA_16` |
| 88 | Any knee, leg or ankle pain/injury | `sectionA_17` |
| 89 | Persistent or frequent headaches, migraines | `sectionA_18` |
| 90 | Skin disorders, dermatitis, eczema | `sectionA_19` |
| 91 | Any stomach strains/hernias etc. | `sectionA_20` |
| 92 | Difficulty with vision or sight in either eye, Impaired Vision | `sectionA_21` |
| 93 | Any problems with bones/joints or muscles | `sectionA_22` |
| 94 | High / Low blood pressure | `sectionA_23` |
| 95 | Lung disorders/ Nerve disorders | `sectionA_24` |
| 96 | Any operations or surgery? If Yes Please give details + **textarea** | `sectionA_25` + `sectionA_25_details` |
| 97 | Stomach problems, ulcers | `sectionA_26` |
| 98 | Heart trouble, angina | `sectionA_27` |
| 99 | Infectious disease | `sectionA_28` |

> **Conditional logic in code:** Question 96 (operations/surgery) renders an additional `<textarea>` for details when matched via `q.includes("operations or surgery")`.

### Section B — Medical Details (5 questions)

| # | Question | `name` attribute |
|---|---|---|
| 100 | Are you currently receiving any medical treatment for illness, injury or medical condition? | `sectionB_0` |
| 101 | Are you taking any medication that has the potential to cause drowsiness or affect your work performance (including operating machinery? | `sectionB_1` |
| 102 | Do you have any pre-existing and/or chronic and/or long term injuries or illness? | `sectionB_2` |
| 103 | Have you ever had a work related injury? | `sectionB_3` |
| 104 | Was a Workcover claim lodged? (Question not applicable to QLD. Applicants) | `sectionB_4` |

### Section C — Physical Abilities (17 questions)

| # | Activity | `name` attribute |
|---|---|---|
| 105 | Crouching/bending/ Kneeling (repeatedly) | `sectionC_0` |
| 106 | Sitting for up to 30 minutes | `sectionC_1` |
| 107 | Working above shoulder height | `sectionC_2` |
| 108 | Hearing a normal conversation | `sectionC_3` |
| 109 | Climbing a ladder/working at heights | `sectionC_4` |
| 110 | Walking/working on uneven ground | `sectionC_5` |
| 111 | Handling meat and/or food produce | `sectionC_6` |
| 112 | Performing Shift Work | `sectionC_7` |
| 113 | Standing for 30 minutes | `sectionC_8` |
| 114 | Lifting objects weighing 15 kilograms or more | `sectionC_9` |
| 115 | Gripping objects firmly with both hands | `sectionC_10` |
| 116 | Repetitive movement of hands or arms | `sectionC_11` |
| 117 | Walking up and down stairs | `sectionC_12` |
| 118 | Using hand tools/operating machinery | `sectionC_13` |
| 119 | Wearing personal protective equipment (PPE) | `sectionC_14` |
| 120 | Working in confined spaces or underground | `sectionC_15` |
| 121 | Working in hot/cold environments inc. refrigerated storage | `sectionC_16` |

> **Note:** Answer YES if you have or could have difficulties performing the activity.

---

## 12. Privacy Policy

Rendered from `PRIVACY_POLICY_HTML` constant via `dangerouslySetInnerHTML` in 2-column layout.

**9 subsections:**
1. What is your personal information?
2. Why is your personal information collected?
3. How will your information be collected?
4. How will your information be used?
5. Who might your personal information be disclosed to?
6. How can you gain access to your personal information that we hold?
7. How is your personal information stored?
8. Changes to our Privacy Policy?
9. Inquiries or Feedback? (Phone: 1300 499 449)

---

## 13. Acknowledgement & Signature (2 fields)

| # | Label | `name` attribute | Type | Required |
|---|---|---|---|---|
| 122 | I HAVE READ AND UNDERSTOOD THE ABOVE PRIVACY POLICY | `privacyAcknowledged` | checkbox | **Yes** (only required field in code) |
| 123 | Candidate Signature | `candidateSignature` | `<textarea>` (5 rows) | No |

> **Note:** Signature is currently a textarea where users type their name. Production should replace with a signature pad component.

---

## Submit button

```tsx
<button type="submit">Register</button>
```

Currently calls `e.preventDefault()` only — no backend submission.

---

## Total Field Count Summary

| Section | Field Count |
|---|---|
| 1. Personal Information | 28 |
| 2. Emergency Contact | 4 |
| 3. Referee 1 | 6 |
| 4. Referee 2 | 6 |
| 5. Bank Account | 4 |
| 6. TFN Declaration | 5 |
| 7. Super Fund | 9 |
| 8. Police Check | 1 |
| 9. WHS Training | 4 |
| 10. COVID Vaccinations | 3 |
| 11. Health Questionnaire (A: 29 + B: 5 + C: 17) | 51 + 1 conditional textarea |
| 12. Privacy Policy | 0 (read-only) |
| 13. Acknowledgement & Signature | 2 |
| **TOTAL** | **~123 + 1 conditional = 124 fields** |

---

## File Upload Inventory (12 total)

| # | Field | Section |
|---|---|---|
| 1 | `photo` | Personal Info |
| 2 | `passport` | Personal Info |
| 3 | `birthCert` | Personal Info |
| 4 | `citizenship` | Personal Info |
| 5 | `licence` | Personal Info |
| 6 | `medicare` | Personal Info |
| 7 | `studentCard` | Personal Info |
| 8 | `whiteCard` | Personal Info |
| 9 | `forklift` | Personal Info |
| 10 | `covidVaccination1` | COVID |
| 11 | `covidVaccination2` | COVID |
| 12 | `covidVaccination3` | COVID |

---

## Component Architecture

The form uses 4 reusable inner components:

| Component | Purpose |
|---|---|
| `FieldLabel` | `<label>` wrapper with consistent styling |
| `TextInput` | Generic text/email/tel/date input |
| `FileField` | File upload with label |
| `YesNoRow` | Yes/No radio button row with label |
| `SectionCard` | White card wrapper with section title |

External constants imported from `candidate-form-constants.ts`:
- `SECTION_A_QUESTIONS` (29 strings)
- `SECTION_B_QUESTIONS` (5 strings)
- `SECTION_C_ACTIVITIES` (17 strings)
- `HEALTH_INTRO` (multiline string)
- `INJURY_DECLARATION` (multiline string)
- `PRIVACY_POLICY_HTML` (HTML string)

---

## Current Implementation Status

| Feature | Status |
|---|---|
| All form fields rendered | ✅ Complete |
| Visual layout (cards, grids) | ✅ Complete |
| Reusable component structure | ✅ Complete |
| Form state management | ❌ Not implemented (uncontrolled inputs) |
| Field validation | ❌ Not implemented |
| Conditional rendering (e.g. jobactive provider, super fields) | ❌ Always visible |
| Backend submission | ❌ `preventDefault()` only |
| File upload handling | ❌ No backend |
| Auto-save | ❌ Not implemented |
| Required field markers | ❌ Only `privacyAcknowledged` is required |
| Accessibility (ARIA labels, error states) | ⚠️ Partial |
| Mobile responsive | ✅ Tailwind grid breakpoints used |

---

*Spec generated by reverse-engineering `CandidateRegistrationSampleForm.tsx`. This document reflects exactly what the code renders, with no assumptions or recommendations added.*
