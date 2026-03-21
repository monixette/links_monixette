# LifeStrategics V2 (2026) - Design System Instructions for AI Agents

When building the new tool for the LifeStrategics Linktree, you must adhere 100% to the following design system, components, and CSS guidelines to ensure a seamless "Look and Feel".

## 1. Typography
- **Primary Font**: `Wix Madefor Display` (Weights: 400, 500, 600, 700, 800)
- **Secondary/Body Font**: `Wix Madefor Text` (Weights: 400, 500, Italics)
- **Accent/Signature Font**: `Dancing Script` (Weights: 400, 500, 600, 700)
- **Link**: `<link href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700;800&family=Wix+Madefor+Text:ital,wght@0,400;0,500;1,400&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet">`

## 2. Color Palette
The interface is dark-mode by default with a premium, glassmorphism feel.
- **Background Base**: `#242426`
- **Primary Text**: `#ffffff`
- **Secondary Text (Muted)**: `#9CA3AF` (Tailwind `gray-400`/`gray-500`)
- **Brand Accents (The "Understand, Decide, Take Action" triad)**:
  - **Understand (Blue)**: `#58AFCD`
  - **Decide (Gold)**: `#C5A149`
  - **Action (Red)**: `#D15152`

## 3. Core Layout & Structure
- **Mobile-Centered Shell**: Use a max-width container to emulate a mobile app view even on desktop.
    ```css
    .mobile-shell {
        width: 100%;
        max-width: 480px;
        margin: 0 auto;
        min-height: 100vh;
        min-height: 100dvh;
        position: relative;
    }
    ```
- Use Tailwind CSS for utility classes (`<script src="https://cdn.tailwindcss.com"></script>`).

## 4. UI Components & Glassmorphism

### Link Cards / Action Buttons
Cards use a refined glassmorphism effect.
- **Base Style**: `background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.10); border-radius: 20px; padding: 18px 22px;`
- **Hover/Active State**: `border-color: rgba(255, 255, 255, 0.22); background: rgba(255, 255, 255, 0.07); transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);`

### Icons Layout
Inside the cards, icons sit in a squircle wrapper.
- **Wrapper**: `width: 38px; height: 38px; border-radius: 11px;`
- **Colors**: Set the background to 10% opacity of the brand accent color, and the border to 20% opacity. 
  *(Example for Blue: `bg-[#58AFCD]/10 border border-[#58AFCD]/20` with text `text-[#58AFCD]`)*

### Glowing Wrappers (For CTAs or important forms)
For prominent containers, use a spinning conic-gradient border.
- **Gradient**: `conic-gradient(from 0deg, transparent 10%, #C5A149 15%, #C5A149 28%, transparent 35%, transparent 45%, #58AFCD 50%, #58AFCD 63%, transparent 70%, transparent 80%, #D15152 85%, #D15152 100%)`
- **Inner Background**: `background: rgba(30, 30, 32, 0.95); backdrop-filter: blur(20px);`

### "MUY PRONTO" Badges
- Small text badges use the "Action" color: `text-[#D15152] text-[0.65rem] font-heading tracking-[0.15em] uppercase`

## 5. Animations & Effects
- **Hero Fade Up**: Elements load sequentially sliding up. `opacity: 0` to `opacity: 1` + `transform: translateY(0)`.
- **Card Arrow Follow**: A small right chevron (`->`) on cards starts with `opacity: 0` and `translateX(-6px)`. On hover: `opacity: 1` and `translateX(0)`.

## 6. Background Effects
- If appropriate for the tool, use a subtle particle canvas in the background (`opacity: 0.7`, `pointer-events: none`). Particles move slowly and form constellation lines when close.

**Directive for the agent building the tool**: Ensure these CSS variables, font families, and color codes are strictly applied. Do not invent new accent colors. Mimic the spacing (Tailwind `gap-3`, `px-6`, `py-10`) to match the Linktree's exact rhythm.
