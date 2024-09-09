---
share: true
description: 
aliases: 
tags: 
draft: false
title: 在 Windows 上使用 IPFS 网络 以及入门知识
date: 2024-09-09
updated: 2024-09-09
---
桌面版的下载地址
<https://github.com/ipfs/ipfs-desktop>


# 基本概念
文件被分享到 **IPFS** 的网络时，文件是被拆分为小块分享的。文件被根据内容生成一个 CID， 用于作为 IPFS 网络上的唯一标识符，因此修改时 CID 也会变更。当使用 **IPNS** 分享时，文件 CID 和节点 ID 关联. CID 不再变更。

Windows 桌面版,已经帮你运行了基本的命令,并且有 UI 可以用来查看,省去了使用命令的麻烦。这里不再介绍。


- 节点ID：每一台运行IPFS的计算机，是一个节点，ID是节点的唯一标识符。在IPNS相关性比较大，可以备份私钥。
- 文件CID：文件的唯一标识符。当发布为 IPNS 后，不可更改，且特定节点有修改权利。


# 配置文件和端口

我们关注下面的这些东西
```
{
	"API": {
		"HTTPHeaders": {
			"Access-Control-Allow-Origin": [
				"https://webui.ipfs.io",
				"http://webui.ipfs.io.ipns.localhost:8080"
			]
		}
	},
	"Addresses": {
		"API": "/ip4/127.0.0.1/tcp/5001",
		"Announce": [],
		"AppendAnnounce": [],
		"Gateway": "/ip4/127.0.0.1/tcp/8080",
		"NoAnnounce": [],
		"Swarm": [
			"/ip4/0.0.0.0/tcp/4001",
			"/ip6/::/tcp/4001",
			"/ip4/0.0.0.0/udp/4001/quic-v1",
			"/ip4/0.0.0.0/udp/4001/quic-v1/webtransport",
			"/ip6/::/udp/4001/quic-v1",
			"/ip6/::/udp/4001/quic-v1/webtransport"
		]
	},
	......
```

- 5001 节点管理页面，你可以使用 <http://localhost:5001/webui> 来管理你的服务，查看相关的信息。也可以使用自带的 UI。

![[Pasted image 20240909101855.png]]


- 4001 节点相互连接端口 ，节点之间相互连接的端口，用于节点之间的通信，组成IPFS 网络。

- 8080 网关地址。其他人可以通过你的 IP 地址作为网关节点访问 IPFS 网络,前提是你的监听为**0.0.0.0** 。 例如 你可以访问 <http://127.0.0.1:8080/ipfs/><文件CID>/  这样的地址来访问你的文件。

# 分享文件
UI 界面极大简化了你使用的难度.在这里分享一个文件,或者文件夹.等待分发到IPFS网络。

![[Pasted image 20240909103348.png]]
 
文件有一个**固定**的功能，该文件是告诉该程序请不要在垃圾回收时删除它.文件会被缓存到该程序中.这个固定功能也可以通过网络上的**其他服务商**来提供.

文件保存的一个重要原理是,当该文件被分享被**越来越多人使用**时,节点会越来越多的缓存它,它在IPFS 网络上就不会消失,文件有一个缓存时间。



# 其他一些好玩的东西

- 你可以访问 <http://127.0.0.1:8080/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/> 来查看维基百科
- 查询网关可用性 [https://ipfs.github.io/public-gateway-checker/](https://ipfs.github.io/public-gateway-checker/)
- 网关推荐 [https://bestipfs.net](https://bestipfs.net/)
- <https://cloudflare-ipfs.com/ipfs/>
- <https://4everland.io/ipfs/>
- <https://nftstorage.link/ipfs/>
- <https://gateway.pinata.cloud/ipfs/>
- <https://gw.ipfs-lens.dev/ipfs/>
- <https://ipfs.decentralized-content.com/ipfs/>

