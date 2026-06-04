---
slug: "jvm-learning"
date: "2024-12-14"
title: "JVM learning notes"
category: "CS"
excerpt: "JVM learning"
featuredImage: "../images/cookie-chrome-sqlite.png"
---

# Loading, Linking, and Initializing
``` mermaid
flowchart LR
  subgraph Loading
    direction TB
    subgraph LoadingSummary
        direction LR
        loading1(finding the binary representation of a class or interface type)
        loading2(creating a class or interface)
    end
    subgraph LoadingDetail
      direction LR
      subgraph Detail1
        direction LR
        ldetail1(detail1)
        ldetail2(detail2)
      end
      subgraph Detail2
        direction LR
        ldetail3(detail3)
        ldetail4(detail4)
      end
    end
    
  end
  subgraph Linking
        direction LR
        lingking1(taking a class or interface and combining it into the run-time state of the Java Virtual Machine)
  end
  subgraph Initializing
        direction LR
        initializing1(executing the class or interface initialization method <clinit> )
  end
  Loading --> Linking --> Initializing
  LoadingSummary --> LoadingDetail
  ldetail1 --> ldetail2
  ldetail3 --> ldetail4
  loading1 --> loading2
  Detail1 --> Detail2

```

1. 加载
将class文件读入jvm
2. 验证
确保类结构合法
3. 准备
给静态字段分配默认初始值
4. 解析
将符号引用转化为直接饮用
5. 初始化
执行静态初始化块和静态变量赋值
## 什么会触发类的初始化
1. 创建类的实例：new
2. 访问类的静态字段（非final）
3. 调用类的静态方法
4. 通过反射调用构造方法
5. 使用Class.forName(name)


## 什么时候只会加载而不初始化
1. 使用Class.forName(name,false,cl)并设置不初始化
2. 应用final static编译期常量

# all compilers and the corelation
1. llvm
2. gcc
3. how a process is loaded and executed in linux
