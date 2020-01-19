const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ yetkili komutlar | Not:Komutlar !! ile başlar
        • yetkili Komutlari		
• slowmode :: !!slowmode 5 yazarsanız yavaş mod açılır.
• oylama	  :: Oylama yapmanızı sağlar	
• bansorgulama   :: Ban sorgulama yaparsınız
• otorol     :: Üye girince otomatik rol verir !!otorol ayarla @etiket #kanal
• duyuru    :: istediginiz şeyi duyurur @ever cekmeyi unutmayın
• reboot    :: Botu Yeniden Başlatmanızı Sağlar
• mute    :: Etiketlenen Kişiye Mute Atar
• unmute    :: Etiketlenen Kişinin Mutesini Geri Alır
• rololuştur :: Yeni rol oluşturur
• sohbet-aç :: Sohbetinizi açmaya yarar.
• sohbet-kapat :: Sohbetinizi kapatmaya yarar.
• kanalismideğiş :: Geçerli kanalın ismini değiştirir.
• resimlihoşgeldin :: resimlihoşgeldin bir gelen giden komuturdur.
• erkek :: gelen kişiye erkek verirsiniz.
• kız :: gelen kişiye kız verirsiniz.
• panelkur :: Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.
• ses-kanal-aç :: bir ses kanalı açar.
• kategori-oluştur :: kategori açar.
• metin-kanal-aç :: metin kanal ı açar.
• sayaç :: servere sayaç koyar.
• sunucukur :: serverin rollerin v.s herseyi ekler
• davet-kur :: sunucunun davet linkini atar.
    Sayfa 1 / 1 | Yapımcım: DumPS#9337`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};