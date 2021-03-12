---
title: "Variables"
metaTitle: "Python Variables"
metaDescription: "Python Variables"
---

## Variables 
- Variables are defined as reserved memory locations to store values. 
- Based on the data type of a variable, the interpreter allocates memory and decides what can be stored in the reserved memory. 
- Therefore, by assigning different data types to the variables, we can store integers, decimals or characters in these variables.
 
## Rules for Naming Variables
- Variable names can contain letters,symbols like underscore ( __ ) and numbers, 
- They begin with a letter not numbers.
- Both uppercase and lowercase letters are different
- Keywords cannot be used as variable names.

** Example for valid identifier **<br />
abc, xy12, good_start <br />

** Example for non-valid identifier **<br />
12xy, x$y
 
## Assigning Values to Variables
- Python variables do not need explicit declaration to reserve memory space. 
- The declaration happens automatically when we assign a value to a variable. 
- The equal sign = is used to assign values to variables.
- The operand to the left of the = operator is the name of the variable and the operand to the right of the = operator is the value stored in the variable. 

** example: **
```
counter=100# An integer assignment
miles=1000.0# A floating point
name="John"# A string
```
 
## Multiple Assignment
Python allows us to assign a single value to several variables simultaneously.
** Example **
```
a = b = c =1
```
Here, an integer object is created with the value 1, and all the three variables are assigned to the same memory location. 
We can also assign multiple objects to multiple variables.
** For example **
```
	a, b, c =1,2,"john"
```
Here, two integer objects with values 1 and 2 are assigned to the variables a and b respectively, and one string object with the value "john" is assigned to the variable c.
 