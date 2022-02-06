iptables -A INPUT -p icmp --icmp-type echo-request -j DROP # block all icmp echo requests
iptables -D INPUT -p icmp --icmp-type echo-request -j DROP # remove the rule