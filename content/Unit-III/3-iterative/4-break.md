---
title: "Break"
metaTitle: "Python - break"
metaDescription: "Python - break"
---

Break statement is used to jump out of the loop.

## Example:
```
for i in range(5):
    if i==3:
        break
    print(i)
 
Output:
0
1
2
```

Write a python program to print all prime numbers upto n.
 
```
n=int(input())
for i in range(2, n):
	for x in range(2, i):
		if i % x == 0:
			break
	else:
		print(i, 'is a prime number')
 
 
Input:10
output:
2 is a prime number
3 is a prime number
5 is a prime number
7 is a prime number
```