
#Displays information about the CPU
cat /proc/cpuinfo

#Displays info about memeory
free -m

#Persistent Usage	
 df -h | grep -v "/dev/loop*"
 
#Network interface cards 
ifconfig

#Determine How Much Storage Is Available
df -h

#Determine the Number of CPUs/Cores
#Determine the CPU Speed
sudo lshw
cat /proc/cpuinfo
lscpu

#Determine How Much RAM Is Installed
sudo lshw
cat /proc/meminfo
sudo dmidecode

#Determine How Much Swap Is Being Used
free -m

#Determine the BIOS Version
sudo dmidecode
lshw