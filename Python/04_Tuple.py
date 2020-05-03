#!/usr/bin/env python3.8
point=(3.2,5.8)
print(point)
point3_d=point+(9.6,)
print(point3_d)
a,b,c=point3_d
print("a=",a,"b=",b,"c=",c)

print("My name is: %s %s" % ("Keith", "Thompson"))


person =("Subhrajit Sadhukhan",49,"+27 79710 619")
person2 =("Shaw Mendy",21,"+27 79756 0078")
print(person[0])
print(person2[0])


my_list = [1,4,9]
list_in_a_tuple =(my_list, 78)
print("List in a tuple:",list_in_a_tuple)
my_list.append(98)
print("List in a tuple:",list_in_a_tuple)

my_tuple=(8,7,9)
tuple_in_a_list=[my_tuple, 78,89]
print("Tuple in a list:",tuple_in_a_list)