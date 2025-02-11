import requests

# VirusTotal API (Replace with Your API Key)
VIRUSTOTAL_API_KEY = "YOUR_API_KEY"

def check_ip_reputation(ip):
    url = f"https://www.virustotal.com/api/v3/ip_addresses/{ip}"
    headers = {"x-apikey": VIRUSTOTAL_API_KEY}
    response = requests.get(url, headers=headers)
    return response.json()
