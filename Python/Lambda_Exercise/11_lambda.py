#11. Write a Python program to find intersection of two given arrays using Lambda.

array_nums1 = [1, 2, 3, 5, 7, 8, 9, 10]
array_nums2 = [1, 2, 4, 8, 9]


intersection=lambda a,b: [value for value in a if value in b]
print(intersection(array_nums1,array_nums2))

intersect= filter(lambda n: n in array_nums1, array_nums2)
print(list(intersect) )