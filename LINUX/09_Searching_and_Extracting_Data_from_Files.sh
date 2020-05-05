
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

#IO Redirection
#run the commands then save output into a file (New file is created, existing file is overridden
cat web2|grep bol > callResults.txt

#run the commands then append output into a file
cat web2|grep col >> callResults.txt

#run the commands then sort the output, then write into a file
cat web2|grep col| sort > callResults.txt

#Save output to file_havig_apple.txt in the current directory
cat web2 | grep apple > file_havig_apple.txt

#find lines containing "un" inside file apple.txt
grep un < apple.txt

# -E is for searching with regular expression
grep -E "apple" web2

#Any line start with Seed, ^ denotes start of line
cat web2 | grep -E "^seed" web2

#Any lines that ends with seed, $ denotes end of the line
cat web2 | grep -E "seed$"

#Any lines that has apple or seeds
cat web2 | grep -E "seed|apple"

#Any lines that starts with apple or ends with seed
cat web2 | grep -E "^apple|seed$"

#Any lines that has a pattern starts with "a", followed 0 or more number of "p" and ends with "le"
cat web2 | grep -E "^ap*le"

#Any lines that has a pattern starts with "a", followed 1 or more number of "p" and ends with "le"
cat web2 | grep -E "^ap+le"

#Any lines that has a pattern starts with "a", followed 1 or more number of "p" and ends with "le"
cat web2 | grep -E "^ap?le"

#Any lines that has a pattern starts with "a", followed by may be one(0 or 1) "p" and ends with "le"
cat web2 | grep -E "^ap?le"

#Any lines that has a pattern starts with "a", followed by "p" through "z" and ends with "le"
cat web2 | grep -E "^a[p-z]le"


#How many files and folders are in /usr/share?
 ls /usr/share|wc -w  > ~/value.txt
 
#How many unpacked entries are in the log file /var/log/dpkg.log?
 cat /var/log/dpkg.log|grep unpacked| wc -l>>~/values.txt

#What is the total number of entries in /var/log/dpkg.log?
cat /var/log/dpkg.log| wc -l>>~/values.txt

#Use your knowledge of piping and regular expressions to answer the following questions about the /usr/share/dict/words file, and send the output to ~/value.txt:

#How many words start with the letter "x"?
cat /usr/share/dict/words|grep -E "^x"|wc -w

#How many words end with the letter "x"?
cat /usr/share/dict/words|grep -E "x$"|wc -w

#What word in this file starts with "l", ends in "x", and contains a total of 5 characters?
cat /usr/share/dict/words|grep -E "^l...x$"

#How many 3-letter words start with the letters "y" or "z"?
cat /usr/share/dict/words|grep -E "^y..$|^z..$"