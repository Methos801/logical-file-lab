# Logical File Lab

Prepare legal source files for AI-assisted review. When a statute set or
exhibit bundle is converted for AI, missing text can be hard to spot. Logical
File Lab creates portable Markdown and JSON with the full extracted text,
the identity of each original, and any coverage gaps that need review.

[Open the 90-second demo](https://methos801.github.io/logical-file-lab/#demo) · [Read the Windows user manual](docs/user-manual.md) · [Browse the synthetic examples](examples/)

![New Conversion with a fictional source folder and Markdown plus JSON selected](docs/screenshots/new-conversion.png)

## Two ways to use it

- **Windows app.** Choose sources, review the plan, and inspect the outputs and receipt.
- **Command line.** Use the same engine from scripts or other workflows. It returns
  results as JSON and streams structured progress events as JSONL.

Conversion runs offline and keeps originals in place. You choose which outputs to provide to an AI tool.

## Try the Cedar Relay walkthrough

1. **Review the plan.** Three fictional workshop records produce one logical output per source in Markdown and JSON. [Source files](examples/Sources/) · [Saved plan](docs/screenshots/preflight.png)
2. **Compare the text.** Find the final inventory tag `CR-FINAL-317` in the
   source and both full exports. [Original](docs/demo/cedar-relay-source.md) · [Markdown](docs/demo/cedar-relay-logical.md) · [JSON](docs/demo/cedar-relay-logical.json)
3. **Read the receipt.** The three-file run records three passes and six source
   exports. The separate duplicate-header CSV shows how a review hold appears
   while the source text stays available. [Receipt excerpt](docs/demo/receipt-excerpt.json) · [Hold screenshot](docs/screenshots/results-hold.png)

Use one logical file per source, one combined bank, or several grouped banks.
Banks keep identifiable records for each source. The manifest routes readers
to those records.

The fictional statute example includes 4,500 sections across three titles.
Both formats preserved its Unicode text and final marker in the Windows
review build. [See the Windows results](docs/screenshots/results-unicode.png)

## Verified Windows recovery

The same preview ZIP passed startup, conversion, and a forced interruption
and recovery test on a second Windows 11 x64 machine. The desktop resumed
the original job and reused both completed exports with their bytes and
timestamps intact. The test verified full text in all four exports and
accounted for both originals. Its final receipt recorded one pass and one
expected RTF coverage hold. [Recovery walkthrough](https://methos801.github.io/logical-file-lab/#windows-test)

## Preview scope

The Windows application is in private review. Its current source and bank text limits
are 64 MiB. The preview works best with UTF-8 text, Markdown, CSV and TSV.
Word and PDF extraction can depend on installed converters. Review coverage
holds alongside the original source.

The outputs include extracted source text even when structural coverage needs review.
