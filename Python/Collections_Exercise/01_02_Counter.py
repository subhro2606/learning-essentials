
#1. Write a Python program that iterate over elements repeating each as many times as its count.

from collections import Counter

c=Counter()

print("Initial :",c)

c.update('abcdaab')
print(c)

c.update({'a':90,'b':89})

print(c)
c.update('abcdaab')
print(c)



#Actual Solution

c=Counter(p=10,c=42,d=97)
print(list(c))
print(list(c.keys()))
print(list(c.elements()))
print(dict(c))




#2. Write a Python program to find the most common elements and their counts of a specified text.

c1 = Counter('Pythoning the shit out of it.') 
print("Most common three characters of the said string:")

print(c1.most_common(3))



