---
title: "Python Programs"
metaTitle: "Python - Programs"
metaDescription: "Python - Programs"
---

## Exchange the values of two variables
```
x = input("Enter value of x:")
y = input("Enter value of y:")
temp = x
x = y
y = temp
print('The value of x after swapping:',x)
print('The value of y after swapping:',y)

Output
Enter value of x: 67
Enter value of y: 45
The value of x after swapping: 45
The value of y after swapping: 67
```

## Distance between two points

```
x1=int(input())
y1=int(input())
x2=int(input())
y2=int(input())
dx = x2 - x1
dy = y2 - y1
dsquared = dx**2 + dy**2
result = math.sqrt(dsquared)
print(result)
```
