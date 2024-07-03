# Network

link layer   -> 	IP 	-> 	TCP 	-> HTTP
frame 	     -> segment -> 	packet 	-> 
## Questions
1. mtu: 网络帧的大小，如果一个ip packet比较大时
2. 硬中断，软中断
	网卡驱动注册的硬中断响应程序
3. within isp or company's network, what's the gate of internal/public network
4. how many connections OS can maintain, and how big the memory is taken




## Data Flow
google browser on macos -> server application -> google browser
### google browser wrap data
### google browser call os tcp stack and pass data -> socket api
### os tcp stack call ip stack and pass data
### ip stack pass data to nic
### nic send data out to connected router (wireless)
### router send data to isp
### isp send data to next hop
### public router receive data 
### router send data to switch
### switch send data to target host
### target host nic receives data
1. NIC copy data to ringbuffer in DMA
2. NIC send hard interrupt signal to CPU
### nic send data to os ip stack
1. NIC interrupt application(driver?) copy ringbuffer data from DMA to **sk_buffer** which can be used by OS kernal
2.  NIC interrupt application send **soft interruption** request to kernel **ksoftirqd** thread, then **ksoftirqd** calls poll api from driver to copy data in sk_buffer to kernal function **ip_rcv**\
3. transportation function: udp -> udp_rcv, tcp -> tcp_rcv

#### tcp_rcv
当我们采用的是TCP协议时，数据包到达传输层时，会在内核协议栈中的tcp_rcv函数处理，在tcp_rcv函数中去掉TCP头，根据四元组（源IP，源端口，目的IP，目的端口）**查找对应的Socket**，如果找到对应的Socket则将网络数据包中的传输数据拷贝到Socket中的接收缓冲区中。如果没有找到，则发送一个目标不可达的icmp包。

1. what if the socket is not found

```
sk_buff缓冲区，是一个维护网络帧结构的双向链表，链表中的每一个元素都是一个网络帧。虽然 TCP/IP 协议栈分了好几层，但上下不同层之间的传递，实际上只需要操作这个数据结构中的指针，而无需进行数据复制。

每个CPU会绑定一个ksoftirqd内核线程专门用来处理软中断响应。2个 CPU 时，就会有 ksoftirqd/0 和 ksoftirqd/1这两个内核线程。
```

#### Reference
1. skbuffer: https://github.com/torvalds/linux/blob/master/include/linux/skbuff.h
2. sock.h: https://github.com/torvalds/linux/blob/master/include/net/sock.h
### application listens on the port, os socket calls application to handle data
阻塞I/O
非阻塞I/O
I/O多路复用
信号驱动I/O
异步I/O


### application utilizes framework(vertx/netty) to handle data -> 
### application finish handling data and then calls socket api through framework to send data back to OS tcp/ip stack
### OS TCP/IP stack receives data and forms IP datagram and send to NIC
### NIC receives IP datagram, forms Frame(digital signal to analog signal) and send to SWITCH through cable
### switch receives data and send data to connected router
### the first router receives data, unwrap the frame, check route table to find the nearest route for the target IP
### long distance network
### Router at home receives data
### NIC of the laptap receives data
### NIC send data to OS's TCP/IP stack of the laptap
### google browser receives data from OS's TCP/IP stack


## further topics
###  IO blocking on Network
###  IO blocking on storage
### tls
1. https://www.cnblogs.com/Jack-Blog/p/13170728.html



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
### NIC
1. ethernet port
2. PCI connection
3. motherboard arbiter
4. How data in nic transfered to motherboard(where) through PCI
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


## Reference
1. netty: https://mp.weixin.qq.com/s?__biz=Mzg2MzU3Mjc3Ng==&mid=2247483737&idx=1&sn=7ef3afbb54289c6e839eed724bb8a9d6&chksm=ce77c71ef9004e08e3d164561e3a2708fc210c05408fa41f7fe338d8e85f39c1ad57519b614e#rd
