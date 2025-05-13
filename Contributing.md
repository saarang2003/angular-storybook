# 🙌 Contributing to Angular UI Component Library

Thank you for your interest in contributing to our scalable and maintainable UI component library built with **Angular**, styled with **SCSS**, and documented using **Storybook**! This guide outlines the steps to contribute effectively.

## 📌 How to Contribute

### 1. Read the Guidelines
- Familiarize yourself with the project by reviewing the [README.md](./README.md) file.
- Ensure your contributions align with the project's goals of scalability, consistency, and developer experience.

### 2. Fork the Repository
- Fork the repository to your GitHub account by clicking the "Fork" button on the [project page](https://github.com/your-username/ui-library.git).
- Clone your fork locally:
  ```bash
  git clone https://github.com/your-username/ui-library.git
  cd ui-library
  ```

### 3. Create a Feature Branch
- Create a new branch for your feature or bug fix:
  ```bash
  git checkout -b feature/your-feature-name
  ```
- Use descriptive branch names (e.g., `feature/add-tooltip-component`, `fix/button-alignment`).

### 4. Develop Your Contribution
- **Add a Component**:
  1. Create a new folder in `src/app/components/your-component-name`.
  2. Add the following files:
     - `your-component.component.ts`
     - `your-component.component.html`
     - `your-component.component.scss`
  3. Create `your-component.stories.ts` in the same folder for Storybook integration.
  4. Test your component locally:
     ```bash
     npm run storybook
     ```
     Open http://localhost:6006 to preview.

- **Follow Coding Standards**:
  - Use **TypeScript** for Angular components.
  - Style with **SCSS** and follow the project's theming conventions.
  - Ensure components are reusable and modular.
  - Write clear, concise **Storybook stories** for documentation.

### 5. Test Your Changes
- Run Storybook to verify your component renders correctly:
  ```bash
  npm run storybook
  ```
- (Optional) If using Chromatic, run visual regression tests:
  ```bash
  npx chromatic --project-token=<your-token>
  ```
  or
  ```bash
  npm run chromatic
  ```

### 6. Commit Your Changes
- Write clear, concise commit messages:
  ```bash
  git commit -m "Add tooltip component with Storybook integration"
  ```
- Push your branch to your fork:
  ```bash
  git push origin feature/your-feature-name
  ```

### 7. Submit a Pull Request
- Open a pull request (PR) from your feature branch to the `dev` branch of the main repository.
- Include a clear description of your changes, referencing any related issues.
- Ensure your PR passes any automated checks (e.g., linting, tests).

## 📜 Code of Conduct
- Be respectful and inclusive in all interactions.
- Follow the project's coding standards and conventions.
- Provide constructive feedback during code reviews.

## 📦 Tech Stack
- **Framework**: Angular
- **Language**: TypeScript
- **Styling**: SCSS
- **Docs & Testing**: Storybook, Chromatic (optional)

## ✅ Project Milestones
- Contributions should align with the project's milestones, such as adding new components or enhancing Storybook documentation.

---

Thank you for helping make this UI component library better! 🚀