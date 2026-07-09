# MiAI 2.0 — Complete Paper Prototype Build Spec

**Purpose:** Build all MiAI 2.0 paper-prototype screens as a coherent clickable / visual prototype set.

**Prototype style:** hand-drawn paper wireframe, black marker lines, light blue/green/orange/purple highlights, 16:9 landscape unless noted.

**Project example used across prototypes:** `McCain x Makro Thailand`

**Core product idea:** MiAI is not a generic chatbot. MiAI is a governed project workspace where strategy work moves from project creation → context packet → job mode → agent artifacts → human review/chat → final export.

---

## 1. Complete Prototype Set

| # | Prototype screen | Existing reference artifact | Primary purpose | Main user-story group |
|---:|---|---|---|---|
| 1 | Dashboard | `/mnt/data/sketch_of_miai_2.0_dashboard_ui.png` | See all active projects, status, review needs, and next actions. | UX-01–UX-06 |
| 2 | Create Project — 3 Modes | `/mnt/data/miai_2.0_project_creation_wireframe.png` | Start a project from files, instruction + files, or brief-first. | UX-07–UX-12c |
| 3 | Context Packet Auto-Extracted Brief | `/mnt/data/hand_drawn_ui_wireframe_prototype.png` | Review extracted context, evidence, confidence, assumptions, and missing fields. | UX-13–UX-18 |
| 4 | Select Job Mode | `/mnt/data/a_hand_drawn_wireframe_paper_prototype_ui_sketch.png` | Select what kind of work MiAI should run and which agents/artifacts it will produce. | UX-19–UX-23 |
| 5 | Artifacts Mode + Context-Aware Chat Mode | `/mnt/data/Screenshot 2569-07-08 at 22.01.43.png` and `/mnt/data/a_hand_drawn_paper_prototype_wireframe_sketch_of.png` | Review artifacts, ask project-grounded questions, inspect evidence, and govern outputs. | UX-30–UX-35, UX-49–UX-56, UX-59 |
| 6 | Export Final Artifact | `/mnt/data/a_hand_drawn_paper_prototype_wireframe_ui_sketch.png` | Export approved final artifacts as PDF, PPTX, or DOCX. | UX-37–UX-42 |

---

## 2. End-to-End Prototype Flow

```text
Dashboard
  ↓
Create Project
  ├─ File-First
  ├─ Instruction + Files
  └─ Brief-First
  ↓
Context Packet Auto-Extracted Brief
  ↓
Select Job Mode
  ↓
Agent Pipeline / Artifact Generation
  ↓
Artifacts Mode + Context-Aware Chat Mode
  ↓
Human Review / Regenerate / Lock Version
  ↓
Export Final Artifact as PDF / PPTX / DOCX
```

---

## 3. Global Paper Prototype Design System

### Visual direction

- Hand-drawn wireframe on white paper.
- Thin black marker outlines.
- Slight imperfect/sketchy lines.
- Light blue for active selections.
- Light green for approved/trusted context.
- Light orange for pending review / warnings.
- Light purple for AI / strategy / storytelling outputs.
- Use clear labels, simple icons, and annotation text.

### Shared layout principles

- Use 16:9 landscape frame.
- Keep persistent MiAI sidebar in most screens.
- Keep project name visible: `McCain x Makro Thailand`.
- Always show status and next action.
- Every agent output should become an artifact.
- Every artifact should show version, confidence, evidence, and review status.
- Human review actions should be visible: `Approve`, `Edit`, `Reject`, `Regenerate`.
- Evidence should be visible and traceable.

### Common navigation items

```text
Dashboard
New Project
Agent Pipeline
Review
Chat
Export
```

---

## 4. Prototype Screen Specs


### 4.1 Dashboard Prototype

**Screen title:** `MiAI 2.0 — Dashboard`

**Goal:** Let users see all active client engagements, project status, agent progress, and review needs at a glance.

**Required areas:**

