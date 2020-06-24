#17. Write a Python program to find numbers divisible by nineteen or thirteen from a list of numbers using Lambda. Go to the editor

array_nums = range(1,10000)
by_nineteen=list(filter(lambda n:n%19==0,array_nums))
by_thirteen=list(filter(lambda n:n%13==0,array_nums))
print(by_nineteen)
print(by_thirteen)