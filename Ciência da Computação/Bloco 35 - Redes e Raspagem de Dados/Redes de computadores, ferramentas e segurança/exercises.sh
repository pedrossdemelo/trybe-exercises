iptables -A INPUT -p icmp --icmp-type echo-request -j DROP # block all icmp echo requests
iptables -D INPUT -p icmp --icmp-type echo-request -j DROP # remove the rule
iptables -A OUTPUT -p tcp --sport 443 -j DROP # block all https traffic
iptables -A OUTPUT -p tcp --sport 80 -j DROP # block all http traffic