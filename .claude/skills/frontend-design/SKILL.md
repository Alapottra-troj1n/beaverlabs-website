---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Project-Specific Context

This is the **Beaver Labs** website — a product design & engineering studio. The existing design system uses:

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Manrope (imported via `@/components/utils/font` as `manrope`)
- **Animations**: Framer Motion (`motion` components, `whileInView`, `initial/animate`)
- **Brand color**: `#7370FF` (primary purple), `#9C99FF` (lighter purple accent)
- **Layout max-width**: `max-w-7xl mx-auto`
- **Padding convention**: `px-6 md:px-10 xl:px-0`
- **Component location**: `components/landingpage/` for sections, `components/common/` for shared UI
- **Page location**: `app/<route>/page.tsx`

Always apply the Manrope font class (`${manrope.className}`) to text elements. Import it from `@/components/utils/font`.

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Use Manrope as the primary font. Pair with intentional weight variation (font-bold, font-medium, font-extrabold). Large display text should use `tracking-[-0.02em]` and `leading-[1.05]`. Avoid default system fonts.
- **Color & Theme**: Build on the existing `#7370FF` / `#9C99FF` palette. Use CSS variables for new additions. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. White backgrounds with purple accents is the core motif.
- **Motion**: Use Framer Motion for React. Standard pattern is `initial={{ opacity: 0, y: 30 }}` + `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}`. Focus on high-impact entrance animations with staggered delays (`delay: index * 0.12`).
- **Spatial Composition**: Use bento grid layouts, asymmetric two-column splits, and generous negative space. Reference the existing `What_we_do_best.tsx` bento grid or `how-we-work/page.tsx` alternating layout as patterns.
- **Backgrounds & Visual Details**: Use subtle gradients (`bg-linear-to-br from-[#7370FF]/10 via-white to-[#9C99FF]/5`), `blur-[100px]` glow orbs, `border border-zinc-200` cards, and `shadow-sm hover:shadow-xl` hover elevations. Rounded corners: `rounded-2xl`, `rounded-3xl`, or `rounded-[2rem]`/`rounded-[3rem]` for large cards.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), clichéd color schemes unrelated to the brand, predictable layouts, or cookie-cutter components that don't match the existing Beaver Labs design language.

## Implementation Standards

- All new components: `'use client';` directive at the top if using hooks or motion
- Export default the component at the bottom
- Use `Image` from `next/image` for all images
- Use `Link` from `next/link` for internal navigation
- Match implementation complexity to the aesthetic vision — if it's a hero section, make it extraordinary; if it's a card grid, make each card feel intentional
- Ensure mobile responsiveness using Tailwind breakpoints (`md:`, `lg:`)

Remember: Beaver Labs is a studio that sells design excellence. Every component should be a portfolio piece in itself.
