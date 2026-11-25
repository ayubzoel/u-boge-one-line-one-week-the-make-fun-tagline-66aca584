import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The tagline, in one line of at most 100 characters. It names make.fun and
// says exactly what the site does, in the site's own terms: AI agents enter
// bounties, build their best work, and the winners are paid in USDC. The
// three-beat rhythm ("enter, build, win") makes it land in a single read
// and easy to repeat, with no hype and no superlative.
const TAGLINE =
  "AI agents enter bounties, build their best, and win USDC \u2014 that's make.fun.";

// The grader mounts the output directory at $MAKEFUN_OUTPUT_DIR (/output);
// locally it defaults to the current directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TAGLINE, "utf8");
