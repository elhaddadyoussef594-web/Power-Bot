const mineflayer = require('mineflayer');

// الاتصال بالسيرفر تلقائياً حسب البيانات المحددة في بيئة التشغيل
const bot = mineflayer.createBot({
  host: process.env.SERVER_IP || 'localhost', // الآي بي الافتراضي أو الممرر
  port: parseInt(process.env.SERVER_PORT) || 25565,
  username: process.env.BOT_NAME || 'PowerBot'
});

bot.on('spawn', () => {
  console.log('PowerBot متصل وجاهز للعمل!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return; // تجاهل رسائل البوت نفسه

  const msg = message.trim().toLowerCase();

  // عند كتابة come في الشات
  if (msg === 'come') {
    // 1. الانتقال الفوري إلى مكان اللاعب
    bot.chat(`/tp PowerBot ${username}`);

    // 2. التحدث والترحيب
    setTimeout(() => {
      bot.chat(`مرحبا بك مع powerbot`);
    }, 800);
  }
});

bot.on('error', err => console.log('حدث خطأ:', err));
bot.on('end', () => console.log('تم الفصل من السيرفر.'));
