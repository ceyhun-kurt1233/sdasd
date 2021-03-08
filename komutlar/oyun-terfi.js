const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => { 

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ?terfi [@İsim] [@Yetki]`).setColor(10038562));
    let role = message.mentions.roles.first()

    if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: ?terfi [@İsim] [@Yetki]`).setColor(10038562));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: ?terfi [@İsim] [@Yetki]`).setColor(10038562));
  
    if (kullanıcı.roles.cache.has(aRole.id)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu kullanıcı zaten bu terfiyeye ulaşmış').setColor(10038562));
    await (kullanıcı.roles.add(aRole.id))
    message.channel.send(new Discord.MessageEmbed().setDescription(`**${kullanıcı}** isimli üye \`\`${role.name}\`\` Yetkisine terfi etti.`).setColor('RANDOM'));
  

};

module. exports.conf = {
  aliases: ['terfi-ettir']
};

module.exports.help = {
  name: 'terfi'
};