1. Left sidebar navigation.
2. Header with project count / sprint.
3. Metric cards:
   - In Progress
   - Awaiting Review
   - Approved
   - User Stories / Artifacts count
4. Project cards grid:
   - Client/project name
   - Project category
   - Status badge
   - Progress bar
   - Active agent
   - Small agent icons
   - Artifact count / review needed / locked
5. New Project drop zone / card.
6. Agent status panel.
7. Runtime ready indicator.

**Related user stories:** UX-01–UX-06

| Story ID | Epic | User Story / Requirement | Acceptance Criteria |
|---|---|---|---|
| UX-01 | Dashboard & Multi-Project Navigation | See all active client engagements with status at a glance. | Dashboard shows all projects; each project card shows client/project name, status, owner, last updated date, and next action; status is visually clear. |
| UX-02 | Dashboard & Multi-Project Navigation | See a clear “Needs Review” badge for projects awaiting approval. | Projects with pending approval show a visible Needs Review badge; badge count updates when artifacts are approved/rejected; clicking badge opens review items. |
| UX-03 | Dashboard & Multi-Project Navigation | Resume directly from the last active project screen. | System remembers last active project and screen; user can click Resume; user lands on the exact workflow step or artifact view. |
| UX-04 | Dashboard & Multi-Project Navigation | Filter dashboard by status, job type, or sprint. | User can filter by project status, job mode, sprint, or owner; results update without page reload; empty state appears when no project matches. |
| UX-05 | Dashboard & Multi-Project Navigation | See which agent is currently running from the project card. | Project card displays active agent name/status; shows Queued, Running, Done, Failed, or Paused; status updates during runtime. |
| UX-06 | Dashboard & Multi-Project Navigation | Use persistent sidebar navigation with projects and key actions. | Sidebar remains available across main screens; includes Projects, New Project, Review Queue, Exports, and Settings; active page is highlighted. |

**Build acceptance checklist:**

- [ ] User can understand project status without opening a project.
- [ ] User can identify which project needs review.
- [ ] User can see active agent progress.
- [ ] User can start a new project from dashboard.
- [ ] Sidebar remains persistent.

**Image generation prompt:**

```text
Create a 16:9 hand-drawn paper prototype wireframe of the MiAI 2.0 Dashboard. Include a left sidebar with MiAI logo and navigation. Main canvas shows project metrics and project cards for multiple client engagements. Each project card includes status badge, progress bar, active agent, artifact count, and review needed label. Include a New Project card and an agent status panel. Use black marker lines, white paper, light blue active highlights, orange review badges, green approved status, minimal sketch style, readable labels.
```


### 4.2 Create Project — 3 Modes Prototype

**Screen title:** `New Project — Choose Creation Mode`

**Goal:** Show three ways to start a MiAI project depending on how much input the user has.

**Three modes:**

| Mode | User situation | Prototype behavior |
|---|---|---|
| File-First | User has files but no structured brief yet. | Upload files first, MiAI creates project shell automatically. |
| Instruction + Files | User has files and a short instruction. | Upload files plus type a goal/instruction. |
| Brief-First | User wants to fill a guided structured brief. | Guided brief form with AI suggestions and missing-field prompts. |

**Required areas:**

1. Header: `Create New Project`.
2. Three large mode cards.
3. File upload zone.
4. Supported file type hint.
5. Instruction box.
6. Brief-first form preview.
7. Validation / missing fields hint.
8. Continue button disabled/enabled by readiness.

**Related user stories:** UX-07–UX-12c

