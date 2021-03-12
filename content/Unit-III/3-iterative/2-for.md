---
title: "for"
metaTitle: "Python - for"
metaDescription: "Python - for"
---

A for loop implements the repeated execution of code based on a loop counter or loop variable. This means that for loops are used most often when the number of iterations is known before entering the loop, unlike while loops which are conditionally based.


## Syntax:
```
for [iterating variable] in [sequence]:
    statements
```

The statements will be executed until the sequence is over.

## For Loops using Sequential Data Types

Python’s for statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence. 

Example
```
# using list
Departments = ['ECE', 'EEE', 'CSE', 'IT', 'MECH']
for i in Departments:
   print(i)

Output:
ECE
EEE
CSE
IT
MECH

# using string

a='ECE'
for i in a:
   print(i)

Output:
E
C
E
```
