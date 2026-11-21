# Synthetic demo examples

| Folder | What to verify |
| --- | --- |
| `Sources` | Convert the three fictional files. Check that Results accounts for all three and that each source has its own identity in the manifest. |
| `Review-Sources` | The repeated CSV header should produce a hold. The exact original CSV text stays available in both exports. |
| `Unicode-Sources` | The fictional set has 4,500 sections across three titles. In Markdown and JSON, find curly quotes, accented text, the lab emoji, and `FINAL SYNTHETIC STATUTE MARKER: PAPER-FERRY-4500.` |
| `Legal-Amendments` | Two fictional amendments differ only in the Section 4.2 notice period. In a combined bank, check that each retains its own source ID, outline and exact wording. |

Choose the listed folder as the source and use a separate output destination
for each run. Choose **Markdown + JSON** to compare the two formats. Every name
and record in this collection is fictional.
