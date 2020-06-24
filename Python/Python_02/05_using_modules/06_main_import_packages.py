#!/usr/bin/env python3.8
from help.string import extract_upper,extract_lower
#import help.string
from help import variables as extras
import help
print(f"Lowercase letters {extract_lower(extras.name)}")
print(f"Uppercase letters {extract_upper(extras.name)}")
print(f"Uppercase letters {help.string.extract_lower(extras.name)}")

'''
What Is a Package in Python?
A package is a namespace that allows us to group modules together. We create a package in Python by creating a directory to hold our modules and adding a special file named __init__.py. To show how a package can allow us to organize our code even more, let's create a help directory within using_modules. Let's create an empty __init__.py file within that directory.

$ mkdir ~/using_modules/help
$ touch ~/using_modules/help/__init__.py
The __init__.py doesn't need to have anything in it, though we can and will use it later. Next, let's move our help.py file into the help directory and change its name to strings.py since this file holds helper functions completely focused on working with strings. Our extras.py module actually doesn't do anything besides defining variables, so let's move it into help as help/variables.py.

$ cd ~/using_modules
$ mv help.py help/strings.py
$ mv extras.py help/variables.py
We now have a package that contains two modules, but we also broke main.py. Let's change main.py to use our package, instead of the modules that we had before.

~/using_modules/main.py

from help.strings import extract_lower, extract_upper
from help import variables
import help

print(f"Lowercase letters: {extract_lower(variables.name)}")
print(f"Uppercase letters: {extract_upper(variables.name)}")
print(f"From help: {help.strings.extract_lower(variables.name)}")
The things to note here are that we can access the modules within our packages by importing them directly like with variables and by chaining them off of the package name to import entities directly from the child module. Just like we can with a module, we're able to import the package directly.

Running main.py again we should see:

$ python3.7 main.py
Lowercase letters: ['e', 'i', 't', 'h', 'h', 'o', 'm', 'p', 's', 'o', 'n']
Uppercase letters: ['K', 'T']
From help: ['e', 'i', 't', 'h', 'h', 'o', 'm', 'p', 's', 'o', 'n']
What Does __init__.py Do?
The mysterious __init__.py file is used to set up the initialization code for a package, but what does this mean? This means that when the first subpackage or module within the parent package is accessed, then the code within __init__.py gets executed. The primary other thing we can do with our __init__.py is define the __all__ value for when we use from <package> import *. This doesn't immediately make sense because our __init__.py doesn't define anything right now, but we can import parts from our submodules and then make those immediately available if someone imports our package. Let's modify help/__init__.py to do just that.

~/using_modules/help/__init__.py

__all__ = ['extract_upper']

from .strings import *
The syntax of .strings allows us to specify that we want to load the strings module within our package, regardless of what our package is named. This is just a way to be a little more explicit. Let's change our main.py to use this.

~/using_modules/main.py

from help.strings import extract_lower
from help import variables
from help import *
import help

print(f"Lowercase letters (from strings): {extract_lower(variables.name)}")
print(f"Uppercase letters (from package): {extract_upper(variables.name)}")
print(f"Off of help: {help.strings.extract_lower(variables.name)}")
Once again, let's run our script to see that this code works.

$ python3.7 main.py
Lowercase letters (from strings): ['e', 'i', 't', 'h', 'h', 'o', 'm', 'p', 's', 'o', 'n']
Uppercase letters (from package): ['K', 'T']
Off of help: ['e', 'i', 't', 'h', 'h', 'o', 'm', 'p', 's', 'o', 'n']
Implicit Namespace Packages
While the PCAP syllabus doesn't actually mention implicit namespace packages, it is worth noting that they exist. As of Python 3.3, if we're creating a package that doesn't need to do anything with the __init__.py, then we can skip creating the __init__.py entirely and our package will work just fine.
'''