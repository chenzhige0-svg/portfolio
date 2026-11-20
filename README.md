# 个人作品集

Astro 单页作品集。首页沿用纸色、墨黑、正红的构成主义版式，先介绍姓名和研究方向，再引导访客查看项目。论文以英文原题为主，原题下附中文主题说明。

## 本地运行

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Node 版本须为 22.23.4 或更高，版本配置见 `.node-version`。

## 更新内容

个人资料统一维护在 `src/data/site.ts`。当前内容是虚构样例，中文翻译以仓库已有材料为依据。替换姓名、机构、论文状态、成果数据或真实链接前，先确认来源。整站示例资料替换完成后，再移除首页和页脚的示例提示。

确认中文姓名后，在 `profileName` 填写 `confirmedChinese` 和对应的 `latin` 拼写。首页会把中文姓名作为主标题，在下方显示拉丁拼写。

示例邮箱仅作展示。将已确认的邮箱填入 `contactEmail.confirmed`，首屏和页脚才会显示可点击的邮件入口。`confirmedLinks` 用于已经确认的个人主页、论文档案或简历链接。

首页区块顺序在 `src/pages/index.astro` 中维护，视觉样式在 `src/styles/global.css` 中维护。中文使用本机无衬线字体。Anton、Oswald、IBM Plex Mono 和 Inter 随站点托管。

## 部署

构建命令是 `pnpm build`，输出目录是 `dist`。正式域名在 `astro.config.mjs` 中设置，页面据此生成规范链接。
