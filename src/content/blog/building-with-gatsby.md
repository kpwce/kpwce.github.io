---
title: "Building with Gatsby"
tags: ["English"]
slug: "/building-with-gatsby"
---


## The Inspiration

The aesthetics of this site are an intetional clash between 20th century newspapers and more modern forms of media. I promise this piece is for both the techies and the philologists alike!

New tools, algorithms, and frameworks have reshaped how readers engage with content. We have crisper visuals, more precise provenance tools, and faster access to content than ever before. This website intends to reflect new forms of interaction and digital experiences that are made possible by these web system innovations.

### The Technology

Every couple of years, I build myself a new personal website with tools I've picked up. My first was built with plain HTML and CSS. The second was built using a class-based React framework with many custom components. The first was simple but couldn't express the dimensions of my identity I wanted to, and the second ended up too complex to maintain as my life got busier.

This site is built using Gatsby. It started off as the [starter boilerplate](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default/) but now bares little resemblance to the original source. It is hosted on Github Pages.

Now what's Gatsby and why use it here? Gatsby is a React-based, open source [static site generator](https://en.wikipedia.org/wiki/Static_site_generator) (SSG). I chose it because of its similarity to React and its support for functionality required for this site, e.g., running a blog. It heavily relies on [GraphQL](https://graphql.org/) for data retrieval and the React-based framework isn't as light as just HTML, but it was great to have a working site right off the bat. With a heavy amount of CSS styling and modular React components, I think I'm happy with the product.

One awesome feature that Gatsby has is the ability to render Markdown files as HTML, so I can insert some

```python
print("code")
```

add some footnotes [^1]

[^1]: This is a footnote!

or my favorite equations!

$$\sum_{i = 1}^n i = \frac{n (n - 1)}{2}$$

Markdown is a portable file format, and I'm planning to write most of my blog posts in `.md` files. An extra bonus to using Markdown is being able to copy over the writing I do in [Obsidian](https://obsidian.md/).

In the future, I'd like to integrate a site-wide search feature and play around with in-text visual rending in [D3](https://d3js.org/). Discovery tools, interactive components and fun data essays to come!

### The Newspaper

Newspapers are complex cultural artifacts composed of recipes, poems, essays, opinions, advertisements, and of course, news. They garnered popularity in the 17th century and have since been a source of information for the public. The images within them provided veracity to the happenings in the world and their puzzles have become an American pasttime.[^2]

Nowadays, a large handful of folks would claim that newspapers are dead as short-form content, mainstream televised media, and various forms of citizen journalism occupy many of the roles that newspapers once filled. While the form has experienced a decline in popularity in the 21st century, some publishers continue to print them while others have invested in a digital transformation to stay relevant. In 2022, the Pew Research Center reports that amid a decline in readership, newspapers have put more efforts than ever before into digital marketing.[^3] Their digital editions have a striking visual similarity to their printed counterparts.

[^2]: Deb Amlen. (2019, December). How the Crossword Became an American Pastime. https://www.smithsonianmag.com/arts-culture/crossword-became-american-pastime-180973558/

[^3]: Pew Research Center. (2022). *Newspapers Fact Sheet* [Report]. https://www.pewresearch.org/journalism/fact-sheet/newspapers/

Many newspaper publishers maintain a multi-column front page, and a distinct Fraktur font in their logos. These relics of the past are emblems of authenticity and reminders of their cultural value. The Washington Post and The New York Times have even introduced digital versions of crossword puzzles.

### A Website with Newspaper Vibes

Analogous to printed and digital newspapers, digital portfolios and blogs are inching their way to become the new résumé. From software engineers to best-selling authors, the personal website with search engine discoverability has become quite popular. It's even one of the first tasks assigned to students taking an introductory technology class.

While it's common to format a portfolio site like a résumé, I intend for mine to be more than a sheet of paper on the internet. With a similar spirit and purpose, this site is styled as newspaper about myself. As a matter of front-end design, I also really like the visual blend of elements in a newspaper and think it looks cool.

The primary visual features that give my site newspaper vibes are the fonts, iconography, coloring, and columnar layouts. Of course, there are newspaper aspects that aren't added in order to preserve accessibility or maintainability of the design.

Fonts
> Most of the fonts used are copycats of common newspaper fonts. The main title is in UniFraktur and the primary choice for a serif font is Georgia. The sans serif font is News Cycle, which mirrors the 20th century News Gothic font. The monospace font here is for code-like text that is clearer and more familiar with the even spacing.

Iconography
> There are ☞ manicules scattered around the site to draw attention to certain links. These tiny hand pointers were prominent in some 19th century newspapers to highlight particular notes, and even before that to annotate textual documents.

Coloring
> This site is black and white. In the late 20th century, some newspapers started printing in color. You might find color on some pages.

Layout
> The main title is at the top of every page, as well as sticky, clickable headings for navegation where traditional newspapers might place edition information or section titles. The home and blog pages have the iconic columnar formatting most are accustomed to finding in newspapers. The teaching page has a single column for clarity of their sequential content. It mimics how one might find a recipe formatted in newspapers. The research page is a combination of both. It most closely aligns with the style of an advertisements page with dotted section borderings. It includes quotes from other people that make me think about the work I do, vaguely reminiscient of how early American newspaper editors would copy stories from other sources into their own to be republished in a scissors-and-paste fashion.

Thank you for visiting, and please reach out if you have any feedback! I'll update this post with any major design changes, but in the meantime, here are some related readings on newspapers written by people who know more about them than me.

- Usher, N. (2014). Making news at the New York times. University of Michigan Press.

- Himelboim, I., & McCreery, S. (2012). New technology, old practices: Examining news websites from a professional perspective. Convergence, 18(4), 427-444.

- Thurman, N., & Schifferes, S. (2015). The future of personalization at news websites: Lessons from a longitudinal study. In The Future of Journalism: Developments and Debates (pp. 198-213). Routledge.