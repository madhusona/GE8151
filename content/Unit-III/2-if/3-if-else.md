---
title: "alternative (if-else)"
metaTitle: "Python - Conditional execution "
metaDescription: "Python - if-else statements"
---

There are two possibilities in alternative execution and  the condition determines which one gets executed.

## Syntax:
```
if boolean expression:
	statements
else:
	statements
```
- The boolean expression after if is called the condition. If it is true, then the if indented statement gets executed. If it is false, then the else indented statement gets executed. 

- The condition must be true or false, exactly one of the alternatives will be executed. The alternatives are called branches, because they are branches in the flow of execution.

## Example
```
x=4
if x%2 == 0:
    print 'x is even'
else:
    print 'x is odd'
```

Output:
x is even

