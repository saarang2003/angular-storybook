⚙️ Angular UI Component Library with Storybook
A scalable and maintainable UI component library built using Angular, styled with SCSS, and powered by Storybook for isolated component development, testing, and visual documentation.
📌 Features

🧩 Reusable and modular UI components (e.g., Button, Modal, Input)
🖼️ Visual documentation and live previews via Storybook
🧪 Isolated component testing and development
🎨 SCSS-based styling for full theming flexibility
📷 Optional integration with Chromatic for visual regression testing

📁 Project Structure
src/
├── app/
│   └── components/
│       ├── button/
│       ├── checkbox/
│       ├── dropdown/
│       ├── input/
│       └── textarea/
├── stories/
│   ├── assets/
│   └── page.stories.ts
.storybook/
├── main.ts
└── preview.ts

🛠️ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/ui-library.git
cd ui-library

2. Install Dependencies
npm install

3. Run Storybook
npm run storybook

Open your browser and navigate to:http://localhost:6006
➕ Adding a New Component

Create a new folder inside src/app/components/your-component-name
Add the following files:
your-component.component.ts
your-component.component.html
your-component.component.scss


Create your-component.stories.ts in the same folder
Run Storybook to preview your component:

npm run storybook

📸 Chromatic Integration (Optional)
To enable cloud previews and automated visual regression tests:
npx chromatic --project-token=<your-token>

Or use:
npm run chromatic

🙌 Contributing
We welcome contributions! To get started:

Read the CONTRIBUTING.md file
Fork the repo, create a feature branch, and open a pull request to the dev branch

Process: Fork → Branch → PR to dev
✅ Project Milestones

✅ Storybook initialized  
✅ 5+ components added and documented  
✅ Theming configured  
✅ README completed  
⬜ Chromatic integration (optional)

📦 Tech Stack

Framework: Angular  
Language: TypeScript  
Styling: SCSS  
Docs & Previews: Storybook  
Visual Testing: Chromatic (optional)


Built with scalability, consistency, and developer experience in mind.
