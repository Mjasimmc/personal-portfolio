SEO Checklist
===============

This checklist helps finish the remaining SEO setup and verification for this portfolio.

- [ ] Obtain Google Search Console site verification token for `https://jasim-sct.vercel.app`.
- [ ] Add the token to your environment variables (preferred): `GOOGLE_SITE_VERIFICATION`.
  - For Vercel: add under Project Settings → Environment Variables.
  - For local development: create a `.env.local` with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_token` (optional).
- [ ] Confirm `lib/seo.ts` reads the env var (it now reads `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or `GOOGLE_SITE_VERIFICATION`).
- [ ] Push branch and open a PR to `main` (or your default branch) with the checklist attached.
- [ ] Submit sitemap in Google Search Console: `https://jasim-sct.vercel.app/sitemap.xml`.
- [ ] Run Rich Results Test / Structured Data Testing Tool and fix any warnings from `lib/structured-data.tsx`.
- [ ] Validate Open Graph previews with Facebook Sharing Debugger and Twitter Card Validator.
- [ ] Optional: add `og:image:alt` and any missing social meta on key pages.

Commands
--------

Create branch, commit and push (local):

```bash
git checkout -b seo/google-verification-checklist
git add lib/seo.ts docs/SEO_CHECKLIST.md
git commit -m "feat(seo): use env var for Google verification + add SEO checklist"
git push -u origin seo/google-verification-checklist
```

Create PR with GitHub CLI (optional):

```bash
gh pr create --title "feat(seo): use env var for Google verification + checklist" --body "Adds env-based Google site verification and an SEO checklist." --base main
```

If `gh` is not available, open a PR via the GitHub UI.