| Story ID | Epic | User Story / Requirement | Acceptance Criteria |
|---|---|---|---|
| UX-07 | Project Creation (File-First) | Start a new project through file upload, not a long form. | User can create a project by uploading files first; project shell is created automatically; user is not forced to complete long metadata form before upload. |
| UX-08 | Project Creation (File-First) | See supported file types before uploading. | Upload area lists supported formats; unsupported files are rejected with clear error message; file size limits are visible. |
| UX-09 | Project Creation (File-First) | See real-time extraction progress during upload. | Each uploaded file shows Uploading, Extracting, Completed, or Failed; progress indicator is visible; failure message explains next step. |
| UX-10 | Project Creation (File-First) | Upload multiple files and track each extraction status separately. | User can upload multiple files; each file has its own status; failed file does not block completed files. |
| UX-11 | Project Creation (File-First) | Add new files to an in-progress project without restarting setup. | User can add more files after project creation; new files are processed and added to source list; existing context is preserved unless user chooses to reprocess. |
| UX-12 | Project Creation (File-First) | See which source file each Context Packet field came from. | Each extracted field shows source file reference; user can click or view evidence/source detail; fields without source are marked as inferred or manually added. |
| UX-12a | Project Creation (Instruction + Files) | Start a new project by providing text instructions along with file uploads. | User can input a text prompt or instructions and attach files simultaneously; system uses both to generate the initial context. |
| UX-12b | Project Creation (Brief-First) | Start a new project by filling out a structured project brief. | User can complete a standard form/brief to define the project; system uses the form data to initialize the Context Packet without requiring files. |
| UX-12c | Project Creation (Brief-First) | Bypass file upload and use only the brief to launch agents. | User can proceed to Context Packet review using only the data provided in the project brief; no file upload is forced. |

**Build acceptance checklist:**

- [ ] User can choose one of three project creation modes.
- [ ] File-first does not require a long form before upload.
- [ ] Supported file types and errors are visible.
- [ ] Instruction + Files can combine user instruction with uploaded context.
- [ ] Brief-first can save draft and show completion status.

**Image generation prompt:**

```text
Create a 16:9 hand-drawn paper prototype of MiAI 2.0 New Project screen showing three project creation modes: File-First, Instruction + Files, and Brief-First. Use three large selectable cards across the main canvas. Include upload zone, supported file type hints, instruction text area, structured brief preview, missing field warning, and Continue button. Keep left sidebar navigation. Use black ink sketch, white paper, blue highlight for selected mode, orange for missing fields, green for ready state.
```


### 4.3 Context Packet Auto-Extracted Brief Prototype

**Screen title:** `Context Packet — Auto-Extracted Brief`

**Goal:** Let the user review and confirm MiAI's structured understanding before running agents.

**Required areas:**

1. Extracted brief summary.
2. Confidence score.
3. Evidence list with source snippets.
4. Facts vs assumptions section.
5. Missing fields section.
6. Suggested AI-filled values.
7. Editable fields.
8. `Confirm Context` button.
9. `Ask MiAI to Repair Context` / `Upload More Sources` action.

**Related user stories:** UX-13–UX-18

| Story ID | Epic | User Story / Requirement | Acceptance Criteria |
|---|---|---|---|
| UX-13 | Context Packet Review & Confidence | Review extracted Context Packet fields in a scannable layout. | Context Packet view groups fields by business goal, audience, market, constraints, evidence, assumptions, and missing info; layout is readable and editable. |
| UX-14 | Context Packet Review & Confidence | Understand what the confidence score means and why it is low/high. | Confidence score is displayed with explanation; low confidence reasons are shown; user can see which missing fields or weak evidence affect score. |
| UX-15 | Context Packet Review & Confidence | See missing fields clearly and add them manually. | Missing required fields are highlighted; user can manually add values; system updates completion status after fields are added. |
| UX-16 | Context Packet Review & Confidence | Edit Context Packet fields inline before agent launch. | User can edit extracted fields inline; edited fields are saved; system marks edited values as human-modified. |
| UX-17 | Context Packet Review & Confidence | Distinguish AI-extracted facts from AI-inferred assumptions. | Each field is labeled as Extracted Fact, AI Assumption, Human Edit, or Missing; assumptions are grouped and reviewable. |
| UX-18 | Context Packet Review & Confidence | Only enable “Confirm & Continue” once required fields are resolved. | Confirm button is disabled until required fields meet validation rules; missing fields are listed; validation message disappears after completion. |

**Build acceptance checklist:**

