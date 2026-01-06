# Deployment Guide - GitHub Pages

This guide will help you deploy your personal portfolio to GitHub Pages.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `personal-portfolio` (or your preferred name)
5. Description: "My personal portfolio website"
6. Choose **Public** (required for free GitHub Pages)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/Saud7869/personal-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Install Deployment Dependencies

```bash
npm install
```

This will install `gh-pages` which is needed for deployment.

## Step 4: Update Vite Config (If Repository Name is Different)

If your repository name is NOT `personal-portfolio`, update `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

Replace `YOUR_REPO_NAME` with your actual repository name.

## Step 5: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your project
2. Deploy it to the `gh-pages` branch
3. Make it available on GitHub Pages

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 7: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/personal-portfolio/
```

**Example:**
```
https://Saud7869.github.io/personal-portfolio/
```

## Updating Your Portfolio

Whenever you make changes:

1. Make your changes
2. Commit them:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Deploy again:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### If the site shows a blank page:
- Check that the `base` path in `vite.config.js` matches your repository name
- Make sure you ran `npm run deploy` after building
- Clear your browser cache

### If assets don't load:
- Verify the `base` path in `vite.config.js` is correct
- Make sure the repository name matches exactly (case-sensitive)

### If deployment fails:
- Make sure `gh-pages` is installed: `npm install`
- Check that you have write access to the repository
- Verify your GitHub credentials are set up correctly

## Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the `public` folder with your domain:
   ```
   yourdomain.com
   ```
2. Update `vite.config.js` to use `base: '/'`
3. Deploy again: `npm run deploy`
4. Configure DNS settings with your domain provider

---

**Your portfolio is now live! 🚀**

