# Personal Website

A modern, minimalist bilingual (Chinese/English) personal portfolio built with Next.js, featuring a bright, clean aesthetic.

## Features

- **Bilingual Support**: Full i18n with middleware for language detection and routing
- **Modern Design**: Clean, light mode aesthetic with soft shadows and subtle animations
- **Responsive**: Fully responsive design that looks great on all devices
- **Performance**: Built with Next.js App Router for optimal performance
- **Animations**: Subtle fade-in animations powered by Framer Motion

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Project Structure

```
app/
  [lang]/
    layout.tsx      # Root layout with i18n
    page.tsx        # Home page
  globals.css       # Global styles
components/
  navbar.tsx        # Navigation with language switch
  hero.tsx          # Hero section
  contact.tsx       # Contact section
  education.tsx     # Education section
  experience.tsx    # Experience section
  skills.tsx        # Skills section
  footer.tsx        # Footer



dictionaries/
  en.json           # English translations
  zh.json           # Chinese translations
lib/
  dictionary.ts     # Dictionary loader
middleware.ts       # i18n routing middleware
site-config.ts      # Global site configuration
tailwind.config.ts  # Tailwind configuration
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to http://localhost:3000

## Customization

### Personal Information
Edit `site-config.ts` to update:
- Your name and social links
- Navigation items
- Project information

### Content
Edit the dictionary files in `dictionaries/`:
- `zh.json` for Chinese content
- `en.json` for English content

### Styling
- Colors and fonts: `tailwind.config.ts`
- Global styles: `app/globals.css`

### Images
Add your project images to `public/images/`.

## Deployment

Deploy easily on Vercel:

```bash
npm run build
```

## License

MIT License - feel free to use this template for your own portfolio.
