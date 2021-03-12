---
title: "List - Methods"
metaTitle: "List Methods"
metaDescription: "List Methods"
---

## List methods

- ** list.append(x): ** Add an item to the end of the list. Equivalent to a[len(a):] = [x].

```
t=[10,20,30,40,50]
t.append(60)
print(t)

Output:
[10,20,30,40,50,60]

```

-  **list.extend(iterable):**Extend the list by appending all the items from the iterable. Equivalent to a[len(a):] = iterable.
```
t=[10,20,30,40,50]
q=[60,70,80,90,100]
t.append(q)
print(t)

Output:
[10,20,30,40,50,60,70,80,90,100]

```

- **list.insert(i, x):**Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).

```
t=[10,20,30,40,50]
t.insert(2,60)
print(t)

Output:
[10,20,60,30,40,50]

```

- **list.remove(x):**Remove the first item from the list whose value is x. It is an error if there is no such item.
```
t=[10,20,30,40,50]
t.remove(10)
print(t)

Output:
[20,30,40,50]

```

- **list.pop([i]):**Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list. 

```
t=[10,20,30,40,50]
t.pop()


Output:
50

```

- **list.clear():**Remove all items from the list. Equivalent to del a[:].
```
t=[10,20,30,40,50]
t.clear()
print(t)

Output:
[ ]

```

- **list.count(x)**Return the number of times x appears in the list.

```
t=[10,20,30,40,50,30]
print(t.count(30))


Output:
2

```

- **list.reverse():**Reverse the elements of the list.
```
t=[10,20,30,40,50,30]
t.reverse()
print(t)

Output:
[30,50,40,30,20,10]

```

- **list.sort(key=None, reverse=False)**Sort the items of the list

```
#ascending order
t=[100,20,30,40,50]
t.sort()
print(t)

Output:
[20,30,40,50,100]

#descending order
>>>t=[100,20,30,40,50]
>>>t.sort(reverse=True)
print(t)

Output:
[100,50,40,30,20]


```

- **list.index(x[, start[, end]]):**Return zero-based index in the list of the first item whose value is x. Raises a ValueError if there is no such item.

The optional arguments start and end are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list.

```
t=[10,20,30,40,50]
print(t.index(30))

Output:
2

```

