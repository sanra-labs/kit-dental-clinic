# Task queue

Do these in order, one branch per task, each branched from the latest `main` after the previous one is merged (or rebased onto the previous task branch if not merged yet).

1. `01-faq.md` → branch `feat/faq`
2. `02-pricing.md` → branch `feat/pricing`
3. `03-booking.md` → branch `feat/booking`
4. `04-doctors.md` → branch `feat/doctors`

Each task: read AGENTS.md, implement, `npm run build` + `npm run lint` clean, commit with message `feat: <section> (closes #N)`, push the branch. Pull requests are opened and reviewed by Claude.