- [ ] User can review grouped context before agents run.
- [ ] Confidence is visible and understandable.
- [ ] Evidence and assumptions are separated.
- [ ] Missing required fields block progression.
- [ ] User can edit fields before confirming.

**Image generation prompt:**

```text
Create a 16:9 hand-drawn paper prototype wireframe for MiAI 2.0 Context Packet Auto-Extracted Brief. Show extracted project context, business goal, target audience, timeline, constraints, confidence score, evidence snippets, assumptions, missing fields, and AI suggested values. Include actions: Edit, Upload More Sources, Repair Context, Confirm Context. Use black marker, white paper, green trusted evidence highlights, orange missing-field warnings, blue selected context fields.
```


### 4.4 Select Job Mode Prototype

**Screen title:** `Select Job Mode`

**Goal:** Let users choose the objective of the MiAI run so the runtime can activate the right agents, workflow, and artifact outputs.

**Example job modes:**

| Job Mode | Purpose | Typical agents | Primary artifact |
|---|---|---|---|
| Context Build | Structure messy input into trusted context. | Context Agent | Context Summary / Research Digest |
| Diagnosis | Identify problem, insight, and opportunity. | Context + Diagnosis Agents | Problem Definition / Opportunity Map |
| Strategy Development | Generate strategic direction and recommendation. | Context + Diagnosis + Strategy Agents | Strategy Blueprint |
| Storytelling / Presentation | Turn strategy into client-ready narrative. | Strategy + Storytelling Agents | Storyline / Presentation Draft |
| Full End-to-End Run | Run complete governed flow. | Context + Diagnosis + Strategy + Storytelling + Decision + Audit | Final Recommendation |

**Required areas:**

1. Context readiness banner.
2. Job mode cards.
3. Suggested mode based on context.
4. Activated agents preview.
5. Expected artifacts.
6. Sequence / parallel flow preview.
7. Human review requirement.
8. Run button.

**Related user stories:** UX-19–UX-23

| Story ID | Epic | User Story / Requirement | Acceptance Criteria |
|---|---|---|---|
| UX-19 | Job Mode Selection & Agent Launch | Choose from clear Job Mode options before launching. | Job Mode screen displays available modes; each mode explains purpose, expected output, and required agents; user can select one mode. |
| UX-20 | Job Mode Selection & Agent Launch | See which agents activate for each Job Mode. | Selecting a job mode shows activated agents; required and optional agents are clearly separated; user can preview expected artifacts. |
| UX-21 | Job Mode Selection & Agent Launch | See estimated completion time before launch. | System displays estimated runtime or simple time range; estimate changes by selected job mode/agent count; user sees expected process before launch. |
| UX-22 | Job Mode Selection & Agent Launch | Get a satisfying launch state change after triggering agents. | After launch, UI changes to Running state; runtime timeline begins; user sees confirmation that agents have started. |
| UX-23 | Job Mode Selection & Agent Launch | Go back to change job mode or files after context review. | User can return to file/context/job mode steps before launch; changes are saved; system asks confirmation if changes may affect Context Packet. |

**Build acceptance checklist:**

- [ ] User can understand what each job mode does.
- [ ] User can see which agents will run.
- [ ] User can see expected artifact outputs.
- [ ] User can choose or accept suggested mode.
- [ ] System shows estimated runtime or complexity.

**Image generation prompt:**

```text
Create a 16:9 hand-drawn paper prototype wireframe for MiAI 2.0 Select Job Mode screen. Show context readiness banner, five job mode cards: Context Build, Diagnosis, Strategy Development, Storytelling / Presentation, Full End-to-End Run. Each card shows purpose, activated agents, expected artifacts, and review requirement. Add a right panel showing runtime flow preview, selected agents, estimated runtime, and Run Job Mode button. Use black ink, white paper, blue selected card, green ready status, purple agent icons, orange review gate.
```


### 4.5 Artifacts Mode + Context-Aware Chat Mode Prototype

**Screen title:** `Artifacts Mode + Context-Aware Chat Mode`

