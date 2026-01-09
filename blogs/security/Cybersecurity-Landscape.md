基础安全理论（所有方向的地基）

不管你做防守还是开发，这一层绕不开

CIA 三要素

Confidentiality（机密性）

Integrity（完整性）

Availability（可用性）

威胁模型（Threat Modeling）

攻击面分析（Attack Surface）

风险评估（Risk Assessment）

👉 这是你之后所有安全设计的“判断标准”。

2️⃣ 密码学与加密体系（Security 的数学内核）

几乎所有安全系统都建立在这里

对称加密

AES、ChaCha20

工作模式（GCM / CBC / CTR）

非对称加密

RSA

ECC（椭圆曲线）

哈希 & 消息认证

SHA-2 / SHA-3

HMAC

密钥管理

密钥生成

存储（HSM、KMS）

轮换、吊销

👉 不是实现算法，而是会用 + 不踩坑。

3️⃣ 身份认证与授权（Identity & Access Management）

你已经在 Kerberos 这里踩到门口了

身份认证（Authentication）

密码 / 多因子（MFA）

Kerberos

OAuth 2.0 / OpenID Connect

SAML

API Key / Token

授权（Authorization）

RBAC / ABAC

ACL / Policy

Least Privilege（最小权限）

👉 90% 的安全事故都是这里出问题。

4️⃣ 网络层与通信安全

“网络安全”名字的来源

传输安全

TLS / HTTPS

证书 / CA / PKI

mTLS

网络隔离

VLAN

VPC / Subnet

Zero Trust 网络

防护设备

防火墙（L3 / L7）

WAF

IDS / IPS

5️⃣ 应用安全（AppSec）

对后端开发最直接、性价比最高

常见漏洞（必学）

SQL Injection

XSS

CSRF

SSRF

RCE

反序列化漏洞

OWASP Top 10

Broken Authentication

Broken Access Control

Security Misconfiguration

Insecure Deserialization

等等

安全编码实践

输入校验

输出编码

安全默认值

Secret 管理

6️⃣ 操作系统与主机安全

Kerberos、权限、隔离都在这里

Linux / Windows 权限模型

用户 / 组 / Capability

SELinux / AppArmor

进程隔离

审计日志（auditd）

7️⃣ 云与容器安全（现代必备）

只要你用云，这一块绕不开

云安全

IAM（AWS / Azure / GCP）

Security Group / NACL

KMS / Secret Manager

容器 & Kubernetes

镜像安全

Pod Security

Service Account

Network Policy

8️⃣ 数据安全与隐私

不只是“加密一下”

数据分类分级

静态加密 / 传输加密

数据脱敏

审计与追踪

合规（GDPR、等保）

9️⃣ 安全运维（SecOps / Blue Team）

防守方真正的日常

日志与审计

SIEM

安全告警

漏洞扫描

补丁管理

事件响应（IR）

🔟 攻防对抗（理解攻击者）

不一定去做，但必须懂

常见攻击路径

横向移动

权限提升

钓鱼攻击

社会工程学

二、给你的「后端开发者学习路线（推荐）」

结合你是后端 + 系统方向，我给你一个高性价比顺序：

第一阶段（立刻有用）

应用安全（OWASP Top 10）

身份认证 / 授权（OAuth、Kerberos、RBAC）

TLS / HTTPS / 证书

第二阶段（系统能力）

操作系统安全（Linux 权限、PAM）

网络与通信安全

日志、审计、安全监控

第三阶段（进阶）

云 / K8s 安全

密码学（使用层面）

威胁建模与安全设计

