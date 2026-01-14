// ============================================================
// DEEP WORK TRACKER - CONFIGURATION FILE
// ============================================================
// Focus: DSA + ML Foundations + Research + Lab
// ============================================================

const config = {
  // ----------------------------------------------------------
  // GENERAL SETTINGS
  // ----------------------------------------------------------
  title: "*Deep* Work",
  subtitle: "January 14 – February 14, 2026 // Building Foundations",

  startDate: new Date(2026, 0, 14),
  endDate: new Date(2026, 1, 14),

  // ----------------------------------------------------------
  // TRACKS
  // ----------------------------------------------------------
  tracks: [
    // ========== DAILY PRIORITIES ==========
    {
      id: "dsa",
      name: "DSA - Striver's A2Z Sheet",
      icon: "🧩",
      color: "#10b981",
      hoursPerDay: 4,
      priority: 1,
      notes: "NON-NEGOTIABLE. 3-4 problems/day. No skipping.",
      resources: [
        {
          name: "Striver's A2Z DSA Sheet",
          url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        },
        {
          name: "Striver's YouTube",
          url: "https://www.youtube.com/@takeUforward",
        },
        {
          name: "NeetCode Roadmap",
          url: "https://neetcode.io/roadmap",
        },
        {
          name: "LeetCode",
          url: "https://leetcode.com/",
        },
      ],
    },
    {
      id: "ml-689",
      name: "689 ML Review",
      icon: "📘",
      color: "#06b6d4",
      hoursPerDay: 2,
      priority: 2,
      notes:
        "Review weak topics: optimization, generative models, probabilistic ML",
      resources: [
        {
          name: "Murphy ML Book (Free)",
          url: "https://probml.github.io/pml-book/book1.html",
        },
        {
          name: "Bishop Pattern Recognition (PDF)",
          url: "https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf",
        },
        {
          name: "CS229 Notes (Stanford)",
          url: "https://cs229.stanford.edu/main_notes.pdf",
        },
      ],
    },
    {
      id: "ml-sysdesign",
      name: "ML System Design",
      icon: "⚙️",
      color: "#14b8a6",
      hoursPerDay: 2,
      priority: 3,
      notes: "Model serving, feature stores, training pipelines, scaling ML",
      resources: [
        {
          name: "Chip Huyen - Designing ML Systems",
          url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
        },
        {
          name: "Stanford CS329S (ML Systems)",
          url: "https://stanford-cs329s.github.io/",
        },
        {
          name: "Made With ML",
          url: "https://madewithml.com/",
        },
        {
          name: "ML System Design Interview (Educative)",
          url: "https://www.educative.io/courses/machine-learning-system-design",
        },
      ],
    },
    {
      id: "project-work",
      name: "Project Work",
      icon: "🛠️",
      color: "#22c55e",
      hoursPerDay: 2,
      priority: 4,
      notes: "Ship a project milestone daily",
      resources: [],
    },
    {
      id: "applications",
      name: "Internship Applications",
      icon: "🧾",
      color: "#eab308",
      hoursPerDay: 1,
      priority: 5,
      notes: "Batch applications, update resume, track submissions",
      resources: [
        {
          name: "GitHub Internship List 2025",
          url: "https://github.com/SimplifyJobs/Summer2025-Internships",
        },
        {
          name: "Levels.fyi Internships",
          url: "https://www.levels.fyi/internships/",
        },
        {
          name: "LinkedIn Jobs",
          url: "https://www.linkedin.com/jobs/",
        },
        {
          name: "Handshake (UMass)",
          url: "https://umass.joinhandshake.com/",
        },
      ],
    },
    {
      id: "research-outreach",
      name: "Research Outreach",
      icon: "📝",
      color: "#f97316",
      hoursPerDay: 1,
      priority: 6,
      notes:
        "Read papers, draft emails, reach out to labs. Send at least 1 email this week.",
      resources: [
        {
          name: "Hui Guan (MLSys) - #1 Target",
          url: "https://guanh01.github.io/",
        },
        {
          name: "PLASMA Lab",
          url: "https://plasma-umass.org/",
        },
        {
          name: "UMass NLP",
          url: "https://nlp.cs.umass.edu/",
        },
        {
          name: "Andrew McCallum (IESL)",
          url: "https://people.cs.umass.edu/~mccallum/",
        },
        {
          name: "Emery Berger",
          url: "https://emeryberger.com/",
        },
        {
          name: "Google Scholar",
          url: "https://scholar.google.com/",
        },
      ],
    },
    {
      id: "posts",
      name: "Share Work & Updates",
      icon: "✨",
      color: "#a855f7",
      hoursPerDay: 1,
      priority: 7,
      notes: "Build in public - Twitter/X, LinkedIn, blog",
      resources: [
        {
          name: "Twitter/X",
          url: "https://twitter.com/",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/",
        },
      ],
    },

    // ========== LATER (NOT NOW) ==========
    {
      id: "later-mock",
      name: "[Later] Mock Interviews & Timed Practice",
      icon: "⏱️",
      color: "#71717a",
      hoursPerDay: 0,
      priority: 10,
      notes:
        "START AFTER: DSA foundations are solid. LC contests + Pramp mocks.",
      resources: [
        {
          name: "LeetCode Weekly Contest",
          url: "https://leetcode.com/contest/",
        },
        {
          name: "Pramp (Free Mock Interviews)",
          url: "https://www.pramp.com/",
        },
        {
          name: "Interviewing.io",
          url: "https://interviewing.io/",
        },
      ],
    },
    {
      id: "later-karpathy",
      name: "[Later] Karpathy's Zero to Hero",
      icon: "🧠",
      color: "#71717a",
      hoursPerDay: 0,
      priority: 11,
      notes: "START AFTER: 689 review done. Build neural nets from scratch.",
      resources: [
        {
          name: "YouTube Playlist",
          url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        },
        {
          name: "GitHub Repo (Micrograd)",
          url: "https://github.com/karpathy/micrograd",
        },
        {
          name: "GitHub Repo (NanoGPT)",
          url: "https://github.com/karpathy/nanoGPT",
        },
      ],
    },
    {
      id: "later-papers",
      name: "[Later] Ilya's Reading List",
      icon: "📄",
      color: "#71717a",
      hoursPerDay: 0,
      priority: 13,
      notes:
        "Classic papers. Read when prepping for specific research or interviews.",
      resources: [
        {
          name: "Top 30 Papers (Aman.ai)",
          url: "https://aman.ai/primers/ai/top-30-papers/",
        },
        {
          name: "Papers With Code",
          url: "https://paperswithcode.com/",
        },
        {
          name: "Semantic Scholar",
          url: "https://www.semanticscholar.org/",
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: {
    accent: "#ff1493",
    background: "#08090a",
    backgroundSecondary: "#0f1012",
    backgroundTertiary: "#161719",
    border: "#232527",
    textPrimary: "#f4f4f5",
    textSecondary: "#a1a1aa",
    textMuted: "#52525b",
  },

  // ----------------------------------------------------------
  // FEATURES
  // ----------------------------------------------------------
  features: {
    showSummaryCards: true,
    showTotalProgress: true,
    incrementAmount: 0.5,
    showPriority: true,
    showNotes: true,
  },
};

export default config;
