# 🤝 Contributing Guide

Thank you for considering contributing to our Angular UI Component Library! 🎉

## 🧠 General Guidelines

- ✅ **Assign the issue** to yourself before starting, to avoid duplication.
- 💬 Keep **all discussions inside the issue thread** for clarity and shared context.
- 💡 Want to suggest a new feature or improvement? **Create a new issue** and assign it to yourself if you plan to work on it.

---

## 🛠️ Contribution Workflow

### 1. Fork & Clone the Repository
```bash
git clone https://github.com/<your-username>/ui-library.git
cd ui-library


2. Create a Feature Branch
🚫 Never work directly on main or dev.

bash
Copy
Edit
git checkout dev
git pull origin dev
git checkout -b "<your-name>/dev/<feature-name>"
3. Make Changes
Create your component inside src/app/components/your-component

Add .stories.ts for the component

Follow naming conventions and existing architecture

4. Preview Changes
bash
Copy
Edit
npm install
npm run storybook
📍 Storybook should open at: http://localhost:6006

5. Raise a Pull Request
PR should target dev branch

Add before/after screenshots

Reference the related issue with Fixes #issue_number

Use descriptive PR titles and summaries

✅ Done? Review This Checklist:
 Branch is up-to-date with dev

 Story is working and viewable in Storybook

 No broken styles or console errors

 PR description includes screenshots

 Issue is linked and assigned