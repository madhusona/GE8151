---
title: "String slices"
metaTitle: "Python - String slices"
metaDescription: "Python - String slices"
---

- A segment of a string is called a slice. Selecting a slice is similar to selecting a character:

``` 
>>> s = 'Monty Python'
>>> s[0:5]
'Monty'
>>> s[6:12]
'Python'
```
-The operator [n:m] returns the part of the string from the “n-eth” character to the “m-eth” character, including the first but excluding the last.
 
- If you omit the first index (before the colon), the slice starts at the beginning of the string.

```
>>> fruit = 'banana'
>>> fruit[:3]
'ban' 
``` 
 
- If you omit the second index, the slice goes to the end of the string:
``` 
>>> fruit[3:]
'ana' 
``` 
- If the first index is greater than or equal to the second the result is an empty string, represented by two quotation marks:
``` 
>>> fruit = 'banana'
>>> fruit[3:3]
''
```

- By default, Python sets this increment to 1, but that extra colon at the end of the numbers allows us to specify the slicing increment.
```
>>>s=”karpagam”
>>>s[::2]
kraa
``` 
- It also possible to apply negative index.
```
>>>s=”karpagam”
>>>s[-3:-1]
ga
```

