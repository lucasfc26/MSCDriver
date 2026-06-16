---
name: Premium Cloud Infrastructure
colors:
  surface: '#fff8f7'
  surface-dim: '#f0d4d0'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2de'
  surface-container-highest: '#f9dcd9'
  on-surface: '#271816'
  on-surface-variant: '#5b403d'
  inverse-surface: '#3e2c2a'
  inverse-on-surface: '#ffedea'
  outline: '#8f706c'
  outline-variant: '#e4beba'
  surface-tint: '#b91d20'
  primary: '#a20513'
  on-primary: '#ffffff'
  primary-container: '#c62828'
  on-primary-container: '#ffe0dd'
  inverse-primary: '#ffb4ac'
  secondary: '#635d5b'
  on-secondary: '#ffffff'
  secondary-container: '#e7dedb'
  on-secondary-container: '#67615f'
  tertiary: '#00557a'
  on-tertiary: '#ffffff'
  tertiary-container: '#006e9d'
  on-tertiary-container: '#d1eaff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000e'
  secondary-fixed: '#e9e1de'
  secondary-fixed-dim: '#cdc5c2'
  on-secondary-fixed: '#1e1b19'
  on-secondary-fixed-variant: '#4b4644'
  tertiary-fixed: '#c8e6ff'
  tertiary-fixed-dim: '#88ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#fff8f7'
  on-background: '#271816'
  surface-variant: '#f9dcd9'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for a high-end Cloud Storage SaaS, targeting professional and enterprise users who value precision, reliability, and aesthetic clarity. The brand personality is **Sophisticated, Organized, and Trustworthy**, utilizing a "Quiet Luxury" approach to software design.

The visual style is **Minimalist-Modern**, blending the structured efficiency of productivity tools like Linear with the editorial breathing room of Notion. It prioritizes a high signal-to-noise ratio, utilizing a warm, paper-like background to reduce eye strain and differentiate itself from the cold, clinical grays of standard enterprise software. The result is an environment that feels less like a utility and more like a curated digital vault.

## Colors

The palette is anchored by a deep **Oxblood Red** (#C62828), used sparingly as a signal for primary actions and brand presence. This bold primary is balanced by a **Light Beige** (#F5F0EB) foundation, which provides a warmer, more premium feel than pure white or cool gray.

- **Primary:** Reserved for critical CTAs and active states.
- **Background:** The beige base layer for the entire application.
- **Surface (Highlight):** Pure white is used for cards and content containers to create a "layered paper" effect.
- **Text:** High-contrast charcoal for readability, with soft warm-grays for secondary metadata.

## Typography

This design system utilizes a tiered typographic approach:
1.  **Manrope** for headlines: Provides a modern, balanced, and premium geometric feel.
2.  **Inter** for body text: Ensures maximum legibility for file names, descriptions, and data.
3.  **JetBrains Mono** for labels and metadata: Injects a subtle "technical" and "precise" aesthetic, reinforcing the cloud storage/infrastructure theme.

Scale is used to create clear hierarchy. Large headlines use tighter letter spacing for a compact, editorial look, while small labels use increased tracking for clarity.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** for desktop to maintain a premium "dashboard" feel, while transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a 1280px max-width, centered in the viewport.
- **Sidebar:** A fixed 260px navigation sidebar is standard for the SaaS interface.
- **Spacing Rhythm:** A strict 4px/8px incremental system. Generous padding (32px+) is used within cards and sections to prevent the UI from feeling cluttered, even when data-dense.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Ambient Shadows**. Instead of heavy shadows, we use "Stacking" to show hierarchy:

1.  **Level 0 (Background):** Light Beige (#F5F0EB).
2.  **Level 1 (Surface):** White (#FFFFFF) cards with a 1px border (#E0D7D0).
3.  **Level 2 (Elevated):** White cards with a subtle, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)). Used for hovered states or active selection.
4.  **Level 3 (Overlay):** Modals and Popovers. These use a more pronounced shadow and a backdrop blur (12px) to focus the user’s attention.

Outlines are preferred over shadows for a cleaner, more "Linear-inspired" look.

## Shapes

The shape language is consistently **Rounded**, using a base radius of 12px for standard components and 16px for larger containers (cards, modals). This softness offsets the technical nature of cloud storage, making the platform feel approachable and modern.

- **Small Components (Buttons, Inputs):** 8px - 12px.
- **Medium Components (Cards, Sidebars):** 16px.
- **Pill Shapes:** Used exclusively for status chips (e.g., "Uploaded", "Shared").

## Components

### Buttons
- **Primary:** Solid Red (#C62828) with White text. High contrast, sharp corners rounded to 12px.
- **Secondary:** White background with a 1px beige border and charcoal text.
- **Tertiary:** Ghost style, no background, red or charcoal text depending on priority.

### Inputs & Fields
Inputs use a pure white background with a 1px beige border. On focus, the border changes to the primary red with a soft 2px red outer glow (10% opacity). Labels use the JetBrains Mono font for a technical feel.

### Cards
Cards are the primary container for file listings and stats. They are white, have a 16px corner radius, and a very light border. They do not have shadows in their default state, only on hover.

### Lucide Icons
Icons should be 20px (default) or 24px (large), using a "Regular" stroke weight (2px). Icons are always monochromatic—either charcoal or the primary red—never multi-colored, to maintain the minimalist aesthetic.

### Additional Components
- **File Breadcrumbs:** Minimalist text trail using Inter Medium, separated by a soft gray chevron.
- **Storage Progress Bar:** A thin (4px) bar using a light gray track and a solid red fill to show capacity.