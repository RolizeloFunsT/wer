const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const embed = new Discord.RichEmbed()
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
      let embed1 = new Discord.RichEmbed()
.setColor("#ff00f2")
.addField(`Sunucunun davet linkini kuruyorum.`,`**Bu sunucunun davet linki** \n https://discord.gg/${invite.code}`)
.setThumbnail(client.user.avatarURL)
.setFooter(`© 2020 DumPS`, client.user.avatarURL)
      message.channel.send(embed1).catch(e => {
        client.log.error(e);
      });
    }
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['create-link', 'createlink', 'sunucudavet', 'davetkur', 'davetlink', 'davetoluştur', 'davet-link' , 'davet-oluştur'],
    kategori: "KULLANICI KOMUTLARI", 
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet-kur',
    description: 'Bulunduğunuz sunucuda yeni davet linki oluşturur.',
    usage: 'davet-kur'
  };