# SVG Badge Generator

## Project Overview
This project is a simple app that can be used to generate SVG badges for your projects, and it was made using next.js. You can embed custom SVG badges using the app with different query parameters which will adjust the look of the badge that you are deploying.

## Technologies
This project uses next.js for it's framework, which includes use of typescript, tailwindcss and opentype which is used to parse the font used with text width calculation.

## Usage
To use the badge generator, you use the base deployment link and then add query parameters based on what you need.

The parameters and how to structure their values are as follows:

---

### Text
`text`

This is to be written in plaintext with no quotation marks. e.g:

`typescript`

---

### SVG Name
`svgName`

These are to be written in plaintext, like the text parameter. Here are the slugs that you can use:

[https://github.com/simple-icons/simple-icons/blob/master/slugs.md](https://github.com/simple-icons/simple-icons/blob/master/slugs.md)

---

### Background Color
`backgroundColor`

This is to be written in a hex code format. Write it without the hashtag as the app currently adds that itself. e.g:

`3178c6`

---

### Text Color
`textColor`

This is to be written in the same format as the background color. Once again, write it without the hashtag since the app adds it itself. e.g:

`ffffff`

---

### Icon Color
`iconColor`

This is to be written in the same format as the background color and text color. e.g:

`ffffff`

---

Here are some examples:

### Base Deployment Link
`https://nextjs-svg-badge-generator.vercel.app/`

---

### TypeScript Badge Example
`https://nextjs-svg-badge-generator.vercel.app/api/badge/generate?text=typescript&svgName=typescript&backgroundColor=3178c6&textColor=ffffff&iconColor=ffffff`

Badge:

![typescript](https://nextjs-svg-badge-generator.vercel.app/api/badge/generate?text=typescript&svgName=typescript&backgroundColor=3178c6&textColor=ffffff&iconColor=ffffff&refresh=4)

---

### Tailwind CSS Badge Example
`https://nextjs-svg-badge-generator.vercel.app/api/badge/generate?text=tailwindcss&svgName=tailwindcss&backgroundColor=06B6D4&textColor=ffffff&iconColor=ffffff`

Badge:

![tailwindcss](https://nextjs-svg-badge-generator.vercel.app/api/badge/generate?text=tailwindcss&svgName=tailwindcss&backgroundColor=06B6D4&textColor=ffffff&iconColor=ffffff&refresh=4)

---

### Mongo DB Badge Example
`https://nextjs-svg-badge-generator.vercel.app/api/badge/generate?text=mongodb&svgName=mongodb&backgroundColor=47A248&textColor=ffffff&iconColor=ffffff`

Badge:

![mongodb](https://nextjs-svg-badge-generator.vercel.app/api/badge/generate?text=mongodb&svgName=mongodb&backgroundColor=47A248&textColor=ffffff&iconColor=ffffff&refresh=4)
