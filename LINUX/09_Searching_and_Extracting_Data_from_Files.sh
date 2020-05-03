
#Search web2 file for all lines having "nibs"
grep nibs web2

#Search with expression
grep nibs -E ^Mo web2

#Piping output of web2, then grep the output to match pattern "Aba"
cat web2|grep Aba

#print number of lines in web2
wc -l web2

#Piping output of web2, then grep the output to match pattern "Aba", then counting number o words
cat web2|grep Aba|wc -l

#Runs the last command that was run starting with "wc"
!wc
wc -l web2
234937 web2

#Runs the last command that was run starting with "cat"
!cat
cat web2|grep Aba|wc -l
11

#find the home directory of cloud_user
cat /etc/passwd |grep cloud_user|cut -d: -f6


#run the commands then save output into a file (New file is created, existing file is overridden
cat web2|grep bol > callResults.txt

#run the commands then append output into a file
cat web2|grep col >> callResults.txt

#run the commands then sort the output, then write into a file
cat web2|grep col| sort >callResults.txt