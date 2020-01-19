const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal `nsfw` kanalı değil! :hayir:\n `nsfw` kanalı yapmak için **Kanalı Düzenle > Genel Görünüm**\'e girin ve `NSFW Kanal`\'ı açın.")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pgif',
  description: 'ErensiTeam',
  usage: 'pgif'
};