---
title: "GCD"
metaTitle: "Python -  GCD"
metaDescription: "Python - GCD"
---

The greatest common divisor (GCD) of a and b is the largest number that divides
both of them with no remainder.

gcd(m,n)=gcd(n,m%n)<br/>

Base case:<br/> 
gcd(m,0)=m

Program:
```
n1=int(input("Enter a Number"))
n2=int(input("Enter another Number"))
while n2!=0:
  rem=n1%n2
  n1=n2
  n2=rem

print ("GCD of given numbers is:",n1)

Input:
Enter a Number 54
Enter another Number 45

Output:
GCD of given numbers is: 9
```