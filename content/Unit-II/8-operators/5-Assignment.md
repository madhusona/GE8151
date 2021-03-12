---
title: "Assignment Operator"
metaTitle: "Python Operators - Assignment Operators"
metaDescription: "Python Operators - Assignment Operators"
---


Assignment operators are used to assign values to variables. The left side operand of the assignment operator is a variable and right side operand of the assignment operator is a value.a = 5 is a simple assignment operator that assigns the value 5 on the right to the variable a on the left.

|Operator|Description|Example
|----|----|----|
|=|Assigns values from right side operands to left side operand|c = a + b|
|+=|It adds right operand to the left operand and assign the result to left operand|c += a |
|-=|It subtracts right operand from the left operand and assign the result to left operand|-= a|
|*=|It multiplies right operand with the left operand and assign the result to left operand|c *= a|
|/=|It divides left operand with the right operand and assign the result to left operand|c /= a|
|%=|It takes modulus using two operands and assign the result to left operand|c %= a|
|**=|Performs exponential (power) calculation on operators and assign value to the left operand|c **= a|
|//=|It performs floor division on operators and assign value to the left operand|c //= a|


[Assignment Operator - Program Link](https://ideone.com/jDvcue)
```
# Python Assignment Operator
a=int(input())
b=int(input())
a+=b
print(a)
a-=b
print(a)
a*=b
print(a)
a/=b
print(a)
a//=b
print(a)
a**=b
print(a)

Output:
4
2
4
2.0
1.0
1.0
```
