#!/usr/bin/env python3.8


print("Import 'module' in 'main'")
#import module
from hidden_module import * #only extract_lower is imported
from hidden_module import extract_upper #extract_upper is imported
from hidden_module import _ext_low #_ext_low is not imported by default hence we need to explicitly import it

print("Import 'extras' in 'main'")
import extras

print(f"__name__ in main.py {__name__}")

print(f"Lowercase letters {extract_lower(extras.name)}")
print(f"Uppercase letters {extract_upper(extras.name)}")
print(f"Uppercase letters {_ext_low(extras.name)}")

