# 🧠 LeetCode 刷题计划

> 目标：系统准备算法面试，覆盖核心题型，建立解题思维框架

---

## 📅 总体规划（12 周）

| 阶段 | 周次 | 主题 | 目标题数 |
|------|------|------|----------|
| 基础 | Week 1–2 | 数组、字符串、链表 | 30 题 |
| 进阶 | Week 3–4 | 二分查找、滑动窗口、双指针 | 25 题 |
| 树与图 | Week 5–6 | 二叉树、BFS/DFS、图 | 30 题 |
| 动态规划 | Week 7–9 | 一维→二维→状态压缩 DP | 35 题 |
| 补强 | Week 10–11 | 堆、并查集、字典树、回溯 | 25 题 |
| 冲刺 | Week 12 | 高频题复盘 + 模拟面试 | 20 题 |

**累计目标：165 题**（Easy ~40 / Medium ~100 / Hard ~25）

---

## 📚 分阶段题单

### Phase 1：基础线性结构（Week 1–2）

#### 数组 / 字符串

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 1 | Two Sum | Easy | 哈希表 | ⬜ |
| 49 | Group Anagrams | Medium | 哈希表 + 排序 | ⬜ |
| 128 | Longest Consecutive Sequence | Medium | 哈希集合 | ⬜ |
| 238 | Product of Array Except Self | Medium | 前缀积 | ⬜ |
| 53 | Maximum Subarray | Medium | Kadane 算法 | ⬜ |
| 56 | Merge Intervals | Medium | 排序 + 贪心 | ⬜ |
| 3 | Longest Substring Without Repeating Characters | Medium | 滑动窗口 | ⬜ |
| 76 | Minimum Window Substring | Hard | 滑动窗口 | ⬜ |

#### 链表

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 206 | Reverse Linked List | Easy | 迭代 / 递归 | ⬜ |
| 21 | Merge Two Sorted Lists | Easy | 双指针 | ⬜ |
| 143 | Reorder List | Medium | 快慢指针 + 反转 | ⬜ |
| 19 | Remove Nth Node From End | Medium | 快慢指针 | ⬜ |
| 141 | Linked List Cycle | Easy | 快慢指针 | ⬜ |
| 23 | Merge K Sorted Lists | Hard | 最小堆 | ⬜ |

---

### Phase 2：二分 / 双指针 / 滑动窗口（Week 3–4）

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 704 | Binary Search | Easy | 模板 | ⬜ |
| 33 | Search in Rotated Sorted Array | Medium | 变形二分 | ⬜ |
| 153 | Find Minimum in Rotated Sorted Array | Medium | 二分 | ⬜ |
| 11 | Container With Most Water | Medium | 双指针 | ⬜ |
| 15 | 3Sum | Medium | 排序 + 双指针 | ⬜ |
| 42 | Trapping Rain Water | Hard | 双指针 / 单调栈 | ⬜ |
| 567 | Permutation in String | Medium | 滑动窗口 + 计数 | ⬜ |
| 239 | Sliding Window Maximum | Hard | 单调队列 | ⬜ |

---

### Phase 3：树与图（Week 5–6）

#### 二叉树

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 104 | Maximum Depth of Binary Tree | Easy | DFS | ⬜ |
| 226 | Invert Binary Tree | Easy | 递归 | ⬜ |
| 102 | Binary Tree Level Order Traversal | Medium | BFS | ⬜ |
| 105 | Construct Tree from Preorder+Inorder | Medium | 分治 | ⬜ |
| 124 | Binary Tree Maximum Path Sum | Hard | 后序 DFS | ⬜ |
| 297 | Serialize and Deserialize Binary Tree | Hard | BFS / DFS | ⬜ |

#### 图

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 200 | Number of Islands | Medium | DFS / BFS | ⬜ |
| 133 | Clone Graph | Medium | BFS + 哈希 | ⬜ |
| 207 | Course Schedule | Medium | 拓扑排序 | ⬜ |
| 417 | Pacific Atlantic Water Flow | Medium | 反向 BFS | ⬜ |
| 269 | Alien Dictionary | Hard | 拓扑排序 | ⬜ |

---

### Phase 4：动态规划（Week 7–9）

