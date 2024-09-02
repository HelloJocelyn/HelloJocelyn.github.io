---
layout: single
title:  "operating system"
date:   2021-04-15 13:08:04 +0900
categories: os
---


# Operation system

## General references
1. https://book.huihoo.com/pc-architecture/chapter01.htm
2. https://tungdam.medium.com/linux-network-ring-buffers-cea7ead0b8e8

### questions 
1. bus architecture in morden computer system -> 6/26
2. what is the __user in linux source code. eg: /net/socket.c : 2085 int __sys_sendto(int fd, void __user *buff, size_t len, unsigned int flags,
		 struct sockaddr __user *addr,  int addr_len)
3. how user space and core space are separated? by process or what?
4. 
### reading notes
1. 信息就是位+上下文
2. 程序被其他程序翻译成不同的格式
3. 了解编译系统如何工作
4. 处理器读并解释储存在内存中的指令
5. 高速缓存至关重要
6. 储存设备形成层次结构
7. 操作系统管理硬件
8. 系统之间利用网络通信
9. 程序结构和执行

### May want to know 
1. SMP system(Symmetric MultiProcessing): multiple processors sharing one single OS

## Operating system overview
### Linux sys calls : https://thevivekpandey.github.io/posts/2017-09-25-linux-system-calls.html

## CPU
### Instruction architecture
x86 vs ARM vs 
#### X86
1. https://cs.lmu.edu/~ray/notes/x86overview/

## Interrupt
### Reference
1. https://linux-kernel-labs.github.io/refs/heads/master/lectures/interrupts.html#:~:text=In%20Linux%20the%20interrupt%20handling,interrupt%20and%20the%20interrupt%20controller.


A device supporting interrupts has an output pin used for signaling an Interrupt ReQuest. IRQ pins are connected to a device named Programmable Interrupt Controller (PIC) which is connected to CPU's INTR pin.

1. IRQ vs softirq vs exception

## Processes

### Questions
1. cpu/memory limitation for a process
2. parent/child relationship between processes




## Threads

## Input/Output and Files
1. open file: what is the process of opening a file
2. how operating system read file in disk into memory

### Organization of I/O function 
1. Programmed I/O
    blocking, no interrupt
2. Interrupt-driven I/O
    interrupt
3. Direct memory access(DMA)
    interrupt
4. System bus, I/O bus

## Memory
1. swap memory , stack size limit : https://stackoverflow.com/questions/344203/maximum-number-of-threads-per-process-in-linux
2. rss & wss & cache 

## Scheduling

### items
1. ched_min_granularity_ns
2. Сgroups and CFS (completely fair scheduler) on Linux
## Further topics
### gate vs OS instruction list

