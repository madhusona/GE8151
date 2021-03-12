---
title: "Chained Conditionals (if elif else)"
metaTitle: "Python - Chained Conditionals (if elif else) "
metaDescription: "Python - Chained Conditionals (if elif else)"
---

Chained Conditional can be used when we need more than two branches.

## Syntax
```
if boolean expression:
	statement 1
	statement 2
	…
	statement n
elif boolean expression:
	statement 1
	..
	statement n 
else:
	statement 1
	statement n

```

- There is no limit on the number of elif statements. If there is an else clause, it has to be at the end, but there doesn’t have to be one.

- Each condition is checked in order. If the first is false, the next is checked, and so on. If one of them is true, the corresponding branch runs and the statement ends. Even if more than one condition is true, only the first true branch runs.

## Example
```
x=int(input())
y=int(input())
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else:
    print('x and y are equal')

Input:
5
10

Output:
x is less than y

```
