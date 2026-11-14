/**
 * 站点内容唯一数据源。
 * 想换成自己的信息，只改这个文件即可 —— 组件里没有任何硬编码的个人资料。
 * 注意：以下人物、机构、论文、数字全部是虚构的占位内容，上线前请全部替换。
 */

export const site = {
  name: "HAN LU",
  nameParts: ["HAN", "LU"],
  initials: "HL",
  role: "AI Researcher",
  roleZh: "人工智能研究者",
  kicker: "Selected work — 2026",
  lead: "I reverse-engineer what large models actually compute, then use that to make them cheaper, safer, and easier to check.",
  description:
    "Han Lu — AI researcher working on mechanistic interpretability, evaluation, and efficient training. Portfolio and selected publications.",
  location: "Beijing / Remote",
  field: "Interpretability · Evaluation",
  status: "Open to collaboration",
  email: "hello@hanlu.dev",
  coords: "39.9042° N / 116.4074° E",
  stamp: "Open to work — 2026",
  nav: [
    { label: "Focus", href: "#focus" },
    { label: "Work", href: "#work" },
    { label: "Papers", href: "#papers" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export const ticker = [
  "Mechanistic interpretability",
  "Scaling laws",
  "Evaluation",
  "Sparse autoencoders",
  "Open science",
  "Multimodal",
];

export const focus = {
  index: "01",
  title: "Focus",
  note: "Three questions I keep returning to.",
  items: [
    {
      id: "01",
      title: "Mechanistic interpretability",
      body: "Reverse-engineering the circuits inside transformers. Sparse autoencoders, causal tracing, activation patching — anything that turns a black box into a wiring diagram.",
      tags: ["SAE", "Causal tracing", "Circuits"],
    },
    {
      id: "02",
      title: "Scaling & efficiency",
      body: "How capability changes with compute, data, and sparsity. Which parameters you can remove before the model notices, and which you absolutely cannot.",
      tags: ["Scaling laws", "MoE", "Distillation"],
    },
    {
      id: "03",
      title: "Evaluation",
      body: "Benchmarks that survive contamination. Tests for reasoning, honesty, and refusal that keep their meaning after the leaderboard is gamed.",
      tags: ["Contamination", "Refusal", "Reasoning"],
    },
  ],
};

export const work = {
  index: "02",
  title: "Selected work",
  note: "Four projects, 2024 — 2026.",
  items: [
    {
      id: "sift",
      title: "SIFT",
      subtitle: "Sparse feature tracing at 70B parameters",
      year: "2026",
      tags: ["Interpretability", "SAE", "Open source"],
      summary:
        "A feature-level tracer that runs on a single eight-GPU node. It attributes refusal behaviour in a 70B model to a small set of sparse features, without retraining the model or touching its weights.",
      results: [
        ["4.1%", "of features carry 88% of the causal effect on refusal"],
        ["7.3x", "less GPU memory than the reference tracing pipeline"],
        ["11", "downstream labs adopted the release in six months"],
      ],
      stack: "PyTorch · CUDA · 8×H100",
    },
    {
      id: "atlas-9",
      title: "ATLAS-9",
      subtitle: "A 9B multilingual reasoning model",
      year: "2025",
      tags: ["Pretraining", "Multilingual", "Reasoning"],
      summary:
        "Trained from scratch on 1.2T tokens across 23 languages. Most of the gain came from data mixing and a curriculum on chain-of-thought traces, not from adding parameters.",
      results: [
        ["+14.6", "points on MMLU-Pro over a 13B baseline"],
        ["23", "languages above the 60% pass mark"],
        ["1.2T", "tokens, 41 days on 128 GPUs"],
      ],
      stack: "Megatron · BF16 · 128×H100",
    },
    {
      id: "circuit-bench",
      title: "CIRCUIT BENCH",
      subtitle: "240 hand-built tasks for interpretability claims",
      year: "2025",
      tags: ["Benchmark", "Interpretability", "Evaluation"],
      summary:
        "A diagnostic suite that checks whether an interpretability method actually recovers a known circuit. Every task has a ground-truth mechanism, so a plausible-looking explanation can be scored as wrong.",
      results: [
        ["240", "tasks across 6 architectural families"],
        ["18", "models, from 1B to 70B parameters"],
        ["0.31", "mean score for random probes — below chance"],
      ],
      stack: "Python · TransformerLens · 18 checkpoints",
    },
    {
      id: "prism",
      title: "PRISM",
      subtitle: "Multimodal retrieval without a second encoder",
      year: "2024",
      tags: ["Multimodal", "Retrieval", "Infrastructure"],
      summary:
        "A retrieval layer that reuses a frozen vision encoder and a small adapter instead of training a joint embedding from scratch. Same recall, a fraction of the compute.",
      results: [
        ["3.4×", "faster indexing than the joint-embedding baseline"],
        ["96.2%", "recall@10 on the internal image-text set"],
        ["1", "adapter, 38M parameters, frozen backbone"],
      ],
      stack: "CLIP · FAISS · Rust service",
    },
  ],
};

export const papers = {
  index: "03",
  title: "Publications",
  note: "* equal contribution. Selected, not exhaustive.",
  items: [
    {
      year: "2026",
      title: "Sparse Features Are Not Enough: Causal Sufficiency in SAE Explanations",
      venue: "NeurIPS 2026",
      kind: "Under review",
      authors: "H. Lu, M. Okafor, J. Ren",
    },
    {
      year: "2025",
      title: "Contamination-Resistant Evaluation for Code Models",
      venue: "ICML 2025",
      kind: "Oral",
      authors: "H. Lu*, T. Weiss, A. Duarte",
    },
    {
      year: "2025",
      title: "Circuit Bench: A Diagnostic Suite for Mechanistic Claims",
      venue: "ICLR 2025",
      kind: "Spotlight",
      authors: "H. Lu, S. Kaur, L. Feng, M. Okafor",
    },
    {
      year: "2024",
      title: "Scaling Laws for Sparse Mixture Models Under Fixed Compute",
      venue: "TMLR 2024",
      kind: "Journal",
      authors: "H. Lu, A. Duarte",
    },
    {
      year: "2024",
      title: "What Refusal Looks Like Inside a Transformer",
      venue: "ACL 2024",
      kind: "Long paper",
      authors: "H. Lu*, J. Ren, P. Sandoval",
    },
  ],
};

export const about = {
  index: "04",
  title: "About",
  note: "Short version.",
  bio: [
    "I am a research scientist working on the gap between what a model can do and what we can explain about it. Most of my work starts with a benchmark that someone has learned to game, or a circuit diagram that nobody has verified.",
    "Before this I spent four years on a PhD in computational neuroscience, which is where I picked up the habit of measuring before theorising. I still write code every day.",
  ],
  timeline: [
    {
      period: "2026 —",
      role: "Research Scientist",
      org: "Institute for Computational Intelligence",
      note: "Interpretability and evaluation for frontier-scale models.",
    },
    {
      period: "2024 — 2026",
      role: "Postdoctoral Researcher",
      org: "Frontier Lab, Zurich",
      note: "Sparse feature tracing; built the lab's first eval harness.",
    },
    {
      period: "2020 — 2024",
      role: "PhD, Computational Neuroscience",
      org: "ETH Zürich",
      note: "Thesis on causal methods for reading neural representations.",
    },
    {
      period: "2019 — 2020",
      role: "Research Intern",
      org: "Vision Group, Tsinghua",
      note: "Multimodal retrieval and dataset construction.",
    },
  ],
  stats: [
    { value: "14", label: "Peer-reviewed papers" },
    { value: "1.9k", label: "Citations" },
    { value: "06", label: "Open-source releases" },
    { value: "08", label: "Years in research" },
  ],
};

export const contact = {
  kicker: "05 — Contact",
  title: ["LET'S", "TALK"],
  availability: "Open to work — 2026",
  response: "Usually replies within two working days",
  lead: "Open to research collaborations, reviewing, and hard problems in interpretability.",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    { label: "CV (PDF)", href: "mailto:hello@hanlu.dev?subject=CV" },
  ],
  colophon:
    "Set in Anton, Oswald, Inter and IBM Plex Mono. Built with Astro. No trackers, no cookie banner.",
  copyright: "© 2026 Han Lu",
};
