---
title: "List - Aliasing"
metaTitle: "List Aliasing"
metaDescription: "List Aliasing"
---

- If a refers to an object and you assign b = a, then both variables refer to the same object.
```
>>> a = [1, 2, 3]
>>> b = a
>>> b is a
True

```

- The association of a variable with an object is called a reference. In the above example, there are two references to the same object.
- An object with more than one reference has more than one name, so we say that the object is aliased. 
- If the aliased object is mutable, changes made with one alias affect the other.

```
>>> b[0] = 17
>>> print a
[17, 2, 3]

```
- Although this behavior can be useful, it is error-prone. In general, it is safer to avoid aliasing when  working with mutable objects.
