---
slug: "kotlin-coroutine"
date: "2025-07-22"
title: "Learn kotlin coroutine"
category: "CS"
excerpt: "To learn kotlin coroutine"
---

## coroutine是什么，怎么实现的
1. coroutineContext是什么





## 和线程的差别
在有需要处理1000个用户请求的情况下： 没有协程的话，需要1000个线程，nio可能不一样？但好像也需要很多线程； 这1000个线程： 1. 会导致更多的上下文切换，从而消耗cpu和时间 2. 线程本身也占用更多内存 使用协程的话，如果这些请求不是cpu消耗性的话，可能只需要不到10个线程： 1. 较少的上下文切换，包括用户态内核态切换，较少的cpu和时间 2. 相比较，较少的内存 但无论线程还是协程，是对用户请求响应时间没有影响；影响的是资源消耗。 除此之外，还有什么协程的好处吗
## 解决的问题和带来的便利：
### 额外好处
1. 写同步逻辑，执行异步效果
2. 结构化并发（Structured Concurrency）
3. 异常传播更安全
4. 更容易进行并发控制
    Mutex	协程安全锁（不会阻塞线程）
    Channel	协程间通信（无锁队列）
    Flow	异步数据流（背压、取消感知）
    select	等待多个挂起事件（类似 select/epoll）
    SupervisorJob	子任务失败不影响父任务
5. 可取消性（Cancellation）
    1. 消是“协作式”的（cooperative）
    2. 如果协程在纯计算中没有挂起点，那么永远不会取消
    ```
    val job = launch {
    try {
        repeat(1000) { i ->
            println("Working $i")
            delay(100)
        }
    } finally {
        println("Cleaning up...")
        delay(200) // 模拟清理动作
        println("Clean done")
    }
    }

    delay(500)
    job.cancelAndJoin()
    println("Main continues")
  ```

6. 支持流式异步编程（Flow）
7. 在多平台环境下统一模型
## 相关概念和工作原理：
### 协程的核心角色

| 名称                         | 作用                         | 备注                                        |
| -------------------------- | -------------------------- | ----------------------------------------- |
| **CoroutineScope**         | 定义协程的“作用域”，管理协程的生命周期       | scope 内启动的协程是结构化的，scope 取消了协程也会被取消        |
| **coroutineContext**       | 协程上下文，一个不可变的“键值对集合”，决定协程行为 | 包含 `Job`、`Dispatcher`、`CoroutineName` 等   |
| **Job**                    | 协程的生命周期句柄                  | 可以 `cancel()`、`join()`、查询 `isActive` 等    |
| **Dispatcher**             | 协程运行的线程调度策略                | 决定协程在哪个线程或线程池上执行                          |
| **挂起函数（suspend function）** | 可挂起当前协程而不阻塞线程              | 底层通过 `Continuation` 保存状态恢复                |
| **launch / async**         | 启动协程的构建器                   | launch 不返回结果，async 返回 Deferred 结果，可 await |



Continuation
Dispatchers

父 scope 管理主业务生命周期

子协程可以挂起、异步执行

Dispatcher 决定线程利用率

Job 管理取消和完成

```
                     ┌─────────────────────────┐
                     │   CoroutineScope        │
                     │   (结构化作用域)        │
                     └─────────┬──────────────┘
                               │
                               │ launch/async
                               │
                     ┌─────────▼──────────────┐
                     │     Coroutine          │
                     │ ┌───────────────────┐ │
                     │ │ coroutineContext   │ │
                     │ │ - Job             │ │ ← 管理生命周期、取消/完成
                     │ │ - Dispatcher      │ │ ← 线程调度策略
                     │ │ - CoroutineName   │ │
                     │ └───────────────────┘ │
                     └─────────┬──────────────┘
                               │
                       执行协程代码/挂起点
                               │
           ┌───────────────────┴───────────────────┐
           │                                       │
   非挂起点执行线程（可使用 Dispatcher 决定线程）    挂起点执行
           │                                       │
           ▼                                       ▼
   CPU 执行指令                               保存 Continuation
                                               释放线程资源
           │                                       │
           └─────────────┬─────────────────────────┘
                         │
                         ▼
                恢复协程（调度器选择线程）
                         │
                         ▼
                继续执行协程代码
                         │
             ┌───────────┴────────────┐
             │                        │
      协程完成或异常终止          job.cancel() 发出取消信号
             │                        │
             ▼                        ▼
        finally 块执行（清理）        下一个挂起点或检查 isActive
             │                        │
             ▼                        ▼
         协程结束（状态 Completed/Cancelled）



```


## 应用
1. structure
2. 完全异步







Kotlin 的协程库底层利用了 Java NIO（Selector、事件循环等），我第一次知道，我以为就是普通的线程管理，怎么会利用nio呢
传统异步编程中「泄露的任务」、「未捕获的异常」、「资源未释放」等问题






