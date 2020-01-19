const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let user = message.author
  let sebep = args.join(" ")
  let afkneden = args.slice(0).join(' ');
  let name = message.author.username
  if(!message.author.username.startsWith()){
    message.member.setNickname(`[AFK]${message.author.username}`);
  }
    
  if (!sebep) return message.channel.send(`**Bir sebep yazmalısın.**`)
  db.set(`afk_${user.id}`, sebep)
const afkm = new Discord.RichEmbed()
      .setColor('#c7ccd1')
             .setAuthor(`${message.author.username} ${afkneden} Nedeni Dolayısı İle AFK`)
            return message.channel.sendEmbed(afkm)
         
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}