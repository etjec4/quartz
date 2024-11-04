---
share: true
description: 
aliases: 
tags: 
draft: false
title: windows端本地搭建llama3并使用沉浸翻译
date: 2024-09-15
updated: 2024-09-15
---
基本操作步骤：
1. 安装ollama for windows <https://ollama.com/download/windows>
2. 拉取模型，例如   `ollama pull llama3.1:8b`
3. 让ollama运行,允许跨域访问。
```
set OLLAMA_ORIGINS=*
ollama serve


以上命令在C:\Users\你的用户名\AppData\Local\Programs\Ollama 中运行。
```
4. 配置沉浸翻译,选择翻译服务为 OpenAI，之后点击修改
> 自定义 API 接口地址： <http://localhost:11434/v1/chat/completions>
> APIKEY：ollama
> llama3.1:8b


