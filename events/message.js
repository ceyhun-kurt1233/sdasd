const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
module.exports = message => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let karaliste = db.fetch(`devtr.karaliste_${message.author.id}`)
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if(karaliste) return message.channel.send(` <@${message.author.id}>  \n Olamaz karalisteye alınmısın :scream_cat: **Sahibimle İletişime Geç** \n \n **Mail = destek.zeynepbot@gmail.com** \ \n **Support Sunucusu =** https://discord.gg/W8j8WGtKPr \ `)
    cmd.run(client, message, params, perms);
  }
};