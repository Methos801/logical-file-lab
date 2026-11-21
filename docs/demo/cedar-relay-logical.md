# Logical File — 01_project_notes

## 1. Logical File Metadata

| Field | Value |
|---|---|
| logical_file_name | 01_project_notes |
| logical_file_id | 01_project_notes_6ebb85cfc1 |
| source_id | SRC-2D210F82C16EBB85CFC1 |
| source_file_name | 01_project_notes.md |
| source_path | 01_project_notes.md |
| source_type | md (Markdown) |
| source_size_bytes | 254 |
| source_sha256 | 0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c |
| extraction_method | plain |
| converter_failures | none |
| extracted_sha256 | 0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c |
| extracted_sha256_pre_scrub | 0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c |
| scrub_policy | none |
| scrub_actions | none |
| scrub_char_delta | 0 |
| scrub_basis | optional derivative only; controlling source text unchanged |
| adapter | generic |
| classification | generic |
| classification_family | undefined |
| classification_confidence | 0.00 |
| classification_state | undefined |
| classification_runner_up | document (0.20) |
| sufficiency | sufficient |
| recombination | keep_whole (2 structure) |
| target_surface | local |
| engine | deterministic |
| conversion_date | 2026-11-21 |
| conversion_status | complete |
| extraction_status | ok |
| lfl_version | 0.1 |
| intended_use | Source-grounding file for AI retrieval. |
| not_for | Final conclusions, source replacement, or proof of platform readiness. |

| output_verbosity | full |
| schema_variant | audit_md |
| table_policy | preserve |
| packing_policy | none |
| research_citation_date | 2026-06-28 |

## 2. Source Role Lock

This file represents only the source identified above.

- It may be used as source text for propositions traceable to this source.
- End-users are responsible for verifying currentness and authority at time of use.
- It must not displace governing instruments, verified law, user instructions, or other selected source files.
- If this file conflicts with another source, report the conflict instead of resolving it silently.

## 3. Retrieval Index

| Section ID | Title | Use |
|---|---|---|
| source.summary | Source orientation | Use only to navigate the source. |
| source.content | Converted source content | Use as the primary converted text. |
| source.holds | Holds and limitations | Use before relying on the source. |

## 4. Source Scope and Completeness

| Check | Result | Notes |
|---|---|---|
| Full file available | yes | Complete document extracted. |
| Full text extracted | yes | All text preserved. |
| OCR or visual extraction used | no | Clean text extraction. |
| Attachments/exhibits included | none | Not inventoried in this build. |
| Tables preserved | none | Generic build — table detection not yet implemented. |
| Images/handwriting reviewed | none | Not extracted in this build. |
| Metadata preserved | yes | Filename, size, mtime, and hashes recorded. |
| Unusual characters/terminators | none | Preserved verbatim (no-loss); see Section 9 if present. |
| Known gaps | none | |


## 5. Source Orientation Summary

[Orientation summary not generated — deterministic engine (Tier-0). No LLM calls were made.]

## 6. Converted Source Content

### Source Text (verbatim)

<!-- LFL:VERBATIM:BEGIN --> bytes=254 sha256=0e9d6d4dc28163f325a0533b1861e79f99ffc8412bd28ec56430103028f2140c
# Cedar Relay demo workbench

The Cedar Relay is a fictional volunteer workshop used to exercise the converter.
The planning box contains two trays marked Amber and Juniper.

## Closing inventory

The last entry is a blue paper tag reading CR-FINAL-317.
<!-- LFL:VERBATIM:END -->

## 7. Extracted Tables, Lists, or Structured Data

Generic build — table and structured-data extraction not applicable to this source.

## 8. Internal Citation Map

Generic build — no internal citation map generated for this source.

## 9. Holds and Limitations

No known holds from this conversion pass.

- Extraction method: `plain`.
- Text extracted and SHA-256 verified.
- Verify currentness and authority directly with the source publisher before any legal-effect reliance.

## 10. Use Instructions

When using this file:

1. First read Sections 1 through 4 and Section 9.
2. Use Section 5 only for navigation.
3. Use Section 6 as the controlling converted content.
4. Do not infer missing content.
5. If the answer depends on a hold in Section 9, report the hold.

## 11. Validation Status

| Validation item | Result | Notes |
|---|---|---|
| Metadata present | pass | All required metadata fields populated. |
| Source-role lock present | pass | Section 2 present and complete. |
| Source scope recorded | pass | All scope checks completed. |
| Converted content present | pass | Full text extracted. |
| Holds recorded | pass | No holds. |
| No unsupported source merging | pass | Single source only. |
| SHA-256 original | pass | 0e9d6d4dc28163f3… |
| SHA-256 extracted | pass | 0e9d6d4dc28163f3… |

## 12. Surface Controls

| Field | Value |
|---|---|
| target_surface | local |
| mode | 1:1 |
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
