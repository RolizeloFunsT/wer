const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** ©️ **Roliz Bot (V12)** ©️ **]  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail('https://cdn.discordapp.com/attachments/783331666223562787/796050603762778172/roliz.gif')
.setDescription(`

 :closed_lock_with_key: **Moderasyon Komutları** :closed_lock_with_key: 

> **» !duyuru** *BAKIMDA*
> **» !çekiliş** *BAKIMDA*
> **» !bot-bilgi**
> **» !ever-here-engel**
> **» !isim-değiştir**
> **» !kullanıcı-bilgi**
> **» !küfür-engel**
> **» !link-kısalt** *BAKIMDA*
> **» !modlog**
> **» !otorol** *BAKIMDA*
> **» !ping**
> **» !prefix**
> **» !reklam-engel**
> **» !rol-al** *BAKIMDA*
> **» !rol-ver** *BAKIMDA*
> **» !rol-bilgi** *BAKIMDA*
> **» !sa-as**
> **» !sayaç-ayarla** *BAKIMDA*
> **» !sayaç-kanal-ayarla** *BAKIMDA*
> **» !sunucu-bilgi**
> **» !sunucu-kur**
> **» !temizle**
> **» !üye-durum** *BAKIMDA*
> **» !yavaş-mod**

** :gear: **Bilgilendirme** :gear: **
Bu komut ${message.author.username} tarafından istendi! 

`)

.setImage("https://cdn.discordapp.com/attachments/783331666223562787/796053557240660028/rolizbanner.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'The Help Command',
    usage: 'moderasyon'
};