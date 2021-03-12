---
title: "While"
metaTitle: "Python - While"
metaDescription: "Python - While"
---

## The While statement:
The flow of execution for a while statement:
- Determine whether the condition is true or false.
- If false, exit the while statement and continue execution at the next statement.
- If the condition is true, run the body and then go back to step 1.

This type of flow is called a loop because the third step loops back around to the top.

## Syntax:
```
while boolean expression:
	statement1
	statement2
	..
	statement3
```

The body of the loop should change the value of one or more variables so that the condition becomes false and the loop terminates. Otherwise the loop will repeat forever, which is called an infinite loop.

## Example
```
i=1
while i<=4:
   print(i)
   i=i+1

Output:
1
2
3
4
```

## infinite loop - Wrong
```
while i<=10
    print(i)
```



