const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("Kanalın yeni adının ne olacağını yazmalısın.");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni ismi #${args} olarak ayarlandı. Komutu yeniden kullanarak kanal ismini tekrardan değiştirebilirsin.`))
  .catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalismideğiş','kanal-ismideğiş','kanalismi-değiş'],
  permLevel: 2
};

exports.help = {
  name: 'kanalismideğiş',
  description: 'Geçerli kanalın ismini değiştirir.',
  usage: 'kanalismideğiş'
};