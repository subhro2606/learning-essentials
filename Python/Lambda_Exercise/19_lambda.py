#19. Write a Python program to find all anagrams of a string in a given list of strings using lambda.


from collections import Counter

string_p="panchmeshalitortakri"
print(Counter(string_p))

texts = ["bcda", "abce", "cbda", "cbea", "adcb"]
str_g = "abcd"

print(list(filter(lambda s: Counter(str_g)==Counter(s),texts)))