---
title: "Bitwise Operator"
metaTitle: "Python Operators - Bitwise Operators"
metaDescription: "Python Operators - Bitwises Operators"
---

Bitwise operators are used for manipulating a data at the bit level, also called as bit level programming. Bit-level programming mainly consists of 0 and 1. 

|Operator|Description|Example|
|----|----|----|
|& Binary AND|Operator copies a bit to the result if it exists in both operands|a & b|
|\| Binary OR|It copies a bit if it exists in either operand|a \| b|
|^ Binary XOR|It copies the bit if it is set in one operand but not both|a ^ b|
|~ Binary Ones Complement|It is unary and has the effect of 'flipping' bits|~a|
|<< Binary Left Shift|The left operands value is moved left by the number of bits specified by the right operand|a <<1|
|>> Binary Right Shift|The left operands value is moved right by the number of bits specified by the right operand|a >> 2|

[Bitwise Operator - Program Link](https://ideone.com/hdLGUT)

```
# Python Bitwise Operator
a=int(input())
b=int(input())
print("Bitwise AND ",a&b)
print("Bitwise OR",a|b)
print("Bitwise XOR",a^b)
print("Bitwise Not",~a)
print("Bitwise Left Shift 1:",a<<1)
print("Bitwise Right Shift 1:",a>>1)
```

**Output**
```
Bitwise AND  0
Bitwise OR 6
Bitwise XOR 6
Bitwise Not -5
Bitwise Left Shift 1: 8
Bitwise Right Shift 1: 2
```