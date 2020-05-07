#! /usr/bin/env python3.8

ages={'kevin':45,'alex':58}
print(ages['kevin'])
ages['kayla']=21
ages['kevin']=60
print(ages)
del ages['kevin']
print(ages)

print('kevin' in ages)
print('kayla' in ages)

#instantiate using dict class
weight=dict(kevin=192,alex=200,kayla=145)
print(weight)

#instantiate using dict class using list of tuples
colors=dict([('kevin', 'blue'), ('bob', 'green'), ('kayla', 'red')])
print(colors)

#keys of the dict
print(list(colors.keys()))

#values of the dict
print(list(colors.values()))

#items of the dict in a list of tuple
print(list(colors.items()))
