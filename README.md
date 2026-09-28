# Signalgrid

A responsive, single-page website for a Google data analysis studio. Plain HTML, CSS and JavaScript, with no build step.

## Structure

```
index.html      page markup
css/styles.css  styles (light and dark themes)
js/main.js      interactions, canvas animation, chart preview
```

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy on GitHub Pages

1. Create a new repository on GitHub and upload these files (or `git push` them).
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site will be live at `https://<username>.github.io/<repo>/` after a minute or two.

## Customize

- Change the name, text and links in `index.html` and the data arrays at the top of `js/main.js`.
- Colors live in the `:root` variables at the top of `css/styles.css`.
- Replace the placeholder email `hello@signalgrid.example` in `index.html` and `js/main.js`.

## Contact form

The form saves to a database only when hosted on claude.ai. On GitHub Pages it shows a "Send by email instead" link. To collect messages, point the submit handler in `js/main.js` at a form service such as Formspree.
