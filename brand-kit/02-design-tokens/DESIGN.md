# Design System: RASA-X-MACHINA & tianxiaOS ("Ethereal Glass on Deep Space")
**System ID:** `TX-BRANDKIT-2026.11-V2` · **Canonical Domains:** `rasaxmachina.com` (29 Subdomains incl. `press.rasaxmachina.com`)

## 1. Visual Theme & Atmosphere
The **RASA-X-MACHINA** and **tianxiaOS** visual language—codenamed **Ethereal Glass on Deep Space**—combines sovereign cryptographic authority with luminous, zero-clutter clarity. Rather than sterile SaaS whiteboards or noisy cyberpunk neon, surfaces rest upon a true OLED abyssal canvas (`#050505` to `#080808`) illuminated by soft, diffused radial aurora orbs (`blur(120px–140px)`) and tactile `3.5%` SVG film grain. Every metric, proof hash, and action sits inside double-bezel translucent glass panels that feel engineered, calm, and mathematically verifiable.

## 2. Color Palette & Roles
* **Abyssal Void (`#050505`) & Sovereign Obsidian (`#080808`):** Primary canvas and Wayland layer-shell HUD substrate; eliminates eye strain and maximizes OLED contrast (`>15:1` AAA).
* **Deep Midnight Slate (`#0a0a12`):** Inner card core surface inside double-bezel glass containers.
* **Electric Sovereign Violet (`#7c5cff`):** Primary ignition stop for both brand logotypes, focus rings, and interactive highlights.
* **Sovereign Orchid (`#a855f7`):** Mid-spectrum bridge harmonizing `RASA-X-MACHINA` and `tianxiaOS` gradients.
* **Aurora Telemetry Cyan (`#22d3ee`):** Terminal gradient stop of the `RASA-X-MACHINA` wordmark (`linear-gradient(120deg, #7c5cff 0%, #a855f7 48%, #22d3ee 100%)`) and wire-speed network telemetry accent.
* **Luminous Crownforge Lavender (`#c084fc`):** Terminal gradient stop of the `tianxiaOS` wordmark (`linear-gradient(120deg, #7c5cff 0%, #a855f7 45%, #c084fc 100%)`) and microkernel/OS architecture callouts.
* **Veritas Signal Emerald (`#00f59b` / `#34d399`):** Reserved strictly for empirically verified benchmarks, live online mesh indicators, Ed25519 signature pass states, and bot-shielded WhatsApp verification gates.
* **Luminous Chalk (`rgba(255,255,255,0.92)`) & Muted Slate (`rgba(255,255,255,0.55)`):** Primary editorial copy and secondary metadata hierarchy.

## 3. Typography Rules
* **`RASA-X-MACHINA` Logotype (`'Syne', sans-serif`, Weight `800`, Uppercase, `letter-spacing: 0`):** Wide, architectural geometric grotesk giving the parent venture unmistakable silhouette recognition from navbar pills to keynote backdrops.
* **`tianxiaOS` Logotype (`"Clash Display", "Geist", "Space Grotesk", system-ui, sans-serif`, Weight `700`, Exact Casing `tianxiaOS`, `letter-spacing: -0.02em`):** Tightly tracked contemporary display grotesk distinguishing the operating substrate from the parent studio while sharing the violet-orchid chromatic root.
* **Editorial & UI Body (`"Geist", "Plus Jakarta Sans", system-ui, sans-serif`):** High-x-height neo-grotesk engineered for F-pattern scannability across 25 languages (including RTL Arabic and Urdu).
* **Cryptographic & Telemetry Monospace (`"Geist Mono", "JetBrains Mono", ui-monospace, monospace`):** Used for SHA-256 Merkle roots, Ed25519 verification commands, latency metrics (`< 3.8µs`), and single-currency pricing badges.
* **Banned Typefaces:** `Inter`, `Roboto`, and `Arial` are strictly prohibited across all surfaces.

## 4. Component Stylings
* **Navigation Island (`.tx-nav`):** Pill-shaped (`border-radius: 999px`) floating glass bar (`rgba(10,10,18,0.72)`, `backdrop-filter: blur(28px)`) anchored at the top viewport edge with single-row non-wrapping navigation links and auto-hide scroll discipline.
* **Double-Bezel Glass Cards (`.tx-panel > .tx-core`):** Generously rounded outer shell (`2rem` radius, `rgba(255,255,255,0.04)` fill, `1px` hairline border) housing a recessed inner core (`1.625rem` radius, `inset 0 1px 1px rgba(255,255,255,0.14)` specular top edge).
* **Primary CTAs (`.tx-cta`):** Pill-shaped gradient buttons with subtle `translateY(-2px)` spring lift on hover (`cubic-bezier(0.32, 0.72, 0, 1)` over `700ms`) and luminous violet ambient glow.
* **Anti-Scraper Contact Shields (`.tx-contact-shield`):** Tactile pill badges gating executive email reveal and WhatsApp handoff (`/whatsapp`) behind trusted human interaction (`ev.isTrusted`).

## 5. Layout Principles
* **F-Pattern Scannability & Golden-Ratio Rhythm:** Every section opens with a compact uppercase monospace eyebrow pill, a high-contrast display headline (`clamp(2.5rem, 6vw, 5.5rem)`), a `46ch–68ch` lead thesis paragraph, and a responsive 2-, 3-, or 4-column metric/capability bento grid (`max-width: 1180px–1240px`).
* **Strict Single-Currency & Jurisdictional Clarity:** A compact 2-control market/language selector synchronizes 100% of prices, calculators, and legal compliance banners on the page into a single chosen currency without visual clutter.