**Goal:** Combine artifact review with project-grounded chat so users can inspect outputs, ask evidence-backed questions, revise artifacts, and send approved work to export.

**Required layout:**

```text
Top: project status bar + mode toggle
Left: Artifacts Mode grid + selected artifact detail
Center: Context-Aware Chat window
Right: Active Context + Related Artifacts + Top Evidence + Human Notes + Actions
```

**Detailed Prototype Area → User Story Mapping:**

| Prototype area                               | Related user stories                                   | Why it maps                                                                                                                                                                                                                                  |
| -------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project header + project status**          | UX-01, UX-03                                           | Shows active project, status, sprint, and lets user resume work in the same project context.                                                                                                                                                 |
| **Artifacts Mode grid**                      | UX-30, UX-31, UX-35, UX-59                             | Artifact cards show artifact type, agent, version, confidence, evidence count, status, and review state. UX-30/31 cover evidence + confidence/risk review, UX-35 covers version history, UX-59 covers artifact metadata in review context.   |
| **Selected Artifact panel**                  | UX-30, UX-32, UX-33, UX-34, UX-35                      | The bottom-left selected artifact area supports preview, evidence, version history, notes, activity, approve, edit, reject, regenerate, lock, and export.                                                                                    |
| **Approve / Edit / Reject actions**          | UX-32                                                  | The action buttons directly match the requirement for clear approve, edit, reject actions with confirmation and review-log update.                                                                                                           |
| **Regenerate selected artifact**             | UX-33                                                  | The “Regenerate” action maps to editing/regenerating only a specific artifact or section while preserving previous versions.                                                                                                                 |
| **Notes / activity / human review comments** | UX-34, UX-48                                           | Human notes and activity panel support comments attached to artifact sections and governance history.                                                                                                                                        |
| **Context-Aware Chat Mode panel**            | UX-49, UX-50, UX-51, UX-52, UX-53, UX-54, UX-55, UX-56 | Chat opens with project context, suggests prompts, gives cited answers, works during pipeline, can focus on selected artifact, supports pinned/history/context switching.                                                                    |
| **Active Context right panel**               | UX-49, UX-56                                           | Shows approved Context Packet v1.0 and active project/context selector.                                                                                                                                                                      |
| **Related Artifacts panel**                  | UX-53, UX-59                                           | Chat can reference a selected artifact/version and clearly show artifact metadata.                                                                                                                                                           |
| **Top Evidence panel**                       | UX-30, UX-51                                           | Chat/artifact answers include evidence references and clickable citations.                                                                                                                                                                   |
| **Send to Export / Export action**           | UX-37, UX-38, UX-39, UX-41, UX-42                      | Export actions connect approved artifacts to output generation, progress, citations, and export history. UX-39/41/42 are visible in the export-related user stories.                                                                         |
| **Sidebar navigation**                       | UX-06                                                  | Persistent sidebar with Dashboard, New Project, Agent Pipeline, Review, Chat, Export.                                                                                                                                                        |

**Core user stories covered by this prototype:** UX-30, UX-31, UX-32, UX-33, UX-34, UX-35, UX-49, UX-50, UX-51, UX-52, UX-53, UX-54, UX-55, UX-56, UX-59.

**Secondary supporting stories:** UX-01, UX-03, UX-06, UX-37–UX-42, UX-48.

**Required interaction states:**

- Select artifact card.
- Change active artifact detail tabs: Preview / Evidence / Version History / Notes / Activity.
- Approve artifact.
- Edit artifact.
- Reject artifact.
- Regenerate artifact.
- Ask chat using approved context only.
- Ask chat about selected artifact.
- Create artifact from chat answer.
- Send selected artifact to export.

**Related user stories:**

