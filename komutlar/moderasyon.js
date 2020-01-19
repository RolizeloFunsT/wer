const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ moderasyon komutlar | Not:Komutlar !! ile başlar
        • Moderasyon Komutlari		
• istatistik :: istatistigini gösterir.
• talep :: Destek talebi açar.
• eval :: kod denersiniz.
• yapimcim :: yapimcimi gösterir.
• reklam-taraması :: reklam taraması yapar oynuyor ve kullanıcı adında.
• komutlar :: bot daki tüm komutları gösterir.
• üyedurum :: Üye Durumlarını ve sunucudaki üye sayısını gösterir.
• saat :: türkiyenin saatini gösterir.
• rolliste :: roldeki kişileri gösterir.
• steamfiyat :: steadeki oyun fiyatlarını gösterir.
• çevir :: butun dilleri turkceden o dil e cevirir örnek : !!çevir en merhaba
    Sayfa 1 / 1 | Yapımcım: DumPS#9337`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'moderasyon',
  usage: 'moderasyon'
};