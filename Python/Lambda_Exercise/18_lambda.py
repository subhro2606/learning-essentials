#18. Write a Python program to find palindromes in a given list of strings using Lambda. Go to the editor


texts = ["php", "w3r", "Python", "abcd", "Java", "aaa"]
pallindromes=list(filter(lambda s: s[::-1]==s,texts))
print(pallindromes)
