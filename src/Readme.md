

readme_content = """
# Social Support Portal

A React + Material UI form wizard for submitting social support applications. Built with React Hook Form, Redux Toolkit, React Router, and optional OpenAI integration for generating situation descriptions.

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

## How to Run the Project

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
