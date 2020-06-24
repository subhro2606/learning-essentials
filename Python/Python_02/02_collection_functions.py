#!/usr/bin/env python3.8

from functools import  reduce
'''
f(x)=1+x
Domain: [1,2]
Range: [2,3]
'''
domain=[1,2,5,6]
#f(x)=x*2
our_rage=map(lambda num: num*2, domain)

print(list(our_rage))

domain=[1,2,5,6,9,78,81]

evens=filter(lambda num : num%2==0,domain)
print(list(evens))

the_sum=reduce(lambda acc, num:acc+num, domain,0)
print(the_sum)

max=reduce(lambda acc,item : item if item > acc else acc,domain,-999999)
print(max)

words=['Boss','a','Alfred','fig','Daemon','dig']
print("Sorting by default")
print(sorted(words))

"my_str".lower()
str.lower("my_str")
print("Sorting with a method")
words.sort(key=str.lower, reverse=True)
print(words)

print("Sorting with Lambda")
print(sorted(words, key=lambda s:s.lower()))



print("Conditional Expressions")

print("something") if 1 > 2 else print("something else")
print("something" if 2 > 1 else "something else")


my_var= 49 if 1>2 else 9
print(my_var)