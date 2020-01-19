const Discord = require('discord.js');



exports.run = async (client, message, params, args) => {

  const menü2 = new Discord.RichEmbed()
  .setColor(0x36393e)
      .setAuthor('Kategoriler Yapımcı : By DumPS')
     .addField(`Leroux Komut Menüsü`, `<a:emoji_6:654361680620421120>  **Komutlar Menü 2 **  <a:emoji_6:654361680620421120>  \n \n **istediginiz yazı kopyala yapıstır yapabilirsıni`)
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(menü2);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut2', 'komutlar2', 'command2', 'yardım2', 'help2', 'halp2', 'y2', 'h2', 'commands2'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım2',
    description: 'yardım2',
    usage: 'yardım2'
  };