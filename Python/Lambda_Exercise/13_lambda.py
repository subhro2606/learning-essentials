#13. Write a Python program to count the even, odd numbers in a given array of integers using Lambda. Go to the editor

array_nums = [1, 2, 3, 5, 7, 8, -9, 10]

even= lambda arr: filter(lambda n:n%2==0,arr)
odd= lambda arr: filter(lambda n:n%2==1,arr)

print("Odd :",len(list(odd(array_nums))))
print("Even : ",len(list(even(array_nums))))