#### 一维 DP

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 70 | Climbing Stairs | Easy | dp[i] = dp[i-1] + dp[i-2] | ⬜ |
| 198 | House Robber | Medium | 状态转移 | ⬜ |
| 322 | Coin Change | Medium | 完全背包 | ⬜ |
| 300 | Longest Increasing Subsequence | Medium | DP / 二分优化 | ⬜ |
| 139 | Word Break | Medium | DP + 哈希 | ⬜ |

#### 二维 DP

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 62 | Unique Paths | Medium | dp[i][j] | ⬜ |
| 1143 | Longest Common Subsequence | Medium | 二维 DP | ⬜ |
| 72 | Edit Distance | Medium | 编辑距离经典 | ⬜ |
| 312 | Burst Balloons | Hard | 区间 DP | ⬜ |

#### 背包 / 其他

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 416 | Partition Equal Subset Sum | Medium | 0/1 背包 | ⬜ |
| 494 | Target Sum | Medium | 背包 / DFS | ⬜ |
| 10 | Regular Expression Matching | Hard | DP | ⬜ |

---

### Phase 5：补强专项（Week 10–11）

#### 堆 / 优先队列

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 347 | Top K Frequent Elements | Medium | 最大堆 / 桶排序 | ⬜ |
| 295 | Find Median from Data Stream | Hard | 双堆 | ⬜ |
| 355 | Design Twitter | Medium | 堆 + 链表 | ⬜ |

#### 回溯

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 46 | Permutations | Medium | 回溯模板 | ⬜ |
| 78 | Subsets | Medium | 回溯 / 位运算 | ⬜ |
| 79 | Word Search | Medium | DFS + 回溯 | ⬜ |
| 51 | N-Queens | Hard | 回溯 + 剪枝 | ⬜ |

#### 并查集 / Trie

| # | 题目 | 难度 | 核心技巧 | 状态 |
|---|------|------|----------|------|
| 208 | Implement Trie | Medium | Trie 实现 | ⬜ |
| 212 | Word Search II | Hard | Trie + 回溯 | ⬜ |
| 684 | Redundant Connection | Medium | 并查集 | ⬜ |

---

### Phase 6：冲刺复盘（Week 12）

> 重做错题 + 限时模拟（每题限 25 分钟）

- [ ] 整理「第一次做错」的题目，归纳原因
- [ ] 每天 1 套模拟面试（2 Medium 或 1 Hard）
- [ ] 整理常用模板（二分、回溯、BFS、DP 转移）

---

## 🗂 解题模板速查

### 二分查找

```python
lo, hi = 0, len(nums) - 1
while lo <= hi:
    mid = (lo + hi) // 2
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        lo = mid + 1
    else:
        hi = mid - 1
```

### BFS 框架

```python
from collections import deque
queue = deque([start])
visited = {start}
while queue:
    node = queue.popleft()
    for neighbor in graph[node]:
        if neighbor not in visited:
            visited.add(neighbor)
            queue.append(neighbor)
```

### 回溯框架

```python
def backtrack(path, choices):
    if 终止条件:
        result.append(path[:])
        return
    for choice in choices:
        path.append(choice)
        backtrack(path, remaining_choices)
        path.pop()
```

### 动态规划思路

```
1. 定义状态 dp[i] 含义
2. 写出状态转移方程
3. 确定初始值（base case）
4. 确定遍历方向（正向 or 逆向）
```

---

## 📊 进度追踪

| 分类 | 计划 | 完成 | 进度 |
|------|------|------|------|
| 数组 / 字符串 | 20 | 0 | 0% |
| 链表 | 10 | 0 | 0% |
| 二分 / 双指针 | 15 | 0 | 0% |
| 二叉树 | 15 | 0 | 0% |
| 图 | 10 | 0 | 0% |
| 动态规划 | 30 | 0 | 0% |
| 回溯 | 10 | 0 | 0% |
| 堆 / Trie / 并查集 | 10 | 0 | 0% |
| **总计** | **120** | **0** | **0%** |

---

## 💡 刷题原则

1. **理解优先，而不是背答案** — 搞懂为什么这个数据结构适合这道题
2. **一题多解** — 先暴力，再优化，培养优化意识
3. **错题复盘** — 做错的题隔 3 天重做一次
4. **限时练习** — Medium 25 分钟，Hard 40 分钟，超时就看提示
5. **归纳模式** — 同类题放在一起，找共同解题思路

---

*最后更新：2026-05-29*
