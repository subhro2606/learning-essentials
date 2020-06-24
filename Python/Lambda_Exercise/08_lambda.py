#8. Write a Python program to extract year, month, date and time using Lambda.
import datetime
date_i='20-02-2020'
extract_year=lambda s:s.split('-')[2]
extract_month=lambda s:s.split('-')[1]
extract_day=lambda s:s.split('-')[0]

print(extract_year(date_i),extract_month(date_i),extract_day(date_i),sep="/")


now = datetime.datetime.now()
print(now)
year=lambda n: n.year
month=lambda n: n.month
day=lambda n: n.day
print(day(now),month(now), year(now), sep=".")