---
sidebar_position: 1
---

# AI Infra Notes

这是一个为个人输出设计的 AI Infra 笔记网站模板，包含两个核心部分：

- 首页：用于展示你的定位、写作方向和媒体账号。
- 笔记区：用于持续沉淀 Markdown 格式的技术内容，左侧目录支持折叠，适合像书一样组织知识。

## 当前已内置的示例内容

- `基础认知`：AI Infra 领域地图与知识框架
- `Serving 与推理`：vLLM、KV Cache、吞吐与时延的基础笔记
- `观测与治理`：SLO、追踪、容量和回归诊断
- `使用指南`：开发文档与部署文档

## 你之后怎么新增笔记

最简单的方式是直接在 `docs/` 下新增 Markdown 文件，例如：

```bash
docs/serving/my-serving-note.md
```

也可以使用项目自带脚本快速生成：

```bash
npm run new:note -- --category serving --slug tensor-parallelism --title "Tensor Parallelism 入门"
```

## Markdown 图片写法

图片统一放在 `static/img/`，在文档里通过绝对路径引用：

```md
![推理链路示意图](/img/llm-serving-overview.svg)
```

下面这张图就是一个示例：

![推理链路示意图](/img/llm-serving-overview.svg)
