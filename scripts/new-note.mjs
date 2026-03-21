import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);

function getArg(name, fallback = '') {
  const index = args.indexOf(`--${name}`);
  if (index === -1) {
    return fallback;
  }

  return args[index + 1] ?? fallback;
}

function normalizeCategory(value) {
  return value.trim().replace(/^\/+|\/+$/g, '') || 'foundations';
}

function normalizeSlug(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const category = normalizeCategory(getArg('category', 'foundations'));
const title = getArg('title', 'Untitled Note').trim();
const rawSlug = getArg('slug', title);
const slug = normalizeSlug(rawSlug);

if (!slug) {
  console.error('缺少有效的 slug，请通过 --slug 或 --title 提供内容。');
  process.exit(1);
}

const docsRoot = path.resolve('docs');
const targetDir = path.join(docsRoot, category);
const targetFile = path.join(targetDir, `${slug}.md`);

if (fs.existsSync(targetFile)) {
  console.error(`文件已存在：${targetFile}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, {recursive: true});

const content = `---
title: ${title}
description: 请补充这篇笔记的摘要。
sidebar_position: 99
---

# ${title}

## 背景

请在这里补充背景信息。

## 关键结论

- 待补充

## 参考资料

- 待补充
`;

fs.writeFileSync(targetFile, content, 'utf8');

console.log(`已创建笔记：${targetFile}`);
