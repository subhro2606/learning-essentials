#!/usr/bin/env python3.8

#Unknown or specific number of times
count=0
while count<10:
    print("Looping")
    count+=1

colors=['blue', 'green', 'red', 'purple']
for color in colors:
    print(color)

point = (2.1, 3.2, 7.6)
for value in point:
    print(value)

ages = {'kevin': 59, 'bob': 40, 'kayla': 21}
for key in ages:
    print(key)

for key, value in ages.items():
    print(key, value)

for letter in "my_string":
    print(letter)

print("Multiples of 4")
counter=1
while counter<50:
    if counter%4==0:
        print(counter)
    counter+=1

print("Odd Numbers")
counter=1
while count<10:
    if count%2==0:
        continue
    print(f"We are counting odd number {count}")



count = 1
while count < 10:
    if count % 2 == 0:
        break
    print(f"We're counting odd numbers: {count}")
    count += 1

colors = ['blue', 'green', 'red', 'purple']
for color in colors:
    if color == 'blue':
        continue
    elif color == 'red':
        break
    print(color)


count=1
while count<4:
    print(count)
    count+=1
else:
    print("While loop completed")

colors = ['blue', 'green', 'red', 'purple']
for color in colors:
    if color =='vermillion':
        print(color, 'is in the list')
        break
else:
    print("Vermillion is not in the list")
    



my_range=range(10)
print(list(my_range))
print(list(range(1,14,2)))

for _ in range(0,4):
    print("Using Range")





