
#Creates testdir2 in the current folder
mkdir testdir2

#Copy contents of testdir/ to testdir3; -r is used for recursion
cloud_user@subhro1c:~$ cp -r  testdir/ testdir3

#Move contents of testdir3 to testdir2, and delete testdir3
mv testdir3 testdir2

#Updates the last accessed time stamp of a file
touch file5

#display contents of a file
cat file5

#Renames testdir to "test". With -T it treats it like a normal file, so that directory is renamed even if there are files/folders inside it
mv -T testdir test

#determines the type of the file
file file1

#Removes file1
rm file1

#Creates the directory tree
mkdir directory/subdir


#Creates 2 directories New & Folder
mkdir New Folder

#Removes the directories New & Folder
rm -r New Folder

#Creates a directory "New Folder"
mkdir New\ Folder

#Lists the block
cloud_user@subhro1c:~$ ls block
 
#File System Details, ext4 is a case sensitive file system
cat /etc/fstab

####GLOBBING###
#In a Directory that has File  f3  f4  f5  fil1  file  file2  file3  file4
# ? Matches a single character
ls file? #So this returns file2  file3  file4
ls ????? #file2  file3  file4
ls ?? #f3  f4  f5

# * Matches any number of character
ls fil* #fil1  file  file2  file3  file4
ls * #File  f3  f4  f5  fil1  file  file2  file3  file4

#Create a thousand file with names matching pattern file_[1-1000] 
for i in {1..1000}; do touch file_$i; done
 
# [] Matches a character  in a range
ls ????[1-3] #file2  file3
ls ????[3-9] #file3  file4
ls *[[:digit:]] # Same as [0-9] :Starts with anything ends with a digit: f3  f4  f5  fil1  file2  file3  file4
ls [[:upper:]]* # Same as [A-Z] :Starts with an upper case charcter and ends with anything: File
ls [[:lower:]]* # Same as [a-z] :Starts with an lower case charcter and ends with anything: f3  f4  f5  fil1  file  file2  file3  file4
ls [[:alpha:]][3-9] #Same as [A-Za-z] :Starts with an alpha charcter and ends with a number within 3 to9 : f3  f4  f5

# ^ Used to match Starting Character
# $ Used to match ending character
# {} Used to match more than one pattern
# | Used for applying more than one condition

#Delete file with matching pattern
rm file_*



#Copy ~/Practice/Test to ~/Report/.
cp -r ~/Practice/Test ~/Report
#Rename and move ~/Report/sos_commands/filesys/mount_-l to ~/Report/mounts.txt.
mv ~/Report/sos_commands/filesys/mount_-l ~/Report/mount.txt
#Remove the following files and folders within ~/Report/:
#etc/selinux/
rm -r etc/selinux/
#var/log/boot.log
rm var/log/boot.log
#Any files in proc/ that are or begin with a number
rm -r  proc/[0-9]*
#Any files in etc/ that end in .conf
rm -rf etc/*.conf
#Any files in sys/module that start with ip6t
rm -rf sys/module/ip6t*
Create a new file named Done.txt in ~/Report/.
touch ~/Report/Done.txt