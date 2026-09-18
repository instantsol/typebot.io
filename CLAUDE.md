# typebot (our hard fork) — repo CLAUDE.md

Supplements `~/.claude/CLAUDE.md`. Global hard rules still apply: never commit
(Pedro commits), this is Git (confirm `.git` before any VCS command), no test
suite — verify by running it.

## What this is

Our **hard fork** of Typebot — the chatbot / automation builder. Bots built here
are invoked at runtime through **ivci** (kwik-ci): ivci drives the typebot flows
so end users navigate the bots, and automations are triggered into them by
**kwikem** (event-based) and **kwikautomation** (scheduled).

**This is a hard fork — upstream merging will NOT happen** (the upstream license
changed, which forced the fork). So:
- Do **not** preserve upstream structure or avoid touching "their" code to keep
  merges clean — there are no future merges. Treat the whole tree as ours.
- Do **not** try to pull/rebase from the original upstream remote.
- Still: match existing style and keep edits surgical. This is a large codebase
  we now own and maintain alone, so changes should be intentional.

## VCS

- [x] Git   (confirm `.git`; never commit)

## Runtime & dev loop — pm2, NOT the activate/container pattern

Unlike the Swarm services, typebot runs **directly on the host under pm2**, and
the dev loop does **not** use `dshell` / `/sources` / `./activate`.

Two pm2 services:
- **aio-bot** — the bot runtime (serves/executes the bots).
- **aio-builder** — the builder UI.

### Development
1. Stop both pm2 services first (otherwise ports/processes collide):
   ```bash
   pm2 stop aio-bot aio-builder
   ```
2. Run the dev server from the repo:
   ```bash
   pnpm run dev
   ```
3. When done, restart the pm2 services to return to the normal running state:
   ```bash
   pm2 start aio-bot aio-builder    # or: pm2 restart aio-bot aio-builder
   ```

Per the global settings, `pm2 stop/restart` will prompt for confirmation — that's
expected; this repo is one of the few places those commands are correct to run.

- Package manager is **pnpm** (not npm/yarn). Use `pnpm` for installs/scripts.
- This is a monorepo-style JS/TS project — be explicit about which workspace/app
  (bot vs builder) a change belongs to.

## Datastores

<fill in — typebot's own DB/store (it normally uses its own Postgres) and any
Redis. Confirm whether this fork uses the shared infra or its own. NOTE: the
shared PostgreSQL on this platform is otherwise used ONLY by evolution-api /
Scout, so if typebot also uses Postgres, be precise about which instance/db.>

## How it connects to the rest of Kwik

- **ivci** calls into typebot to run flows for live conversations.
- **kwikem** / **kwikautomation** trigger automations that start typebot bots.
- Changes to how bots are invoked or to their input/output shape can ripple into
  ivci — treat that boundary carefully and flag it.

## Footguns specific to this repo

- Forgetting to `pm2 stop` before `pnpm run dev` (port/process collision).
- Leaving the pm2 services stopped after a dev session — restart them.
- <fill in others as you hit them: env vars the bot/builder need, build quirks.>

## Do NOT touch

<fill in — generated files, build output, env/secrets, migrations.>
