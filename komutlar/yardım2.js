const Discord = require('discord.js');



exports.run = async (client, message, params, args) => {

  const menü2 = new Discord.RichEmbed()
  .setColor(0x36393e)
      .setAuthor('Kategoriler Yapımcı : By DumPS')
     .addField(`Leroux Komut Menüsü`, `<a:emoji_6:654361680620421120>  **Komutlar Menü 2 **  <a:emoji_6:654361680620421120>  \n \n **|istediginiz yazı kopyala yapıstır yapabilirsıniz.|** sonra ne komut u oldugunu yazın. sonra bunu yapın \n yine aynısı`)
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(menü2);

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