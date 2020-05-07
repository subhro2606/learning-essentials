#!/usr/bin/env python3.8

my_str= "this is a string"
print("lower() :",my_str.lower())
print("upper() :",my_str.upper())
print("capitlize() :",my_str.capitalize())
print("title() :",my_str.title())


#isascii - Return True if all characters in the string are ASCII, False otherwise.
print("isascii() :",my_str.isascii())

#islower - Return True if the string is a lowercase string, False otherwise.
print("islower() :",my_str.lower().islower())

#isupper - Return True if the string is an uppercase string, False otherwise.
print("isupper() :",my_str.upper().islower())

#istitle - Return True if the string is a title-cased string (all words capitalized), False otherwise.
print("istitle() :",my_str.title().istitle())

#isspace - Return True if the string is a whitespace string, False otherwise.
print("isspace() :"," ".isspace())

#isdecimal - Return True if the string is a decimal string (whole number), False otherwise.
print("isdecimal() :","1".isdecimal())

#isdigit - Return True if the string is a digit string (whole number), False otherwise.
print("isdigit() :","31".isdigit())

#isnumeric - Return True if the string is a numeric string (whole number), False otherwise.
print("isnumeric() :","49".isnumeric())

#isalpha - Return True if the string is an alphabetic string, False otherwise.
print("isalpha() :","addfsa".isalpha())

#isalnum - Return True if the string is an alphanumeric string, False otherwise.
print("isalnum() :","addfsa78978".isalnum())

#isidentifier - Return True if the string is a valid Python identifier, False otherwise. String could be used as a variable, function, or class name.
print("isidentifier() :","1al".isidentifier())
print("isidentifier() :","word".isidentifier())

#isprintable - Return True if the string is printable, False otherwise. Meaning that if the character can't be printed as-is, then it's not printable. So escape characters like \n are considered not printable even though they change how the string is printed.
print("isprintable() :",my_str.isprintable())
print("isprintable() :",(my_str+"\n").isprintable())



phrase="This is a simple phrase"
words=phrase.split()
print(words)
url="https://user.com/user/jimmy"
print(url.split('/'))
user=url.split('/')[-1]
print(user)

print(", ".join(words))

lines = ["First Line", "Second Line", "Third Line"]
lines = '\n'.join(lines)
print(lines)

template="Hello, my name is {}, I really enjoy {}, Have a nice day!"
print(template.format("Subhro","Food"))
template="Hello, my name is {0}, I really enjoy {1}, Have a nice day! -{0}"
print(template.format("Subhro","Food"))


my_str=input("Enter a message: ")
print("Lowercase: ",my_str.lower())
print("Uppercase: ",my_str.upper())
print("Capitalized: ",my_str.capitalize())
print("Title Case: ",my_str.title())
words=my_str.split()
print("Words: ",my_str.split())
sorted_words=sorted(words)
print("Alphabetic First Word: ",sorted_words[0])
print("Alphabetic Last Word: ",sorted_words[-1])
