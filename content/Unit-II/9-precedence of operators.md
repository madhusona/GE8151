---
title: "Precedence of Operator"
metaTitle: "Python - Precedence of Operator"
metaDescription: "Python - Precedence of Operator"
---

When more than one operator appears in an expression, the order of evaluation depends on the rules of precedence.The acronym PEMDAS is a useful way to remember the rules:
- Parentheses have the highest precedence 
    -   2 * (3-1) is 4, and 
    -   (1+1)**(5-2) is 8. 
- Exponentiation has the next highest precedence
    -   2**1+1 is 3, not 4, and 
    -   3*1**3 is 3, not 27.
- Multiplication and Division have the same precedence, which is higher than Addition and Subtraction, which also have the same precedence. 
    -   2*3-1 is 5, not4, and 
    -   6+4/2 is 8, not 5.
- Operators with the same precedence are evaluated from left to right (except exponentiation.So in the expression 
    -   4 / 2 * pi, the division happens first and the result is multiplied by pi. 

The following table lists all operators from highest precedence to the lowest.
 
|S.No|Operator & Description|
|----|----|
|1|** Exponentiation raisetothepower|
|2|~ +- Complement, unary plus and minus|
|3|* / % //|Multiply, divide, modulo and floor division|
|4|+ - Addition and subtraction|
|5|>> << Right and left bitwise shift|
|6|& Bitwise 'AND'|
|7|^ \| Bitwise exclusive `OR' and regular `OR'|
|8| <= >= Comparison operators|
|9| == != Equality operators|
|10|= %= /= //= -= += *= **= Assignment operators|
|11|is is not Identity operators|
|12|in not in Membership operators|
|13|not or and Logical operators|



** [Example: Program link](https://ideone.com/VJqAfw) **

```
# Precedence of Operator
# Right-left associativity of ** exponent operator
# Output: 512
print(2 ** 3 ** 2)
 
# Shows the right-left associativity of **
# Output: 64
print((2 ** 3) ** 2)
 
# Left-right associativity
# Output: 3
print(5 * 2 // 3)
 
# Shows left-right associativity
# Output: 0
print(5 * (2 // 3))
```







