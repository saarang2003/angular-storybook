⚙️ Angular UI Component Library with Storybook
A scalable and maintainable UI library built using Angular, styled with SCSS, and documented with Storybook for isolated development and visual testing.

📌 Features
🧩 Reusable UI components (Button, Modal, Input, etc.)

🖼️ Storybook-powered visual documentation

🧪 Isolated component previews and testing

🎨 Modular styling using SCSS

📷 Optional Chromatic integration for visual regression testing

📁 Project Structure
css
Copy
Edit
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
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/ui-library.git
cd ui-library
Install dependencies

nginx
Copy
Edit
npm install
Run Storybook

arduino
Copy
Edit
npm run storybook
Then open your browser and go to: http://localhost:6006

➕ Adding a New Component
Create a new folder inside src/app/components/your-component-name

Add the following files:

your-component.component.ts

your-component.component.html

your-component.component.scss

Create your-component.stories.ts in the same folder

Run Storybook to preview:

arduino
Copy
Edit
npm run storybook
📸 Chromatic Integration (Optional)
To enable cloud previews and visual regression testing:

lua
Copy
Edit
npx chromatic --project-token=<your-token>
Or use the shortcut:

arduino
Copy
Edit
npm run chromatic
🙌 Contributing
Read the CONTRIBUTING.md file

Fork the repository

Create a feature branch

Submit a pull request to the dev branch

📦 Tech Stack
Framework: Angular

Language: TypeScript

Styling: SCSS

Docs & Testing: Storybook, Chromatic (optional)

