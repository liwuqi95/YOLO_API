sudo docker build -t detection -f ./docker/dockerfile .
sudo docker save -o detection.tar detection:latest