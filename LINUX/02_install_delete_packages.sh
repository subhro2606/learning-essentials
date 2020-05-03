Installing an RPM Package (Majorly for Redhat, Fedora type system)
Yum
/*htop-2.2.0-3.el7.x86_64.rpm this file is present in the working directory*/
/*Install*/
sudo rpm -i htop-2.2.0-3.el7.x86_64.rpm
/*Start htop*/
htop
/*Uninstall*/
sudo rpm -e htop


Installing a DEB Package (Majorly for Debian System, Ubantu) 
apt
/*htop-2.2.0-3.el7.x86_64.deb this file is present in the working directory*/
/*Install*/
sudo dpkg -i htop_2.0.2-1_amd64.deb
/*Start htop*/
htop
/*Uninstall*/
sudo dpkg --remove htop



Compiling from Source

/*Run the following command to extract the archived .tar file in /home/cloud_user*/
tar xzf htop-2.2.0.tar.gz
cd htop-2.2.0
/*Run the configure Script to Prepare the Source for Installation*/
./configure
/*Compile the Source Code into Usable Binaries*/
make
/*Install the Binaries*/
sudo make install
/*Run the htop Utility to Verify That Installation Was Successful*/
htop
Remove the Installation
sudo make uninstall


