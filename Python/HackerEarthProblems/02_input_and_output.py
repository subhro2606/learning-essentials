#!/usr/bin/env python3.8

#https://www.hackerearth.com/practice/python/getting-started/input-and-output/practice-problems/golf/jadoo-and-dna-transcription/

#Mine
d=input()
r=''
m={'G':'C','C':'G','T':'A','A':'U'}
r+=''.join([m[c] for c in d if c in m])
if len(d)==len(r):
    print(r)
else:
    print('Invalid Input')
	
	
#Best
b=input()
a="GCTA";c="CGAU"
try:print(''.join([c[a.index(i)]for i in b]))
except:print("Invalid Input")