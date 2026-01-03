# 🚀 My Portfolio Website

A modern, responsive, and highly interactive portfolio website built with pure HTML5, CSS3, and JavaScript. This portfolio showcases your professional CV, projects, skills, and experience in an attractive and engaging way.

## ✨ Features

### 🎨 Modern Design
- Clean and professional aesthetic with gradient accents
- Smooth animations and transitions throughout
- Dark theme optimized for extended viewing
- Fully responsive design (mobile, tablet, desktop)

### 🎯 Key Sections
- **Hero Section**: Eye-catching introduction with typing animation
- **About Section**: Professional bio with profile image and highlights
- **Skills Section**: Interactive skill bars with animated progress
- **Projects Section**: Filterable project cards with hover effects
- **Experience/Education**: Timeline layout with professional history
- **Contact Section**: Form with validation and social media links

### ⚡ Interactive Features
- Smooth scroll navigation with active link highlighting
- Sticky navigation bar that changes on scroll
- Responsive hamburger menu for mobile devices
- Back-to-top button for easy navigation
- Scroll-triggered fade-in animations
- Animated skill progress bars
- Project filtering by category
- Interactive hover effects on cards and buttons
- Form validation with error messages
- Typing animation effect

### 🛠️ Technologies Used
- Pure HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, animations)
- Vanilla JavaScript (no frameworks)
- Font Awesome icons
- Google Fonts (Poppins & Fira Code)

## 📁 File Structure

```
my_protfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── script.js      # Interactive functionality
├── images/            # Placeholder for images
└── README.md          # This file
```

## 🚀 Getting Started

### Quick Start
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content with your information

### Deployment to GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings > Pages
3. Select your branch (usually `main`) as the source
4. Your site will be live at: `https://yourusername.github.io/repository-name`

## ✏️ Customization Guide

### 1. Personal Information

#### Update Your Name and Title
Open `index.html` and find the hero section:
```html
<h1 class="hero-greeting">Hi, I'm <span class="gradient-text">Your Name</span></h1>
```
Replace "Your Name" with your actual name.

Update the typing animation texts in `js/script.js`:
```javascript
const texts = [
    'Full Stack Developer',  // Customize these
    'Frontend Specialist',
    // Add more titles...
];
```

#### Update Contact Information
Find the contact section in `index.html` and update:
- Email address
- Phone number
- Location
- Social media links (GitHub, LinkedIn, Twitter, etc.)

### 2. Profile Image
- Add your profile photo to the `images/` folder (e.g., `profile.jpg`)
- Replace the placeholder in `index.html`:
```html
<div class="profile-image">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

### 3. About Section
Edit the about section content:
```html
<div class="about-text fade-in">
    <h3>Hello! I'm a <span class="gradient-text">Your Title</span></h3>
    <p>Your professional bio here...</p>
</div>
```

### 4. Skills
Update skills and proficiency levels in the skills section:
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Skill Name</span>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

### 5. Projects
Add your own projects:
```html
<div class="project-card fade-in" data-category="fullstack">
    <div class="project-image">
        <!-- Add project image -->
        <img src="images/project1.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
        </div>
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
    </div>
</div>
```

Update project links:
```html
<a href="https://github.com/yourusername/project" target="_blank">
```

### 6. Experience & Education
Customize the timeline items:
```html
<div class="timeline-item fade-in">
    <div class="timeline-content">
        <span class="timeline-date">2022 - Present</span>
        <h3 class="timeline-title">Your Job Title</h3>
        <h4 class="timeline-company">Company Name</h4>
        <p class="timeline-description">Job description...</p>
    </div>
</div>
```

### 7. Color Scheme
To change colors, edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;     /* Change primary color */
    --accent-color: #ec4899;      /* Change accent color */
    --bg-color: #0f172a;          /* Change background */
    /* etc... */
}
```

### 8. Fonts
To change fonts, update the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the CSS variable:
```css
--font-primary: 'YourFont', sans-serif;
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Form Integration

The contact form currently has client-side validation only. To make it functional:

### Option 1: FormSubmit (Free & Easy)
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
    <!-- Your form fields -->
</form>
```

### Option 2: Formspree
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <!-- Your form fields -->
</form>
```

### Option 3: Custom Backend
Implement your own backend API and update the form submission handler in `js/script.js`.

## 🎨 Adding Images

### Profile Image
1. Add image to `images/profile.jpg`
2. Update HTML:
```html
<div class="profile-placeholder">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

### Project Images
1. Add images to `images/` folder
2. Update each project card:
```html
<div class="project-image">
    <img src="images/project1.jpg" alt="Project Name">
</div>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is open source and available for personal and commercial use. Feel free to customize it for your own portfolio!

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request!

## 📞 Support

If you need help customizing your portfolio, check out the comments in the code or reach out through GitHub issues.

## 🎉 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Design: Custom modern design with gradient accents

---

**Made with ❤️ and JavaScript**

*Happy Coding! 🚀*