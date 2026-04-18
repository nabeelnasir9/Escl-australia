# Meta Talent Recruitment — Full Specification, Backend Architecture & Dashboard

---

## PART 1 — FORM FIELDS (Complete List)

Every field, its purpose, and what data it collects.

---

### Section 1 — Personal Information

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 1 | Title | `title` | select (Mr/Mrs/Ms/Miss/Mx/Dr) | Candidate's honorific / salutation |
| 2 | First Name | `firstName` | text | Legal first name |
| 3 | Middle Name | `middleName` | text | Legal middle name (optional) |
| 4 | Last Name | `lastName` | text | Legal surname |
| 5 | Gender | `gender` | select (Male/Female/Intersex/Unknown) | Gender identity for HR records |
| 6 | Date of Birth | `dob` | date | Age verification, payroll compliance |
| 7 | Full Address | `fullAddress` | textarea | Residential address for correspondence |
| 8 | Unit Number | `unitNumber` | text | Sub-address: unit/apartment number |
| 9 | Street Number | `streetNumber` | text | Street number component |
| 10 | Street Name | `streetName` | text | Street name component |
| 11 | Suburb | `suburb` | text | Suburb for postcode matching |
| 12 | State | `state` | text | Australian state (NSW/VIC/QLD etc.) |
| 13 | Post Code | `postcode` | text | Postcode for payroll jurisdiction |
| 14 | Mobile | `mobile` | tel | Primary contact number |
| 15 | Email | `email` | email | Primary contact email, login identity |
| 16 | Attach Photo | `photo` | file | ID photo for candidate profile |
| 17 | Jobactive Registered? | `jobactiveRegistered` | radio yes/no | Whether candidate is in jobactive program |
| 18 | Jobactive Provider Name | `jobactiveProviderName` | text | Name of jobactive provider (if yes) |
| 19 | Residential Status | `residentialStatus` | radio (5 options) | Work eligibility: citizen / PR / visa type |
| 20 | Passport | `passport` | file | Identity document — primary |
| 21 | Birth Certificate | `birthCert` | file | Identity document — secondary |
| 22 | Citizenship Certificate | `citizenship` | file | Proof of Australian citizenship |
| 23 | Driving Licence | `licence` | file | Identity + transport capability |
| 24 | Medicare Certificate | `medicare` | file | Health coverage proof |
| 25 | Student Card | `studentCard` | file | Required for student visa holders |
| 26 | White Card | `whiteCard` | file | Construction induction card |
| 27 | Forklift Licence | `forklift` | file | Forklift operation certification |

---

### Section 2 — Emergency Contact

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 28 | Full Name | `emergencyFullName` | text | Emergency contact's full name |
| 29 | Relationship | `emergencyRelationship` | text | Relationship to candidate (spouse/parent etc.) |
| 30 | Mobile Phone | `emergencyMobile` | text | Emergency contact mobile |
| 31 | Home Phone | `emergencyHome` | text | Emergency contact home landline |

---

### Section 3 — Referee 1

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 32 | Name | `ref1Name` | text | Referee's full name |
| 33 | Company Name | `ref1Company` | text | Referee's employer |
| 34 | Position | `ref1Position` | text | Referee's job title |
| 35 | Relationship | `ref1Relationship` | text | How referee knows candidate |
| 36 | Mobile | `ref1Mobile` | text | Referee contact number |
| 37 | Email | `ref1Email` | email | Referee contact email |

---

### Section 4 — Referee 2

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 38 | Name | `ref2Name` | text | Second referee's full name |
| 39 | Company Name | `ref2Company` | text | Second referee's employer |
| 40 | Position | `ref2Position` | text | Second referee's job title |
| 41 | Relationship | `ref2Relationship` | text | How referee knows candidate |
| 42 | Mobile | `ref2Mobile` | text | Second referee contact number |
| 43 | Email | `ref2Email` | email | Second referee contact email |

---

### Section 5 — Bank Account

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 44 | Account Name | `bankAccountName` | text | Name on bank account (payroll) |
| 45 | Bank Name | `bankName` | text | Financial institution name |
| 46 | BSB | `bsb` | text | Bank routing code (XXX-XXX format) |
| 47 | Account Number | `accountNumber` | text | Bank account number for direct deposit |

