---
title: "List"
metaTitle: "List"
metaDescription: "List"
---

## List:
A list is a sequence of values. In a list, the values can be any type. The values in a list are called elements or sometimes items. Lists are mutable.

## List Operations:

### List Creation:
There are several ways to create a new list; the simplest is to enclose the elements in square brackets ([ and ])

Example:
```
>>>t=[10, 20, 30, 40,50]
>>>t
[10,20,30,40,50]
```
The elements of a list don’t have to be the same type. The following list contains a string, a float, an integer, and  another list:

['spam', 2.0, 5, [10, 20]]

A list within another list is nested. A list that contains no elements is called an empty list; it can be created with empty brackets, [].

The function list creates a new list with no items.

```
>>>t=list()
>>>t
[]

```

## Indexing Lists:

Each item in a list corresponds to an index number, which is an integer value, starting with the index number 0.
- Any integer expression can be used as an index.
- If you try to read or write an element that does not exist, you get an IndexError.
- If an index has a negative value, it counts backward from the end of the list.

t=[10,20,30,40,50]

## Accessing Items in List:

Item of the list can be accessed by referring  its index number.

```
>>>t=[10, 20, 30, 40,50]
>>>t[1]
20

```

## Modifying Items in List:

We can use indexing to change items within the list, by setting an index number equal to a different value. 

```
>>>t=[10, 20, 30, 40,50]
>>>t[1]=200
>>>t
[10,200,30,40,50]

```

## Modifying Lists with Operators:

The + operator concatenates lists.

```
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> c = a + b
>>> print(c)
[1, 2, 3, 4, 5, 6]

```

The * operator repeats a list a given number of times.


```
>>> [0] * 4
[0, 0, 0, 0]
>>> [1, 2, 3] * 3
[1, 2, 3, 1, 2, 3, 1, 2, 3]

```

## Removing an item from a List:
Items can be removed from lists by using the del statement. This will delete the value at the index number you specify within a list.

```
>>>t=[10,20,30,40,50]
>>>del t[3]
>>>t
[10,20,40,50]

```




