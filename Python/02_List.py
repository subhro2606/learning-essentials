#!/usr/bin/env python3.8
my_str='abcdef'
print(my_str[2:4]) #cd

my_list = ['a','b','c','d','e','f']
#make it ['a','b',1,2,'e','f']
my_list[2:4]=[1,2]
print(my_list)

my_list = ['a','b','c','d','e','f']
#make it ['a','b',1,2,3,4,'e','f']
my_list[2:4] =[1,2,3,4] 
print(my_list)

my_list = ['a','b','c','d','e','f']
#make it ['a','b',1,2,3,'c','d','e','f']
my_list[2:2]=[1,2,3]
print(my_list)

my_list = ['a','b','c','d','e','f']
#make it ['a','d','e','f']
my_list[1:3]=[]
print(my_list)

my_list = ['a','b','c','d','e','f']
#make it ['a','d','e','f',1,2,3,3]
my_list+=[1,2,3,3]
print(my_list)

my_list = ['a','b','c','d','e','f']
#make it ['a','b','c','d','f']
del my_list[4]
print(my_list)

#delet the list
#del my_list
#print(my_list)


my_list=[1,2,3]
#append 4 to the list
my_list.append(4)

#Insert number "0" at 0th position
my_list.insert(0,0)
print(my_list)

my_list=[1,2,3,3,4,5,6]
#Fetches the first index 3
print(my_list.index(3))

#Print True if 9 is in list 
print(9 in my_list)

#Print True if 9 is in list
print(9 not in my_list)

my_list=[9,8,7,4,8,9,5,4,3,9]
#sorts the list in ascending order
print(sorted(my_list))

#sort array in descending order 
print(list(reversed(sorted(my_list))))

#Matrix
my_matrix=[[1,2,3],[9,7,6],[4,6,2]]
#row count
print(len(my_matrix))
#column count
print(len(my_matrix[0]))
#Print Items of a matrix
print(my_matrix[0][1])