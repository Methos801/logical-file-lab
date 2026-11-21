# Manifest Controller — Selected Logical File Set

## 1. Controller Metadata

| Field | Value |
|---|---|
| controller_name | Selected Logical File Set Manifest Controller |
| controller_id | selected_logical_file_manifest_controller |
| job_id | 64081daa55ad4ab5a30cac8e5d50d9d9 |
| creation_date | See the canonical JSON receipt. |
| file_category | manifest_controller |
| selected_source_records | 2 |
| finalized | true |
| intended_use | Route readers across independently identified source records. |
| not_for | Matter facts, legal authority, source replacement, or platform-readiness proof. |

## 2. Controller Role Lock

This controller routes the selected logical-file set. It contains metadata only
and supplies no independent source facts. Canonical JSON and the committed run
receipt control job metadata. Each logical file or bank source record controls
its own converted content, scope, and holds. Record conflicts instead of silently
resolving them. A shared bank path does not merge the registered source identities.

## 3. Selected Source Register

| ID | Logical file(s) | Original source | Source type | Role | Status | Holds |
|---|---|---|---|---|---|---|
| SRC-31CABEF335D9416E49ED | [00\_sources\_0001\_bank.md](00_sources_0001_bank.md); [00\_sources\_0001\_bank.json](00_sources_0001_bank.json) | 01\_notice\_amendment.md | See source record | source_text | PASS | None recorded |
| SRC-52BECEB081AB9AFE95C3 | [00\_sources\_0001\_bank.md](00_sources_0001_bank.md); [00\_sources\_0001\_bank.json](00_sources_0001_bank.json) | 02\_notice\_amendment.md | See source record | source_text | PASS | None recorded |

EXCLUDED records remain visible for accounting and have no conversion claim.
Unsafe or outside-package references are displayed without active links.

## 4. Retrieval Routing Rules

1. Read this controller Sections 1 through 6 and inspect the recorded holds.
2. Identify the relevant source IDs in the register.
3. Open the listed logical files; in a bank, locate the independently identified source record.
4. Read source metadata, scope, and limitations before relying on content.
5. Use controlling converted text only from sources actually opened and reviewed.
6. Report sources that are unavailable, incomplete, excluded, or held.

## 5. Source-Role Taxonomy

| Role | Meaning | Use limit |
|---|---|---|
| source_text | Converted source content | Supports propositions only within source scope. |
| source_index | Index or manifest | Routes retrieval; does not prove facts. |
| prompt_aid | Workflow language | Invokes process; does not prove facts. |
| validation_note | Recorded QA state | Does not replace a source. |
| archive_reference | Original/source-basis reference | Not runtime substance unless separately reviewed. |

## 6. Required Local LLM Operating Rules

- Use the source register before answering source-based questions.
- Open relevant source records rather than answering from memory or this controller.
- Use summaries only for navigation; full converted source text controls.
- Do not treat missing sources as incorporated or infer missing text.
- Do not combine source facts into a synthesis without instruction and source review.
- Carry all source holds and gaps forward.

## 7. No-Loss / Anti-Flattening Checks

| Check | Result | Notes |
|---|---|---|
| Every selected record appears in this register | pass | 2 metadata records rendered. |
| Source IDs remain distinct | pass | No metadata records were consolidated. |
| Non-excluded records have output references | pass | References are metadata, not a new filesystem check. |
| Original paths are displayed | pass | As supplied; canonical JSON retains authoritative metadata. |
| Source roles and recorded holds are visible | pass | Read each source record before use. |
| Attachments, exhibits, OCR, images, and structure | not assessed here | Consult source scope and coverage holds. |
| Controller contains no converted source substance | pass | Routing metadata only. |

## 8. Human Review Gate

Human review is required before legal-effect reliance, external or client-facing
use, filing, recording, submission, publication, resolving source conflicts,
reliance on uncertain OCR, or replacing, deleting, or promoting originals.

## 9. Validation Status

| Item | Result | Notes |
|---|---|---|
| Controller sections complete | pass | Ten operating-guide sections. |
| Selected source register metadata | pass | Distinct IDs, terminal states, and safe references checked during rendering. |
| Source-role separation | pass | This controller routes rather than proves source facts. |
| No-loss content/coverage validation | see validation note | This renderer does not reread sources or artifacts. |
| Human-review gate present | pass | Section 8. |
| Package commit | see committed receipt | A controller alone does not establish package completeness. |

## 10. Next Prompt Block

```text
Use the selected logical-file set. Start with 00_manifest_controller.md and the
canonical JSON receipt. Identify relevant source IDs, open their logical files
or bank records, and read source metadata, scope, and holds before using content.
Answer only from source records actually reviewed. Carry forward all holds and
source gaps. Do not infer missing text or use summaries as substitutes.
```
