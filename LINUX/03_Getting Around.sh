#a is for all, l or long listing, s for size, h for human intelligible
ls -alsh

#assign value to a variable 
test_variable="This is a variable"
#Print the variable
echo $test_variable
#Lists the current user's home directory
echo $HOME 
#Lists the primary promt String
echo $PS1 
# a colon separated list of directories where the shell looks for commands
echo $PATH
#assigns the output of whatever command is inside() to var1
var1=$(ls)
echo $var1
#back slash treats special characters following it as special character without double quotes
var1=some\ value
echo $var1
some value
echo "This is a \"Quote\""
This is a "Quote"
#We can use variables inside Double Quotes, as it preserves everything apart from variables
echo "this is $var1"
this is some value
#back slash treats special characters following it as special character without double quotes, we can add variables as well
echo this\ is\ $var1
this is some value
#Single Quotes preserves all characters
echo 'this is $var1'
this is $var1
'this\ is\ $var1'
this\ is\ $var1



###########################Command Line Basics######################################
 
 #Move to current directory
 cd ~
 cd
 #List current directory
 pwd
 #Current logged in Users
 w
 #last logins
 last
 #Save the details of current logged in users in log.txt
 w>log.txt
 #Append details of last logins to log.txt
 last>>log.txt
 #view details of log.txt
 cat log.txt
###########################Command Line Variables######################################
#Lists all the environment variables
env
#Appending to the Path variable, this appends the <home directory>/scripts to the Path
PATH=$PATH:$HOME/scripts
#source is a shell built-in command which is used to read and execute the content of a file(generally set of commands), passed as an argument in the current shell script. The command after taking the content of the specified files passes it to the TCL interpreter as a text script which then gets executed. If any arguments are supplied, they become the positional parameters when filename is executed. Otherwise, the positional parameters remain unchanged.
#.profile is a script run every time we login, so to make the changes in Path permanent we update it
echo 'PATH="PATH=$PATH:$HOME/scripts"'>>.profile
source .profile
test.sh
###########################Command Line Quoting######################################
#Set variable1 to This is 'just' a "test".
variable1="This is 'just' a \"test\"."
#Set variable2 to This is a backslash "\" and this is a single quote '.
variable2="This is a backslash \"\\\" and this is a single quote '."
#Set variable3 to 3 double quotes """, and 3 single quotes ''', and three backslashes \\\..
variable3="3 double quotes \"\"\", and 3 single quotes ''', and 3 backslashes \\\\\\\\\."
#Set variable4 to This is what a newline character looks like \n, it will create a new line..
variable4="This is what a newline character looks like \\\n, it will create a new line."
#Output value of variable1, variable2, variable3 & variable4 in a file. -e adds a newline after each execution
echo -e $variable1 > value.txt
echo -e $variable2 >> value.txt
echo -e $variable3 >> value.txt
echo -e $variable4 >> value.txt








