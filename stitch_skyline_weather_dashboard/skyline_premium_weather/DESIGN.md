---
name: Skyline Premium Weather
colors:
  surface: '#f8f9ff'
  surface-dim: '#d2dbe9'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5effd'
  surface-container-high: '#e0e9f7'
  surface-container-highest: '#dae3f1'
  on-surface: '#131c26'
  on-surface-variant: '#3c4947'
  inverse-surface: '#28313c'
  inverse-on-surface: '#e9f1ff'
  outline: '#6c7a77'
  outline-variant: '#bbcac6'
  surface-tint: '#006a61'
  primary: '#006a61'
  on-primary: '#ffffff'
  primary-container: '#35c9ba'
  on-primary-container: '#005049'
  inverse-primary: '#4edbcc'
  secondary: '#005eb3'
  on-secondary: '#ffffff'
  secondary-container: '#60a2fe'
  on-secondary-container: '#00376d'
  tertiary: '#964919'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9c65'
  on-tertiary-container: '#773201'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#70f8e8'
  primary-fixed-dim: '#4edbcc'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#004689'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#331100'
  on-tertiary-fixed-variant: '#773201'
  background: '#f8f9ff'
  on-background: '#131c26'
  surface-variant: '#dae3f1'
  background-base: '#F5F7F8'
  surface-primary: '#FFFFFF'
  surface-secondary: '#F8FAFB'
  text-secondary: '#667085'
  text-muted: '#98A2B3'
  border-subtle: '#E4E7EC'
  weather-amber: '#F5A84B'
  status-error: '#E45B5B'
  status-success: '#35B98A'
typography:
  display-temp:
    fontFamily: Inter
    fontSize: 84px
    fontWeight: '300'
    lineHeight: 92px
    letterSpacing: -0.04em
  display-temp-mobile:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '300'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style

The design system for this weather dashboard is built on the principles of **Precision, Clarity, and Optimism**. It targets a professional audience that requires high-density information without the cognitive load of traditional, cluttered meteorological interfaces.

The aesthetic follows a **Modern Corporate** direction with a **Humanist** touch. It leverages expansive whitespace, a light-washed palette, and subtle technical details to evoke a sense of "quiet intelligence." The UI is intentionally understated, allowing weather data and atmospheric imagery to remain the focal point. Visual interest is generated through meticulous alignment and refined micro-interactions rather than heavy decorative elements.

## Colors

The palette is anchored by a soft, warm off-white base (`#F5F7F8`) to reduce eye strain compared to pure white backgrounds. 

- **Primary Accent:** Used for call-to-actions, active navigation states, and primary weather indicators.
- **Supporting Accent:** Reserved for secondary data visualizations (e.g., humidity or precipitation) to distinguish them from primary metrics.
- **Functional Colors:** The Amber highlight is used specifically for severe weather alerts or UV index peaks. 
- **Contrast:** High-contrast charcoal (`#17202A`) is used for primary headings to ensure AAA accessibility, while varying shades of gray manage the information hierarchy for metadata and labels.

## Typography

This design system utilizes **Inter** exclusively to maintain a clean, systematic appearance. 

- **Hierarchy:** Temperature displays use a light weight with negative letter-spacing for a sophisticated, editorial look. 
- **Utility:** Labels use a medium or semi-bold weight with slight tracking (letter-spacing) and uppercase styling to provide clear structural anchors for data points.
- **Responsiveness:** Large displays scale down significantly on mobile to ensure the current conditions remain above the fold without sacrificing readability.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **4-column fluid grid** for mobile devices. 

- **Spacing Rhythm:** Based on a 4px baseline grid. Most component padding should use 16px (4 units) or 24px (6 units) for consistent internal breathing room.
- **Reflow Rules:** On mobile, the "Activity Log" and "Extended Forecast" widgets stack vertically. On desktop, they occupy the right-hand sidebar and lower quadrants respectively.
- **Margins:** Generous outer margins are essential to the "Premium" feel, preventing the data from feeling cramped against the edge of the viewport.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** supplemented by extremely subtle shadows.

- **Level 0 (Base):** The `#F5F7F8` background.
- **Level 1 (Cards):** Pure white surfaces with a 1px border (`#E4E7EC`) and a "Soft Air" shadow: `0px 4px 20px rgba(23, 32, 42, 0.04)`.
- **Level 2 (Interactive/Hover):** When a card is hovered, it lifts slightly (transiting -4px on the Y-axis) and the shadow deepens to `0px 12px 32px rgba(23, 32, 42, 0.08)`.
- **Overlays:** Modals and dropdowns use a more pronounced elevation to stand out against the dashboard.

## Shapes

The shape language is defined by **Rounded** geometry. 

- **Major Components:** Weather cards, map containers, and the primary dashboard modules use a `1rem` (16px) radius to soften the technical nature of the data.
- **Buttons & Inputs:** Use a standard `0.5rem` (8px) radius for a professional and clickable appearance.
- **Status Indicators:** Use full pill-shaping (`rounded-full`) to distinguish status badges (e.g., "Live", "Ready") from interactive buttons.

## Components

- **Buttons:** Primary buttons use the Refined Aqua (`#35C9BA`) with white text. Secondary buttons use a white background with a thin border. Use a "gentle-press" animation (0.98 scale) on click.
- **Weather Cards:** Must feature a `label-md` header for the metric type and the `display-temp` or `headline-lg` for the value. Vertical alignment should be top-heavy to allow for supporting sparkline charts at the bottom of the card.
- **Interactive Toggles:** Modern, flat switches. When "On", the track should be `#35C9BA`. The handle should be pure white and sit flush within the track.
- **Activity Log:** A collapsible component using `surface-secondary`. It uses a vertical line connector for time-stamped events, utilizing `label-sm` for timestamps.
- **Input Fields:** Use a `1px` border. On focus, the border transitions to the Primary Accent with a subtle glow (2px spread, low opacity).
- **Status Wordmark:** The "SKYLINE" wordmark sits next to a small, pulsing dot. The dot color changes based on the status: Success (Live), Amber (Fetching), Error (Error).