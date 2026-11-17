# anwarhossainefat.github.io

Personal academic website of **Anwar Hossain Efat**, MS student in Computer Science at Idaho State University.

Live site: https://anwarhossainefat.github.io

Plain HTML and CSS, with no build step. Edit a file on GitHub, commit, and the site updates in 1–2 minutes (check the **Actions** tab for a green check, then press Ctrl + F5 on the site).

## Where things are

| File / folder | What it is |
|---|---|
| `index.html` | Home: bio, research interests, education and positions, selected publications, **News** (at the bottom) |
| `research.html` | Current Research: projects and methods |
| `publications.html` | Full publication list with topic filters |
| `projects.html` | DeltaDraw, the germophobia game, the HPC project, SnakeGo |
| `teaching.html` | Positions, each with its courses and supervision; research mentoring |
| `awards.html` | Awards and scholarships |
| `service.html` | Peer review, leadership, research ethics, training |
| `files/` | CV and certificates (PDF) |
| `assets/img/` | Photo, social preview card, project images |
| `assets/css/style.css` | Colours, fonts, layout |
| `assets/js/site.js` | Theme button and publication filter |
| `sitemap.xml`, `robots.txt` | For search engines |
| `google….html` | Google Search Console verification. **Never delete.** |

## Common edits

### Add a News item (`index.html`)
Find the comment `<!-- NEWS: ...` and add a new line directly under `<ul class="news">`:

```html
    <li><time datetime="2027-01">Jan 2027</time><div>Your news text here.</div></li>
```

Use `<em>...</em>` for paper titles and `<a href="https://...">text</a>` for links.

### Add a DOI to a paper (`publications.html`, and `index.html` if it is a selected paper)
Find the paper's title. Two lines below it is the `pub-venue` line, followed by an empty line. Replace the empty line with:

```html
    <div class="pub-meta"><a class="doi" href="https://doi.org/PASTE-DOI-HERE" target="_blank" rel="noopener">DOI</a></div>
```

### Add a new publication (`publications.html`)
Copy a whole `<li class="pub" ...> ... </li>` block from the right section and paste it at the top of that section. Then change:
- `data-tags="..."` and the tag `<span>`s: use HCI, SE, XR, SEC, CV, ML, XAI, HPC
- the title, authors and venue
- the counts in the stats box at the top of the page (including first- and second-authored), and "All 49 publications" on `index.html`
- your own name stays in bold: `<strong class="me">A.H. Efat</strong>` (no † or ‡ marks)

### Replace the CV
Upload the new PDF into `files/` with exactly the same name: `Anwar_Hossain_Efat_CV.pdf`.

### After changing `assets/css/style.css`
Every page loads the style file as `assets/css/style.css?v=2026-11-17`. Browsers keep an old copy of the style file, so after changing it, change this date in all 8 HTML files (search for `?v=`). Visitors then get the new styles straight away.

### Replace an image
Upload the new image into the same folder with exactly the same file name.

## If something breaks
Open the **Commits** list (clock icon above the file list), find the last good version, and compare. Every change is saved, so nothing is ever lost.
