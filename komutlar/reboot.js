const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
if(message.author.id !== ayarlar.sahip) if(message.author.id !== ayarlar.sahip2) return message.channel.send('**`Bu Komutu Sadece Yapımcım Kullanabilir!`**')
  message.channel.sendMessage(' **Yeniden Başlamamı İstiyor Musun Sahip?**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **Hemen Yeniden Başlıyorum**').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `Yeniden Başlama İşlemini İptal Ettim` ');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel:4
};

exports.help = {
  name: 'reboot',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
