---
title: "String Operations"
metaTitle: "Python - String Operations"
metaDescription: "Python - String Operations"
---

A string is a sequence, which means it is an ordered collection of other values. Strings are immutable.

## Creation:
 
Strings are created by enclosing characters in quotes. Python treats single quotes the same as double quotes. Creating strings is as simple as assigning a value to a variable
Example:
```
fruit = 'banana'
```

## Indexing string:

Each item in a string corresponds to an index number, which is an integer value, starting with the index number 0.
- Any integer expression can be used as an index.
- If you try to read or write an element that does not exist, you get an IndexError.
- If an index has a negative value, it counts backward from the end of the list.
```
fruit='banana'
```

## Accessing Items in String:

A string is a sequence of characters. You can access the characters one at a time with the
bracket operator.
``` 
>>> fruit = 'banana'
>>> letter = fruit[1]
``` 
- The second statement selects character number 1 from fruit and assigns it to letter .
- The expression in brackets is called an index. The index indicates which character in the
sequence you want 

``` 
>>> letter
'a' 
``` 
 
So b is the 0th letter (“zero-eth”) of 'banana' , a is the 1th letter (“one-eth”), and n is the 2th letter (“two-eth”).
 
As an index you can use an expression that contains variables and operators:

``` 
>>> i = 1
>>> fruit[i]
'a'
>>> fruit[i+1]
'n'
```
 
## Modifying Items in String:
Strings are immutable, you can’t modify the elements. But you can replace one string with another
```
s='west'
s='ea'+s[2:]
``` 

## Modifying string with Operators:
The + operator concatenates lists.
```
>>> s='east'
>>> s2='west'
>>> c=s+s2
>>> c
eastwest
```
The * operator repeats a list a given number of times.
```
>>> print(c*2)
eastwesteastwest
```

##Deletion:
Removing individual character is not possible. It's possible to delete entire string by using del statement.


```
>>> s='east'
>>> del s
```

##Traversal:
processing a string one character at a time. Often they start at the beginning, select each character in turn, do something to it, and continue until the end. This pattern of processing is called a traversal.
 
Function that takes a string as an argument and displays the letters  one per line.
``` 
index = 0
while index < len(fruit):
    letter = fruit[index]
    print(letter)
    index = index + 1
```

OR

```
for i in fruit:
    print(i)
```

Function that takes a string as an argument and displays the letters  backwards one per line.
``` 
index = len(fruit) - 1
while index >= 0:
    letter = fruit[index]
    print(letter)
    index = index - 1
```

 
## len 
len is a built-in function that returns the number of characters in a string:
```
>>> fruit = 'banana'
>>> len(fruit)
6
```
