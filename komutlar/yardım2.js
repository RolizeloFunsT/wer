const Discord = require('discord.js');



exports.run = async (client, message, params, args) => {

  const menü2 = new Discord.RichEmbed()
  .setColor(0x36393e)
      .setAuthor('Kategoriler Yapımcı : By DumPS')
     .addField(`Leroux Komut Menüsü`, `<a:emoji_6:654361680620421120>  **Komutlar Menü 2 **  <a:emoji_6:654361680620421120>  \n \n **!!duyuru |** İstediğiniz şeyi duyurur. \n **!!sikayet |** Kullanıcıyı Yetkiliye Bidirmenizi Sağlar \n **!!uyar |**    İstediğiniz kişiyi uyarır \n **!!mute |** Etiketlenen Kişiye Mute Atar \n **!!unmute |** Etiketlenen Kişinin Mutesini Geri Alır \n **!!talep |** Destek talebi açar \n **!!say |** Sunucudaki üye sayısını gösterir \n **!!reklam-taraması |** Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar \n **!!oylama |** Oylama yapmanızı sağlar \n **!!kaccm |** Malafatını Söyler \n **!!havadurumu |** hava durumunu gösterir \n **!!bansorgulama |** Ban sorgulama yaparsınız \n **!avatar |** istediğiniz kullanıcının avatarını gösterir \n **!!afk |** AFK olunca seni etiketleyen kişiye sebebini yazar \n **!!otorol |** Üye girince otomatik rol verir !!otorol ayarla @etiket #kanal \n **!!terfi |** !!terfi @etiket yazarak terfi edebilirsiniz \n **!!çayaşekerat |** !!çayaşekerat yazarak çayınıza şeker atabilirsiniz`)
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