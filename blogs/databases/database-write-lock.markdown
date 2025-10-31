---
slug: "database-write-lock"
date: "2021-04-15"
title: "database-write-lock"
category: "CS"
excerpt: "database-write-lock"
featuredImage: ""
---

# 数据库锁
1. 什么是数据库锁？为什么需要数据库锁？
2. 都有哪些数据库锁？什么是事物隔离？
    1. 行级锁
    2. 页级锁
    3. 表级锁
3. 起到什么作用
4. application需要关心哪些锁
5. 什么情况下会有什么锁，加锁之后可能有什么问题？
6. 现代分布式系统如何解决consistency 问题
7. ACID
8. 事务隔离
9. 加锁实现的基本原理
    1. 锁管理器： 每个被锁的对象（行，页，表）都有对应的锁标识。-》 java的锁标识管理在jvm中
    2. 锁记录结构： 锁类型（共享锁，排他锁等），持锁事务id，等待队列
    3. 

notes
1. buffer pool
2. Write-Ahead Logging vs binlog
3. 