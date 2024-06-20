# Network
Reference: https://mp.weixin.qq.com/s?__biz=Mzg2MzU3Mjc3Ng==&mid=2247483737&idx=1&sn=7ef3afbb54289c6e839eed724bb8a9d6&chksm=ce77c71ef9004e08e3d164561e3a2708fc210c05408fa41f7fe338d8e85f39c1ad57519b614e#rd
link layer   -> 	IP 	-> 	TCP 	-> HTTP
frame 	     -> segment -> 	packet 	-> 
## Questions
1. mtu: 网络帧的大小，如果一个ip packet比较大时
2. 硬中断，软中断
	网卡驱动注册的硬中断响应程序
3. within isp or company's network, what's the gate of internal/public network




## Data Flow
google browser on macos -> server application -> google browser
1. google browser wrap data
2. google browser call os tcp stack and pass data -> socket api
3. os tcp stack call ip stack and pass data
4. ip stack pass data to nic
5. nic send data out to connected router (wireless)
6. router send data to isp
7. isp send data to next hop
8. public router receive data 
9. router send data to switch
10. switch send data to target host
11. target host nic receives data
12. nic send data to os ip stack
13. application listens on the port, os socket calls application to handle data
14. application utilizes framework(vertx/netty) to handle data -> 
14. application finish handling data and then calls socket api through framework to send data back to OS tcp/ip stack
15. OS TCP/IP stack receives data and forms IP datagram and send to NIC
16. NIC receives IP datagram, forms Frame(digital signal to analog signal) and send to SWITCH through cable
17. switch receives data and send data to connected router
18. the first router receives data, unwrap the frame, check route table to find the nearest route for the target IP
19. long distance network
20. Router at home receives data
21. NIC of the laptap receives data
22. NIC send data to OS's TCP/IP stack of the laptap
23. google browser receives data from OS's TCP/IP stack


### further topics
####  IO blocking on Network
####  IO blocking on storage
1. 


keywords: DMA,virtual memory address
reference: 
	1. https://zhuanlan.zhihu.com/p/618143764


13. os id stack call tcp stack
14. tcp stack call application thread
有没有可能两个http的内容被封装在一个tcp中 packet中
http server 从socket拿到的是完整的http吗，如果不是，怎么判断哪些属于一个http呢
linux一个socket里多个用户线程或者进程，还是一个socket一个线程
主机上有两个server，不同端口
server关了，网卡是否还接受数据
connection 复用：src ip, src port, dst ip, dst port

Assumption -> sequence diagram
1. request
	1. os accept request and store in sock and maintain a waiting list
		1. request reaches to os first, then when application calls to read it can get data immediately
		2. application registration first and wait in the queue, once the request reaches, a check for the reader will be conducted
	2. application register call to read request data
15. application thread call user implementation

## network in k8s
### questions
1. pods can communicate through cluster ip
2. who manages cluster ip(say cluster ip manager)
3. how cluster ip manager works with host network
4. how network space works
5. what is the data flow from within container to network chip
6. how port works in the flow
7. how load balancer works? where is loadbalancer hosted
load balancer -> haproxy -> service -> pod
