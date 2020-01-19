const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
    .setTitle('• Bot Sahibi \n| DumPS#9337;')
    .addField('• PİNG Gecikme: ', client.ping + 'ms')
    .addField('• Çalışma Süresi: ', `${duration}`)
    .addField('• Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField('• Kanallar Kanallar:', client.channels.size)
    .addField('• Sunucular:', client.guilds.size)
    .addField('• Bellek Kullanımı', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField('• Discord.JS sürüm', `Discord.js`)
    .addField(`Discord.js sürümü:`, Discord.version)
      .addField(':paperclip: Botun Başlanma Zamanı:', "Bot **12.01.20**'de yapılmaya başlanmıştır")
    .setFooter('Leroux ', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik','i'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Botun İstatiklerini Gösterir',
  usage: 'i'
};