#5. Write a Python program that accept some words and count the number of distinct words. Print the number of distinct words and number of occurrences for each distinct word according to their appearance.

from collections import Counter, OrderedDict
import re
class OrderedCounter(Counter,OrderedDict):
   pass
   
word_array = []

n = int(input("Input number of words: "))

print("Input the words: ")

for i in range(n):
   word_array.append(input().strip())

word_ctr = OrderedCounter(word_array)

print(len(word_ctr))

for word in word_ctr:
   print(word_ctr[word],end=' ')
   


text="Welcome to the world of Geeks " \
"This portal has been created to provide well written well" \
"thought and well explained solutions for selected questions " \
"If you like Geeks for Geeks and would like to contribute " \
"here is your chance You can write article and mail your article " \
" to contribute at geeksforgeeks org See your article appearing on " \
"the Geeks for Geeks main page and help thousands of other Geeks. " \


words = re.findall("\w+",text)

word_ctr=OrderedCounter(words)
print(len(word_ctr))
for word in word_ctr:
   print(word+":",word_ctr[word],end=' ')

