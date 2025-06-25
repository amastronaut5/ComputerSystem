# Requirements for Running the Computer System Vision Platform

This project is built using the [Next.js](https://nextjs.org/) framework with TypeScript, React, and TailwindCSS.  
Below are the requirements and setup instructions.

---

## 1. Node.js & npm

- **Node.js** (version 18.x or higher recommended)
- **npm** (comes bundled with Node.js)

> You can check your versions with:
> ```bash
> node --version
> npm --version
> ```

**Install Node.js:**  
- [Download from nodejs.org](https://nodejs.org/en/download)
- Or use your system package manager (`apt`, `brew`, `choco`, etc.)

---

## 2. (Optional) Git

- **Git** for cloning the repository and version control.  
  [Download Git](https://git-scm.com/downloads)

---

## 3. (Optional, for code editing) VS Code

- [Visual Studio Code](https://code.visualstudio.com/)  
  Recommended for best editing experience.

---

## 4. (Optional) pnpm or yarn

- This project uses `npm` by default, but you can use [`pnpm`](https://pnpm.io/) or [`yarn`](https://yarnpkg.com/) if you prefer.

---

## 5. (Optional) Python

- Python is **NOT** required for running the platform, but you can use it for content scripting, data generation, or automation.

---

## 6. (Optional) SQLite/Postgres

- **NOT required by default.** The project can be run without a database.
- If you want to add user progress tracking or authentication, you may need a database such as SQLite or Postgres (setup instructions would be provided in that case).

---

## 7. Environment Variables

- No special environment variables are required for basic usage.
- For deployment or database features, you may need a `.env` file.

---

## 8. Internet Connection

- Required to install dependencies and access external learning resources/playlists.

---

## Summary Table

| Requirement         | Minimum Version | How to Get It                  |
|---------------------|----------------|-------------------------------|
| Node.js             | 18.x           | [nodejs.org](https://nodejs.org/) |
| npm                 | 9.x+           | Included with Node.js         |
| Git (optional)      | any            | [git-scm.com](https://git-scm.com/) |
| VS Code (optional)  | any            | [code.visualstudio.com](https://code.visualstudio.com/) |
| Python (optional)   | 3.x            | [python.org](https://python.org/) |
| SQLite/Postgres     | optional       | For advanced features         |

---

## Quick Setup

```bash
# 1. Download/clone the repo
git clone https://github.com/YOUR-USERNAME/computer-system-vision.git
cd computer-system-vision

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
# Visit http://localhost:3000
```

---

**That’s it! You don’t need anything else for a smooth, powerful learning experience.**