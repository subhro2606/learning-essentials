from collections import Counter
import re
#4. Write a Python program to find the occurrences of 10 most common words in a given text. 
text="Welcome to the world of Geeks " \
"This portal has been created to provide well written well" \
"thought and well explained solutions for selected questions " \
"If you like Geeks for Geeks and would like to contribute " \
"here is your chance You can write article and mail your article " \
" to contribute at geeksforgeeks org See your article appearing on " \
"the Geeks for Geeks main page and help thousands of other Geeks. " \

c1=text.split()
c1=Counter(c1)
print(c1.most_common(10))


#Alternate approch using regex to split the text using words, how ever this is the better approach as it extract the words so eliminates any punctuation
words = re.findall('\w+',text)
c1=Counter(words)
print(c1.most_common(10))


#5. Write a Python program that accept some words and count the number of distinct words. Print the number of distinct words and number of occurrences for each distinct word according to their appearance.

words = re.findall('\w+',text)
c1=Counter(words)
print(len(list(c1)))
print(c1)
