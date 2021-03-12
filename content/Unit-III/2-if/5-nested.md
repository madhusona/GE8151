---
title: "Nested conditionals"
metaTitle: "Python - Nested conditionals "
metaDescription: "Python - Nested conditionals"
---

One conditional can also be nested within another.

## Example
```
if x == y:
    print('x and y are equal')
else:
    if x < y:
        print('x is less than y')
    else:
        print('x is greater than y')
```

- The first branch contains a simple statement. The second branch contains another if statement, which has two branches of its own.

- nested conditionals are difficult to read very quickly. It is a good idea to avoid them when you can.Logical operators often provide a way to simplify nested conditional statements
