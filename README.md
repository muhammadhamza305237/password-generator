# 🔐 Password Generator

A clean password generator web application built with **React 19**, **Tailwind CSS v4**, and **Vite**, allowing users to customize password length and include numbers or special characters with one-click clipboard copy.

**Live Demo:** https://password-generator-chi-cyan-53.vercel.app

## 🛠️ Tech Stack
- **Frontend:** React 19, Vite 7
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Hooks:** `useState`, `useCallback`, `useEffect`, `useRef`

## ✨ Key Features
- **Customizable Length:** Adjust password length dynamically from `6` to `100` characters using a range slider.
- **Numbers & Special Characters:** Toggle inclusion of digits and special symbols in the generated character pool.
- **Automatic Regeneration:** Automatically generates a password on load and updates whenever length or character options change.
- **Copy to Clipboard:** Selects the password input text and copies the generated password to the clipboard.

## 🚀 How to run locally
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`