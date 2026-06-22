---
name: Maquinarias Mega
description: Refined-industrial design system for a Venezuelan heavy-machinery brand — precise, technical, trustworthy.
colors:
  orange: "#F37223"          # Pantone naranja del logo
  orange-dark: "#DB5E14"
  orange-tint: "#FFF1E8"
  brand-gray: "#464646"      # Pantone gris del logo
  carbon: "#14171A"
  graphite: "#23282E"
  steel-700: "#3C434B"
  slate-500: "#6A727B"
  ash-400: "#9AA3AC"
  line-200: "#E4E8EC"
  mist-100: "#F4F6F8"
  white: "#FFFFFF"
  # acentos por línea de producto (uso moderado)
  line-construccion: "#FEBC12"   # construcción y minería
  line-elevacion: "#ED1847"      # elevación y manejo de carga
  line-accesorios: "#21B3E8"     # accesorios y componentes
  line-postventa: "#D2D3D4"      # soporte post venta
  # sub-acentos de soporte postventa
  pv-repuestos: "#EF4136"        # repuestos
  pv-servicio: "#F15A29"         # servicio técnico especializado
  pv-garantia: "#F7B243"         # garantía de fabricantes
typography:
  display:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  spec:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "40px"
  xl: "72px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "{colors.orange-dark}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.carbon}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.lg}"
    padding: "30px"
  spec-tile:
    backgroundColor: "{colors.mist-100}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.sm}"
    padding: "15px 18px"
  nav-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.steel-700}"
    rounded: "{rounded.pill}"
    padding: "0 14px 0 22px"
---

# Design System: Maquinarias Mega

## 1. Overview

**Creative North Star: "The Machined Datasheet"**

Maquinarias Mega sells multi-hundred-thousand-dollar iron to people who read spec sheets for a living. The interface should feel like a precisely engineered technical document made physical: every number legible and tabular, every edge aligned to a grid, every surface machined to fit. It borrows the photographic authority of Komatsu and Caterpillar — real equipment, real operations, shot with weight — and marries it to the calm, white-space-rich restraint of ABB and Siemens. The result reads as *expensive because it is exact*, not because it is loud.

This system explicitly rejects the **generic Bootstrap / "AI template" look** — no cookie-cutter three-column cards, no default system fonts, no harsh 1px gray borders, no cramped symmetrical grids. It rejects **sterile corporate stock** blandness: imagery must be real iron in real operations, never soulless placeholder people in hard hats. And it rejects **overly playful, consumer-startup** aesthetics — nothing bubbly, pastel, or cute. Authority and confidence come from space, precision, and one disciplined accent, never from decoration.

**Key Characteristics:**
- Precision-grid alignment and generous macro-whitespace (sections breathe at ~120px)
- A single, disciplined orange accent against a carbon-and-mist neutral field
- Monospaced technical type for specs, labels, and counters — data as the hero
- Real equipment photography carrying the emotional weight; UI stays out of its way
- Tight, machined radii (6–16px) — restrained, never bubbly

## 2. Colors

A near-monochrome carbon-and-mist field, charged by one industrial safety-orange. The discipline is the point: orange means "act."

### Primary
- **Safety Orange** (`#F26A1B`): The brand accent, taken from the logo. Reserved for primary CTAs, active states, the single key word in a headline, spec emphasis, and data accents. It is the "go" signal.
- **Forged Orange** (`#D2540C`): The pressed/hover state of orange — a deeper, hotter tone for `:hover` and `:active` on primary actions.
- **Ember Tint** (`#FFF1E8`): A barely-there warm wash for icon wells and selected backgrounds where full orange would shout.

### Neutral
- **Carbon** (`#14171A`): The strongest text color and the primary dark surface (hero, coverage band, footer). Reads as machined steel, not pure black.
- **Graphite** (`#23282E`): Elevated surfaces *within* dark sections — stat tiles, branch chips, the map panel.
- **Steel 700** (`#3C434B`): Body text on light backgrounds where carbon would be too heavy; nav link rest state.
- **Slate 500** (`#6A727B`): Secondary/supporting body copy and lead paragraphs.
- **Ash 400** (`#9AA3AC`): Muted labels, captions, footnotes, and footer text.
- **Line 200** (`#E4E8EC`): Hairline borders and dividers. Used sparingly — structure first comes from spacing, not strokes.
- **Mist 100** (`#F4F6F8`): The light section-alternation background and spec-tile fill.
- **White** (`#FFFFFF`): Default page background and card surfaces.

