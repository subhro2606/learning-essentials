#!/usr/bin/env python3.8
if 'a'<'b':
    print("a<b Condition was true")

if 'b'<'a':
    print("b<a Condition was true")

if  False:
    print("Was True")
else:
    print("Was False")


name = input("What is your name? ")
if len(name) >= 6:
   print("Your name is long.")
elif len(name) == 5:
   print("Your name is 5 characters.")
elif len(name) >= 4:
   print("Your name is 4 or more characters.")
else:
   print("Your name is short.")

if name=='Subhro':
    print('Hello',name)
else:
    pass


i=int(input("Enter an integer value: "))
if i%3==0 and i%5==0:
    print("FizzBuzz")   
elif i%3==0:
    print("Fizz")
elif i%5==0:
    print("Buzz")
else:
    print(i)