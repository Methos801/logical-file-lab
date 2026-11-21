# Source Bank — Sources

## 1. Bank Metadata

| Field | Value |
|---|---|
| bank_name | Sources |
| bank_id | sources_0001 |
| mode | N:1 |
| source_count | 3 |
| sources_complete | 3 |
| sources_held | 0 |
| conversion_date | 2026-11-21 |
| bank_status | complete |
| target_surface | local |
| output_verbosity | full |
| schema_variant | audit_md |
| table_policy | preserve |
| packing_policy | none |
| research_citation_date | 2026-06-28 |
| engine | deterministic |
| lfl_version | 0.1 |
| intended_use | Source-grounding bank for AI retrieval. |
| not_for | Final conclusions or source replacement. |

## 2. Universal Manifest

| Source ID | File | Status |
|---|---|---|
| SRC-2D210F82C16EBB85CFC1 | 01_project_notes.md | ok |
| SRC-B4556297EF4A17CE863C | 02_inventory.csv | ok |
| SRC-5798BAFE9D117852F61A | 03_field_log.txt | ok |

## 3. Source Role Lock

This file represents only the source identified above.

- It may be used as source text for propositions traceable to this source.
- End-users are responsible for verifying currentness and authority at time of use.
- It must not displace governing instruments, verified law, user instructions, or other selected source files.
- If this file conflicts with another source, report the conflict instead of resolving it silently.

## 4. Retrieval Index

| Section ID | Title | Use |
|---|---|---|
| source.summary | Source orientation | Use only to navigate the source. |
| source.content | Converted source content | Use as the primary converted text. |
| source.holds | Holds and limitations | Use before relying on the source. |

## 5. Scope and Completeness

| Check | Result | Notes |
|---|---|---|
| All sources present | yes | 3 source(s) inventoried. |
| All sources extracted | yes | 3/3 complete. |
| OCR sources | none | |
| Tables preserved | none | Generic build — table detection not yet implemented. |

## 6. Source Bank Content

### Source 1 — 01_project_notes

| Field | Value |
|---|---|
| source_id | SRC-2D210F82C16EBB85CFC1 |
| source_file | 01_project_notes.md |
| source_path | 01_project_notes.md |
| source_type | md (Markdown) |
| sha256_original | 0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c |
| extraction_method | plain |
| sha256_extracted | 0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c |
| sha256_pre_scrub | 0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c |
| scrub_policy | none |
| scrub_actions | none |
| scrub_char_delta | 0 |
| scrub_basis | optional derivative only; controlling source text unchanged |
| extraction_status | ok |
| converter_failures | none |
| text_anomalies | none |

| **adapter** | generic |
| classification_family | undefined |
| classification_state | undefined |

#### Source Text (verbatim)

<!-- LFL:VERBATIM:BEGIN --> bytes=254 sha256=0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c
# Cedar Relay demo workbench

The Cedar Relay is a fictional volunteer workshop used to exercise the converter.
The planning box contains two trays marked Amber and Juniper.

## Closing inventory

The last entry is a blue paper tag reading CR-FINAL-317.
<!-- LFL:VERBATIM:END -->

---

### Source 2 — 02_inventory

| Field | Value |
|---|---|
| source_id | SRC-B4556297EF4A17CE863C |
| source_file | 02_inventory.csv |
| source_path | 02_inventory.csv |
| source_type | csv (document) |
| sha256_original | 4a869f574fdcff594aac9c1b5c20cae30a2a0159e04c229189d8b070c0313d97 |
| extraction_method | plain |
| sha256_extracted | 4a869f574fdcff594aac9c1b5c20cae30a2a0159e04c229189d8b070c0313d97 |
| sha256_pre_scrub | 4a869f574fdcff594aac9c1b5c20cae30a2a0159e04c229189d8b070c0313d97 |
| scrub_policy | none |
| scrub_actions | none |
| scrub_char_delta | 0 |
| scrub_basis | optional derivative only; controlling source text unchanged |
| extraction_status | ok |
| converter_failures | none |
| text_anomalies | none |

