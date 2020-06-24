#3. Write a Python program to sort a list of tuples using Lambda.



tuple_list=[("jhontu",49),("fred",25),("Nemai",16)]
print(tuple_list)
print(sorted(tuple_list,key=lambda a: a[1]))

print(tuple_list)
tuple_list.sort(key=lambda a: a[1])
print(tuple_list)