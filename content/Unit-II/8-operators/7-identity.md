---
title: "Identity Operator"
metaTitle: "Python Operators - Identity Operators"
metaDescription: "Python Operators - Identity Operators"
---

It is used to check if two values (or variables) are located on the same part of the memory.

|Operator|Description|Example|
|----|----|----|
|is|Evaluates to true if the variables on either side of the operator point to the same object and otherwise false|a is b|
|is not|Evaluates to false if the variables on either side of the operator point to the same object and true otherwise|a is not b|

[Identity Operator - Program Link](https://ideone.com/gxqwCe)

```
# Python Identity Operator
a=10
b=20
print("is ",a is b)
print("is not", a is not b)

a=10
b=10
print("is ",a is b)
print("is not", a is not b)

Output:
is  False
is not True
is  True
is not False
```