---
slug: "radio-learning"
date: "2024-10-29"
title: "Radio Learning"
category: "physics"
excerpt: "Radio Learning"
featuredImage: ""
---
# radio observation and practice
## radio observation

## radio to digital signal

## digital signal to radio

```
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from IPython.display import HTML

fig, ax = plt.subplots(figsize=(8,4))
ax.set_xlim(0, 4*np.pi)
ax.set_ylim(-2, 2)
ax.set_xlabel('Position (x)')
ax.set_title('Electromagnetic Wave: E and B Fields')

x = np.linspace(0, 4*np.pi, 1000)

line_e, = ax.plot([], [], label='Electric Field (E)', color='r')
line_b, = ax.plot([], [], label='Magnetic Field (B)', color='b')
ax.legend(loc='upper right')

def init():
    line_e.set_data([], [])
    line_b.set_data([], [])
    return line_e, line_b

def animate(t):
    E = np.sin(x - 0.1*t)
    B = np.cos(x - 0.1*t)
    line_e.set_data(x, E)
    line_b.set_data(x, B)
    return line_e, line_b

ani = animation.FuncAnimation(fig, animate, init_func=init, frames=200, interval=20, blit=True)

HTML(ani.to_jshtml())

```