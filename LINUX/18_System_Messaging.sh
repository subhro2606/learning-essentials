
#Kernel Ring Buffer(It's of constant size) is printed, which holds messages related to operation of the kernel, Gives us the kernel, hardware related messages
dmesg
dmesg | grep IPv
#USB relared info
dmesg | grep -i usb
#Memory info
dmesg | grep -i memory



#Log Daemon 
#System Logging Protocol: syslog, rsyslogd
#Syslog is a service that performs log messages= collection

#General Purpose System logs & Messages
/var/log/messages

#For Debain-based systems
/var/log/syslog

#Authenticaion logs
/var/log/suth.log

#For Redhat based systems
/var/log/secure

#System boot logs
/var/log/boot.log


crontab -l
cat /etc/crontab
crontab -e
#Cron job logs
/var/log/cron.log

#Kernel logs
/var/log/kern.log

#Authenticaion failure logs 
/var/log/faillog