| Story ID | Epic | User Story / Requirement | Acceptance Criteria |
|---|---|---|---|
| UX-30 | Artifact Review & Governance | Review artifacts in a clean view with evidence citations nearby. | Artifact review page shows artifact content and evidence references side by side; citations are clickable; reviewer can inspect source evidence. |
| UX-31 | Artifact Review & Governance | See risk flags for low-confidence or thin-evidence sections. | Sections with weak evidence or low confidence are flagged; risk reason is shown; reviewer can filter or jump to flagged areas. |
| UX-32 | Artifact Review & Governance | Use clear Approve / Edit / Reject actions with confirmation. | Artifact has Approve, Edit, Reject actions; user must confirm action; action updates artifact status and review log. |
| UX-33 | Artifact Review & Governance | Edit and regenerate only a specific artifact section. | User can select artifact section; add edit instruction; regenerate affects only selected artifact/section; previous version is preserved. |
| UX-34 | Artifact Review & Governance | Attach review comments to specific artifact sections. | Reviewer can add comments to a section; comments are saved with reviewer/date; comments remain visible in review history. |
| UX-35 | Artifact Review & Governance | View full artifact version history and audit trail. | User can view artifact versions; each version shows created date, creator/agent, approval status, and changes; superseded versions are clearly marked. |
| UX-36 | Artifact Review & Governance | Access a dedicated review queue across active projects. | Review Queue page lists all pending artifacts across projects; user can filter by project, status, reviewer, and urgency. |
| UX-48 | Session Continuity & Project Memory | See project-level decision log for approvals, edits, and rejections. | Decision log shows all governance actions; each log item includes user, date/time, action, affected artifact, and notes. |
| UX-49 | Context-Aware Chat Mode | Open chat with project context already loaded. | Chat opens with active project context; system shows which project/context is active; answers reference project materials when relevant. |
| UX-50 | Context-Aware Chat Mode | See prompt suggestions based on active agent or artifact. | Chat suggests prompts based on current workflow step, selected artifact, or active agent; suggestions are clickable. |
| UX-51 | Context-Aware Chat Mode | Get chat answers with specific source citations. | Chat answers include citations/evidence references when using project sources; unsupported claims are marked as assumption or need verification. |
| UX-52 | Context-Aware Chat Mode | Use chat during agent runs without pausing the pipeline. | Chat remains available while agents run; pipeline continues unless user explicitly pauses/reviews; chat state does not interrupt runtime. |
| UX-53 | Context-Aware Chat Mode | Ask questions about a specific approved artifact. | User can select artifact as chat context; chat responses reference that artifact; system indicates selected artifact/version. |
| UX-54 | Context-Aware Chat Mode | Pin important AI responses for later reference. | User can pin chat messages; pinned messages appear in a pinned section; pinned messages persist across sessions. |
| UX-55 | Context-Aware Chat Mode | Persist full chat history across sessions. | All project chat messages remain after refresh/re-login; user can scroll historical conversation; deleted messages are not shown unless audit requires. |
| UX-56 | Context-Aware Chat Mode | See and switch active project context inside chat. | Chat displays active project/context selector; user can switch context; system confirms switch before answering with new context. |
| UX-59 | Auth, Team Scope & Governance Controls | See artifact metadata in every review context. | Artifact review always shows type, version, status, creator/agent, created date, evidence count, and confidence score. |

**Build acceptance checklist:**

- [ ] Artifact grid communicates status, confidence, evidence, and version.
- [ ] Selected artifact panel supports governance actions.
- [ ] Chat clearly uses approved context and evidence.
- [ ] Chat answer shows sources / evidence IDs.
- [ ] Right panel shows active context, artifacts, evidence, notes, and actions.
- [ ] Export handoff is visible.

**Image generation prompt:**

```text
Recreate a 16:9 hand-drawn paper prototype wireframe of MiAI 2.0 combining Artifacts Mode and Context-Aware Chat Mode. Top bar shows Project: McCain x Makro Thailand, Sprint #1, Status: Awaiting Review, toggle buttons for Artifacts Mode and Context-Aware Chat. Left panel shows artifact cards grid with Context Summary, Diagnosis Artifact, Strategy Artifact, Storytelling Artifact, From-To Shift, Final Report; each card has agent, version, confidence, evidence count, and status. Bottom-left selected artifact panel shows preview tabs and actions: Approve, Edit, Reject, Regenerate, Lock Version, Export. Center panel shows context-aware chat with approved context selector, user question, MiAI answer with bullet points and source IDs, quick prompt buttons and composer. Right panel shows Active Context, Related Artifacts, Top Evidence, Human Notes, and Actions including Create Follow-up Artifact, Regenerate Selected Artifact, Add Note, Send to Export. Use black marker lines, white paper, light blue active outlines, green approved context, orange pending review, readable handwriting style.
```


