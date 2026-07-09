const slides = [
  {
    type: "hero",
    section: "Opening",
    eyebrow: "Workshop Setup",
    title: "Align the job, mode, and artifact before anyone designs the agent.",
    copy:
      "This session turns planning jobs into clear operating modes and concrete outputs that TWF can build against.",
    asideTitle: "What success looks like",
    bullets: [
      "Every priority job is mapped to one primary mode.",
      "Every mode has a clear artifact and file format.",
      "Disagreements are captured as signal, not polished away."
    ]
  },
  {
    type: "agenda",
    section: "Opening",
    eyebrow: "Session Goal",
    title: "What this workshop needs to produce",
    copy:
      "For each media-planning job, agree the mode, the primary artifact, and the artifact detail TWF needs in order to build the agent correctly.",
    bullets: [
      "Review the job list and definitions first.",
      "Answer independently before reconciling as a group.",
      "Document disagreements where they remain.",
      "Leave with a handoff package TWF can use immediately."
    ]
  },
  {
    type: "cards",
    section: "Definitions",
    eyebrow: "Pin These Words First",
    title: "Use the same language before reviewing jobs",
    copy:
      "Most confusion disappears once the room agrees on these three terms.",
    cards: [
      {
        title: "Job",
        text: "One discrete task a planner does, such as building audience segments or analyzing the marketing situation."
      },
      {
        title: "Job mode",
        text: "The type of run you launch. It determines which agents activate and which artifacts get produced."
      },
      {
        title: "Primary artifact",
        text: "The main output a job or mode produces and hands to the next step."
      }
    ]
  },
  {
    type: "table",
    section: "Modes",
    eyebrow: "Reference",
    title: "The working job modes in scope",
    columns: ["Mode", "Purpose", "Primary artifact", "Format"],
    rows: [
      [
        "Context Builder",
        "Turn messy input into trusted context and live research.",
        "Context summary and context report",
        ".docx, .pdf"
      ],
      [
        "Diagnosis",
        "Analyze business issues, market trends, consumer trends, and gaps.",
        "Context summary and context report",
        ".docx, .pdf"
      ],
      [
        "Strategy Development",
        "Generate strategic direction or recommend the strongest option.",
        "Strategy blueprint",
        ".docx, .pdf"
      ],
      [
        "Storytelling Presentation",
        "Turn strategy into narrative and presentation structure.",
        "Storyline, Beautiful.ai prompt, presentation draft",
        ".pptx"
      ]
    ]
  },
  {
    type: "statement",
    section: "Modes",
    eyebrow: "Important Gap",
    title: "The source mentions five modes, but only four are detailed here.",
    copy:
      "Full End-to-End Run appears in the definitions, yet the worksheet content provided does not define its artifact in the worked example. Keep that as an explicit open point during the workshop."
  },
  {
    type: "process",
    section: "Activity",
    eyebrow: "Facilitation Flow",
    title: "Run the review in two passes",
    bullets: [
      "Give each reviewer an independent grid first.",
      "Have them assign mode, artifact, format, inputs, and agent extras per job.",
      "Bring the room back together on a shared copy.",
      "Reconcile where possible and mark disagreements where they persist."
    ],
    asideTitle: "Why this matters",
    asideCopy:
      "Independent first-pass answers expose real model differences. That is exactly what TWF needs to see."
  },
  {
    type: "cards",
    section: "Capture",
    eyebrow: "What To Record",
    title: "Capture more than the final answer",
    copy:
      "The workshop output needs enough detail to inform agent design, not just a binary mode decision.",
    cards: [
      {
        title: "Required per job",
        text: "Mode, primary artifact, output format, inputs, and any agent-specific extras."
      },
      {
        title: "When people disagree",
        text: "Flag the disagreement directly instead of forcing consensus for appearance."
      },
      {
        title: "Open questions",
        text: "Log confusion points and who raised them so follow-up work is traceable."
      }
    ]
  },
  {
    type: "quote",
    section: "Capture",
    eyebrow: "Non-Negotiable",
    title: "Do not smooth disagreement away.",
    quote:
      "Where the three of you disagree, capture the disagreement rather than smoothing it over."
  },
  {
    type: "two-column",
    section: "Outputs",
    eyebrow: "Handoff Package",
    title: "What TWF should receive after the workshop",
    leftTitle: "Primary handoff",
    leftBullets: [
      "The completed job-to-mode grid",
      "Artifact formats and required inputs",
      "Agent extras or build notes per job"
    ],
    rightTitle: "Supporting material",
    rightBullets: [
      "A summary of job modes and artifacts across all five modes",
      "A consolidated confusion log",
      "Slide-linked open questions that still need resolution"
    ]
  },
  {
    type: "closing",
    section: "Close",
    eyebrow: "Final Reminder",
    title: "Treat the workshop like a design input exercise, not a presentation review.",
    copy:
      "If the room leaves with precise jobs, artifacts, and visible disagreements, TWF has what it needs to design the right agent behavior."
  }
];

