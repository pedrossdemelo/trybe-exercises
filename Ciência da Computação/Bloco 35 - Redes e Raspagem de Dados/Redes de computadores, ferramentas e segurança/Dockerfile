FROM ubuntu:20.04

EXPOSE 8000:8000

RUN apt-get update && apt-get install iputils-ping -y
RUN apt-get update && apt-get install traceroute -y
RUN apt-get update && apt-get install iptables -y

CMD ["/bin/bash"]