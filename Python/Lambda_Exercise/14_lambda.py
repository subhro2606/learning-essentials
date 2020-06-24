#14. Write a Python program to filter a given list whether the values in the list are having length of 6 using Lambda

weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

print(list(filter(lambda s:len(s)==6,weekdays)))
