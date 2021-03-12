---
title: "String Methods"
metaTitle: "Python - String Methods "
metaDescription: "Python - String Methods"
---

## upper():
The method upper takes a string and returns a new string with all uppercase letters.
```
>>> word = 'banana'
>>> new_word = word.upper()
>>> new_word
'BANANA'
```


## lower():
The method lower takes a string and returns a new string with all lowercase letters.
```
>>> word = 'BANANA'
>>> new_word = word.lower()
>>> new_word
'banana'
```



## find():
The method find search for a specific character or characters in a string.
```
>>> word = 'banana'
>>> index = word.find('a')
>>> index
1
>>> word.find('na')
2
```
By default, find starts at the beginning of the string, but it can take a second argument, the index where it should start: 
```
>>> word.find('na', 3)
4
```

## count()
The method count adds up the number of times a character or sequence of characters appears in a string.
```
>>> s = "The the"
>>> s.count("t")
1
```

## capitalize()

This method capitalize the first character and the remaining characters in lowercase format.
```
>>> s=”west”
>>> new_s = s.capitalize()
>>> new_s
West
```
## isalnum():
The method isalnum() checks whether the string consists of alphanumeric characters.
```
>>> str='sadsaf12412'
>>> print(str.isalnum())
True 
```
## isalpha(): 
The method isalpha() checks whether the string consists of alphabetic characters only.
```
>>> s="dhghg66"
>>> print(s.isalpha())
False 
```






