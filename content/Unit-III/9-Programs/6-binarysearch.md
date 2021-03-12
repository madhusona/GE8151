---
title: "Binary Search"
metaTitle: "Python -  Binary Search"
metaDescription: "Python - Binary Search"
---


Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. 
- If the value of the search key is less than the item in the middle of the interval, narrow the interval to the first half. 
- Otherwise narrow it to the second half. 
- Repeatedly check until the value is found or the interval is empty.

Program:
```
t=input().split()
s=input()

def binarysearch(t,s):
  min=0
  max=len(t)-1
  while max >= min:
    m=min+max // 2
    if t[m] < s:
      min=m+1 
    elif t[m] >s:
      max=m-1
    else:
      return m
  return -1
    
result=binarysearch(t,s)
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
