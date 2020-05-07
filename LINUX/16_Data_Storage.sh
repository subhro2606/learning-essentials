#System boot Configuration: /boot
#Contains the bootloader(grub), configuration(config) files and parameters(System.map), Linux Kernel(vmlinuz) & initial Ram disk(initrd)
#memtest is for testing ram
#System.map is  a map between the kernel and the known addresses of hardware.
#abi is the application binary interface, which are the kernel "hooks" a program can call to process commands, system libraries, etc. Because these machine language addresses move from time to time, the abi provides a common directory for applications to reference.
#config essentially states whatever modules and kernel settings are available. Usually 'y' - yes, 'n' - no, and 'm' - module available.
#vmcoreinfo is primarily for determining which information shows up during 'core dumps' (crashes).
#vmlinuz is the compressed kernel that your system uses upon boot.
ls /boot
System.map-4.15.0-1021-aws  initrd.img-4.15.0-1021-aws
System.map-4.15.0-1065-aws  initrd.img-4.15.0-1065-aws
System.map-5.3.0-1017-aws   initrd.img-5.3.0-1017-aws
abi-4.15.0-1021-aws         retpoline-4.15.0-1021-aws
config-4.15.0-1021-aws      vmlinuz-4.15.0-1021-aws
config-4.15.0-1065-aws      vmlinuz-4.15.0-1065-aws
config-5.3.0-1017-aws       vmlinuz-5.3.0-1017-aws
grub

#Partition Mount Points: /etc/fstab
#Contains list of partitions to mount automatically and where they mount the file system
cat /etc/fstab
#Gives the block ids
blkid

#User Attributes: /etc/passwd
#Contains list of local users and their attributes
cat /etc/passwd
#<username>:<password>:<userid>:<groupid>:<long name>:<home directory>:<login shell>
#cloud_user:x:1001:1001::/home/cloud_user:/bin/bash

#Groups: /etc/group
#Contains list of local users, groups and attributes
cat /etc/passwd
#<groupname>:<password>:<groupid>:<users[]>
#lxd:x:108:user,cloud_user,ubuntu

#Hosts File: /etc/hosts
#Contains list of IP addresses and the hostname we want the system to associate with them
cat /etc/hosts
# 127.0.0.1 localhost
# Cloud Server Hostname mapping
# 172.31.105.131   subhro1c.mylabserver.com

#DNS server: /etc/resolv.conf
#DNS server is specified here
cat /etc/resolv.conf

#Application Configuration: /etc/<Application>
#Applications place their resppective configuration files in the /etc directory, normally as a .conf file
ls /etc/

#RAM & Kernel Data Structure:  /sys
#Export of the kernel datastructure and their attributes and link between them in the user space that we are in
ls /sys
#sysfs is the ram based file system, lives completely on ram
#sysfs is the virtual file system and its use is to export information about the various kernel subsystem hardware devices and their drivers 
mount | grep sysfs
#sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)


