---
slug: "deep-dive-in-rendering-in-browser"
date: "2024-10-14"
title: "deep-dive-in-rendering-in-browser"
category: "frontend"
excerpt: "deep-dive-in-rendering-in-browser"
featuredImage: ""
---
# deep-dive-in-rendering-in-browser

## Sample html code
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>动态显示/隐藏示例</title>
  <style>
    #text {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
    }
  </style>
</head>
<body>

  <button id="toggleBtn">显示/隐藏文本</button>
  <div id="text">这是要显示或隐藏的内容。</div>

  <script>
    const btn = document.getElementById('toggleBtn');
    const textDiv = document.getElementById('text');

    btn.addEventListener('click', () => {
      // 检查当前元素是否显示
      if (textDiv.style.display === 'none') {
        textDiv.style.display = 'block'; // 显示
      } else {
        textDiv.style.display = 'none';  // 隐藏
      }
    });
  </script>
  
</body>
</html>

```

##  HTML 解析阶段（DOM 构建）

浏览器先从服务器（或本地）拿到 HTML 文件。

HTML 解析器（HTML parser）开始从上到下解析 HTML 标签，逐步构建 DOM 树（Document Object Model）。

在这个阶段：

<button id="toggleBtn"> 会被解析成一个 DOM 元素节点。

<div id="text"> 也会被解析成 DOM 元素节点。

DOM 树逐渐生成，代表页面结构。

## CSS 解析阶段（CSSOM 构建）

浏览器解析内联样式和外部样式表，生成 CSSOM 树（CSS Object Model），描述所有样式信息。

在你的例子里，样式比较简单，只是默认样式和内联 style，这个阶段依然会处理。

## JavaScript 解析与执行（JavaScript 引擎工作）

浏览器遇到 <script> 标签，暂停 HTML 解析（默认阻塞执行），把脚本内容传给 JS 引擎（比如 Chrome 的 V8）。

V8 解析 JS 代码，先把代码编译成字节码，然后执行。

执行过程：

document.getElementById('toggleBtn')：JS 引擎调用浏览器提供的 API，从已经构建好的 DOM 树里找到对应元素，返回一个引用给变量 btn。

同理找到 textDiv。

btn.addEventListener('click', handler)：给按钮注册一个事件监听器，告诉浏览器“按钮被点击时，调用这个函数”。

##  事件循环与回调执行

页面加载完毕，用户看到按钮和文本。

当用户点击按钮时：

浏览器触发“点击事件”。

浏览器的事件系统检测到 btn 上有绑定的事件监听器。

把对应的回调函数放进 JS 引擎的任务队列（任务队列属于事件循环机制的一部分）。

1. 物理动作：鼠标点击

用户用鼠标移动光标，点击鼠标左键（或者触控板/触摸屏类似动作）。

这个动作是硬件层面发生的，鼠标设备会生成硬件信号（电信号），通过 USB 或蓝牙传给操作系统。

2. 操作系统捕获事件

操作系统的驱动程序和窗口系统（Windows 的 Win32，macOS 的 Quartz，Linux 的 X11/Wayland 等）监听硬件信号。

操作系统记录鼠标指针当前位置（x,y 坐标）和鼠标按键状态（按下/弹起）。

这时，操作系统把这个低级事件封装成鼠标事件（MouseEvent）。

3. 操作系统分发事件到窗口

操作系统根据当前鼠标位置，查找哪个窗口（应用程序的界面）位于该坐标。

把鼠标事件发送给对应窗口。

4. 浏览器接收事件

浏览器作为操作系统窗口的宿主程序，接收到鼠标事件。

浏览器内部有事件管理系统，把事件派发给它管理的网页和 DOM 元素。

5. 浏览器执行“命中测试”（Hit Testing）

浏览器根据鼠标坐标，判断当前鼠标指向的页面上哪个 DOM 元素。

这个过程叫“命中测试”或者“拾取（hit testing）”，浏览器会遍历渲染树，找到鼠标点下那个元素。

6. 事件捕获和冒泡机制

浏览器按 DOM 树结构，先触发捕获阶段事件（从根节点向目标节点传递）。

目标节点触发事件处理器（比如你的 button 的 click 监听器）。

再触发冒泡阶段事件（从目标节点向上冒泡回根节点）。

这样事件逐层传递，允许你在不同层级监听事件。

7. 触发 JavaScript 代码执行

事件触发后，浏览器调用你注册的事件回调函数。

你的 JS 代码执行，修改 DOM 或者状态。

8. 页面更新

JS 修改 DOM 后，浏览器触发重排重绘。

页面视觉发生变化，你看到按钮被点击后内容显示/隐藏。

JS 引擎执行该回调函数。

##  DOM 修改 & 重排重绘（渲染引擎工作）

事件回调中执行了这段代码：

if (textDiv.style.display === 'none') {
  textDiv.style.display = 'block';
} else {
  textDiv.style.display = 'none';
}


这时，JS 引擎修改了 DOM 元素的样式属性 display。

浏览器检测到 DOM 树的变化或样式变化，触发：

重排（Reflow / Layout）：重新计算元素的几何尺寸和位置。

重绘（Repaint）：重新绘制元素的像素。

渲染引擎（如 Blink）完成这两个步骤后，页面更新，文本显示或隐藏状态发生变化。

##  用户看到结果

页面上对应的文本“显示”或“隐藏”根据 display 样式变化实时更新。

整个流程又等待下次事件触发。
