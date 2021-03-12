---
title: "List - Loops"
metaTitle: "List Loop"
metaDescription: "List Loop"
---

The most common way to traverse the elements of a list is with a for loop. The syntax is the same as for strings but it read only the elements of the list

```
Example:
t=[10,20,30]
for i in t:
    print(i)

Output:
10
20
30

```

Index is used to write or update the element. A common way to do that is to combine the
functions range and len.

```
Example:
t=[10,20,30]
for i in range(len(t)):
    t[i]=t[i]*t[i]
print(t)

Output:
100 400 900

```

This loop traverses the list and updates each element. len returns the number of elements
in the list. range returns a list of indices from 0 to n - 1, where n is the length of the list. Each time through the loop i gets the index of the next element. The assignment statement in the body uses i to read the old value of the element and to assign the new value.

- A for loop over an empty list never executes the body:

```
for x in []:
    print 'This never happens.'

```
