---
title: "Recursion"
metaTitle: "Python - Recursion"
metaDescription: "Python - Recursion"
---

A function that calls itself is called recursion.

## Rules:
- Base case: The recursive calls must eventually reach a base case, which is solved without further recursion
- Recursive case: Each recursive call should be on a smaller instance of the same problem, that is, a smaller subproblem.
 
## Example:
Computing the factorial of a number using recursion. The factorial of an integer n, which is written as n!, is the result of multiplying n by all of the positive integers less than n. For instance, 3! = 3 x 2 x 1, which results in 6 and 4! = 4 x 3 x 2 x 1, which results in 24.
An efficient way to calculate a factorial is by using a recursive function.
 
``` 
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
n=int(input())
print(factorial(n))
 
```

## Advantages 
- Recursion can produce simpler, more natural solutions to a problem
- It is written with less number of statements
- Recursive functions are effective where the terms are generated successively to compute a value
- It requires few variables which makes program clean
- It is useful for branching processes
 
## Disdvantages:
- Recursive solution is always logical and it is very difficult to trace.(debug and understand).
- In recursive we must have an if statement somewhere to force the function to return without the recursive call being executed, otherwise the function will never return.
- Recursion takes a lot of stack space, usually not considerable when the program is small and running on a PC.
- Recursion uses more processor time.

| Recursion | Iteration |
| --------- | --------- |
| Repetition is achieved through repeated function calls |Iteration is explicitly a repetition structure |
| Recursion terminates when a base case is recognized | Iteration terminates when the loop continuation test become false |
| Recursion causes an  other copy of the function and hence a considerable memory space is occupied | Iteration normally occurs within a loop, so the extra memory assignment is omitted |
