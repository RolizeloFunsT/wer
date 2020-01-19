const Discord = require('discord.js');



exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393e)
      .setAuthor('Kategoriler Yapımcı : By DumPS')
      .addField(`Leroux Komut Menüsü`, `**Komutlar** \n  \n **| !!eglence |** yazarak eglence komutlarına ulaşa bilirsiniz. \n **| !!yetkili |** yetkili komutlarını görürsünüz. \n **| !!moderasyon |** !!moderasyon yazarak moderasyon komutlarına erişebilirsiniz.  `)
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };