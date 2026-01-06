# Personal Portfolio Website

A modern, interactive, and stylish personal portfolio website built with React, Vite, and Tailwind CSS. Features GitHub integration to automatically fetch and display your projects.

## Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 🚀 **GitHub Integration** - Automatically fetch and display your GitHub projects
- 📄 **Resume Section** - Link and download your resume
- 💼 **Skills Showcase** - Display your technical skills with progress bars
- 📧 **Contact Form** - Get in touch with visitors
- ✨ **Interactive Animations** - Smooth scroll animations using Framer Motion
- 📱 **Fully Responsive** - Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### 1. Personal Information

Update the following files with your personal information:

- **Hero Section** (`src/components/Hero.jsx`):
  - Change "John Doe" to your name
  - Update the avatar initials
  - Update social media links
  - Modify the description text

- **About Section** (`src/components/About.jsx`):
  - Update the "Who I Am" content with your story

- **Contact Section** (`src/components/Contact.jsx`):
  - Update email, phone, and location
  - Update social media links

### 2. Skills

Edit `src/components/Skills.jsx` to add or modify your skills:
- Add/remove skill categories
- Update skill names and proficiency levels
- Add custom icons if needed

### 3. Resume

In `src/components/Resume.jsx`:
- Update the `resumeUrl` variable with your resume PDF link
- Modify work experience and education sections

### 4. GitHub Projects

1. Go to the Projects section on your portfolio
2. Enter your GitHub username in the input field
3. Click "Load Projects" to fetch your repositories
4. The username will be saved in localStorage for future visits

**Note:** Make sure your GitHub repositories are public to be displayed.

### 5. Styling

- **Colors**: Edit `tailwind.config.js` to customize the color scheme
- **Animations**: Modify animation settings in `tailwind.config.js`
- **Global Styles**: Update `src/index.css` for global styling changes

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```bash
npm run preview
```

## Deployment

You can deploy this portfolio to various platforms:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **GitHub Pages**: Use the `dist` folder contents
- **Any static hosting service**: Upload the `dist` folder

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing animation effect

## Tips

1. **GitHub API Rate Limits**: The GitHub API has rate limits. If you hit the limit, wait a bit before trying again.

2. **Resume Hosting**: Upload your resume PDF to:
   - Google Drive (make it public and get a shareable link)
   - Dropbox
   - Your own server
   - GitHub (in a repository)

3. **Contact Form**: The contact form currently shows a success message. To make it functional, integrate with:
   - Formspree
   - EmailJS
   - Your own backend API

4. **Performance**: The portfolio is optimized for performance with:
   - Code splitting
   - Lazy loading
   - Optimized animations

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

Made with ❤️ using React and Tailwind CSS

