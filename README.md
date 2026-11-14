# 个人作品集 · 构成主义版式

Astro 静态站，单页。红 / 黑 / 纸三色，Anton 压缩大字，粗分割线，无圆角无阴影。

## 运行

```bash
pnpm install      # 已装过可跳过
pnpm dev          # http://localhost:4321
pnpm build        # 输出到 dist/
pnpm preview      # 预览生产构建
```

Node 版本 ≥ 22。当前用 Node 26 验证通过。

## 换成你自己的信息

全部文案、数字、链接都在 **`src/data/site.ts`** 一个文件里，组件里没有硬编码的个人资料。

主要字段：

| 字段 | 作用 |
| --- | --- |
| `site.name` / `nameParts` | 首屏大字，拆成两行显示 |
| `site.initials` | 导航栏红色方块里的字母、favicon 参考 |
| `site.role` / `roleZh` | 红色面板里的身份，中英文各一行 |
| `site.lead` | 首屏介绍，建议 2 到 3 句 |
| `site.email` | 首屏和页脚的 mailto |
| `site.coords` | 红色面板右侧竖排坐标（窄屏自动隐藏） |
| `focus.items` | 研究方向的三个卡片 |
| `work.items` | 项目，点开有详情；`results` 是数字指标 |
| `papers.items` | 论文列表，按年份倒序 |
| `about.bio` / `timeline` / `stats` | 简介、经历、数字条 |
| `contact.links` | GitHub / X / Scholar / CV |

注意：

- 首屏大字用 `cqw` 跟着左栏宽度缩放，改字长会自动适配，不用手调字号。
- 字体全部自托管（`@fontsource`），不请求 Google Fonts，国内可直接访问。
- 页脚有一行 `Sample content — replace before publishing`，改完后在 `src/components/Contact.astro` 里删掉。

## 目录

```
src/
  data/site.ts        所有内容
  layouts/Base.astro  head、字体引入、滚动动画
  components/         Header / Hero / Ticker / Focus / Work /
                      Papers / About / Contact
  styles/global.css   全部样式，约 900 行
  pages/index.astro   单页组装
public/favicon.svg    HL 标志
```

## 部署

Cloudflare Pages 或 Vercel 都行，免费额度足够：

- 构建命令 `pnpm build`
- 输出目录 `dist`
- Node 版本 **22.23.4 或更高**（Astro 7 的硬要求）。仓库里有 `.node-version`，如果后台还设了 `NODE_VERSION`，两者保持一致，或者删掉环境变量让文件生效。

上线前把 `astro.config.mjs` 里的 `site` 改成真实域名，`Base.astro` 用它生成 canonical。

## 改风格的地方

- 配色：`global.css` 顶部的 `:root`，改 `--paper` / `--ink` / `--red` 三行就是另一套颜色。
- 字体：`Base.astro` 顶部的 import，换掉 Anton 就是另一种气质。
- 节奏：`.section` 的 `padding-block` 控制每段留白；首屏高度由 `.hero__grid` 的 `min-height` 决定。
