import fs from "node:fs";
import path from "node:path";

const [weekArg, ...titleParts] = process.argv.slice(2);

if (!weekArg || titleParts.length === 0) {
  console.error('Usage: npm run new-week -- <week-number> "Week title"');
  process.exit(1);
}

const week = Number(weekArg);

if (!Number.isInteger(week) || week < 1) {
  console.error("Week number must be a positive integer.");
  process.exit(1);
}

const title = titleParts.join(" ").trim();
const paddedWeek = String(week).padStart(2, "0");
const fileName = `week-${paddedWeek}.mdx`;
const filePath = path.join(process.cwd(), "src", "content", "weeks", fileName);

if (fs.existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const releaseDate = new Date().toISOString().slice(0, 10);

const template = `---
week: ${week}
title: ${title}
summary: Add a one-line summary for this workshop.
published: false
releaseDate: ${releaseDate}
estimatedHours: 2
learningOutcomes:
  - Add outcome 1.
  - Add outcome 2.
---

import Callout from "../../components/Callout.astro";

## Overview

Add workshop context here.

<Callout tone="exercise" title="Start here">

1. Add your first activity.
2. Add your second activity.

</Callout>

## Main content

Add section-by-section workshop instructions and code samples.
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, template, "utf8");

console.log(`Created ${filePath}`);
