#!/usr/bin/env python3.8

y=5
def set_x(y):
    print("Inner y",y)
    x = y
    y=x

set_x(10)
print("Outer y",y)


if 1 < 2:
    x = 5

while x < 6:
    print(x)
    x += 1

print(x)