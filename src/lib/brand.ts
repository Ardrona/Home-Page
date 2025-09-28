/**
 * Ardrona Brand System - Modular and Reusable
 * Central source of truth for brand colors, logos, and theme tokens
 */

// Brand Colors (based on logo)
export const brandColors = {
  // Primary lime green from logo
  primary: "84 96% 48%", // #8BC34A - lime green from logo
  primaryHover: "84 96% 43%", // darker green for hover
  primaryLight: "84 96% 95%", // very light green for backgrounds
  
  // Neutral palette (Tesla-inspired)
  white: "0 0% 100%",
  black: "0 0% 0%",
  
  // Slate scale for depth
  slate: {
    50: "210 40% 98%",
    100: "210 40% 96%",
    200: "214 32% 91%",
    300: "213 27% 84%",
    400: "215 20% 65%",
    500: "215 16% 47%",
    600: "215 19% 35%",
    700: "215 25% 27%",
    800: "217 33% 17%",
    900: "222 84% 5%",
  }
} as const;

// Brand Assets
export const brandAssets = {
  logos: {
    main: "/src/assets/ardrona-logo.png",
    square: "/src/assets/ardrona-logo-square.png",
    transparent: "/src/assets/ardrona-logo-transparent.png",
    symbol: "/src/assets/ardrona-symbol.png",
  }
} as const;

// Brand Content
export const brandContent = {
  company: "Ardrona Technologies",
  tagline: "Airborne. Anytime. Anywhere.",
  shortDescription: "Drone delivery marketplace and logistics system. Users order on our marketplace; businesses list products; deliveries fulfilled by drones.",
  longDescription: "Ardrona is building a drone delivery distribution network that connects marketplaces, D2C brands, and last-mile logistics—starting in NYC and expanding to other cities. We will integrate fleet delivery to support drone operations and innovate in sustainable distribution and supply chain.",
  location: "NYC-first, then other cities",
  contact: {
    email: "admin@ardrona.com",
    cal: {
      business: "ayaan-kaifullah-ppsvgy/30min",
      namespace: "30min"
    }
  }
} as const;

// Typography tokens
export const brandTypography = {
  heading: "'Montserrat', ui-sans-serif, system-ui, -apple-system, sans-serif",
  body: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace"
} as const;

// Animation tokens
export const brandAnimations = {
  smooth: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  bounce: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  luxury: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)"
} as const;

// Shadow tokens
export const brandShadows = {
  soft: "0 8px 24px rgba(0, 0, 0, 0.06)",
  card: "0 12px 30px rgba(16, 24, 40, 0.08)",
  luxury: "0 32px 64px -12px rgba(0, 0, 0, 0.35)",
  glow: `0 0 40px hsl(${brandColors.primary} / 0.3)`,
  focus: `0 0 0 3px hsl(${brandColors.primary} / 0.45)`
} as const;

// Export everything as default theme
export const ardronaTheme = {
  colors: brandColors,
  assets: brandAssets,
  content: brandContent,
  typography: brandTypography,
  animations: brandAnimations,
  shadows: brandShadows
} as const;

export default ardronaTheme;