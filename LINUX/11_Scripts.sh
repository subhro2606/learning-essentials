
#PATH='/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/cloud_user/bin/'

#!/bin/bash

#These are comments

echo "Please enter your name"
read name
echo -e "Hello $name!\n"

if [ $name == "Michel" ]
then
        echo -e "This is Michel not $name"
else
        echo "Name is not Michel"
fi
