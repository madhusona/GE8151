---
title: "Interpreter"
metaTitle: "Python Interpreter"
metaDescription: "Python Interpreter"
---

## What is Python Interpreter?

Python interpreter converts the python code  into the language that the computer’s hardware understands, the computer doesn’t actually understand Python at the lowest level, and Python’s interpreter translates the code into a language the computer does understand—the 0s and 1s, bits and bytes that computers actually run on.

## Interactive Mode Programming
- Interactive mode is a command line shell which gives immediate feedback for each statement, while running previously fed statements in active memory.
- To start interactive mode, simply type “python” without any arguments.
- In this mode the prompts for the next command with the primary prompt, usually three greater-than signs (>>>)

```
# In Windows Environment

C:\Users\Premium>python
Python 3.8.5 (tags/v3.8.5:580fbb0, Jul 20 2020, 15:57:54) [MSC v.1924 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
- Interactive mode allows us to test out and see what Python will do. If we ever feel the need to play with new Python statements, go into interactive mode and try them out.
```
A sample interactive session:

>>> 5
5
>>> print(5*7)
35
>>> "hello" * 4
'hellohellohellohello'
```

## Script Mode Programming

Invoking the interpreter with a script parameter begins execution of the script and continues until the script is finished.Let us write a simple Python program in a script. Python files have extension ** .py ** .  Type the following source code in a test.py file.

```
# File name: test.py

print('Hello World')
```

- The simplest way to execute a script is to provide the script file name as a parameter to the python interpreter

```
python test.py
```

- This will provide the test.py file to the Python interpreter for execution.

output:
```
'Hello World'
```

## Python - IDLE

- IDLE (Integrated Development and Learning Environment) is an integrated development environment (IDE) for Python. The Python installer for Windows contains the IDLE module by default.
- IDLE can be used to execute a single statement just like Python Shell and also to create, modify, and execute Python scripts. IDLE provides a fully-featured text editor to create Python script that includes features like syntax highlighting, autocompletion, and smart indent. It also has a debugger with stepping and breakpoints features.
- To start an IDLE interactive shell, search for the IDLE icon in the start menu and double click on it.
- Execute Python statements same as in Python Interactive Mode
- To execute a Python script, create a new file by selecting File -> New File from the menu.
- Enter multiple statements and save the file with extension .py using File -> Save
- Press F5 to run the script in the editor window. The IDLE shell will show the output.

Reference:
- https://realpython.com/lessons/overview-python-interpreter/
- https://www.tutorialsteacher.com/python/python-idle
