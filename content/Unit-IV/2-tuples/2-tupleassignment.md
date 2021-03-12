---
title: "Tuple Assignment"
metaTitle: "Tuple Assignment"
metaDescription: "Tuple Assignment"
---


- The left side is a tuple of variables; the right side is a tuple of expressions. Each value is assigned to its respective variable. All the expressions on the right side are evaluated before any of the assignments.

```
>>>a, b = 2+4, 1+1
>>a,b
(6,2)

```
- The number of variables on the left and the number of values on the right have to be the same.

```
>>> a, b = 1, 2, 3
ValueError: too many values 

```
- The right side can be any kind of sequence (string, list or tuple). For example, to split an email address into a user name and a domain.

```
>>> addr = 'monty@python.org'
>>> uname, domain = addr.split('@')
>>> uname
monty
>>>domain
python.org

```

Example 
Swapping of two numbers
```
a=input()
b=input()
print(“Before swapping “,a,b)
a,b=b,a
print(“After swapping “,a,b)


Output:
Before swapping  10 20
After swapping  20 10

```