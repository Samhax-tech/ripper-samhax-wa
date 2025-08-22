import requests
import time
import random

ban_scripts = [
    "🔥👅Unete al mejor grupo🍆con todos los👉🏿👊🏾💦 Packs CP y MORRITAS😋EN LÍNEA para😈 tener chat 💯🔥 y video llamada🔥🥵 AHORA⬇️⬇️⬇️⬇️⬇️⬇️⬇️ https://wlhatt.life/morritas-cp/+97256-883-8088P",
    # Add more ban scripts here if needed
]

# User-provided proxies
proxies = [
    "HTTP://108.162.192.173:80",
    "HTTP://108.162.193.160:80",
    "HTTP://1.55.193.211:16000",
    "HTTP://108.162.192.12:80",
    "HTTP://108.162.192.0:80",
    "HTTP://108.141.130.146:80",
    "HTTP://101.255.32.42:8080",
    "HTTP://108.162.192.185:80",
    "HTTP://108.162.192.194:80",
    "HTTP://1.20.207.7:8080",
    "SOCKS4://1.52.17.239:80",
    "SOCKS4://1.124.244.217:1080",
    "SOCKS4://1.52.215.170:10007",
    "SOCKS4://101.22.216.80:80",
    "HTTP://1.52.198.221:16000"
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

def mass_report(target, report_count, delay):
    for i in range(report_count):
        proxy = get_proxy()
        script = random.choice(ban_scripts)
        try:
            response = requests.post(
                'https://api.whatsapp.com/v1/report',
                json={'target': target, 'reason': 'inappropriate', 'message': script},
                headers={'User-Agent': 'WhatsApp/2.25.7 Android/14'},
                proxies=proxy,
                timeout=10 # Add a timeout for requests
            )
            response.raise_for_status() # Raise an exception for HTTP errors
            print(f"Report {i+1} sent to {target} successfully using proxy {proxy['http']}")
        except requests.exceptions.RequestException as e:
            print(f"Report {i+1} failed for {target} using proxy {proxy['http']}: {e}")
        except Exception as e:
            print(f"An unexpected error occurred for report {i+1}: {e}")
        time.sleep(delay)  # Configurable delay between reports

if __name__ == "__main__":
    username = input("Enter username: ")
    password = input("Enter password: ")

    if username == "Samhax" and password == "sam12":
        print("Authentication successful!")
        target = input("Enter target number (e.g., +1234567890): ")
        try:
            report_count = int(input("Enter number of reports to send (e.g., 50): "))
            delay = int(input("Enter delay between reports in seconds (e.g., 5): "))
        except ValueError:
            print("Invalid input. Using default values: 50 reports, 5 seconds delay.")
            report_count = 50
            delay = 5
        mass_report(target, report_count, delay)
    else:
        print("Authentication failed. Exiting.")