### 4.6 Export Final Artifact Prototype

**Screen title:** `Export Final Artifact`

**Goal:** Let users export approved final work as PDF, PPTX, or DOCX with preview, content options, metadata, and traceability.

**Required areas:**

1. Export format selector:
   - PDF
   - PPTX
   - DOCX
2. Include-in-export checklist:
   - Executive Summary
   - Key Insights & Recommendations
   - Supporting Data & Evidence
   - Charts & Visuals
   - Agent Contributions
   - Appendix & References
3. Export options:
   - Page size
   - Orientation
   - Quality
   - Branding / include logo
4. File name field.
5. Export preview panel.
6. Export summary:
   - Project
   - Artifact name/version
   - Generated date
   - Estimated pages/slides
   - Format
7. Buttons:
   - Back to Project
   - Preview Export
   - Export Final Artifact

**Related user stories:** UX-37–UX-42

| Story ID | Epic | User Story / Requirement | Acceptance Criteria |
|---|---|---|---|
| UX-37 | Export, Delivery & Version Locking | Choose export format: PPTX, Markdown, or Structured Report. | Export screen offers available formats; user can select one or more; disabled formats explain missing requirements. |
| UX-38 | Export, Delivery & Version Locking | Preview export output before downloading. | User can preview generated export; preview reflects approved artifacts; user can go back to review if changes are needed. |
| UX-39 | Export, Delivery & Version Locking | See progress while export is being generated. | Export generation shows progress/loading state; user sees success or failure message; failed export can be retried. |
| UX-40 | Export, Delivery & Version Locking | Lock final approved output to prevent accidental edits. | Project Lead can lock final output; locked output cannot be edited without unlock action; lock event is recorded. |
| UX-41 | Export, Delivery & Version Locking | Include inline source citations in exported outputs. | Export includes evidence/source citations where required; citation format is consistent; user can choose include/exclude citations where allowed. |
| UX-42 | Export, Delivery & Version Locking | Access previously exported versions from project history. | Export history lists previous exports; each item shows format, date, version, and creator; user can download previous version. |

**Build acceptance checklist:**

- [ ] User can select PDF, PPTX, or DOCX.
- [ ] User can preview before final export.
- [ ] Export includes evidence/citation traceability.
- [ ] Export progress and errors are clear.
- [ ] Exported version can be locked and tracked in history.

**Image generation prompt:**

```text
Create a 16:9 hand-drawn paper prototype wireframe for MiAI 2.0 Export Final Artifact screen. Include left sidebar navigation with Export selected. Main panel title Export Final Artifact. Show format cards for PDF, PPTX, DOCX with PDF selected. Include checklist for Executive Summary, Key Insights, Supporting Data & Evidence, Charts & Visuals, Agent Contributions, Appendix & References. Add export options: page size, orientation, quality, branding. Add file name field. Right panel shows export preview document thumbnail and export summary with project, artifact version, generated date, pages, and format. Bottom actions: Back to Project, Preview Export, Export Final Artifact. Use black marker sketch, white paper, blue selected format, green ready state, orange tips.
```


---

## 5. Build as One Clickable HTML Prototype

### Output file

```text
miai_2_0_all_paper_prototypes.html
```

### Required behavior

- Left navigation lists all six prototype screens.
- User can click a screen name to view it.
- Each screen should display:
  - paper-prototype image area or drawn HTML wireframe
  - related user stories
  - primary goal
  - acceptance checklist
  - prototype notes
