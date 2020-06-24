from functools import  reduce
#10. Write a Python program to create Fibonacci series upto n using Lambda. Go to the editor

		
domain=[1,2,5,6,9,78,81]

sum=reduce(lambda acc,num: acc+num,domain,0)
print(sum)


highest=reduce(lambda initial,i:i if i>initial else initial, domain, -99999)
print(highest)


fibonacci=lambda n: reduce(lambda series,_:series+[series[-1]+series[-2]],range(n-2),[0,1])


print(fibonacci(100))