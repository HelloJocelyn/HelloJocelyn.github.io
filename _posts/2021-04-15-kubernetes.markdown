---
layout: post
title:  "kubernetes learning"
date:   2021-04-15 13:08:04 +0900
categories: devops
---

## 常用命令
1. kubectl get nodes
2. kubectl descibe node $node-name
3. kubectl get services
4. kubectl create -f $name.yaml
5. kubectl get svc 
6. kubectl get rc
7. kubectl get pods



## 基本概念
### master
在master上运行着kube-apiserver，kube-controller-manager，kube-scheduler
### node
每个node上运行着kubelet，kube-proxy，docker engine
### pod
每个pod都有一个特殊的pause容器。pod里的多个业务容器共享pause的ip，
### label
### replication controller
### deployment
### horizontal pod autoscaler
### statufulset
### service
### job
### volume
### persistent volume
### namespace
### annotation
### configmap



***
notes：
1 虚拟二层网络技术： Flannel，Open vSwitch。 
***