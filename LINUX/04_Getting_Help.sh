#man is used to view the man pages of a command
#Search can be done in a manpage using "/" ; navigating forward to the occurence can be done using "n", backword using "N"
man ls
#Search through all manpages for "block"
man -k block
apropos block
#Provide a much more detailsed & robust documentation, if no info is present, it pulls in information from man pages
info


#count number of lines
wc -l longfile.txt
#Determine the nimber of characters in the longest line
wc -L longfile.txt
#Determine number of characters in the file
wc -m longfile.txt