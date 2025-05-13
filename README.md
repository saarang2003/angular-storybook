# ⚙️ Angular UI Component Library with Storybook

A scalable and maintainable UI component library built using **Angular**, styled with **SCSS**, and powered by **Storybook** for isolated component development, testing, and visual documentation.

## 📌 Features

- 🧩 Reusable and modular UI components (e.g., Button, Modal, Input)
- 🖼️ Visual documentation and live previews via Storybook
- 🧪 Isolated component testing and development
- 🎨 SCSS-based styling for full theming flexibility
- 📷 Optional integration with Chromatic for visual regression testing

## 📁 Project Structure

```
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
```

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ui-library.git
cd ui-library
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Storybook

```bash
npm run storybook
```

Open your browser and navigate to:\
http://localhost:6006

## ➕ Adding a New Component

1. Create a new folder inside `src/app/components/your-component-name`
2. Add the following files:
   - `your-component.component.ts`
   - `your-component.component.html`
   - `your-component.component.scss`
3. Create `your-component.stories.ts` in the same folder
4. Run Storybook to preview your component:

```bash
npm run storybook
```

## 📸 Chromatic Integration (Optional)

To enable cloud previews and automated visual regression tests:

```bash
npx chromatic --project-token=<your-token>
```

Or use:

```bash
npm run chromatic
```

## 🙌 Contributing

We welcome contributions! To get started:

- Read the `CONTRIBUTING.md` file
- Fork the repo, create a feature branch, and open a pull request to the `dev` branch

**Process:** Fork → Branch → PR to dev

## ✅ Project Milestones

- ✅ Storybook initialized
- ✅ 5+ components added and documented
- ✅ Theming configured
- ✅ README completed
- ✅ Chromatic integration (optional)

## 📦 Tech Stack

1. **Framework:** Angular
2. **Language:** TypeScript
3. **Styling:** SCSS
4. **Docs & Previews:** Storybook
5. **Visual Testing:** Chromatic (optional)

---

Built with scalability, consistency, and developer experience in mind.