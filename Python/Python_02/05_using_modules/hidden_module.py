#!/usr/bin/env python3.8

# if we use the below statement inside any script  only 'extract_lower' would be imported
# from module import * 
# However we could use the below statement to import extract_upper
# from module import extract_upper 
__all__=['extract_lower']

#Running a module directly from commandline
#python3.7 -m  module

def extract_upper(phrase):
    return list(filter(str.isupper, phrase))


def extract_lower(phrase):
    return list(filter(str.islower, phrase))

# _ makes the method implicitly hidden, so it can't be imported with a *
def _ext_low(phrase):
    return list(filter(str.islower, phrase))

#print(f"{'Hello from module' if __name__=='__main__' else ''}")
if __name__=='__main__':
    print(f'Hello from hidden_module')

print(f"__name__ in hidden_module.py {__name__}")