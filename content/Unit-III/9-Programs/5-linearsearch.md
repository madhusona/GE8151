---
title: "Linear Search"
metaTitle: "Python -  Linear Search"
metaDescription: "Python - Linear Search"
---

A simple approach is to do linear search, i.e Start from the leftmost element of list and one by one compare x with each element of list
- If x matches with an element, return the index.
- If x doesn’t match with any of elements, return -1.

Program:
```
t=input().split()
s=input()

def linearsearch(t,s):
	for i in range(len(t)):
		if t[i] ==s:
			return i
	else:
		return -1

result=linearsearch(t,s)
if result >= 0:
  print("Element found at ",result)
else:
  print("Element not found")


Input:
1 2 3 4 5
3

Output:
Element found at 2
```