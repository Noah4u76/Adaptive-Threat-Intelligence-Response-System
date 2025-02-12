import nmap

def scan_network(target_ip):
    nm = nmap.PortScanner()
    nm.scan(target_ip, arguments="-sS -Pn")  # Stealth scan, no ping
    return nm.all_hosts()