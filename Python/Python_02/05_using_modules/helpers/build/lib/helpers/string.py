#!/usr/bin/env python3.8


#Running a module directly from commandline
#python3.7 -m  module

def extract_upper(phrase):
    return list(filter(str.isupper, phrase))


def extract_lower(phrase):
    return list(filter(str.islower, phrase))

#print(f"{'Hello from module' if __name__=='__main__' else ''}")
if __name__=='__main__':
    print(f'Hello from module')

print(f"__name__ in module.py {__name__}")