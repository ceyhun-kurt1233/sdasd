
const Discord = require('discord.js');
exports.run = (client, message, args) => { 
let otuzegehan = message.guild.members.cache.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 30*24*60*60*1000).size
let onegehan = message.guild.members.cache.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 10*24*60*60*1000).size
let biregehan = message.guild.members.cache.filter(üye => !üye.user.bot && new Date().getTime() - üye.joinedAt.getTime() < 1*24*60*60*1000).size

let ce = message.channel
const egehanabi = new Discord.MessageEmbed()
.setDescription(`Kaç Gün Önce Kaç Kişi Girdi \n\n 30 Gün İçinde Giren Kişi Sayısı: ${otuzegehan} \n\n 10 Gün İçerisinde Giren Kişi Sayısı: ${onegehan} \n\n Sunucuya Bugün Giren Kişi Sayısı ; ${biregehan}`)
ce.send(egehanabi)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['son-uyeler'], 
  permLevel: 0
};

exports.help = {
  name: 'son-üyeler',
  description: 'Sunucuya katılan üyeleri gösteriyor.', 
  usage: 'Egehanss #NarcosCode'
}; 