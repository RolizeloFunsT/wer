const Discord = require("discord.js")

module.exports.run = (client, message) => {
  message.delete(3000)
    var mentionrole = message.mentions.roles.first();
      
    if (!mentionrole) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('#7289DA').setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL).setAuthor("HATA").setDescription(`Rol liste için !rolliste @rol`)).then(m => m.delete(8000))
    const ListEmbed = new Discord.RichEmbed()
.setColor("#7289DA")
    .setTitle(`(${mentionrole.name}) rolündeki kullanıcılar:`)
    .setDescription(message.guild.roles.get(mentionrole.id).members.map(m=>m.user.tag).join('\n'));
message.channel.send(ListEmbed);                    
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rolliste',
  description: '',
  usage: ''
};