- Include a top-level end-to-end flow map.
- Include a final traceability matrix: screen → user stories → output artifact.
- Use no external dependencies.
- Use embedded CSS/JS only.

### Suggested HTML structure

```text
<header>
  MiAI 2.0 Complete Paper Prototype
</header>
<aside>
  Dashboard
  Create Project
  Context Packet
  Select Job Mode
  Artifacts + Chat
  Export
</aside>
<main>
  <section id="flow-map"></section>
  <section id="prototype-viewer"></section>
  <section id="user-story-mapping"></section>
</main>
```

### HTML build prompt

```text
Create a single self-contained HTML file named miai_2_0_all_paper_prototypes.html.
The page should present all MiAI 2.0 paper prototypes as a clickable prototype viewer.
Use a clean whiteboard / paper prototype style with black marker borders, off-white background, blue active states, green approved context, orange review states, and purple AI/strategy accents.

Include six screens:
1. Dashboard
2. Create Project — 3 Modes
3. Context Packet Auto-Extracted Brief
4. Select Job Mode
5. Artifacts Mode + Context-Aware Chat Mode
6. Export Final Artifact

For each screen, show:
- screen title
- goal
- wireframe-like layout
- key components
- related user stories
- acceptance checklist
- next action

Add a persistent sidebar to switch screens.
Add an end-to-end flow diagram at the top.
Add a traceability matrix at the bottom.
Use only HTML, CSS, and JavaScript. No external libraries.
```

---

## 6. Combined User Story Traceability Matrix

| Prototype screen | Main story IDs | Primary output / decision |
|---|---|---|
| Dashboard | UX-01–UX-06 | Select project or start new project. |
| Create Project — 3 Modes | UX-07–UX-12c | Project shell + input sources ready. |
| Context Packet Auto-Extracted Brief | UX-13–UX-18 | Confirmed Context Packet. |
| Select Job Mode | UX-19–UX-23 | Job mode selected, agents and artifacts known. |
| Agent Pipeline / Runtime bridge | UX-24–UX-29 | Agents running / complete / failed / paused. |
| Artifacts Mode + Context-Aware Chat | UX-30–UX-35, UX-49–UX-56, UX-59 | Reviewed artifact, evidence-backed chat, notes, decisions. |
| Export Final Artifact | UX-37–UX-42 | PDF / PPTX / DOCX exported and version-locked. |
| Session Memory / Governance | UX-43–UX-48, UX-57–UX-64 | Resume state, decision log, permissions, audit trail. |

---

## 7. Full Screen-by-Screen QA Checklist

### Dashboard
- [ ] Can user see all projects at a glance?
- [ ] Can user detect pending review quickly?
- [ ] Can user resume a project?
- [ ] Can user start a new project?

### Create Project
- [ ] Can user start with files only?
- [ ] Can user combine instruction + files?
- [ ] Can user start with structured brief?
- [ ] Are unsupported files and missing data clearly handled?

### Context Packet
- [ ] Are facts, assumptions, evidence, and missing fields separated?
- [ ] Is confidence understandable?
- [ ] Can user edit before confirming?
- [ ] Is Confirm Context blocked when required fields are missing?

### Select Job Mode
- [ ] Does user know what each mode produces?
- [ ] Are agents and artifact outputs visible before run?
- [ ] Is the recommended mode clear?
- [ ] Is human review requirement visible?

### Artifacts + Chat
- [ ] Can user review artifact evidence and confidence?
- [ ] Can user approve/edit/reject/regenerate?
- [ ] Does chat answer with project context and citations?
- [ ] Can chat focus on selected artifact?
- [ ] Can user send artifact to export?

### Export
- [ ] Can user choose PDF/PPTX/DOCX?
- [ ] Can user select export contents?
- [ ] Can user preview export before download?
- [ ] Is export history/version lock implied?

---

## 8. One-Liner for the Prototype Set

> MiAI 2.0 turns messy strategic work into governed, evidence-backed, versioned artifacts that humans can review, revise, chat with, and export.
