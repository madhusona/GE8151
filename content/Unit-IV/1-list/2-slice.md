---
title: "List Slices"
metaTitle: "List Slices"
metaDescription: "List Slices"
---

A segment of a list is called a slice. Selecting a slice is similar to selecting an element

- The operator [n:m] returns the part of the list from the “n-eth” character to the “m-eth”
character, including the first but excluding the last.

```
>>> t = ['a', 'b', 'c', 'd', 'e', 'f']
>>> t[1:3]
['b', 'c']

```

- If you omit the first index (before the colon), the slice starts at the beginning of the list.

```
>>> t[:4]
['a', 'b', 'c', 'd']

```

- If you omit the second index, the slice goes to the end of the list

```
>>> t[3:]
['d', 'e', 'f']
```

- If the first index is greater than or equal to the second the result is an empty list, represented by two Square Bracket marks
```
>>>t=[1,2,3,4,5]
>>>t[4:3])
[ ]
```

- By default, Python sets this increment to 1, but that extra colon at the end of the numbers allows us to specify the slicing increment.

```
>>>t=[1,2,3,4,5]
>>>t[::2]
[1,3,5]

```

- It also possible to apply negative index.

```
>>>t=[1,2,3,4,5]
>>>t[-3:-1]
[3,4]

```

- A slice operator on the left side of an assignment can update multiple elements.

```
>>> t = ['a', 'b', 'c', 'd', 'e', 'f']
>>> t[1:3] = ['x', 'y']
>>> t
['a', 'x', 'y', 'd', 'e', 'f']

```

