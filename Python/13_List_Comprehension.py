#!/usr/bin/env python3.8
from loops import my_range


colors = ['blue', 'green', 'red', 'purple','orange','yellow']
upper_case_color=[color.upper() for color in colors]
print(upper_case_color)

warm_colors =[color.upper() for color in colors if color in ['red','orange','yellow']]
print(warm_colors)


#Lab#
my_range=range(int(input("Enter a Number :"))+1)
for i in my_range:
    if i%3==0 and i%5==0:
        print("FizzBuzz")   
    elif i%3==0:
        print("Fizz")
    elif i%5==0:
        print("Buzz")
    else:
        print(i)
