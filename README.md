# AI Infra Notes

一个基于 Node.js 和 Docusaurus 的个人笔记网站模板，适合用来沉淀 AI Infra 相关内容。

## 已实现内容

- 首页宣传页：展示定位、内容方向和媒体账号
- 文档式笔记区：左侧可折叠目录，中心展示 Markdown 笔记
- Markdown 图片支持：通过 `static/img/` 管理图片
- 简约浅色风格：已关闭暗色模式
- 开发与部署文档：见 `docs/guides/`
- 新建笔记脚本：`npm run new:note`

## 本地运行

```bash
npm install
npm run start
```

默认地址：

```text
http://localhost:3000
```

## 构建

```bash
npm run build
```

## 快速新增笔记

```bash
npm run new:note -- --category serving --slug pd-disaggregation --title "PD Disaggregation 初探"
```

## 部署

推荐优先部署到 Vercel 或 Netlify。

详细说明见：

- `docs/guides/development.md`
- `docs/guides/deployment.md`
