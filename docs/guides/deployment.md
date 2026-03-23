---
title: 部署文档
description: 介绍如何将本站部署到静态托管平台。
sidebar_position: 2
---

# 部署文档

这个站点本质上是静态网站，先构建，再把 `build/` 目录发布出去即可。

## 构建命令

```bash
npm run build
```

构建完成后会生成：

```text
build/
```

## 方案一：部署到 Vercel

最省事，适合个人站点。

### 设置

- Framework Preset: `Other`
- Build Command: `npm run build`
- Output Directory: `build`

### 优点

- 接 Git 仓库即可自动部署
- HTTPS 和域名配置简单
- 个人维护成本低

## 方案二：部署到 Netlify

配置方式和 Vercel 类似：

- Build command: `npm run build`
- Publish directory: `build`

## 方案三：部署到 GitHub Pages

如果你后续把仓库放到 GitHub，可以继续用 Docusaurus 自带的 deploy 流程。

你需要先修改 `docusaurus.config.ts` 中的：

- `url`
- `baseUrl`
- `organizationName`
- `projectName`

然后执行：

```bash
npm run deploy
```

## 方案四：部署到自己的服务器

如果你有云服务器或 NAS，可以把 `build/` 交给 Nginx 托管。

基本流程：

1. 本地执行 `npm run build`
2. 上传 `build/` 到服务器
3. 在 Nginx 中把站点根目录指向该目录

### 用 GitHub Actions 自动更新

如果你希望后续维护更轻量，推荐直接使用仓库里的：

```text
.github/workflows/deploy.yml
```

它会在你推送到 `main` 分支时自动：

1. 安装依赖
2. 构建站点
3. 通过 `rsync` 把 `build/` 同步到服务器

### 需要在 GitHub Secrets 里配置的变量

进入仓库的 `Settings -> Secrets and variables -> Actions`，新增这些 Secrets：

- `SERVER_HOST`：服务器 IP 或域名，例如 `47.122.127.48`
- `SERVER_PORT`：SSH 端口，默认一般是 `22`
- `SERVER_USER`：服务器用户名，例如 `admin`
- `SERVER_PATH`：站点目录，例如 `/var/www/ai-infra-notes`
- `SERVER_SSH_KEY`：用于登录服务器的私钥内容

### `SERVER_SSH_KEY` 填什么

这里填的是你本地或专门为 GitHub Actions 生成的一把私钥全文，格式类似：

```text
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

对应的公钥需要提前追加到服务器用户的：

```text
~/.ssh/authorized_keys
```

### 自动部署前，服务器要先准备好

- 已安装并启动 `nginx`
- 已配置站点根目录为 `/var/www/ai-infra-notes`
- `SERVER_USER` 对 `SERVER_PATH` 具有写权限

### 推荐的首次验证方式

第一次先在本地手动验证一次：

```bash
npm run build
rsync -avz --delete build/ admin@47.122.127.48:/var/www/ai-infra-notes/
```

确认没问题后，再把相同参数写入 GitHub Secrets，后续就只需要：

```bash
git add .
git commit -m "Update notes"
git push
```

GitHub Actions 会自动完成发布。

## 推荐选择

如果你想最少维护：

- 个人站点优先选 Vercel
- 已经深度使用 GitHub 时可选 GitHub Pages
- 需要完全自控时用 Nginx

## 发布前检查清单

- 首页里的媒体账号链接是否已改成你自己的
- `docusaurus.config.ts` 中的生产域名是否已改对
- 图片路径是否都在 `static/img/` 下
- `npm run build` 是否成功
