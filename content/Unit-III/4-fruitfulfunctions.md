---
title: "Fruitful Function"
metaTitle: "Python - Fruitful Function"
metaDescription: "Python - Fruitful Function"
---

Functions  that perform an action and return a value are called fruitful functions. 
 
Example:
```
def area(radius):
    a = math.pi * radius**2
    return a
area(2)
```

Sometimes it is useful to have multiple return statements, one in each branch of a conditional

```
def absolute_value(x):
    if x < 0:
        return -x
    else:
        return x
```

- As soon as a return statement runs, the function terminates without executing any subse-
quent statements. Code that appears after a return statement, or any other place the flow
of execution can never reach, is called dead code.
- In a fruitful function, it is a good idea to ensure that every possible path through the program hits a return statement.

```
# incorrect function
def absolute_value(x):
if x < 0:
    return -x
if x > 0:
    return x
```

This function is incorrect because if x happens to be 0, neither condition is true, and the
function ends without hitting a return statement.


