sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user

#lists the docker processes
sudo docker ps 

sudo yum install git
git clone https://github.com/linuxacademy/content-aws-csa2019.git

cd content-aws-csa2019/lesson_files/03_compute/Topic5_Containers/Docker/

#Make a docker image, it's just a file system with multiple layer
docker build -t containercat .

#View the images
docker images
docker images --filter reference=containercat

#Run the container with container's port 80 mapped to the os port 80
docker run -t -i -p 80:80 containercat

#user name would be the one in docker hub
docker login --username 9874895439
docker images
docker tag add70b0fdded 9874895439/containercat
docker push 9874895439/containercat