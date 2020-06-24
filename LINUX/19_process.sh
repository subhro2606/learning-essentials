#How many processes are currently running?
ps -aux

#What is the current system load?
cat /proc/loadavg
uptime
top

#How many processes are running as cloud_user?
ps -U cloud_user |wc -l

#What is the PID of the xfce4-session process?
ps aux |grep xfce4-session|grep -v grep

#How many threads is the xfce4-session process using?
 cat /proc/1423/status |grep Thread


#(Optional) Write a small shell script to return the number of threads a process—passed as an argument—is running. This script should be created as /home/cloud_user/bin/threads.sh.


