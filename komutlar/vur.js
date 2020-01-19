const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
   var sans = ["100", "200", "247", "456", "500", "502", "654", "674", "706", "900", "makinanın anası sikildi yavaş"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))]
  const vurresim = new Discord.RichEmbed()
  .setImage('http://3.bp.blogspot.com/-kh5On-pZMkM/UfaITUTRR_I/AAAAAAAAA70/piGjpI38tB0/s1600/boxing-machine-practice-attempt-fail.gif')
  .setColor('RANDOM')
  msg.channel.send('Vuruyorum! :boxing_glove:')
.then(nmsg => nmsg.edit('Vuruyorum! :boxing_glove:'))
.then(nmsg => nmsg.edit('Vuruyorum! :boxing_glove:'))
.then(nmsg => nmsg.edit('Vuruyorum! :boxing_glove:'))
.then(nmsg => nmsg.edit(vurresim))
  .then(nmsg => nmsg.edit(vurresim))
.then(nmsg => nmsg.edit('Vurdun!'))
    .then(nmsg => nmsg.edit('Vurdun!'))
    .then(nmsg => nmsg.edit('Vurdun!'))
.then(nmsg => nmsg.edit('Vurdun!'))
   await msg.channel.send(`${msg.author} Skorun: **${sonuc}**`)
 
   }   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vur',
  description: '',
  usage: ''
};