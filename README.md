# WhatsApp Perma-Ban Tool

A collection of scripts to lock and report WhatsApp numbers, aiming for a permanent ban. Use at your own risk—violates WhatsApp ToS and may be illegal.

## Features
- OTP Lock: Floods registration requests to lock a number.
- Mass Report: Sends ban scripts to flag the account.
- Proxy Rotation: Changes IP every 5 seconds.
- **Multithreaded Reporting**: Send multiple reports concurrently for increased speed.

## Installation

### General Installation (for most Linux distributions)
1. Clone repo: `git clone https://github.com/Samhax-tech/ripper-samhax-wa.git`
2. Navigate to the repository: `cd ripper-samhax-wa`
3. Install Python dependencies: `pip install requests PySocks --break-system-packages`
4. Add your proxies to `whatsapp_mass_report.py`.

### Kali Linux
1. Update package list: `sudo apt update`
2. Install git: `sudo apt install git -y`
3. Install python3 and pip: `sudo apt install python3 python3-pip -y`
4. Clone repo: `git clone https://github.com/Samhax-tech/ripper-samhax-wa.git`
5. Navigate to the repository: `cd ripper-samhax-wa`
6. Install Python dependencies: `pip install requests PySocks --break-system-packages`
7. Add your proxies to `whatsapp_mass_report.py`.

### Termux
1. Update package list: `pkg update && pkg upgrade -y`
2. Install git: `pkg install git -y`
3. Install python: `pkg install python -y`
4. Clone repo: `git clone https://github.com/Samhax-tech/ripper-samhax-wa.git`
5. Navigate to the repository: `cd ripper-samhax-wa`
6. Install Python dependencies: `pip install requests PySocks --break-system-packages`
7. Add your proxies to `whatsapp_mass_report.py`.

## Usage

To run the Python script:
1. Navigate to the repository directory: `cd ripper-samhax-wa`
2. Run the script: `python3 whatsapp_mass_report.py`
3. Contact owner on Telegram to get the username and password: [Samhax the Ripper](https://t.me/samhax_official)
4. Follow the on-screen prompts to enter the target number, report count, delay, and **number of concurrent threads**.

## Legal Note
Unauthorized use is illegal. For educational purposes only.
