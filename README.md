# D. Liu — Profile

Source for my personal profile site, live at **https://mejerryliu.github.io/**.

It is a static site with no build step: plain HTML, CSS and JavaScript, served by GitHub Pages from the `main` branch.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page skeleton. Sections are empty and filled in by `main.js`. |
| `content.js` | All page text, in English (`en`) and Japanese (`ja`). |
| `main.js` | Renders the content, switches language, and runs the scroll effects. |
| `styles.css` | Layout, typography and the black, white and gray palette. |
| `robots.txt` | Asks web archive crawlers not to capture the site. |

## Editing content

Change text in `content.js` only. Each language has its own block, so update both `en` and `ja` together.

- A project field left as `""` is hidden.
- A project's `url` adds a link button; `urlLabel` replaces the default button text.
- An experience item's `url` turns its organization name into a link.
- Any string starting with `[` is treated as a placeholder and highlighted on the page.

## Language

The page shows Japanese when the browser language starts with `ja`, and English otherwise. Visitors can switch with the toggle in the top right, and `?lang=en` or `?lang=ja` forces a language.

## Running locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Deploying

Push to `main`. GitHub Pages rebuilds the site in about a minute.
