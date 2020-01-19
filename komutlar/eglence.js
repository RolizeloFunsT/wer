const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Eglence komutlar | Not:Komutlar !! ile başlar
        • Eglence Komutlari		
• Arkadasin :: Arkadasini Bilir.
• Atatürk	  :: Atatürk ile ilgili mesaj verir.	
• kaçcm    :: Kac Cm Oldunu Yazar.
• sins-aga     :: Dene Gor :D
• mcödül    :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
• hayvan    :: Lan Dene Iste Gor Ben nie solim surda 2 saatdir yaziyorum
• avatar    :: istediğiniz kullanıcının avatarını gösterir
• say       :: Sunucudaki üye sayısını gösterir
• istatistik :: istatistigini gösterir.
• slots :: Slots oyunu oynatır
• çekiliş :: sunucuda çekiliş yapar.
• vur :: vurursun :D
• sor :: rasgele evet hayır belki diye cevap verir.
• hackle :: birisini hackler
• fakemesaj :: fake mesaj atar
• hesapla :: bir matematik sorusu cevaplar.
• atasözü :: rasgele atasözü atar
    Sayfa 1 / 1 | Yapımcım: DumPS#9337`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eglence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eglence'
};