---
share: true
description: 
aliases: 
tags:
  - 技术
draft: false
title: 系统当前禁止运行 PowerShell 脚本 处理方式
date: 2024-11-04
updated: 2024-11-04
---
提示类似 “无法加载文件 ...... .ps1，因为在此系统上禁止运行脚本”

这个错误提示表明您的系统当前禁止运行 PowerShell 脚本。要解决这个问题，您可以尝试以下步骤：

1. 以管理员身份运行 PowerShell：
   右键点击 PowerShell 图标，选择"以管理员身份运行"。

2. 在 PowerShell 中更改执行策略：
   运行以下命令：
   Set-ExecutionPolicy RemoteSigned

   这将允许运行本地脚本，但要求从网络下载的脚本必须经过签名。

3. 如果您只想运行这一个特定的脚本，可以使用：
   Set-ExecutionPolicy Bypass -Scope Process -Force
   然后运行您的脚本。

4. 或者，您可以通过右键点击脚本文件，选择"属性"，然后在"常规"选项卡底部勾选"解除锁定"（如果有的话）。

5. 如果以上方法都不行，您可以尝试使用以下命令运行脚本：
   PowerShell.exe -ExecutionPolicy Bypass -File "文件名.ps1"

请注意，更改执行策略可能会带来安全风险，请确保您信任要运行的脚本。在运行完所需脚本后，建议将执行策略改回较严格的设置，如：

Set-ExecutionPolicy Restricted

始终谨慎对待来源不明的脚本，以保护您的系统安全。