---

### Section 6 — Tax File Number (TFN) Declaration

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 48 | Tax File Number | `tfn` | text | ATO tax identifier — required for payroll withholding |
| 49 | Paid Basis | `paidBasis` | radio (5 opts) | Determines PAYG withholding rate |
| 50 | Tax Residency | `taxResidency` | radio (3 opts) | Resident / foreign / holiday maker classification |
| 51 | Tax-Free Threshold | `taxFreeThreshold` | radio yes/no | Claim $18,200 threshold from this employer |
| 52 | HELP/VSL/TSL Debt | `studyLoanDebt` | radio yes/no | Triggers additional withholding for study debt repayment |

---

### Section 7 — Super Fund

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 53 | No Own Super | `noOwnSuperAccount` | checkbox | Candidate has no existing super — employer assigns default fund |
| 54 | Super Account Name | `superAccountName` | text | Name on super account |
| 55 | Super Fund Name | `superFundName` | text | Name of the superannuation fund |
| 56 | Membership Number | `superMembershipNumber` | text | Member ID within the fund |
| 57 | Fund Address | `superFundAddress` | text | Physical address of the fund |
| 58 | Fund Phone | `superPhone` | text | Landline number for the fund |
| 59 | Fund Website | `superWebsite` | text | Fund website URL |
| 60 | Fund ABN | `superAbn` | text | Australian Business Number of the fund |
| 61 | Fund USI | `superUsi` | text | Unique Superannuation Identifier — required for contributions |

---

### Section 8 — Police Check

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 62 | Australian Police Clearance | `policeClearanceAu` | radio yes/no | Whether candidate holds a current police clearance certificate |

---

### Section 9 — WHS Training (Workplace Health & Safety)

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 63 | Module 1 Confirmation | `whsModule1Confirmed` | checkbox | Watched "Safety at Work" video |
| 64 | Module 2 Confirmation | `whsModule2Confirmed` | checkbox | Watched "Diversity at Work" video |
| 65 | Module 3 Confirmation | `whsModule3Confirmed` | checkbox | Watched "Manual Handling at Work" video |
| 66 | Module 4 Confirmation | `whsModule4Confirmed` | checkbox | Watched "Emergencies at Work" video |

Videos hosted at: `https://www.workpay.com.au/video/{1-4}_*.mp4`

---

### Section 10 — COVID-19 Vaccinations

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 67 | COVID Vaccination 1 | `covidVaccination1` | file | First dose certificate / proof |
| 68 | COVID Vaccination 2 | `covidVaccination2` | file | Second dose certificate / proof |
| 69 | COVID Vaccination 3 | `covidVaccination3` | file | Booster dose certificate / proof |

---

### Section 11 — Health Questionnaire

#### Section A — Health History (29 Yes/No questions)

| # | Question | Name Attr |
|---|---|---|
| 70 | Medically retired on grounds of ill health? | `sectionA_0` |
| 71 | Physical/psychological condition limiting work duties? | `sectionA_1` |
| 72 | Suffer from any allergies? | `sectionA_2` |
| 73 | Pregnant (voluntary disclosure)? | `sectionA_3` |
| 74 | Neck or shoulder injuries/pain? | `sectionA_4` |
| 75 | Arm, hand, elbow or wrist injury/pain? | `sectionA_5` |
| 76 | Repetitive strains or overuse injury? | `sectionA_6` |
| 77 | Epilepsy, fits, seizures, blackouts? | `sectionA_7` |
| 78 | Loss of / impaired hearing? | `sectionA_8` |
| 79 | Stress, anxiety or nervous disorder? | `sectionA_9` |
| 80 | Fatigue / tiredness related issues? | `sectionA_10` |
| 81 | Asthma or respiratory/breathing problems? | `sectionA_11` |
| 82 | Arthritis, rheumatism? | `sectionA_12` |
| 83 | Dizziness, fainting, vertigo? | `sectionA_13` |
| 84 | Head injury? | `sectionA_14` |
| 85 | Speech impairment? | `sectionA_15` |
| 86 | Back injury/pain (e.g. Scoliosis)? | `sectionA_16` |
| 87 | Knee, leg or ankle pain/injury? | `sectionA_17` |
| 88 | Persistent or frequent headaches, migraines? | `sectionA_18` |
| 89 | Skin disorders, dermatitis, eczema? | `sectionA_19` |
| 90 | Stomach strains/hernias? | `sectionA_20` |
| 91 | Difficulty with vision / impaired vision? | `sectionA_21` |
| 92 | Problems with bones/joints or muscles? | `sectionA_22` |
| 93 | High / low blood pressure? | `sectionA_23` |
| 94 | Lung disorders / nerve disorders? | `sectionA_24` |
| 95 | Operations or surgery? *(+ details textarea `sectionA_25_details`)* | `sectionA_25` |
| 96 | Stomach problems, ulcers? | `sectionA_26` |
| 97 | Heart trouble, angina? | `sectionA_27` |
| 98 | Infectious disease? | `sectionA_28` |

