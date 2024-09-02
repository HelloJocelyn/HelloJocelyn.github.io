# Network

link layer   -> 	IP 	-> 	TCP 	-> HTTP
frame 	     -> segment -> 	packet 	-> 
## Questions
1. mtu: 网络帧的大小，如果一个ip packet比较大时
2. 硬中断，软中断
	网卡驱动注册的硬中断响应程序
3. within isp or company's network, what's the gate of internal/public network
4. how many connections OS can maintain, and how big the memory is taken
5. 操作系统接收到连接，如果没有application监听，怎么处理
6. jvm把java code翻译成？
7. 操作系统代码加载详细过程
8. 编译器在操作系统加载过程中的作用
9. 




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
### target host nic receives data(Level 1)
1. NIC copy data to ringbuffer in DMA
2. NIC send IRQ  to CPU
### TCP/IP Stack



1. NIC interrupt application(driver?) copy ringbuffer data from DMA to **sk_buffer** which can be used by OS kernal
2.  NIC interrupt application send **soft interruption** request to kernel **ksoftirqd** thread, then **ksoftirqd** calls poll api from driver to copy data in sk_buffer to kernal function **ip_rcv**\
3. transportation function: udp -> udp_rcv, tcp -> tcp_rcv

**linux implementation of socket.h:** *https://github.com/torvalds/linux/blob/master/net/socket.c*

#### tcp_rcv
当我们采用的是TCP协议时，数据包到达传输层时，会在内核协议栈中的tcp_rcv函数处理，在tcp_rcv函数中去掉TCP头，根据四元组（源IP，源端口，目的IP，目的端口）**查找对应的Socket**，如果找到对应的Socket则将网络数据包中的传输数据拷贝到Socket中的接收缓冲区中。如果没有找到，则发送一个目标不可达的icmp包。

1. what if the socket is not found

```
sk_buff缓冲区，是一个维护网络帧结构的双向链表，链表中的每一个元素都是一个网络帧。虽然 TCP/IP 协议栈分了好几层，但上下不同层之间的传递，实际上只需要操作这个数据结构中的指针，而无需进行数据复制。

每个CPU会绑定一个ksoftirqd内核线程专门用来处理软中断响应。2个 CPU 时，就会有 ksoftirqd/0 和 ksoftirqd/1这两个内核线程。
```
#### Layer 1 (PHY)
Ethernet card (NIC) receives and decodes the signal on the wire, and pushes it into a shift register

See Ethernet over twisted-pair for the line codes details for each variant of *BASE-T Ethernet
When full ethernet frame is received, it is placed into a receive (RX) queue in hardware

NIC raises an interrupt, using bus-specific mechanism (either PCI IRQ line, or message-signaled interrupt)
Interrupt controller (APIC) receives interrupt and directs it to a CPU
CPU saves running context and switches to interrupt context
CPU loads interrupt handler vector and begins executing it

#### Layer 2 (MAC)
Kernel ethernet layer looks at ethernet packet and verifies that it is destined for this machine's MAC address
Ethernet ethernet layer sees Ethertype == IP, hands it to IP layer
Note, the protocol is actually set by the device driver (e.g. in e100_indicate()).

#### Layer 3 (IP)
Kernel IP layer receives packet (ip_rcv())
Kernel IP layer queues up all IP fragments
When all IP frags are recieved, it processes the IP packet. It looks at the protocol field and sees that it is TCP, hands it to TCP layer

#### Layer 4 (TCP)
Kernel TCP layer receives packet (tcp_v4_rcv()).
Kernel TCP layer looks at src/dst IP/port and matches it up with an open TCP connection (socket) (tcp_v4_rcv() calls __inet_lookup_skb()).
If it is a SYN packet (new connection):

TCP will see that there is a listening socket open for port 80
TCP creates a new connection object for this new connection
Kernel wakes up the task that is sleeping, blocked on an accept call - or select
If it is not a SYN packet (there is data):

Kernel queues up the TCP data from this segment on the socket
Kernel wakes up a task that is asleep, blocked on a recv call - or select (sock_def_readable())

#### Layer 5 (Application - HTTP)
Apache (httpd) will wake up, depending on the system call it is blocked on:

accept() returns when a new child connection is available (this is handled with a wrapper called apr_socket_accept())

recv() returns when a socket has new data, which has been read into a userspace buffer

Apache processes the buffer, parsing HTTP protocol strings


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
#### OS(linux) API invoked
1. socket： open server socket -> ServerSocketChannel.open()
2. pipe(fd)：fd[2] : -> Selector.open()
3. bind() : bind a name to a socket


In netty
1. epollCreate, 
2. eventFd
3. timerFd
4. socket0
5. fdVal 
6. accept: 
epollCtlAdd0
Netty: 
1. ReactorBossGroupt: open serversocket channel,create pipe as selector, register the selctor to the server socket channel, server socket channel start to accept
2. ReactorChildrenEventGroup
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
2. https://stackoverflow.com/questions/41522936/what-happens-between-receiving-network-data-on-the-ethernet-port-and-apache2-doi
3. https://tungdam.medium.com/linux-network-ring-buffers-cea7ead0b8e8
4. https://github.com/kangjianwei/LearningJDK
