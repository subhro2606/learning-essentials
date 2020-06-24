#15. Write a Python program to add two given lists using map and lambda

a = [1, 2, 3]
b = [4, 5, 6]
c = [9,9,9]
sum=list(map(lambda i,j,k:i+j+k,a,b,c))
print(sum)

