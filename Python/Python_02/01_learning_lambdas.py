#!/usr/bin/env python3.7
def square(a):
    return a*a

square_lambda=lambda num:num*num

assert square_lambda(4)==square(4)

