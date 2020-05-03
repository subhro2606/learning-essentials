
#List Free disk space
df -h

#Lists all the block devices
lsblk


#Create 10 big files
for i in {1..10}; do cp /usr/share/dict/web2 ~/jio/file_$i; done


#Creates a .tar file
tar cf archve.tar file_*

# gzip : -z : default compression used via -z is gzip, good balance between speed & size reduction
#gzip & unzip can be used where the level of compression can be used
tar czf archive.tar.gz file_*

# bzip2: -j : alternative compression algorithm used via -j, typically slower than gzip due to high compression(In this case we may not see a visbile difference as gzip is largley optimized for text files and here we are compressing text files, but incase of video files, there would have been a visible reduction in size while compressing with bzip2 algorithm)
tar cjf archive.tar.bz2 file_*

# zip: algoithm used by zip command, and all-in-one compression & archiving utility popular with other OS
zip -r archive.zip file_*


ls -alsh archiv*
 24M -rw-rw-r-- 1 cloud_user cloud_user  24M Apr 29 17:29 archive.tar
8.2M -rw-rw-r-- 1 cloud_user cloud_user 8.2M Apr 29 17:36 archive.tar.bz2
7.2M -rw-rw-r-- 1 cloud_user cloud_user 7.2M Apr 29 17:32 archive.tar.gz
7.2M -rw-rw-r-- 1 cloud_user cloud_user 7.2M Apr 29 17:42 archive.zip

ls -als archiv*
24300 -rw-rw-r-- 1 cloud_user cloud_user 24883200 Apr 29 17:29 archive.tar
 8368 -rw-rw-r-- 1 cloud_user cloud_user  8565686 Apr 29 17:36 archive.tar.bz2
 7348 -rw-rw-r-- 1 cloud_user cloud_user  7520326 Apr 29 17:32 archive.tar.gz
 7348 -rw-rw-r-- 1 cloud_user cloud_user  7521174 Apr 29 17:42 archive.zip
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 #You have been asked to create two archives of the folder ~/Practice and work with them as follows:

#Create a normal archive of ~/Practice without any compression and name it archive.tar.
tar -cf archive.tar Practice/

Add the file ~/extra.txt to archive.tar.
tar -rf archive.tar extra.txt

Create a gzip compressed archive and name it archive.tgz.
tar -czf archive.tgz Practice

Use gzip to compress archive.tar with maximum compression, and compare the file sizes.
gzip -9 archive.tar

Extract the file Practice/Test/version.txt from archive.tar.gz
tar -xzf archive.tar.gz Practice/Test/version.txt

