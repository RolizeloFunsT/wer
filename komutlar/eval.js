const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
   // if (message.author.id !== '449323488239681539' & message.author.id !== '411844821729280002')  return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval Sonucu;')
        .setColor('RANDOM')
        .addField(':inbox_tray: Giriş:', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Çıkış', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Kod denersiniz.',
  usage: 'eval <kod>'
};