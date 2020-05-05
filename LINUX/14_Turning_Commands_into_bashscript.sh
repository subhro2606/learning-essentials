#Determine What Options Should Be Used with the `ssh` Command
#View the man page for the ssh command, and determine the option to use to disable host key checking.
man ssh
ssh -o StrictHostKeyChecking=no localhost

#Create the below as a script in bin/lab.sh

#!/bin/bash
#!/bin/bash
login_user=cloud_user
if [ ! -n $1 ]
then
        ssh -o StrictHostKeyChecking=no $login_user@$1
fi

#Execute and Verify the Script
chmod u+x bin/lab.sh
./bin/lab.sh 10.0.1.10

#Add the New `bin` Directory to the `PATH` Variable
#Append to the .bashrc file in cloud_user's home directory to add the new bin folder to the PATH environment variable.
echo 'PATH="$HOME/bin:$PATH"' >> .bashrc
#Source .bashrc to pick up the change.
source .bashrc
#Verify that you can run lab.sh without specifying the path to the script.
lab.sh 10.0.1.10