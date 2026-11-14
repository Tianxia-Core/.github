# House Style, Naming & Editorial Governance Guide

## 1. Canonical Brand Casing & Typography Law

| Entity / Term | Canonical Lockup / Display Form | Prose Form (Unstyled Plaintext) | Strict Prohibitions |
| :--- | :--- | :--- | :--- |
| **Parent Studio / Venture** | **`RASA-X-MACHINA`** (`Syne` 800, `#7c5cff → #a855f7 → #22d3ee`) | `RASA-X-MACHINA` or `Rasa-X-Machina` | Never `Rasa X Machina` (missing hyphens), `rasaxmachina` (except domains/handles), or `RasaXMachina` |
| **Operating System** | **`tianxiaOS`** (`Clash Display / Geist / Space Grotesk` 700, `#7c5cff → #a855f7 → #c084fc`) | **`tianxiaOS`** (always lowercase `tianxia` + uppercase `OS`) | **Never** `TianxiaOS`, `TIANXIAOS`, `Tianxia OS`, or `tianxiaos` in prose/UI (exception: immutable existing release filenames such as `TianxiaOS-8.7.0-x86_64.AppImage`) |
| **Proposed Estonian Entity** | **`RASA-X-MACHINA OÜ`** *(always qualified!)* | *Proposed Tallinn entity upon Estonian Startup Committee approval of Dealum Application #179423: RASA-X-MACHINA OÜ* | Never imply `RASA-X-MACHINA OÜ` is already registered in Äriregister prior to Startup Committee approval and registry entry |
| **Dual-Brand Lockup** | **`RASA-X-MACHINA · tianxiaOS`** | `RASA-X-MACHINA · tianxiaOS` | Never invert hierarchy or mix the two gradient stops |

---

## 2. Editorial Voice & Tone Principles

1. **Calm Empirical Precision Over Hype:**
   - Lead with measured mechanisms, sample sizes, hardware substrates, and verifiable receipts—never breathless AI superlatives (*"revolutionary magic," "game-changing paradigm," "unstoppable AGI"*).
   - **Good:** *"C AVX2 System-1 pre-filtering cuts frontier LLM token OpEx by 70.6%–79.6% (€0.039/1M ops) at 0.18ms scoring latency."*
   - **Avoid:** *"Our revolutionary AI slashes cloud costs effortlessly!"*
2. **Honest Career & Operational Candor:**
   - Always describe Collins Takem's background as his authentic **Frontline-to-Founder** trajectory: **10+ years** on FinTech incident-triage, payment-rail escalation, fraud-forensics, and ledger-reconciliation front lines (Blockchain.com, CoinLedger, SQUIRE) + **SUNY 4.00 GPA** (Pure Mathematics & Computer Science) → **3+ years** architecting `tianxiaOS`.
   - Always state Estonian incorporation status transparently: Dealum Application `#179423` under Estonian Startup Committee evaluation (§ 100¹ Aliens Act).
3. **Strict Single-Currency Consistency:**
   - Never mix two fiat symbols (such as `€` and `$`) on the same page, table, or press sheet. Default institutional reporting currency is **EUR (`€`)** (`€350,000` Tallinn Seed at `€2,500,000` pre-money valuation; `€0.039/1M` ops).
4. **Client-Facing Copy Confidentiality:**
   - Public pages, press materials, and GitHub repositories are written for clients, engineers, reviewers, and journalists—never include internal conversion-psychology labels or internal sales-funnel shorthand.
5. **Anti-Scraper Contact Hygiene (`TX_CONTACT_SHIELD`):**
   - Never publish raw personal/business phone digits or clickable `mailto:` scraper targets in public HTML, Markdown, JSON-LD, or `security.txt`.
   - Route executive WhatsApp inquiries exclusively through **`https://rasaxmachina.com/whatsapp`** and email/brief dispatches through **`https://rasaxmachina.com/collins`**, **`https://rasaxmachina.com/press`**, or **`https://trust.rasaxmachina.com`**.

---

## 3. Numbers, Units & Technical Formatting
- **Ranges:** Use spaced or unspaced en-dashes consistently (`70.6%–79.6%`, `€2,313 – €9,250`).
- **Latencies & Throughput:** Format in inline code when appearing in technical tables (`< 3.8µs` P99, `11.40 Mpps`, `< 50ms`, `0.18ms`).
- **Cryptographic Primitives:** Cite exact algorithms (`Ed25519`, `XChaCha20-Poly1305`, `ML-KEM-1024`, `SHA-256`, `BLAKE2b`, `CycloneDX 1.5`).