#### Section B — Medical Details (5 Yes/No questions)

| # | Question | Name Attr |
|---|---|---|
| 99 | Currently receiving medical treatment? | `sectionB_0` |
| 100 | Taking medication that could cause drowsiness / affect work? | `sectionB_1` |
| 101 | Pre-existing / chronic / long-term injuries or illness? | `sectionB_2` |
| 102 | Had a work-related injury? | `sectionB_3` |
| 103 | Was a Workcover claim lodged? (not applicable QLD) | `sectionB_4` |

#### Section C — Physical Abilities (17 Yes/No questions)

*Answer YES if you have or could have difficulty performing the activity.*

| # | Activity | Name Attr |
|---|---|---|
| 104 | Crouching/bending/kneeling (repeatedly) | `sectionC_0` |
| 105 | Sitting for up to 30 minutes | `sectionC_1` |
| 106 | Working above shoulder height | `sectionC_2` |
| 107 | Hearing a normal conversation | `sectionC_3` |
| 108 | Climbing a ladder / working at heights | `sectionC_4` |
| 109 | Walking/working on uneven ground | `sectionC_5` |
| 110 | Handling meat and/or food produce | `sectionC_6` |
| 111 | Performing shift work | `sectionC_7` |
| 112 | Standing for 30 minutes | `sectionC_8` |
| 113 | Lifting objects 15 kg or more | `sectionC_9` |
| 114 | Gripping objects firmly with both hands | `sectionC_10` |
| 115 | Repetitive movement of hands or arms | `sectionC_11` |
| 116 | Walking up and down stairs | `sectionC_12` |
| 117 | Using hand tools / operating machinery | `sectionC_13` |
| 118 | Wearing personal protective equipment (PPE) | `sectionC_14` |
| 119 | Working in confined spaces or underground | `sectionC_15` |
| 120 | Working in hot/cold environments (inc. refrigerated storage) | `sectionC_16` |

---

### Section 12 — Privacy Policy

Read-only text block (9 subsections). No user-fillable fields.
Displayed via `dangerouslySetInnerHTML` from `PRIVACY_POLICY_HTML` constant.

---

### Section 13 — Acknowledgement & Signature

| # | Field Label | Name Attr | Type | Purpose |
|---|---|---|---|---|
| 121 | Privacy Policy Acknowledged | `privacyAcknowledged` | checkbox (required) | Consent to data collection and use |
| 122 | Candidate Signature (Draw) | `candidateSignature` | hidden (PNG data URL from canvas) | Drawn signature saved as base64 image |
| 123 | Candidate Signature (Upload) | `candidateSignatureUpload` | hidden (data URL from file reader) | Uploaded image of handwritten signature |

**Two-mode signature:** candidate can either draw on canvas pad or upload an image — whichever is used populates the respective hidden field.

---

**Total: ~123 fields + 1 conditional textarea (surgery details)**

---

## PART 2 — BACKEND ARCHITECTURE

### Database

