const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

    const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.Com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.Com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor. <a:yesiltik:663730773156691979>")
        .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor. <a:mesgul:663730097722884099>")
        .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklamtara', 'reklamara', 'reklamtaraması'],
    permLevel: 1
}

exports.help = {
    name: 'reklam-taraması',
  category: 'yetkili',
    description: 'Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.',
    usage: 'reklam-taraması'
}