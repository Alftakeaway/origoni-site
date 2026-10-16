# Security review, 16 October 2026

Vite 7.3.7 and plugin-react 5.2.0 replace the unsupported Vite 5 toolchain. Node 24 is used in CI. The postcss-selector-parser override uses patched 7.1.6; the production build verifies compatibility with Tailwind 3.

Vercel headers restrict scripts to this origin, disallow plugins and framing, disable camera/microphone/location, and set MIME sniffing and referrer protections. Inline styles remain necessary for React and Motion. Preview deployments must be checked for CSP violations before merging; headers become active only after deployment.

`npm audit --omit=dev` reports no vulnerabilities. The full audit still reports five high-severity dependency nodes rooted in one advisory, GHSA-vfj7-8cjw-p6xm (braces). The registry currently offers no patched braces 3 release. These are build-time dependencies of Tailwind 3, whose major version is retained per ADR 0004. The build scans repository-controlled paths and content, not visitor-supplied patterns. Do not expose build tooling to untrusted patterns. This is a remaining development-tool risk, not a clean full audit. Recheck when a patch is released; do not apply `npm audit fix --force` without reviewing the Tailwind 4 migration.