**Provider:** Neon PostgreSQL (serverless, pooled connection)
**Connection:** `postgresql://neondb_owner:***@ep-patient-credit-ampbl3gi-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

#### DB Schema (Prisma-style)

```prisma
// candidates — one row per submitted form
model Candidate {
  id                    Int      @id @default(autoincrement())
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
  status                String   @default("new")  // new | reviewed | approved | rejected

  // Personal
  title                 String?
  firstName             String
  middleName            String?
  lastName              String
  gender                String?
  dob                   DateTime?
  fullAddress           String?
  unitNumber            String?
  streetNumber          String?
  streetName            String?
  suburb                String?
  state                 String?
  postcode              String?
  mobile                String?
  email                 String   @unique

  // Jobactive
  jobactiveRegistered   Boolean  @default(false)
  jobactiveProviderName String?

  // Residential
  residentialStatus     String?  // Australian Citizen | Permanent Resident | Working Visa | Temporary Resident | Student Visa

  // Emergency
  emergencyFullName     String?
  emergencyRelationship String?
  emergencyMobile       String?
  emergencyHome         String?

  // Referees
  ref1Name              String?
  ref1Company           String?
  ref1Position          String?
  ref1Relationship      String?
  ref1Mobile            String?
  ref1Email             String?
  ref2Name              String?
  ref2Company           String?
  ref2Position          String?
  ref2Relationship      String?
  ref2Mobile            String?
  ref2Email             String?

  // Bank
  bankAccountName       String?
  bankName              String?
  bsb                   String?
  accountNumber         String?  // store masked in logs, encrypted at rest

  // Tax
  tfn                   String?  // encrypted at rest
  paidBasis             String?
  taxResidency          String?
  taxFreeThreshold      Boolean?
  studyLoanDebt         Boolean?

  // Super
  noOwnSuperAccount     Boolean  @default(false)
  superAccountName      String?
  superFundName         String?
  superMembershipNumber String?
  superFundAddress      String?
  superPhone            String?
  superWebsite          String?
  superAbn              String?
  superUsi              String?

  // Police
  policeClearanceAu     Boolean?

  // WHS
  whsModule1Confirmed   Boolean  @default(false)
  whsModule2Confirmed   Boolean  @default(false)
  whsModule3Confirmed   Boolean  @default(false)
  whsModule4Confirmed   Boolean  @default(false)

  // Health — stored as JSON (flexible, avoids 100 boolean columns)
  healthSectionA        Json?    // { "0": "yes", "1": "no", ..., "25_details": "..." }
  healthSectionB        Json?    // { "0": "yes", ... }
  healthSectionC        Json?    // { "0": "no", ... }

  // Privacy & Signature
  privacyAcknowledged   Boolean  @default(false)
  signatureStorageKey   String?  // S3/Cloudflare R2 key for signature image

  // Files — stored as array of storage keys
  documents             Document[]

  // Reviewer
  reviewedBy            String?  // admin user id
  reviewNotes           String?

  @@index([status])
  @@index([email])
  @@index([createdAt])
}

// documents — one row per uploaded file
model Document {
  id            Int       @id @default(autoincrement())
  candidateId   Int
  candidate     Candidate @relation(fields: [candidateId], references: [id], onDelete: Cascade)
  fieldName     String    // e.g. "passport", "covidVaccination1"
  originalName  String    // original filename
  mimeType      String
  sizeBytes     Int
  storageKey    String    // S3 / R2 object key
  uploadedAt    DateTime  @default(now())

  @@index([candidateId])
}

// admins — dashboard users
model Admin {
  id           Int      @id @default(autoincrement())
  email        String   @unique
  passwordHash String
  name         String
  role         String   @default("reviewer")  // reviewer | super_admin
  createdAt    DateTime @default(now())
  sessions     Session[]
}