### Named Rules
**The One Orange Rule.** Orange covers ≤10% of any viewport. It marks exactly one primary action per section and the single most important word per headline. If two things are orange in the same glance, one of them is wrong — its scarcity is what makes it read as "the next step."

**The No-Pure-Black Rule.** Never `#000`. Carbon (`#14171A`) is the floor. Pure black on a premium industrial brand reads as cheap and flat; carbon reads as forged steel.

## 3. Typography

**Single family:** Montserrat (with system-ui, sans-serif fallback) — display, body, labels and specs all use Montserrat. Weights 400–900 are loaded.

**Character:** Montserrat is a geometric grotesque — confident and engineered at heavy weights, clean and quietly modern in body copy. The system's technical voice (specs, labels, counters) is Montserrat in UPPERCASE with wide tracking and `tabular-nums`, not a separate monospace face. The brand reads as one coherent voice that still "measures things."

### Hierarchy
- **Display** (800, `clamp(2.6rem, 6vw, 4.6rem)`, 1.02, `-0.03em`): Hero headline only. One per page. Tight tracking, balanced wrap.
- **Headline** (800, `clamp(1.8rem, 3.6vw, 2.8rem)`, 1.08, `-0.02em`): Section titles.
- **Title** (700, ~1.25rem, 1.2): Card and equipment names.
- **Body** (400, ~1.05rem, 1.6): Paragraphs and leads. Hold leads to ~60–70ch for readability.
- **Label** (600, ~0.74rem, `0.16em`, UPPERCASE, Montserrat): Eyebrows, tags, kicker labels, spec keys. The recurring "technical stamp."
- **Spec** (600, ~1.1rem, Montserrat, tabular numerals): Spec values and animated stat counters. Always `font-variant-numeric: tabular-nums` so digits don't jitter.

### Named Rules
**The Tabular Numbers Rule.** Every number a buyer might compare — specs, capacities, stat counters, prices — is set with `tabular-nums`. Numbers are the product; they must align in a column and never shift width as they animate.

**The Stamp Rule.** Eyebrows and tags are always uppercase Montserrat (600) with `0.16em` tracking. This single recurring treatment is the system's technical signature — use it, don't improvise alternates.

## 4. Elevation

Hybrid, but flat-leaning. Depth comes primarily from **tonal layering** (carbon → graphite within dark bands; white cards on mist) and from precise borders, not from heavy shadows. Shadows are soft, diffuse, and reserved — they appear as a *response to state* (hover, the floating nav) rather than decorating every surface at rest. No harsh dark drop shadows; ever.

### Shadow Vocabulary
- **Floating** (`box-shadow: 0 12px 34px rgba(20,23,26,.12)`): The detached glass nav pill, at rest. Signals "this hovers above the page."
- **Lift** (`box-shadow: 0 24px 60px rgba(20,23,26,.16)`): Cards and equipment imagery on `:hover` — a confident rise, paired with `translateY(-6px)`.
- **Accent Glow** (`box-shadow: 0 10px 24px rgba(242,106,27,.32)`): Only under a primary orange button on hover. The one place color enters the shadow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; structure reads from spacing and a single hairline. Shadow is earned by interaction (hover, focus) or by genuine elevation (the floating nav). If a static card has a shadow just to look "designed," remove it.

**The Ghost-Border Rule.** Borders are `1px` Line 200 (`#E4E8EC`) at most, and the first thing to disappear on hover (replaced by Lift). Never use a colored or >1px border as decoration — that's the Bootstrap tell.

## 5. Components

### Buttons
- **Shape:** Fully rounded **pills** (`{rounded.pill}`) across the entire site. The pill is the brand's button signature — confident and modern against the machined rectangles of cards and tiles.
- **Trailing arrow:** A clean inline chevron (no heavy circular well) that slides `translateX(4px)` on hover. Quiet at rest, kinetic on intent.
- **Primary:** Safety Orange fill, white text, `15px 28px` padding.
- **Hover / Focus:** Background shifts to Forged Orange, `translateY(-2px)`, Accent Glow shadow, eased on a custom cubic-bezier (~`cubic-bezier(.32,.72,0,1)`). `:active` settles to `translateY(0) scale(.98)` — a physical press. Focus-visible: 2.5px orange outline, 3px offset.
- **Outline:** Transparent with a translucent white hairline (`rgba(255,255,255,.4)`); fills to `rgba(255,255,255,.12)` on hover. The secondary action on dark hero/CTA backgrounds.
- **Ghost:** Transparent with a Line 200 hairline; border and text go orange on hover. For secondary actions on light surfaces ("Ver ficha técnica").
- **Light:** White fill, carbon text; for use on dark/orange backgrounds (CTA form submit).

