---
title: "Range function"
metaTitle: "Python - range function"
metaDescription: "Python - range function"
---

The built-in function range() is used to iterate over a sequence of numbers.When working with range(), you can pass between 1 and 3 integer arguments to it:

- start states the integer value at which the sequence begins, if this is not included then start begins at 0
- stop is always required and is the integer that is counted up to but not included
- step sets how much to increase (or decrease in the case of negative numbers) the next iteration, if this is omitted then step defaults to 1.

## range(stop):
```
for i in range(6):
   print(i)
```

In the program above, the stop argument is 6, so the code will iterate from 0-6 (exclusive of 6)

Output:
```
0
1
2
3
4
5
```
## range(start, stop)
```
for i in range(20,25):
   print(i)
```

Here, the range goes from 20 (inclusive) to 25 (exclusive), so the output looks like this:

Output
```
20
21
22
23
24
```

## range(start, stop, step): step with a positive value:
```
for i in range(0,15,3):
   print(i)
```

In this case, the for loop is set up so that the numbers from 0 to 15 print out, but at a step of 3, so that only every third number is printed, like so:

Output
```
0
3
6
9
12
```
## range(start, stop, step): step with a negative value:
```
for i in range(100,50,-10):
   print(i)
```

Output
```
100
90
80
70
60
```