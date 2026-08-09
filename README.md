# Canbri Private Limited — Website

React + Tailwind CSS site for Canbri Private Limited, built with Vite.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder, which you can deploy to
Vercel, Netlify, GitHub Pages, or any static host.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Create the empty repo on GitHub first, then paste its URL into the
`git remote add` command above.)

## Project structure

```
canbri-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx      # React entry point
    ├── App.jsx       # The whole site (single component)
    └── index.css     # Tailwind directives
```
