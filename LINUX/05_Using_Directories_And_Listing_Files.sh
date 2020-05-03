#This command prints the environment variable
env 

#Takes make 
cd -to the last working dir

#Take to home
cd ~
cd

#Within cloud_user's home directory, there is a folder named Practice. Within this folder, there is a directory named Test. You will need to view the contents of the Test directory to answer the following questions:

#What is the oldest file located in ~/Practice/Test/var/log/ ?
# --full-time shows the full time
# -A show all files apart from . & ..
# -l shows the long listing
# -t sort by modification time by latest on the top
# -r reverses the listing, so oldest on the top`
ls --full-time -Altr

#What is the largest file in ~/Practice/Test/var/log/ ?
# -S sorts by file size, largest on the top
ls -AlS

#When was the file ~/Practice/Test/sos_commands/networking/netstat_-W_-neopa last modified?
ls --full-time -l ~/Practice/Test/sos_commands/networking/netstat_-W_-neopa

#When was the file ~/Practice/Test/sos_commands/networking/netstat_-W_-neopa last accessed?
ls --full-time -lu ~/Practice/Test/sos_commands/networking/netstat_-W_-neopa

#Use cat and redirection to place the contents of the file Practice/Test/free into a new file named value.txt in your home directory.
cat ../../home/cloud_user/Practice/Test/sys/fs/xfs/stats/stats> ~/value.txt

