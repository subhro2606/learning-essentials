#!/usr/bin/env python3.8
print("Import 'module' in 'main'")
#import module
from module import *
print("Import 'extras' in 'main'")
import extras
print(f"Lowercase letters {extract_lower(extras.name)}")
print(f"Uppercase letters {extract_upper(extras.name)}")