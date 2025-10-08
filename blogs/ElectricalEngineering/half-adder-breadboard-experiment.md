---
slug: "half-adder-breadboard-experiment"
date: "2025-09-26"
title: "half-adder-breadboard-experiment"
category: "ee"
excerpt: "half-adder-breadboard-experiment"
featuredImage: ""
---

# Half adder breadboard experiment
最近在学习电子技术，对二极管，三极管相关知识有了一定的了解。 从而对cpu中的加法器的实现有了自己的认识。这篇文章是基于自己对晶体管（三极管）的认识，在面包板上做一个半加法器，即巩固自己对三极管的了解，又加深对cpu加法器的理解。

## what is half adder
半加法器指的是实现只输出两个*1*位数的相加结果，但不输出进位的加法器。
比如, 对于4位二进制逻辑运算 0001 + 0001 = 0010. 
在*1*位数半加法器中的结果是： 1 + 1 = 0.

## XOR gate & AND gate
半加法器的实现需要通过异或门(xor)和与门(and).

### 异或门(xor) 

#### 真值表
| A | B | A AND B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |
#### 电路图
#### 面包板图实验图

### 与门(and) 
真值表
| A | B | A AND B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |
#### 电路图
#### 面包板图实验图


## half adder 

### 电路图

### 面包板实验图


