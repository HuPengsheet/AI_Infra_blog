---
title: 开发文档
description: 本站的本地开发、目录结构与新增笔记方式。
sidebar_position: 1
---

# 开发文档

本站基于 Docusaurus 构建，适合用 Node.js 做静态内容站点。

## 技术选型

- Node.js + Docusaurus
- React 作为页面层
- Markdown 作为笔记内容源
- 纯静态构建，部署简单

## 目录结构

```text
.
├── docs/                    # 所有文档内容
│   ├── foundations/         # 基础认知
│   ├── serving/             # Serving 与推理
│   ├── observability/       # 观测与治理
│   └── guides/              # 开发和部署文档
├── src/pages/               # 首页
├── src/components/          # 首页组件
├── static/img/              # 图片资源
└── scripts/new-note.mjs     # 新建笔记脚本
```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run start
```

默认访问地址：

```text
http://localhost:3000
```

## 如何新增一篇笔记

### 方式一：手动新增 Markdown

直接在对应目录创建 `.md` 文件即可，例如：

```bash
docs/serving/pd-disaggregation.md
```

建议 front matter 结构：

```md
---
title: PD Disaggregation 初探
description: 记录 prefill / decode 解耦部署的目标与权衡。
sidebar_position: 2
---
```

### 方式二：用脚本生成

```bash
npm run new:note -- --category serving --slug pd-disaggregation --title "PD Disaggregation 初探"
```

脚本会自动生成一个带 front matter 的 Markdown 文件。

## 如何插入图片

1. 把图片放到 `static/img/`
2. 在 Markdown 中通过 `/img/文件名` 引用

示例：

```md
![架构图](/img/llm-serving-overview.svg)
```

## 可定制项

- 站点名称、导航、页脚账号：修改 `docusaurus.config.ts`
- 首页宣传内容：修改 `src/pages/index.tsx`
- 首页特性卡片：修改 `src/components/HomepageFeatures/index.tsx`
- 全站配色与简约样式：修改 `src/css/custom.css`
