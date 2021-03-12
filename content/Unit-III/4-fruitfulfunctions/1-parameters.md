---
title: "Parameters (Formal parameter) and Arguments (Actual parameter)"
metaTitle: "Python - Parameters (Formal parameter) and Arguments (Actual parameter)"
metaDescription: "Python - Parameters (Formal parameter) and Arguments (Actual parameter)"
---

Some functions require arguments. 

For example, when you call math.sqrt you pass a number as an argument. Some functions take more than one argument: math.pow takes two, the base and the exponent. 

Inside the function, the arguments are assigned to variables called parameters. Here is a definition for a function that takes an argument

```
def print_twice(bruce): 
    print(bruce) 
    print(bruce) 
```

This function assigns the argument to a parameter named bruce. When the function is called, it prints the value of the parameter (whatever it is) twice. This function works with any value that can be printed.


```
>>> print_twice('Spam') # Spam is an argument
Spam 
Spam 
>>> print_twice(42) # 42 is an argument
42 
42 
>>> print_twice(math.pi)  # math.pi is evaluated and the value is an arguement
3.14159265359 
3.14159265359
```

You can also use a variable as an argument
```
>>> michael = 'Karpagam Institute of Technology.' 
>>> print_twice(michael) 
Karpagam Institute of Technology. 
Karpagam Institute of Technology.
```

