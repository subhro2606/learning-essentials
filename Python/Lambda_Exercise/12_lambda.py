from functools import reduce
#12. Write a Python program to rearrange positive and negative numbers in a given array using Lambda.

array_nums = [-1, 2, -3, 5, -7, 8, 9, -10]


rearranged=lambda l: [x for x in l if x<0]+[x for x in l if x>=0]
print(rearranged(array_nums))
