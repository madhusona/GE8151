---
title: "Composition"
metaTitle: "Python - Composition"
metaDescription: "Python - Composition"
---

One of the most useful features of programming languages is their ability to call one function from within another. This ability is called composition. For example, the argument of a function can be any kind of expression, including arithmetic operators, functions.

```
>>>math.sqrt(4*4)
4.0
>>>math.sqrt(math.sqrt(16))
2.0
```

Example:

Assume that the center point is stored in the variables xc and yc, and the perimeter point is in xp and yp. The first step is to find the radius of the circle, which is the distance between the two points.
```
def distance(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    result = math.sqrt(dsquared)
    return result
radius = distance(xc, yc, xp, yp)
```

The next step is to find the area of a circle with that radius
```
def area(radius):
    a = math.pi * radius**2
    return a
result = area(radius)
```
Encapsulating these steps in a function, we get:
```
def circle_area(xc, yc, xp, yp):
    radius = distance(xc, yc, xp, yp)
    result = area(radius)
return result
```

The temporary variables radius and result are useful for development and debugging,
but once the program is working, we can make it more concise by composing the function
calls.

```
def circle_area(xc, yc, xp, yp):
    return area(distance(xc, yc, xp, yp))
```