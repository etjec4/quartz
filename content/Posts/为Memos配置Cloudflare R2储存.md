---
share: true
description: 
aliases: 
tags:
  - 技术
draft: false
title: 为Memos配置Cloudflare R2储存
date: 2024-08-21
updated: 2024-08-21
---
[memos](https://github.com/usememos/memos) 是一款轻量笔记，检索和分享功能很齐全，又可以协作分享，同时支持 docker 快速搭建。

操作流程大概如下

1. 在Cloudflare上创建R2 bucket，并记录名字
2. 在右侧 Manage R2 API Tokens 创建一个 api，类型选择为 Object Read & Write: Allows the ability to read, write, and list objects in specific buckets.
3. 分别记录 Access Key ID 、 Secret Access Key、endpoints
4. 在 memos 的 settings 选择 storage，标签选择 s3 填入上面记录的值 region 填写 auto
5. 保存