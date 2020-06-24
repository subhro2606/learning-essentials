#!/usr/bin/env python3.7


#Running a module directly from commandline
#python3.7 -m  module

def extract_upper(phrase):
    """
    Take sthe string and returns the only uppercase letters
    
    The following is a doctest
    >>> extract_upper("Hello There, BOB")
    ['H', 'T', 'B', 'O', 'B']
    """

    return list(filter(str.isupper, phrase))


def extract_lower(phrase):
    return list(filter(str.islower, phrase))

if __name__=='__main__':
    print(f'Hello from string')

print(f"__name__ in string.py {__name__}")