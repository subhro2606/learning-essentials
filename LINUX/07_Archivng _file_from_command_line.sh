 for i in {1..100}; do touch test_file_$i; done

#Archive all files into a new .tar file named "archive.tar" 
# -c create archive
# -x extract archive
# -r append to an archive
# -t lists content of an archive
# -f read from write toa archive

#Create archive.tar
tar -cf archive.tar test_file_*

#Read the tar
tar -tf archive.tar

#Append to the tar
tar -rf archive.tar file*

#Extract specific file
tar -xf archive.tar file1
#Extract specific file using wildcards
tar xf archive.tar  --wildcards 'test_file_3*'

#Extract all files
tar -xf archive.tar 

#Delete specific files from the archive
tar --delete  --file=archive.tar file3

