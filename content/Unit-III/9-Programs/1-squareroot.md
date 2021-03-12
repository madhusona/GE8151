---
title: "Square Root Program"
metaTitle: "Python -  Square Root Program"
metaDescription: "Python - Square Root Program"
---

one way of computing square roots is Newton’s method. Suppose that you
want to know the square root of a. If you start with almost any estimate, x, you can compute a better estimate with the following formula:

y = (x + a/x) / 2

Program:
```
a=10
x=3
while True:
  print(x)
  y = (x + a/x) / 2
  if y == x:
    break
  x = y

Output:

3
3.166666666666667
3.162280701754386
3.162277660169842
3.162277660168379
```

