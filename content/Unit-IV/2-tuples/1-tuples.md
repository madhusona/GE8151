---
title: "Tuples"
metaTitle: "Tuples"
metaDescription: "Tuples"
---

## Tuple Creation:
There are several ways to create a new list; the simplest is to enclose the elements in round brackets ( and )
Example:
```
>>>t=(10, 20, 30, 40,50)
>>>t
(10,20,30,40,50)

```

The elements of a list don’t have to be the same type. The following list contains a string, a float, an integer, and  list:

```
('spam', 2.0, 5, [10, 20])
```

A tuple within another tuple is nested. A tuple that contains no elements is called an empty tuple; you can create one with empty brackets, ().

The function tuple creates a new tuple with no items.

```
>>>t=tuple()
>>>t
()

```

## Indexing Tuple:
Each item in a tuple corresponds to an index number, which is an integer value, starting with the index number 0.
- Any integer expression can be used as an index.
- If you try to read or write an element that does not exist, you get an IndexError.
- If an index has a negative value, it counts backward from the end of the list.
t=(10,20,30,40,50)

## Accessing Items in Tuple:

Item of the list can be accessed by referring  its index number.

```
>>>t=(10, 20, 30, 40,50)
>>>t[1]
20

```
## Modifying Items in Tuple:
Tuples are immutable, you can’t modify the elements. But you can replace one tuple with another

```
>>> t=(10,20,30,40,50)
>>> t=(100,)+t[1:]
>>> t
(100, 20, 30, 40, 50)

```

## Modifying Tuple with Operators:
The + operator concatenates lists.

```
>>> a=(1,2,3)
>>> b=(4,5,6)
>>> c=a+b
>>> c
(1, 2, 3, 4, 5, 6)

```

The * operator repeats a list a given number of times.

```
>>> (0,)*4
(0, 0, 0, 0)
>>> (1,2,3)*2
(1, 2, 3, 1, 2, 3)

```

## Deletion:

Removing individual tuple elements is not possible. It's possible to delete entire tuple by using del statement.

```
>>> t=(10,20,30,40,50)
>>> del t

```

## Traverse:
The most common way to traverse the elements of a tuple is with a for loop.

```
t=(1,2)
for i in t:
    print(i)

Output:
1
2

```

Tuple assignment:
- The left side is a tuple of variables; the right side is a tuple of expressions. Each value is assigned to its respective variable. All the expressions on the right side are evaluated before any of the assignments.

```
>>>a, b = 2+4, 1+1
>>a,b
(6,2)

```
- The number of variables on the left and the number of values on the right have to be the same.

```
>>> a, b = 1, 2, 3
ValueError: too many values 

```
- The right side can be any kind of sequence (string, list or tuple). For example, to split an email address into a user name and a domain.

```
>>> addr = 'monty@python.org'
>>> uname, domain = addr.split('@')
>>> uname
monty
>>>domain
python.org

```

Example 
Swapping of two numbers
```
a=input()
b=input()
print(“Before swapping “,a,b)
a,b=b,a
print(“After swapping “,a,b)


Output:
Before swapping  10 20
After swapping  20 10

```