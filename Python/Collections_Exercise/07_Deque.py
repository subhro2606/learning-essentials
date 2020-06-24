#7. Write a Python program to create a deque and append few elements to the left and right, then remove some elements from the left, right sides and reverse the deque. 

from collections import deque

d1=deque([4,8,9,6,4,7,5,1,5,7])
#Pops 7 from right
d1.pop()
#Adds 4 to the right
d1.append(4)
#Deletes from the left
d1.popleft()
#Adds 9 to the left
d1.appendleft(9)

print(list(d1))