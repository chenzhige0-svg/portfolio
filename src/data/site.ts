/**
 * 虚构样例。本站的人物、机构、经历、论文及状态、成果数据和示例邮箱均为占位资料。
 * 姓名、机构、论文状态、成果数字和真实链接仅在来源得到确认后替换。
 */
const profileName: { confirmedChinese?: string; latin: string } = {
  latin: "Han Lu",
};
const confirmedChineseName = profileName.confirmedChinese?.trim();
const name = confirmedChineseName || profileName.latin;

export const site = {
  name,
  nameLang: confirmedChineseName ? "zh-CN" : "en",
  latinName: profileName.latin,
  initials: "HL",
  role: "人工智能研究者",
  lead: "我研究大模型如何得出答案，设计评测检验它们的表现，也探索如何降低训练和运行成本。",
  title: `${name}｜人工智能研究作品集`,
  description: `${name} 的中文示例作品集，收录大模型可解释性、模型评测和高效训练的项目与论文。`,
  location: "北京 · 可远程合作",
  sampleLabel: "示例作品集",
  sampleNote: "本站的人物、项目、论文和联系方式均为示例。",
  nav: [
    { label: "研究方向", href: "#focus" },
    { label: "代表项目", href: "#work" },
    { label: "论文", href: "#papers" },
    { label: "关于", href: "#about" },
    { label: "联系", href: "#contact" },
  ],
};

export const keywords = [
  "大模型可解释性",
  "规模规律",
  "模型评测",
  "稀疏自编码器（SAE）",
  "开放科学",
  "多模态",
];

export const work = {
  title: "代表项目",
  items: [
    {
      id: "sift",
      title: "SIFT",
      subtitle: "追踪 70B 参数模型中与拒答有关的稀疏特征。",
      year: "2026",
      tags: ["可解释性", "SAE", "开源"],
      summary:
        "SIFT 在一台配有 8 张 GPU 的服务器上运行，用特征追踪找出对模型拒答起主要作用的一小组稀疏特征。分析时无需重新训练模型或修改权重。",
      results: [
        ["4.1%", "的特征贡献了 88% 的拒答因果效应。"],
        ["7.3×", "参考追踪流程与 SIFT 的 GPU 显存占用之比。"],
        ["11 家", "实验室在项目发布后半年内采用了这套工具。"],
      ],
      stack: "PyTorch · CUDA · 8×H100",
    },
    {
      id: "atlas-9",
      title: "ATLAS-9",
      subtitle: "从头训练一个 9B 参数的多语言推理模型。",
      year: "2025",
      tags: ["预训练", "多语言推理"],
      summary:
        "训练数据覆盖 23 种语言，共 1.2T tokens（词元）。性能提升主要来自调整数据配比，以及分阶段引入带推理步骤的样本。",
      results: [
        ["+14.6 分", "MMLU-Pro 得分相对 13B 基线的提升。"],
        ["23 种", "语言的通过率超过 60%。"],
        ["1.2T tokens", "训练所用的数据量。训练用了 128 张 GPU，历时 41 天。"],
      ],
      stack: "Megatron · BF16 · 128×H100",
    },
    {
      id: "circuit-bench",
      title: "CIRCUIT BENCH",
      subtitle: "用 240 道手工设计的任务检验模型解释。",
      year: "2025",
      tags: ["可解释性", "模型评测"],
      summary:
        "每道任务都预先设定了模型内部的计算过程。把解释方法给出的结论与这个已知过程对照，就能判断解释是否符合模型实际做的计算。",
      results: [
        ["240 道", "任务覆盖 6 类模型架构。"],
        ["18 个", "模型的参数规模从 1B 到 70B。"],
        ["0.31", "随机探针的平均得分，低于随机猜测的水平。"],
      ],
      stack: "Python · TransformerLens · 18 个模型检查点",
    },
    {
      id: "prism",
      title: "PRISM",
      subtitle: "复用已有视觉编码器来做图文检索。",
      year: "2024",
      tags: ["多模态", "图文检索"],
      summary:
        "固定已有视觉编码器的权重，只训练一个小型适配模块。与从头训练图文联合嵌入的做法相比，这样可以在保持召回率的同时减少计算开销。",
      results: [
        ["3.4×", "索引构建速度相对于联合嵌入基线的倍数。"],
        ["96.2%", "在内部图文数据集上的 recall@10（前 10 条结果的召回率）。"],
        ["1 个", "适配模块，含 38M 参数。视觉编码器的权重保持固定。"],
      ],
      stack: "CLIP · FAISS · Rust 服务",
    },
  ],
};

