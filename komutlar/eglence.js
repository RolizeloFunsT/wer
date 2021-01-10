const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** ©️ **Roliz Bot ** ©️ **  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/783331666223562787/796050603762778172/roliz.gif")
.setDescription(`

:closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key:

> **» !aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» !balık-tut :** Denizde balık tutarsınız.
> **» !beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» !ara155 :** Polisi aramanıza yarar.
> **» !efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» !ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» !espri :** Bot sizin için espri yapar.
> **» !kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» !kralol :** Kral olmanıza yarar.
> **» !tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» !yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» !kuş-dili-çevirici :** Yazdığınız şeyi kuş diline çevirir.



** :gear: **Bilgilendirme** :gear: **

`)

.setImage("https://cdn.discordapp.com/attachments/783331666223562787/796053557240660028/rolizbanner.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'fun'
};