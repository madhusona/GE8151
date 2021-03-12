---
title: "Boolean expressions"
metaTitle: "Python - Boolean expressions "
metaDescription: "Python - Boolean expressions"
---

A boolean expression is an expression that is either true or false. The following examples
use the operator ==, which compares two operands and produces True if they are equal
and False otherwise:

```
>>> 5 == 5
True
>>> 5 == 6
False
```

True and False are special values that belong to the type bool; they are not strings.

```
>>> type(True)
<type 'bool'>
```

## Logical operators:
- There are three logical operators that are used to compare values.
- They evaluate expressions down to Boolean values, returning either True or False.
- These operators are and, or, and not which are defined in the table below.

| Operator                  | Description                   | Example x=True , y=False|
| -----------               | -----------                   | ------- |
| and | True if both are true | x and y returns False |
| or | True if at least one is true | x or y returns True |
| not | True only if false | not x returns False |



