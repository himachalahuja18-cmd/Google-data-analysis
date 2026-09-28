# Signalgrid

A responsive, single-page website for a Google data analysis studio. Built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**Live demo:** `https://<your-username>.github.io/<repo-name>/` (after you deploy, see below)

## Table of contents

- [About the project](#about-the-project)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Deploy on GitHub Pages](#deploy-on-github-pages)
- [Customization](#customization)
- [Contact form](#contact-form)
- [Design system](#design-system)
- [How the signal field works](#how-the-signal-field-works)
- [How the page works](#how-the-page-works)
- [Accessibility and performance](#accessibility-and-performance)
- [SEO checklist](#seo-checklist)
- [Browser support](#browser-support)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Roadmap ideas](#roadmap-ideas)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About the project

Signalgrid presents an analysis project that turns Google-scale data (Search, Maps, YouTube and Play) into clear, decision-ready findings. The site shows the services, the approach, example projects, sample feedback, an FAQ and a contact form.

> The studio name, statistics, project descriptions, testimonials and chart numbers are **illustrative sample content**. Replace them with your real project details before publishing.

## Features

- **Signal field hero:** an animated canvas of connected data points that light up around the cursor
- **Interactive chart preview:** switch between Search, Maps, YouTube and Play to see the bars animate
- **Animated counters** that count up when scrolled into view
- **Sticky navigation** that changes appearance on scroll, with active-section highlighting
- **Light and dark themes:** follows the system setting, with a manual toggle
- **Scroll-reveal animations** and hover effects on cards and projects
- **FAQ accordion** with smooth open and close animation
- **Contact form** with email validation, loading, success and error states
- **Fully responsive** for mobile, tablet and desktop

## Tech stack

| Part | Technology |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, `backdrop-filter`) |
| Behavior | Vanilla JavaScript (ES6+), Canvas API, IntersectionObserver |
| Fonts | Sora and Instrument Serif via Google Fonts |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

## Project structure

```
signalgrid/
├── index.html        Page structure and content
├── css/
│   └── styles.css    All styles, themes and responsive rules
├── js/
│   └── main.js       Animations, chart preview, navigation, form logic
├── .nojekyll         Makes GitHub Pages serve the files as-is
├── .gitignore        Files Git should not track
└── README.md         This file
```

## Getting started

### Run locally

No installation is needed.

1. Download or clone the repository.
2. Open `index.html` in your browser.

For a local server instead (optional):

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

### Clone with Git

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

## Deploy on GitHub Pages

1. Create a new repository on GitHub and upload these files (or push them with Git).
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. Wait a minute or two. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

The site also works on Netlify or Vercel: drag the folder in or connect the repository, with no build command and the root folder as the publish directory.

## Customization

| What to change | Where |
| --- | --- |
| Name, headings, text, links, footer | `index.html` |
| Services, projects, testimonials, FAQ, chart numbers | Data arrays at the top of `js/main.js` |
| Colors (light and dark) | `:root` variables at the top of `css/styles.css` |
| Fonts | The Google Fonts link in `index.html` and the `font` rules in `css/styles.css` |
| Contact email | `CONTACT_EMAIL` in `js/main.js`, and the footer in `index.html` |
| Social links | The "Connect" column in the footer of `index.html` |
| Animation density and speed | The signal field section in `js/main.js` |

## Contact form

The form validates the email address and shows loading, success and error messages.

By default it opens the visitor's email app with the message filled in. To receive submissions directly, create an endpoint with a form service such as Formspree, Web3Forms or Netlify Forms, then paste its URL into the `FORM_ENDPOINT` constant near the bottom of `js/main.js`. Also set `CONTACT_EMAIL` to your real address.

## Design system

**Colors** (defined as CSS variables in `css/styles.css`)

| Role | Light theme | Dark theme |
| --- | --- | --- |
| Background | `#f6f5f1` | `#0a0e1a` |
| Text | `#0d1220` | `#eef0f7` |
| Accent (violet) | `#4b3df2` | `#8f86ff` |
| Accent (green) | `#1aa06d` | `#3ddc97` |
| Accent (orange) | `#e8590c` | `#ff8a4c` |
| Accent (gold) | `#d99a00` | `#ffc53d` |

**Typography**
- Sora for headings and body text
- Instrument Serif italic for emphasized words in headings
- Headline sizes scale with the screen using CSS `clamp()`

**Style**
- Frosted "glass" cards with a blur, a thin border and a soft shadow
- Large amounts of whitespace between sections
- Asymmetrical layouts in the Approach and Work sections

## How the signal field works

The animated background in the hero is the site's signature feature.

1. A `<canvas>` is filled with a number of dots that scales with the screen size (up to 90).
2. Each dot drifts slowly and bounces off the edges.
3. Nearby dots are joined by faint lines.
4. When the cursor comes within about 170 pixels of a dot, that dot grows and its lines become brighter and reach further.
5. The four dot colors come from the theme's accent variables, so they update when you switch between light and dark.
6. If the visitor's system has "reduce motion" turned on, the dots stay still.

The idea is that data looks like scattered noise until you focus on it, and then patterns appear.

## How the page works

| Feature | Technique |
| --- | --- |
| Scroll-in animations | `IntersectionObserver` adds an `in` class when an element enters the screen |
| Animated counters | A `requestAnimationFrame` loop eases each number up to its target |
| Active menu link | An observer marks the link for the section currently in view |
| Sticky navbar | A scroll listener adds an `s` class after 30 pixels of scrolling |
| Theme toggle | Sets `data-theme` on the `<html>` element, which swaps the CSS variables |
| FAQ accordion | Native `<details>` elements, with a CSS grid-row transition for the smooth open |
| Mobile menu | A button toggles an `open` class and updates `aria-expanded` |

Content such as the services, projects, testimonials and FAQ is stored in arrays at the top of `js/main.js` and rendered into the page, so you can edit text without touching the HTML.

## Accessibility and performance

- Semantic landmarks (`header`, `main`, `section`, `footer`) and a logical heading order
- Visible keyboard focus styles and labelled form fields and buttons
- Respects the `prefers-reduced-motion` setting by turning animations off
- Works with light and dark system themes
- No frameworks, images or heavy libraries, so the pages stay small (about 25 KB of code plus fonts)

## SEO checklist

Already included:
- A descriptive `<title>` and meta description
- One `<h1>` and a logical heading order
- Semantic HTML landmarks
- A mobile viewport tag

To add before launch:
- [ ] A favicon (`<link rel="icon" href="favicon.ico">`)
- [ ] Open Graph and Twitter tags so links show a preview image
- [ ] A `robots.txt` and `sitemap.xml`
- [ ] A canonical URL tag pointing to your live address
- [ ] Real images with `alt` text if you add any

## Browser support

Works in current versions of Chrome, Edge, Firefox and Safari. Older browsers may not show the glass blur effect or the `color-mix()` tints, but the content stays readable.

## Troubleshooting

**The page looks unstyled on GitHub Pages.**
Check that the `css` and `js` folders were uploaded and that the file names match exactly (they are case-sensitive).

**GitHub Pages shows a 404.**
Confirm Pages is set to the `main` branch and the `/ (root)` folder, and that `index.html` is in the root of the repository. It can take a couple of minutes after the first deploy.

**The fonts look different.**
The fonts load from Google Fonts, so they need an internet connection. Without one, the site falls back to system fonts.

**The contact form only opens my email app.**
That is the default. Set `FORM_ENDPOINT` in `js/main.js` to a form service URL to receive messages directly.

**Animations don't play.**
Your device may have "reduce motion" turned on. That is intended.

## FAQ

**Do I need Node.js or any installation?**
No. Open `index.html` in a browser.

**Can I use this for my own project?**
Yes. Replace the sample content with your own and adjust the colors and fonts.

**Is the data in the chart real?**
No. The numbers are illustrative samples. Replace them with your own results in `js/main.js`.

**How do I add a new section?**
Copy an existing `<section>` in `index.html`, give it a new `id`, add its link to the navigation, and style it in `css/styles.css`.

## Roadmap ideas

- Replace the sample chart numbers with real data from a CSV or JSON file
- Add a project detail page for each case study
- Connect the contact form to a form service or your own backend
- Add a favicon, social sharing image and `sitemap.xml` for better SEO

## Changelog

### v1.0.0
- First release: hero with signal field, features, approach, stats, work, testimonials, FAQ, contact form and footer
- Light and dark themes
- Responsive layout

## Contributing

Suggestions and pull requests are welcome. Fork the repository, make your change on a branch and open a pull request describing it.

## License

Released under the MIT License. Add a `LICENSE` file with your name and the year to make it official.

## Author

Created by **Your Name** · [GitHub](https://github.com/himachalahuja18-cmd) · [LinkedIn](https://www.linkedin.com/in/himachal-ahuja-900b3b420?utm_source=share_via&utm_content=profile&utm_medium=member_android)

## Acknowledgements

- Fonts: [Sora](https://fonts.google.com/specimen/Sora) and [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) from Google Fonts
- Hosting: [GitHub Pages](https://pages.github.com/)
