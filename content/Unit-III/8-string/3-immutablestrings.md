---
title: "Immutable String"
metaTitle: "Python - Immutable String "
metaDescription: "Python - Immutable String"
---

strings are immutable, which means you can’t change an existing string.
```
>>> greeting = 'Hello, world!'
>>> greeting[0] = 'J'
TypeError: 'str' object does not support item assignment
```


The best way to change is create a new string that is a variation on the original:
```
>>> greeting = 'Hello, world!'
>>> new_greeting = 'J' + greeting[1:]
>>> new_greeting
'Jello, world!'
```

This example concatenates a new first letter onto a slice of greeting . It has no effect on the original string.