// sessions — JWT refresh token store (or use cookie-based)
model Session {
  id        String   @id @default(uuid())
  adminId   Int
  admin     Admin    @relation(fields: [adminId], references: [id], onDelete: Cascade)
  expiresAt DateTime
  createdAt DateTime @default(now())

  @@index([adminId])
}
```

---

### API Routes (Next.js App Router — `app/api/`)

#### Candidate Submission

| Method | Route | Purpose |
|--------|-------|---------|
| `POST` | `/api/candidates` | Submit new candidate form (multipart/form-data) |
| `GET` | `/api/candidates` | List all candidates (admin only, paginated, filterable by status) |
| `GET` | `/api/candidates/[id]` | Get single candidate full detail |
| `PATCH` | `/api/candidates/[id]/status` | Update status: new → reviewed → approved / rejected |
| `GET` | `/api/candidates/[id]/documents` | List documents for a candidate |
| `GET` | `/api/candidates/[id]/documents/[docId]/download` | Generate presigned URL for file download |
| `GET` | `/api/candidates/export` | Export filtered candidates as CSV |

#### Auth (Admin)

| Method | Route | Purpose |
|--------|-------|---------|
| `POST` | `/api/auth/login` | Email + password → JWT access token + httpOnly refresh cookie |
| `POST` | `/api/auth/logout` | Invalidate session |
| `POST` | `/api/auth/refresh` | Refresh access token using cookie |
| `GET` | `/api/auth/me` | Get current admin profile |

#### File Handling

| Method | Route | Purpose |
|--------|-------|---------|
| `POST` | `/api/upload` | Upload file → store to Cloudflare R2 / S3 → return storage key |
| `GET` | `/api/upload/presign?key=` | Generate 15-min presigned GET URL for secure file access |

---

### File Storage

**Recommended:** Cloudflare R2 (S3-compatible, no egress fees) or AWS S3.

```
Bucket structure:
  candidates/{candidateId}/passport.pdf
  candidates/{candidateId}/covidVaccination1.jpg
  candidates/{candidateId}/signature.png
  candidates/{candidateId}/photo.jpg
```

- Files stored with `private` ACL
- Access via presigned URLs (15 min TTL)
- Signatures (draw/upload) saved as PNG to same bucket

---

### Infrastructure (Scalable)

```
┌─────────────────────────────────────────────┐
│              Vercel (Next.js)               │
│   - App Router API routes (serverless)      │
│   - Candidate registration form (SSG)       │
│   - Admin dashboard (SSR / client)          │
│   - Edge middleware for auth                │
└──────────────┬──────────────────────────────┘
               │
    ┌──────────┼───────────┐
    │          │           │
    ▼          ▼           ▼
 Neon DB   Cloudflare    Resend
 (Postgres)  R2 Bucket  (Email alerts)
 Pooled     (Files)     - New submission
 connection              - Status change
```

**Scaling levers:**
- Neon auto-scales read replicas on demand
- Vercel serverless auto-scales with traffic (no config)
- R2 is globally distributed — zero config CDN for files
- Add Redis (Upstash) later for rate limiting / caching candidate counts

---

## PART 3 — DASHBOARD CODEBASE

**Folder:** `meta-talent-dashboard/` (separate Next.js 14 app)

### Folder Structure

```
meta-talent-dashboard/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx              # Admin login page
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx                # Sidebar + nav shell
│   │   ├── page.tsx                  # / → redirect to /candidates
│   │   ├── candidates/
│   │   │   ├── page.tsx              # Candidate list + KPIs + filters
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Candidate detail + documents
│   │   └── settings/
│   │       └── page.tsx              # Admin account settings
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   ├── refresh/route.ts
│   │   │   └── me/route.ts
│   │   ├── candidates/
│   │   │   ├── route.ts              # GET list, POST create
│   │   │   └── [id]/
│   │   │       ├── route.ts          # GET detail
│   │   │       ├── status/route.ts   # PATCH status
│   │   │       └── documents/
│   │   │           ├── route.ts
│   │   │           └── [docId]/
│   │   │               └── download/route.ts
│   │   ├── upload/
│   │   │   ├── route.ts              # POST upload
│   │   │   └── presign/route.ts      # GET presigned URL
│   │   └── candidates/export/route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── dashboard/
│   │   ├── KPICard.tsx
│   │   ├── ApplicantTable.tsx
│   │   ├── DetailPanel.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── DocumentCard.tsx
│   │   ├── FilterTabs.tsx
│   │   └── SearchBar.tsx
│   ├── auth/
│   │   └── LoginForm.tsx
│   └── ui/
│       ├── Avatar.tsx
│       ├── Button.tsx
│       └── SectionLabel.tsx
├── lib/
│   ├── db.ts                         # Prisma client singleton
│   ├── auth.ts                       # JWT sign/verify, session helpers
│   ├── storage.ts                    # R2 / S3 upload + presign helpers
│   ├── email.ts                      # Resend email notifications
│   └── middleware.ts                 # Edge auth middleware
├── prisma/
│   ├── schema.prisma                 # Full DB schema (see Part 2)
│   └── migrations/
├── middleware.ts                     # Protect /dashboard/* routes
├── .env.local                        # Secrets (never commit)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

