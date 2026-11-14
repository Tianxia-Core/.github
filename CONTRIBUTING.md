# Organization Contribution Standards

All repositories under **Rasa-X-Machina** follow strict polyglot engineering discipline:
- Explicit `# ffp:` / `// ffp:` Function-Feature Pair headers on source files.
- Deterministic unit tests and static compilation (`CGO_ENABLED=0` for Go binaries, workspace tests for Rust crates).
- Zero committed build caches (`target/`, `build/`, `__pycache__/`, `.pyc`), zero hardcoded secrets, and clean `.gitignore` hygiene.
