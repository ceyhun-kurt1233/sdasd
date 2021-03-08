
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
       
       ●▬▬▬▬▬๑「ZeynepBOT Moderasyon Komutları」๑●▬▬▬▬▬●
       

___Zeynep Bot Moderasyon Komutları___

>>>      ?sil = sil 0-100 arası mesaj siler <:sa:806885831938670642>
>>>      ?say = sunucunuzda kaç kişi var gösterir **Discord İçin Geçerli** <:sa:806885831938670642>
>>>      ?mute = bir kişiyi mutelersiniz <:sa:806885831938670642>
>>>      ?unmute = birisinin mutesini açarsınız <:sa:806885831938670642>  
>>>      ?muterol = ?muterol create <müteroladı> <:sa:806885831938670642>  
>>>      ?ban etiket sebeb | ?ban <kullanıcı ıd> sebeb = 2 şekilde ban yöntemi <:sa:806885831938670642>   
   ?unban <kullanıcı ıd> = ban kaldır <:sa:806885831938670642>       



`,true)
      .setFooter(`ZeynepBOT 💖 Moderasyon Menüsü | ?bugbildir`)
  message.channel.send(yardım)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'moderasyon',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};