### Chips / Tags
- **Equipment tag:** Solid orange, white, uppercase mono label, 6px radius, top-left of imagery. Names the category ("Excavadora").
- **Branch chip:** Graphite pill on dark bands with a small orange dot; mono label. For locations.
- **Brand chip:** White, Line 200 hairline, heavy letter-spaced wordmark of represented OEMs.

### Cards / Containers
- **Corner Style:** 16px (`{rounded.lg}`) for feature cards, 10px for tiles.
- **Background:** White on mist sections; for the feature/photo card, a carbon→orange gradient scrim over real photography so white text stays AA-legible.
- **Shadow Strategy:** Flat at rest (Ghost-Border); Lift + border-dissolve on hover (see Elevation).
- **Internal Padding:** ~30px (`{spacing.md}`+) — cards breathe.

### Inputs / Fields
- **Style:** White fill, transparent 2px border, 6px radius, generous `15px 18px` padding, body-size text.
- **Focus:** Border shifts to orange (paired with the global focus-visible outline). 
- **Error:** Border + soft tint shift to a warning state, **plus** an explicit text message (never color alone) — `role="status"`, `aria-live="polite"`.

### Navigation
- **Style:** A floating, detached **glass pill** — `backdrop-filter: blur(16px)`, translucent white, Line 200 hairline, Floating shadow, full pill radius. Sits inside a max-width container, not glued edge-to-edge.
- **Links:** Steel 700 rest, Carbon hover, with an orange underline that grows from 0 → 100% width. Active section (scroll-spy) holds the underline.
- **CTA:** A Primary button lives in the nav at all times — the ever-present path to a lead.
- **Mobile:** Below 640px, links collapse into a panel under the pill; a hamburger toggles it. The CTA hides; the panel carries it.

### Signature Component — Spec Tile Grid
The datasheet made literal. Each equipment block pairs full-bleed photography with a 2×2 grid of **spec tiles**: Mist 100 fill, 10px radius, an uppercase mono **key** (Ash 400) stacked over a tabular-mono **value** (Carbon). This is the brand's most important pattern — it turns dry specs into a scannable, confidence-building artifact. Counters in the coverage band use the same mono/tabular treatment, animating up on scroll into view.

## 6. Do's and Don'ts

### Do:
- **Do** keep orange to ≤10% of any viewport — one primary action, one key word (The One Orange Rule).
- **Do** set every comparable number in Montserrat with `tabular-nums` (specs, counters, capacities).
- **Do** let real equipment photography carry the impact; keep the UI restrained around it (Komatsu/Caterpillar playbook).
- **Do** build depth from spacing and tonal layering first; reserve soft shadows for hover and the floating nav (Flat-By-Default).
- **Do** give every section one obvious next step toward a lead (quote / advisor), with trust signals nearby.
- **Do** use carbon (`#14171A`) as the darkest value, never `#000`.
- **Do** float the nav as a glass pill with macro-whitespace; let sections breathe at ~120px.

### Don't:
- **Don't** ship the **generic Bootstrap / "AI template" look** — no cookie-cutter 3-column cards, default system fonts, harsh 1px gray borders, or cramped no-whitespace grids.
- **Don't** use **sterile corporate stock** imagery or empty buzzwords — show real iron and real operations, never soulless placeholder hard-hat stock.
- **Don't** go **playful / consumer** — no bubbly radii, pastels, or startup-cute illustration. This is a serious capital purchase.
- **Don't** let orange compete with itself; two oranges in one glance means one is wrong.
- **Don't** use a colored or >1px border as decoration (the Bootstrap tell) — hairline Line 200, dissolving on hover.
- **Don't** convey state by color alone — pair active/error states with text or iconography (accessibility).
- **Don't** use harsh dark drop shadows (`shadow-md`, `rgba(0,0,0,.3)`); soft and diffuse only.
