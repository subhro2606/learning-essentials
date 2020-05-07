#Gives us the process
ps
  PID TTY          TIME CMD
 2761 pts/0    00:00:00 bash
 2778 pts/0    00:00:00 ps

#Gives us processes and resource usage
top
htop

#Process file systems: (Sudo file system)proc
ls /proc


#Every process has a status file
cat /proc/self/status

#List all process BSD format
ps aux

#List all process Linux format
ps -ef

#Provides information about the attached hardware
ls /sys

#Contains devide files(normally block or character devices)
ls /dev