| **adapter** | table |
| classification_family | tabular |
| classification_state | classified |
| delimiter | comma |
| column_count | 3 |
| row_count | 3 |

#### Source Text (verbatim)

<!-- LFL:VERBATIM:BEGIN --> bytes=114 sha256=4a869f574fdcff594aac9c1b5c20cae30a2a0159e04c229189d8b070c0313d97
item,count,location
Paper tags,12,Amber tray
Sample cards,5,Juniper tray
Blue tag CR-FINAL-317,1,Closing envelope
<!-- LFL:VERBATIM:END -->

---

### Source 3 — 03_field_log

| Field | Value |
|---|---|
| source_id | SRC-5798BAFE9D117852F61A |
| source_file | 03_field_log.txt |
| source_path | 03_field_log.txt |
| source_type | txt (plain text) |
| sha256_original | 6916efb35a86cd9de7bb450318960dc56d79c1c4751ed18431002eee1de5bdee |
| extraction_method | plain |
| sha256_extracted | 6916efb35a86cd9de7bb450318960dc56d79c1c4751ed18431002eee1de5bdee |
| sha256_pre_scrub | 6916efb35a86cd9de7bb450318960dc56d79c1c4751ed18431002eee1de5bdee |
| scrub_policy | none |
| scrub_actions | none |
| scrub_char_delta | 0 |
| scrub_basis | optional derivative only; controlling source text unchanged |
| extraction_status | ok |
| converter_failures | none |
| text_anomalies | none |

| **adapter** | generic |
| classification_family | undefined |
| classification_state | undefined |

#### Source Text (verbatim)

<!-- LFL:VERBATIM:BEGIN --> bytes=211 sha256=6916efb35a86cd9de7bb450318960dc56d79c1c4751ed18431002eee1de5bdee
Cedar Relay field log
2026-05-13 09:00 — Opened the fictional workshop.
2026-05-13 10:15 — Checked the labels: café, jalapeño, and Zürich.
2026-05-13 12:00 — The last field observation is LOG-TAIL-746.
<!-- LFL:VERBATIM:END -->

## 7. Extracted Tables, Lists, or Structured Data

#### Source 2 — 02_inventory

### Tabular Structure (table adapter, deterministic)

Columns: 3 · Data rows: 3 · Delimiter: comma

| item | count | location |
|---|---|---|
| Paper tags | 12 | Amber tray |
| Sample cards | 5 | Juniper tray |
| Blue tag CR-FINAL-317 | 1 | Closing envelope |

## 8. Internal Citation Map

No internal citation map generated for the sources in this bank.

## 9. Holds and Limitations

No holds from this build.

- All sources extracted successfully.
- Verbatim text copied; SHA-256 verified per source.
- Verify currentness and authority with the source publisher.

## 10. Use Instructions

When using this file:

1. First read Sections 1 through 4 and Section 9.
2. Use Section 5 only for navigation.
3. Use Section 6 as the controlling converted content.
4. Do not infer missing content.
5. If the answer depends on a hold in Section 9, report the hold.

## 11. Validation Status

| Source ID | Status | Method | SHA-256 (extracted, prefix) |
|---|---|---|---|
| SRC-2D210F82C16EBB85CFC1 | pass | plain | 0e9d6d4dc28163f3… |
| SRC-B4556297EF4A17CE863C | pass | plain | 4a869f574fdcff59… |
| SRC-5798BAFE9D117852F61A | pass | plain | 6916efb35a86cd9d… |

## 12. Surface Controls

| Field | Value |
|---|---|
| target_surface | local |
| mode | N:1 |
| profile_preference | md |
| verbosity | full |
| schema_variant | audit_md |
| table_policy | preserve |
| packing_policy | none |
| research_citation_date | 2026-06-28 |
| recommended_layout | Flat Output/ folder; 00_manifest controller (or 00_*_bank) routes the set. |
| citation_rule | Cite the source_id (e.g., SRC-XXXXXXXX) for every proposition. |

- Engine is Ollama; bring your own model.
- Use the manifest/bank as the routing entry point.