### Key Dependencies

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "@prisma/client": "^5",
    "prisma": "^5",
    "bcryptjs": "^2",
    "jsonwebtoken": "^9",
    "@aws-sdk/client-s3": "^3",
    "@aws-sdk/s3-request-presigner": "^3",
    "resend": "^3",
    "lucide-react": "^0.475",
    "react-signature-canvas": "^1",
    "tailwindcss": "^3",
    "zod": "^3"
  }
}
```

---

### .env.local (Template — never commit real values)

```env
# Database
DATABASE_URL=postgresql://neondb_owner:***@ep-patient-credit-ampbl3gi-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require

# Auth
JWT_SECRET=change_me_to_64_char_random_string
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# File Storage (Cloudflare R2 or AWS S3)
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=metatalent-recruitment
R2_PUBLIC_URL=https://files.yourdomain.com

# Email (Resend)
RESEND_API_KEY=re_***
EMAIL_FROM=noreply@metatalent.com.au

# App
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

---

### Auth Flow

```
Admin hits /candidates
    │
    ▼
middleware.ts checks JWT cookie
    │
    ├─ Valid  → allow through
    └─ Invalid → redirect /login

POST /api/auth/login
  body: { email, password }
  1. Find Admin by email in DB
  2. bcrypt.compare(password, admin.passwordHash)
  3. Sign JWT access token (15 min)
  4. Create Session row in DB
  5. Set httpOnly Secure cookie: refresh_token
  6. Return { accessToken, admin }

POST /api/auth/refresh
  1. Read refresh_token cookie
  2. Find Session in DB, check not expired
  3. Issue new access token
  4. Return { accessToken }
```

---

### Dashboard Features (from sample code)

| Feature | Implementation |
|---|---|
| KPI cards (Total / New / In Review / Approved) | Count queries on `candidates` table grouped by `status` |
| Applicant table with search | `GET /api/candidates?search=&status=&page=` |
| Filter tabs (All / New / In Review / Approved) | Client-side state + API query param |
| Click row → slide-in detail panel | Client component, fetches `GET /api/candidates/[id]` |
| Mark In Review / Approve buttons | `PATCH /api/candidates/[id]/status` |
| Document list with download | Presigned URL from `GET /api/candidates/[id]/documents/[docId]/download` |
| Download All as ZIP | Server-side ZIP stream from R2 files |
| Bell icon with new count badge | KPI count from API |
| CSV Export | `GET /api/candidates/export` → streams CSV |
| Notification emails | Resend triggered on new submission + status change |

---

### Candidate Submission Flow (form → DB)

```
User submits /sample-candidate-registration
    │
    ▼
POST /api/candidates  (multipart/form-data)
    │
    ├─ 1. Parse form fields with formidable / built-in formData()
    ├─ 2. Validate with Zod schema
    ├─ 3. Upload each file to R2 → get storageKey
    ├─ 4. Insert Candidate row in Neon DB
    ├─ 5. Insert Document rows (one per file)
    ├─ 6. Send email notification to admin (Resend)
    └─ 7. Return { success: true, candidateId }
```

---

### Security Checklist

| Item | Implementation |
|---|---|
| TFN encrypted at rest | AES-256 via `crypto` before DB insert |
| Bank account masked in logs | Store full in DB, never log |
| Files private | R2 ACL private + presigned URLs only |
| Auth tokens httpOnly cookie | JS cannot read refresh token |
| CSRF protection | SameSite=Strict on cookies |
| Rate limiting | Upstash Redis on `/api/candidates` POST (max 5/min per IP) |
| Input validation | Zod schema on all API routes |
| SQL injection | Prisma parameterised queries (no raw SQL) |

---

*Document version: 1.0 — generated 2026-04-12*
