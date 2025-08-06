---
slug: "java-graceful-shutdown"
date: "2025-05-06"
title: "graceful shutdown in Java "
category: "CS"
excerpt: "java-graceful-shutdown"
---
# Graceful shutdown

# 一个进程都有哪些关闭方式
1. 主动退出：exit（）
2. 被其他进程终止：kill -sig pid
3. 由系统或资源限制触发：
    1. 崩溃（段错误）：sigsegv,sigfpe
    2. oomkiller：linux内核oom-killer杀死占用太多内存的进程
    3. 超出cpu限制：sigxcpu
    4. 文件写失败引发sigpipe：管道写入时，读端已关闭
    5. stackoverflow：栈空间溢出sigsegv
4. 用户交互中指：ctrl+c (sigint),ctrl+\(sigquit),ctrl+z(sigtstp)
5. 系统关机/登出/session终止： sighup，sigterm等信号
6. 调试器/ide强制中断

### 与退出相关的信号：
1. sigterm，sigint，sigusr1等，发送给内核，然后内核将其传递给目标进程，目标进程可以选择拦截，忽略，处理
2. sigkill：发送给内核，内核直接杀死


## SIGINT 和 SIGTERM 的处理
### 触发场景：
1. 都是 一个进程（或终端/内核）向另一个进程发送的信号

### 处理方式
1. 无服务管理器： 裸运行在操作系统上，由进程自己完全处理sigterm信号，比如可以理解退出，可以延迟退出，也可以永远不退出
2. 有服务管理器的：systemd，supervisord，upstart，kubernetes，会设置处理超时时间，超过后会调用sigkill

### c代码实现

### in kubernetes

##  In JVM


## How to implement

## jvm接受到sigint活sigterm时，会触发一些列流程，并最终调用java曾的shutdown类
### 操作系统信号处理
当进程接受到sig时：
1. 操作系统内核会中断进程的执行
2. 查找并执行该信号注册的处理函数
### jvm层的信号处理
jvm在启动时会通过os::signal等原生方法注册信号处理函数：hotspot/src/os/linux/vm/os_linux.cpp
### jvm内部的信号处理流程

## Problems
### jvm是并发执行多个shutdownhook的
1. 所以如果我在代码中没有加入同步机制保证顺序和可见性，可能会导致资源被释放，hook执行一半，还没执行就被中断
   question： jvm是否有自己自带的shutdownhook，常见的framework是否都有shutdownhook
2. 主线程退出后，hook线程执行时间有限制： hook的执行是在daemon thread之后，jvm退出之前，所以如果hook中的线程没有及时执行完，jvm可能在hook执行完之前退出
questions： 
1. 什么是daemon thread，起什么作用
2. 

### jvm接受到shutdown signal的动作
jvm在接受到shutdown signal（sigint，sigterm，system.exit）时，会按照以下顺序执行，jvm的关闭流程是有shutdown类中的sequence方法控制：
1. 运行注册的shutdownhooks：runhooks
2. 运行finalizers ：如果启用了 runFinalizersOnExit，则调用 runAllFinalizers() 来执行对象的 finalize() 方法。 在 sequence() 方法中，runHooks() 和 runAllFinalizers() 的执行顺序和条件取决于 runFinalizersOnExit 的值
3. 终止 JVM：调用 halt() 方法，直接终止 JVM 进程

### jvm 层面是如何处理sigint，sigterm等的

notes: 
1. safecheckpoint


## How to solve the problems
### How springboot solve it 
从 SpringApplication.run() 开始，理解 Spring Boot 如何初始化 context。
看 Shutdown Hook 的注册。
跟踪 AbstractApplicationContext#close()。
阅读生命周期处理机制（LifecycleProcessor 等）。
怎么处理的logsystem lifecycle ： System.setProperty("logback.shutdownHookEnabled", "false");

```
org.springframework.boot.SpringApplicationShutdownHook

public void run() {
		Set<ConfigurableApplicationContext> contexts;
		Set<ConfigurableApplicationContext> closedContexts;
		List<Handler> handlers;
		synchronized (SpringApplicationShutdownHook.class) {
			this.inProgress = true;
			contexts = new LinkedHashSet<>(this.contexts);
			closedContexts = new LinkedHashSet<>(this.closedContexts);
			handlers = new ArrayList<>(this.handlers.getActions());
			Collections.reverse(handlers);
		}
		contexts.forEach(this::closeAndWait);
		closedContexts.forEach(this::closeAndWait);
		handlers.forEach(Handler::run);
	}

```

### How log4j solve it



## Questions
1. catch wakeup exception, process won't exit, 
