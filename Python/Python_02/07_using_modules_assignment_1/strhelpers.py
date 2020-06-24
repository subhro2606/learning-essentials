#!/usr/bin/env python3.7
from random import shuffle as l_shuffle
reverse=lambda s:s[::-1]

def shuffle(s):
    s_list=list(s)
    l_shuffle(s_list)
    return "".join(s_list)

# def shuffle(str_value):
#     str_list = list(str_value)
#     l_shuffle(str_list)
#     return "".join(str_list)