const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  let para = await db.fetch(`kredi-sistemi.DumPSkod_${user.id}`);
  let cisim = args.slice(0).join(' ');
  let eksilcek = -100

  let kodMiktar = 1
  let kodpara = -100
 
    if (para < kodpara) {
      message.channel.send('kod alabilmek için yeterli paran görünmüyor.')
  } else if (para > kodpara) {
    
  
    db.add(`kredi-sistemi.DumPSkod_${message.member.id}`, eksilcek)
    db.add(`kredi-sistemi.DumPSkod-satınalınan_${message.member.id}`, kodMiktar)
  
    return message.channel.send(`Başarıyla marketten kod aldınız.(DumPS#9337 yi ekleyip isteyin en fazla 3 kod alırsınız)`)
  
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kodal',
  açıklama: 'kod alır',
};