# Social Support Portal

##  About This Project
The **Social Support Portal** is a demo web application built with **React.js, Material UI, and Redux Toolkit**.  

It simulates the process of applying for social support benefits using a **multi-step form wizard**.  

- The focus is on **form flow**, **validations**, **clean UI/UX**, and **accessibility basics**.  
- OpenAI integration is included in **Step 3** to provide text suggestions for financial hardship descriptions (though API usage may be limited due to account restrictions).  
- The project is structured for **readability and maintainability**, making it a strong candidate for frontend developer assessments.  

---

##  Features

- Multi-step form wizard (Personal Info → Family & Financial Info → Situations).  
- Validations:
  - Step 1 → all fields required, DOB must be 20+ years, National ID format validation.  
  - Step 2 → all fields required, numeric checks for dependents & income.  
  - Step 3 → free text areas (AI assistance optional, not validated).  
- Redux Toolkit for state management (data persists across steps).  
- Local reset (form clears when you click “Go Home” or after submission).  
- Accessibility: ARIA roles, keyboard navigation, clear labels.  
- Responsive UI: Mobile-friendly design with Material UI.  
- Mock API call: Submissions are mocked, results shown on Success page.  

---

##  Tech Stack

- **Framework**: React.js (Vite)  
- **UI Library**: Material UI  
- **Forms**: React Hook Form  
- **State Management**: Redux Toolkit  
- **Routing**: React Router  
- **Internationalization**: React-i18next  
- **API Calls**: Axios  
- **(Optional)** Testing with Jest  

---

##  How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnamikaSingh33/social_support_portal
   cd social_support_portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the project root**
   ```env
   VITE_OPENAI_API_KEY=sk-your_api_key_here
   ```

    Note: `.env` is excluded from GitHub for security. You must create it manually.  
   Without this key, the **AI suggestion feature in Step 3** will not work.  

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at  [http://localhost:5173]

---

##  Environment Variables

This project uses a `.env` file to store sensitive information such as the **OpenAI API Key**.  

 `.env` is excluded from version control via `.gitignore` to prevent accidental leaks.  

Example `.env` file:
```env
VITE_OPENAI_API_KEY=sk-your_api_key_here
```

Why is `.env` excluded?  
- API keys are **secrets** and must never be pushed to GitHub.  
- GitHub has **push protection** that blocks commits if secrets are detected.  
- Keeping `.env` locally ensures your keys remain private.  

---

##  Form Flow & Validations

### Step 1 – Personal Information
- Fields: Name, National ID, Date of Birth, Gender, Email, Address, City, State, Country, Phone.  
- **Validations**:
  - All fields required.  
  - Date of Birth → must be 20 years or older.  
  - National ID → must follow regex (6–12 uppercase alphanumeric).  
  - Email → must be valid format.  
-  Next button disabled until valid.  

### Step 2 – Family & Financial Information
- Fields: Marital Status, Dependents, Employment Status, Monthly Income, Housing Status.  
- **Validations**:
  - All fields required.  
  - Dependents ≥ 0.  
  - Monthly Income ≥ 0.  
  - Next button disabled until valid.  

### Step 3 – Situations
- Fields: Current Financial Situation, Employment Circumstances, Reason for Applying.  
- **Validations**: none (text optional).  
- AI “Help me write” button included.  
- Submit always enabled.  

### Submission
- Mock API call simulated.  
- Success Page shows all submitted data grouped by section.  
- Clicking **Go Home** resets Redux state and starts fresh.  

---

##  Architecture & Decisions

- **React Hook Form** for smooth validation & performance.  
- **Redux Toolkit** for central state, making data accessible across steps and Success page.  
- **Material UI** for accessibility and responsive design.  
- **Vite proxy** for OpenAI calls (`/api/v1/chat/completions`) to bypass CORS in dev.  
- **Reset reducer** ensures form clears on “Go Home” or after submission.  

---

##  Evaluation Focus Coverage

- **Form flow and validations** → Multi-step, DOB + ID rules, numeric checks.  
- **OpenAI integration** → Implemented with error handling; restricted by account limitations.  
- **UI/UX** → Material UI wizard, responsive on mobile.  
- **Accessibility** → ARIA roles, labels, and keyboard navigation.  
- **Code structure & readability** → Organized in `components/`, `pages/`, `store/`, `api`.  
- **Documentation quality** → README explains setup, flow, validations, and limitations.  
