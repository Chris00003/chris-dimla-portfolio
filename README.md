# Chris Allan Dimla — Portfolio

A full-width, responsive, screenshot-free portfolio built with **Vite + vanilla JavaScript + Three.js**. Header navigation is fixed above all visual layers and uses explicit smooth-scroll handling so section links remain clickable. Project information is based on the supplied two-page CV. All 12 project cards use inline SVG icons, capability lists, technology tags, color accents, and UI interactions—no project screenshots are needed.

## Requirements

- Node.js 22.12+ (Node.js 24 LTS is recommended)
- npm

## Run locally

1. Extract this ZIP.
2. Open the extracted folder in VS Code. Make sure the terminal is in the folder that directly contains `package.json`.
3. Open a terminal in that folder (the one containing `package.json`).
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Add your portrait (optional)

Place your portrait at `public/images/chris.png`. It appears in the header, hero, systems badge, and footer. The hero portrait area is intentionally larger on desktop and remains responsive on mobile. If the file is missing, a built-in SVG silhouette appears instead. Project screenshots and background images are not required.

## CV download

The original CV supplied for this portfolio is located at `public/Chris Allan Dimla resume.pdf`. The résumé buttons download it using the filename **Chris Allan Dimla resume.pdf**.

## Production build

```bash
npm run build
npm run preview
```

The generated static site is in `dist/`.

## Publish with GitHub Pages

### First-time upload to a new repository

1. Create a **public** repository, e.g. `chris-dimla-portfolio`, at https://github.com/new. For this workflow, leave the options to add a README, `.gitignore`, or license unchecked.
2. Open PowerShell in this project folder (the folder containing `package.json`) and run:

   ```powershell
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/chris-dimla-portfolio.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your GitHub username. If Git says your identity is not configured, set your Git username and email first.

### Updating an existing GitHub repository

1. Clone your current repository (replace `YOUR-USERNAME` if needed):

   ```powershell
   git clone https://github.com/YOUR-USERNAME/chris-dimla-portfolio.git
   ```

2. Copy the contents of this updated ZIP into the newly cloned `chris-dimla-portfolio` folder and choose **Replace files** when prompted. Do not delete the hidden `.git` folder inside the cloned folder.
3. Open PowerShell in the cloned folder and run:

   ```powershell
   git add .
   git commit -m "Improve portfolio navigation and layout"
   git push
   ```

### Enable the public website

1. On GitHub, open your repository and go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages` to finish successfully. It runs automatically on every push to `main`.
4. The public URL will be `https://YOUR-USERNAME.github.io/chris-dimla-portfolio/` (replace `YOUR-USERNAME` with your real GitHub username).

The Vite config detects the repository name in GitHub Actions and configures the correct base path for GitHub Pages project sites. See the official [GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Publish with Netlify

- Build command: `npm run build`
- Publish directory: `dist`

Either connect the GitHub repository to Netlify or drag the generated `dist/` folder into Netlify Drop.

## Project content

The cards describe these systems from the CV: Payroll & HR Management, HR Incentive, Executive Attendance Dashboard, Attendance Tracker, Manager Approval, Shift Approval, Biometric Attendance Automation, Site Biometric Operations, CCTV Attendance Review, Employee Relations, Clinic Management, and HDEC-AI. Details are grouped by purpose and include the capabilities and stacks stated in the CV.

## Privacy note

This portfolio includes the CV PDF and contact details. A public repository and public website make the CV PDF and contact details visible and downloadable by anyone.