export const focus = {
  title: "研究方向",
  items: [
    {
      title: "大模型可解释性",
      question: "模型内部是怎样算出答案的？",
      body: "我用稀疏自编码器（SAE）寻找模型内部的特征，再通过因果追踪等方法改变内部信号，看输出是否随之变化。",
    },
    {
      title: "模型评测",
      question: "模型得了高分，究竟会做什么？",
      body: "我检查测试题是否混入了训练数据，并设计评测，看看模型遇到新问题时能否推理、坦承不确定，或在需要时拒绝回答。",
    },
    {
      title: "高效训练",
      question: "算力有限时，哪些地方可以省？",
      body: "我比较算力、数据量和模型稀疏程度对表现的影响，也关注混合专家模型（MoE）和蒸馏，看看哪些计算可以省下来。",
    },
  ],
};

export const papers = {
  title: "论文",
  note: "* 表示同等贡献",
  items: [
    {
      year: "2026",
      originalTitle: "Sparse Features Are Not Enough: Causal Sufficiency in SAE Explanations",
      topic: "检验稀疏自编码器（SAE）找出的特征是否足以解释模型行为。",
      venue: "NeurIPS 2026",
      kind: "在审",
      authors: "H. Lu, M. Okafor, J. Ren",
    },
    {
      year: "2025",
      originalTitle: "Contamination-Resistant Evaluation for Code Models",
      topic: "研究如何减少训练数据污染对代码模型评测的影响。",
      venue: "ICML 2025",
      kind: "口头报告",
      authors: "H. Lu*, T. Weiss, A. Duarte",
    },
    {
      year: "2025",
      originalTitle: "Circuit Bench: A Diagnostic Suite for Mechanistic Claims",
      topic: "用已知的内部计算过程检验模型解释是否成立。",
      venue: "ICLR 2025",
      kind: "重点展示（Spotlight）",
      authors: "H. Lu, S. Kaur, L. Feng, M. Okafor",
    },
    {
      year: "2024",
      originalTitle: "Scaling Laws for Sparse Mixture Models Under Fixed Compute",
      topic: "研究算力固定时，稀疏混合模型的表现如何随规模变化。",
      venue: "TMLR 2024",
      kind: "期刊论文",
      authors: "H. Lu, A. Duarte",
    },
    {
      year: "2024",
      originalTitle: "What Refusal Looks Like Inside a Transformer",
      topic: "分析 Transformer 在拒绝回答时的内部计算。",
      venue: "ACL 2024",
      kind: "长论文",
      authors: "H. Lu*, J. Ren, P. Sandoval",
    },
  ],
};

export const about = {
  title: "关于我",
  bio: [
    "我做大模型的可解释性和评测研究。有人摸清了评测的套路，我会去看分数还反映了哪些能力。看到一个对模型内部计算的解释，我会动手验证它。",
    "我花了四年读计算神经科学博士，养成了先做测量、再提解释的习惯。现在我仍然每天写代码。",
  ],
  timeline: [
    {
      period: "2026 至今",
      role: "研究科学家",
      org: "计算智能研究所",
      note: "研究大规模模型的可解释性与评测。",
    },
    {
      period: "2024–2026",
      role: "博士后研究员",
      org: "苏黎世 Frontier Lab",
      note: "追踪模型内部的稀疏特征，搭建实验室的首套评测工具。",
    },
    {
      period: "2020–2024",
      role: "计算神经科学博士",
      org: "苏黎世联邦理工学院",
      note: "研究如何用因果方法理解神经表示。",
    },
    {
      period: "2019–2020",
      role: "研究实习生",
      org: "清华大学视觉研究组",
      note: "参与多模态检索与数据集构建。",
    },
  ],
  stats: [
    { value: "14", label: "篇同行评议论文" },
    { value: "1,900", label: "次引用" },
    { value: "6", label: "项开源成果" },
    { value: "8", label: "年研究经历" },
  ],
};

const contactEmail: { example: string; confirmed?: string } = {
  example: "hello@hanlu.example",
};
const confirmedEmail = contactEmail.confirmed?.trim();

// 仅填写已确认的个人主页、论文档案或简历链接。
const confirmedLinks: { label: string; href: string }[] = [];

export const contact = {
  title: ["联系", "合作"],
  lead: "欢迎交流大模型的可解释性、评测和研究合作。",
  email: {
    address: confirmedEmail || contactEmail.example,
    label: confirmedEmail ? "联系邮箱" : "示例邮箱",
    href: confirmedEmail ? `mailto:${confirmedEmail}` : undefined,
  },
  links: confirmedLinks,
  copyright: `© 2026 ${site.name}`,
};
