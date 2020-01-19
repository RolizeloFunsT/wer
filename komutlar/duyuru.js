const discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('RED')
    .setDescription("Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmanız gerek.")
    message.channel.send(embed)
  } else {
   
  if (args.length < 1) {
    const embed = new discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor('RED')
    .setDescription("Doğru kullanım !duyuru <yazı>")
    message.channel.send(embed)
  }
   
  const embedd = new discord.RichEmbed()
  .setAuthor('📢  Yeni Bir Duyuru var  \n  Duyuru:')
  .setColor('BLUE')
  .setDescription(args.join(' ').split('').join(''))
  message.channel.send(embedd);
  message.delete();
    
    
  }
    
};

exports.conf = {
  aliases: [ 'duyuru' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  category: 'Kullanıcı',
  usage: 'duyuru <yazı>'
};