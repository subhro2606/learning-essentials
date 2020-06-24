#!/usr/bin/env python3.8

# * would inport all the methods
#from module import *
from module import extract_lower as ex_lo,extract_upper

name = "Subhrajit Sadhukhan"
print(f"Lowercase letters {ex_lo(name)}")
print(f"Uppercase letters {extract_upper(name)}")