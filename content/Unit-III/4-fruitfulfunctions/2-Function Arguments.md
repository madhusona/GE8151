---
title: "Function Arguments"
metaTitle: "Python - Function Arguments"
metaDescription: "Python - Function Arguments"
---

It is also possible to define functions with a variable number of arguments.

## Default Argument Values:
The most useful form is to specify a default value for one or more arguments. This creates a function that can be called with fewer arguments than it is defined to allow.

Example
```
def welcome(person_name,message="Good Day!"):
    return person_name+" "+message	

print(welcome('person1'))
print(welcome('person2','how are you'))

Output:

person1 Good Day!
person2 how are you
```
## Keyword Arguments:
In keyword arguments, the caller identifies the arguments by the parameter name. In a function call, keyword arguments must follow positional arguments.

Example:
```
def welcome(person_name,message="Good Day!"):
    return person_name+" "+message	

print(welcome(person_name='person1'))
print(welcome(person_name='person2',message='how are you'))

Output:

person1 Good Day!
person2 how are you
```



