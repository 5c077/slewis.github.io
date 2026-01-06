# Portfolio Website

A modern, responsive portfolio website showcasing expertise in bioinformatics, computational biology, and data science.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Single-Page Application**: Smooth scrolling navigation between sections
- **Interactive Elements**: Hover effects with delayed focus fade on project cards
- **Professional Sections**:
  - Hero landing with call-to-action
  - About Me with professional summary and skills
  - Research publications with categorized projects
  - Professional experience timeline
  - Contact information with socials

## Deployment

This website is designed to work seamlessly **GitHub Pages** and requires no build process or dependencies.

### Quick Setup

1. Clone or download this repository
2. Ensure main file is named `index.html`
3. Add headshot image to the repository
4. Update the image path in the HTML:
   ```html
   <div class="headshot">
       <img src="photo.jpg" alt="Scott Lewis" style="width: 100%; height: 100%; object-fit: cover;">
   </div>
   ```
5. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)
6. The site will then be live at `https://yourusername.github.io/repository-name/`

## Customization

### Colors
The color scheme can easily be modified by editing CSS variables in the `:root` section:
```css
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --light: #ecf0f1;
    --dark: #1a252f;
}
```

### Content
- **About Section**: Update professional summary and skills in the `#about` section
- **Projects**: Add or modify project cards in the `#projects` section
- **Experience**: Update timeline items in the `#experience` section
- **Contact Links**: Update email, LinkedIn, and GitHub URLs in the `#contact` section

### Project Images
Decorate project cards with relevant images:
```html
<div class="project-image">
    <img src="project-image.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, animations, and custom properties
- **Vanilla JavaScript**: Smooth scrolling and interactive effects
- **No external dependencies**: Completely self-contained

## Browser Support

Works on all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile enabled

## License

© 2025 Scott Lewis. All rights reserved.