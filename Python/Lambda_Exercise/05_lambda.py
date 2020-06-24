#5. Write a Python program to filter a list of integers using Lambda. Go to the editor

domain=[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]

filter_num=lambda n: n%5==0
print(list(filter(filter_num,domain)))