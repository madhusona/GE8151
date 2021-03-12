---
title: "Comparison Operator"
metaTitle: "Python Operators - Comparison Operators"
metaDescription: "Python Operators - Comparison Operators"
---

Comparison operators are used to compare two values. Tests numerical equalities and inequalities between two operands and returns a Boolean value. It returns either True or False according to the condition.

|operator|Description|Example|
|----|----|----|
|==|If the values of two operands are equal, then the condition becomes true.|a == b|
|!=|If values of two operands are not equal, then condition becomes true.|a != b|
|>|If the value of left operand is greater than the value of right operand, then condition becomes true|a > b|
|<|If the value of left operand is less than the value of right operand, then condition becomes true|a < b|
|>=|If the value of left operand is greater than or equal to the value of right operand, then condition becomes true|a >= b|
|<=|If the value of left operand is less than or equal to the value of right operand, then condition becomes true|a <= b|

[Comparison Operator - Program Link](https://ideone.com/HqMF6Q)
```
a=int(input())
b=int(input())
print("a==b?",a==b)
print("a!=b?",a!=b)
print("a<b?",a<b)
print("a>b?",a>b)
print("a<=b?",a<=b)
print("a>=b?",a>=b)
```

** Output **
```
# a=2 b=3
a==b? False
a!=b? True
a<b? True
a>b? False
a<=b? True
a>=b? False
```

