const Discord = require("discord.js");

exports.run = (client, message) => {
  
  const Embed = new Discord.MessageEmbed()

  
  .setColor("RANDOM")
  .setTitle("Roliz")
  .setThumbnail("https://cdn.discordapp.com/attachments/783331666223562787/796050603762778172/roliz.gif")
  .setDescription(`
  Beni Davet Etmek İçin [Tıkla](https://discord.com/oauth2/authorize?client_id=761475156487962625&permissions=8&scope=bot)
  Destek Sunucum İçin [Tıkla](https://discord.gg/TQnNm2UuB4)
  Bu komut ${message.author.username} tarafından istendi!
  `)
  
  .setImage("https://cdn.discordapp.com/attachments/783331666223562787/796053005123715102/rolizbanner.gif")
  .setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embed)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["invite", "davet"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'medya', 
    description: 'The Help Command',
    usage: 'yardım'
};