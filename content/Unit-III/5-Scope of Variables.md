---
title: "Scope of  Variables"
metaTitle: "Python - Scope of  Variables"
metaDescription: "Python - Scope of  Variables"
---

- All variables in a program may not be accessible at all locations in that program.
- This depends on where we have declared a variable.
- The scope of a variable determines the portion of the program where we can access a particular identifier.

There are two basic scopes of variables in Python −

- Global variables
- Local variables

| Local Variables | Global Variables |
| -----------| ----------- | 
| Variables are defined inside a function body | Variables are defined outside of any function |
| Local variables can be accessed only inside the function in which they are declared | Global variables can be accessed throughout the program body by all functions. |
| Local variables exist within functions. | Global Variables exist outside of functions. |

Example 1: Printing global variable outside the function
```                           	
glb_var = "global"
def var_function():
	lcl_var = "local"
	print(lcl_var)
var_function()
print(glb_var)
   
Output
local
global
```

Example 2: Printing global variable inside and outside the function
```
glb_var = "global"
def var_function():
    lcl_var = "local"
    print(lcl_var)
    print(glb_var)
var_function()
print(glb_var)

Output
local
global
global
``` 
Let’s look at another example where we use the same variable name for a global variable and a local variable:
```
num1 = 5
def my_function():
    num1 = 10
    num2 = 7
	print(num1)
	print(num2)
my_function()
print(num1)
 
Output
10
7
5
```
Inside the function num1 has the value 10 since it is locally assigned and outside the function num1 has the value 5 since it has global value.

We can create a global variables within a function by using Python’s global statement as follows:
```
```
def new_shark():
    global shark
	shark = "Sammy"
new_shark()
print(shark)
Output:
Sammy
```

