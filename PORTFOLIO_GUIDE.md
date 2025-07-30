# Portfolio Management Guide

## Overview

Your portfolio has been converted to a dynamic system that makes adding new items incredibly easy! Instead of copying and pasting HTML divs, you now just need to add a new object to the `portfolioData` array in `portfolio-data.js`.

## Quick Start - Adding a New Portfolio Item

1. Open `portfolio-data.js`
2. Find the `portfolioData` array
3. Add a new object at the end of the array (before the closing `]`)
4. Save the file - your new item will automatically appear on your website!

## Basic Template

Here's a basic template for a new portfolio item:

```javascript
{
    id: "unique-project-id",
    category: "f-tech", // or "f-designs" or "f-videos"
    displayCategory: "Website",
    title: "My New Project",
    image: "images/works/my-project.jpg",
    icon: "fas fa-browsers",
    description: "Description of your project...",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://myproject.com",
    linkText: "View Project"
}
```

## Required Fields

Every portfolio item MUST have these fields:

- **id**: Unique identifier (no spaces, use dashes)
- **category**: Filter category (`"f-tech"`, `"f-designs"`, or `"f-videos"`)
- **displayCategory**: Category shown to users
- **title**: Project title
- **image**: Path to the project image
- **icon**: FontAwesome icon class

## Optional Fields

### For projects with links:
- **description**: Project description (appears in popup)
- **link**: URL to the project
- **linkText**: Text for the link button (e.g., "View Project", "View Post")

### For tech projects:
- **techStack**: Array of technologies OR object with categories

Simple tech stack:
```javascript
techStack: ["HTML", "CSS", "JavaScript"]
```

Advanced tech stack:
```javascript
techStack: {
    "Client": ["React", "TypeScript"],
    "Server": ["Node.js", "Express"],
    "Database": ["MongoDB"],
    "Tools": ["Figma", "VS Code"]
}
```

### For design projects:
- **createdWith**: Array of design tools

```javascript
createdWith: ["Adobe Illustrator", "Photoshop"]
```

### For image-only items:
- **isImagePopup**: Set to `true` for simple image popups
- **popupImage**: Path to larger version of image

```javascript
{
    id: "my-poster",
    category: "f-designs",
    displayCategory: "Poster",
    title: "My Amazing Poster",
    image: "images/works/poster-thumb.jpg",
    icon: "fas fa-image",
    isImagePopup: true,
    popupImage: "images/works/poster-full.jpg"
}
```

### Advanced popup customization:
- **popupCategory**: Different category for popup (overrides displayCategory)
- **popupTitle**: Different title for popup (overrides title)

## Categories

Use these exact category values:

- **f-tech**: For websites, apps, games, programming projects
- **f-designs**: For posters, logos, graphics, design work
- **f-videos**: For video content, animations, motion graphics

## Icons

Common FontAwesome icons to use:

### Tech Projects:
- `"fas fa-browsers"` - Websites
- `"fab fa-github"` - GitHub projects
- `"fas fa-mobile"` - Mobile apps
- `"fas fa-gamepad"` - Games

### Design Projects:
- `"fas fa-image"` - General images/posters
- `"fab fa-facebook"` - Facebook posts
- `"fas fa-pen-nib"` - Design work

### Video Projects:
- `"fab fa-facebook"` - Facebook videos
- `"fab fa-youtube"` - YouTube videos
- `"fab fa-google-drive"` - Google Drive links

## Complete Examples

### Tech Project Example:
```javascript
{
    id: "my-react-app",
    category: "f-tech",
    displayCategory: "Web Application",
    title: "My Awesome React App",
    image: "images/works/react-app.png",
    icon: "fab fa-github",
    description: "A modern web application built with React and Node.js. Features user authentication, real-time updates, and responsive design.",
    techStack: {
        "Frontend": ["React", "TypeScript", "Tailwind CSS"],
        "Backend": ["Node.js", "Express", "MongoDB"],
        "Tools": ["VS Code", "Figma"]
    },
    link: "https://github.com/myusername/react-app",
    linkText: "View Project",
    popupCategory: "Full-Stack Application"
}
```

### Design Project Example:
```javascript
{
    id: "event-poster",
    category: "f-designs",
    displayCategory: "Event Poster",
    title: "University Tech Conference 2024",
    image: "images/works/tech-conf-thumb.jpg",
    icon: "fab fa-facebook",
    description: "Created a vibrant poster for the annual university tech conference, incorporating modern design elements and the event branding.",
    createdWith: ["Adobe Illustrator", "Adobe Photoshop"],
    link: "https://www.facebook.com/university/posts/123456789",
    linkText: "View Post",
    popupImage: "images/works/tech-conf-full.jpg"
}
```

### Video Project Example:
```javascript
{
    id: "promo-video",
    category: "f-videos",
    displayCategory: "Promotional Video",
    title: "Student Organization Recruitment Video",
    image: "images/works/promo-thumb.jpg",
    icon: "fab fa-youtube",
    description: "Edited a dynamic recruitment video for our student organization, featuring interviews, event highlights, and motion graphics.",
    createdWith: ["Adobe Premiere Pro", "After Effects"],
    link: "https://youtube.com/watch?v=abc123",
    linkText: "Watch Video"
}
```

## Tips

1. **Unique IDs**: Make sure each portfolio item has a unique `id`
2. **Image Optimization**: Use appropriately sized images (recommend max 800px width for thumbnails)
3. **Consistent Naming**: Keep your image file names organized
4. **Test Links**: Always verify your links work before adding them
5. **Backup**: Keep a backup of your `portfolio-data.js` file

## Troubleshooting

**Portfolio items not showing?**
- Check for JavaScript syntax errors (missing commas, brackets)
- Verify image paths are correct
- Make sure the `id` is unique

**Popup not working?**
- For link popups: Don't set `isImagePopup: true`
- For image popups: Set `isImagePopup: true` and provide `popupImage`

**Filter not working?**
- Use exact category values: `"f-tech"`, `"f-designs"`, or `"f-videos"`

## Advanced Usage

You can also programmatically add items using JavaScript:

```javascript
// Add a new item dynamically
PortfolioManager.addPortfolioItem({
    id: "runtime-added",
    category: "f-tech",
    displayCategory: "Dynamic Project",
    title: "Added at Runtime",
    image: "images/works/dynamic.jpg",
    icon: "fas fa-code"
});
```

That's it! This new system makes managing your portfolio much easier and more maintainable. Just edit the data file and your website updates automatically. 