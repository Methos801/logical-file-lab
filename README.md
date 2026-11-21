# Logical File Lab

Convert local source files into portable Markdown and JSON, with an audit trail
for every selected source. Logical File Lab preserves the extracted text and
keeps the original files in place.

![New Conversion with a fictional source folder and Markdown plus JSON selected](docs/screenshots/new-conversion.png)

## Walkthrough

1. Choose a source folder and a separate output destination.
2. Review the selected sources, output plan and known holds.
3. Run the conversion and open the outputs, validation note and receipt in
   Jobs / Results.

Use one logical file per source, one combined bank, or several grouped banks.
Banks keep identifiable records for each source. The manifest routes readers
to those records.

The fictional statute example includes 4,500 sections across three titles.
Both formats preserved its Unicode text and final marker in the Windows
review build. [See the result](docs/screenshots/results-unicode.png).

## Preview scope

This page contains the walkthrough and synthetic practice files. The Windows
application is in private review. Its current source and bank text guards
are 64 MiB. The preview works best with UTF-8 text, Markdown, CSV and TSV.
Word and PDF extraction can depend on installed converters. Review coverage
holds alongside the original source.

Logical File Lab's deterministic workflow runs locally. Its outputs include
extracted source text even when structural coverage needs review.

[Read the Windows user manual](docs/user-manual.md) · [Browse the synthetic examples](examples/)
