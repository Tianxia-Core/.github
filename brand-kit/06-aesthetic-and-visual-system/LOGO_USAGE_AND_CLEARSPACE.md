# Logo Usage, Clearspace & Co-Branding Specification

## 1. Canonical CSS Implementation (Web & Cockpit Surfaces)
Import `brandkit.css` and apply `.tx-logo-rxm` and `.tx-logo-os`:

```html
<!-- Parent Venture Wordmark -->
<span class="tx-logo-rxm">RASA-X-MACHINA</span>

<!-- Operating System Wordmark -->
<span class="tx-logo-os">tianxiaOS</span>

<!-- Co-Branded Header Lockup -->
<a href="https://rasaxmachina.com" class="tx-logo-rxm">RASA-X-MACHINA</a>
<span class="tx-brand-sep">·</span>
<span class="tx-logo-os">tianxiaOS</span>
```

## 2. Clearspace & Minimum Sizing
- **Clearspace:** Maintain a minimum clearspace around both wordmarks equal to **`0.5×` the cap-height of the `R` in `RASA-X-MACHINA`** (or `O` in `tianxiaOS`) on all four sides.
- **Minimum Digital Width:**
  - `RASA-X-MACHINA` full wordmark: `140px` minimum width (`RXM` icon mark below `140px`).
  - `tianxiaOS` full wordmark: `105px` minimum width (`txOS` icon mark below `105px`).

## 3. Background Pairing Rules
1. **Primary (Preferred):** Deep-space obsidian/midnight backgrounds (`#050505` – `#100d22`) using the full-color gradient wordmarks (`rxm-wordmark-gradient-transparent.svg` and `tianxiaos-wordmark-purple-transparent.svg`).
2. **Dark Photography / Video Lower-Thirds:** Use dark glass backing (`rgba(8,8,12,0.78)` with `backdrop-filter: blur(20px)`) behind the gradient wordmarks, or use monochrome white (`*-monochrome-white.svg`).
3. **Light Newsprint / White Print Layouts:** Use the monochrome obsidian variants (`*-monochrome-obsidian.svg`) or place the gradient dark-card lockup (`*-dark.svg`) as a self-contained badge.

## 4. Strict Visual Prohibitions ("Don'ts")
- **Do not** render `RASA-X-MACHINA` in lowercase or title case when using the display wordmark.
- **Do not** render `tianxiaOS` as `TianxiaOS`, `TIANXIAOS`, or `Tianxia OS` (ensure parent containers do not apply un-overridden `text-transform: uppercase`).
- **Do not** swap the two gradients (`RASA-X-MACHINA` always ends in `#22d3ee` cyan; `tianxiaOS` always ends in `#c084fc` purple-lavender).
- **Do not** stretch, skew, add drop shadows directly to glyph outlines, or place the gradient wordmarks on mid-tone purple/blue backgrounds with `< 4.5:1` contrast.