const deck = document.getElementById("deck");
const template = document.getElementById("slide-template");
const bookmarkRail = document.getElementById("bookmark-rail");
const sectionLabel = document.getElementById("section-label");
const slideCount = document.getElementById("slide-count");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function renderSlideContent(slide) {
  switch (slide.type) {
    case "hero":
      return `
        <div class="slide-grid">
          <div>
            <p class="eyebrow">${slide.eyebrow}</p>
            <h2>${slide.title}</h2>
            <p class="lede">${slide.copy}</p>
          </div>
          <aside class="panel">
            <p class="meta">${slide.asideTitle}</p>
            <ul class="bullet-list">
              ${slide.bullets.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </aside>
        </div>
      `;
    case "agenda":
    case "process":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <div class="slide-grid">
          <div>
            <p class="lede">${slide.copy || ""}</p>
            <ol class="agenda-list">
              ${slide.bullets.map((item) => `<li>${item}</li>`).join("")}
            </ol>
          </div>
          <aside class="panel">
            <p class="meta">${slide.asideTitle || "Why it matters"}</p>
            <p>${slide.asideCopy || "Use the structure to keep the session factual and comparable."}</p>
          </aside>
        </div>
      `;
    case "cards":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <p class="lede">${slide.copy}</p>
        <div class="card-grid">
          ${slide.cards
            .map(
              (card) => `
                <article class="card">
                  <h3>${card.title}</h3>
                  <p>${card.text}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `;
    case "table":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <table class="artifact-table">
          <thead>
            <tr>${slide.columns.map((column) => `<th>${column}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${slide.rows
              .map(
                (row) => `
                  <tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      `;
    case "statement":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <div class="quote-block">
          <p>${slide.copy}</p>
        </div>
      `;
    case "quote":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <div class="quote-block">
          <p>${slide.quote}</p>
        </div>
      `;
    case "two-column":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <div class="slide-grid">
          <section class="panel">
            <h3>${slide.leftTitle}</h3>
            <ul class="capture-list">
              ${slide.leftBullets.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
          <section class="panel">
            <h3>${slide.rightTitle}</h3>
            <ul class="capture-list">
              ${slide.rightBullets.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </div>
      `;
    case "closing":
      return `
        <p class="eyebrow">${slide.eyebrow}</p>
        <h2>${slide.title}</h2>
        <p class="lede">${slide.copy}</p>
      `;
    default:
      return `<h2>${slide.title}</h2>`;
  }
}

function renderDeck() {
  slides.forEach((slide, index) => {
    const slideNode = template.content.firstElementChild.cloneNode(true);
    slideNode.id = `slide-${index + 1}`;
    slideNode.innerHTML = renderSlideContent(slide);
    deck.appendChild(slideNode);

    const bookmark = document.createElement("button");
    bookmark.type = "button";
    bookmark.className = "bookmark";
    bookmark.textContent = `${index + 1}. ${slide.section}`;
    bookmark.addEventListener("click", () => goToSlide(index));
    bookmarkRail.appendChild(bookmark);
  });
}

function goToSlide(index) {
  currentIndex = Math.max(0, Math.min(index, slides.length - 1));

  [...deck.children].forEach((slide, idx) => {
    slide.classList.toggle("active", idx === currentIndex);
  });

  [...bookmarkRail.children].forEach((bookmark, idx) => {
    bookmark.classList.toggle("active", idx === currentIndex);
  });

  const currentSlide = slides[currentIndex];
  sectionLabel.textContent = currentSlide.section;
  slideCount.textContent = `${currentIndex + 1} / ${slides.length}`;
  progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  window.location.hash = `slide-${currentIndex + 1}`;
}

function syncFromHash() {
  const index = Number(window.location.hash.replace("#slide-", "")) - 1;
  if (!Number.isNaN(index) && index >= 0 && index < slides.length) {
    goToSlide(index);
  }
}

prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    goToSlide(currentIndex - 1);
  }
  if (event.key === "ArrowRight") {
    goToSlide(currentIndex + 1);
  }
});

window.addEventListener("hashchange", syncFromHash);

renderDeck();
syncFromHash();
goToSlide(currentIndex);
