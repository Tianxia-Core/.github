# Organization Security Policy — RASA-X-MACHINA · tianxiaOS (RFC 9116)

## Coordinated Vulnerability Disclosure

**RASA-X-MACHINA** *(Dealum Application `#179423` under Estonian Startup Committee evaluation · Proposed entity upon approval: `RASA-X-MACHINA OÜ`, Tallinn)* treats cryptographic, memory-safety, and supply-chain vulnerabilities across **`tianxiaOS`** and all companion repositories as top-priority engineering incidents.

- **Bot-Shielded Private Reporting Portal**: Submit vulnerability reports via [https://rasaxmachina.com/collins#encrypted-dispatch](https://rasaxmachina.com/collins#encrypted-dispatch), [https://trust.rasaxmachina.com](https://trust.rasaxmachina.com) (`/.well-known/security.txt`), or GitHub Private Vulnerability Reporting (*Security → Report a vulnerability*).
- **Response SLA**: Initial acknowledgement within **24 hours**; critical triage and mitigation within **72 hours** for verified CVSS ≥ 8.0 findings.
- **Safe Harbor**: Good-faith security research conducted without data destruction, service degradation, or social engineering against live customer/mesh enclaves is authorized under safe harbor.

## Release Integrity Standards

1. Every release ships `SHA256SUMS`, detached Ed25519 `.sig` signatures verified against `keys/RELEASE_SIGNING_KEY.pub.pem`, and a CycloneDX 1.5 `SBOM.cdx.json`.
2. Zero secrets, raw personal phone digits, or unshielded scraper-harvestable addresses are permitted in public version control.
