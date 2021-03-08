
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete()
    const yardım = new Discord.MessageEmbed()
      .setColor('#ffc163')
      .setDescription(`
       
       ●▬▬▬▬▬▬▬▬▬▬๑「ZeynepBOT Komutları」๑▬▬▬▬▬▬▬▬▬▬●
       
       

>>>      😻 ?mama-destek
 :scroll: ?bugbildir

___ZeynenBOT Menüler Komutları___

>>>      ?arama-sistemleri :smirk:
>>>      ?abone-sistemi :smirk:
>>>      ?kayıt-sistemi :smirk:
>>>      ?ayarlamalı-sistemler :smirk:
>>>      ?moderasyon :smirk:

    
___Zeynep Bot Komutları___                                        
            
>>>      ?bize-ait-olanlar
>>>      ?acildestek = destek çagırarak destek ekibimiz sizinle ilgilenir :speaking_head:
>>>      ?yardım = yardım menüsünü gösterir :call_me:
>>>      ?istatistik = botun istatistiklerini görürsünüz        :bar_chart:
>>>      ?davet = davet edersiniz botu :slight_smile:

___Zeynep Bot Oyun Sunucuları Bölümü___

>>>      ?oyun-kurallar = oyun sunucunuz için kurallar :bookmark_tabs:        
>>>      ?clan-alım = oyun sunucuları için clan alım şart   :bookmark_tabs:
>>>      ?terfi = sunucunuzdaki kişiyi terfi etirirsiniz :police_officer:
>>>      ?pro-yetki-sistemi = CS 1.6 CS:GO Pro Yetki Sistemi :man_detective:


___Zeynep Bot Eğlence Komutları___

>>>      ?fal = bot falınıza bakar :coffee:        
>>>      ?ilginçbilgi = size ilginç bilgiler verir  :face_with_monocle:    
>>>      ?sor = sorular sorun size cevapları verir :thinking:
>>>      ?fbi = evinize fbi basar



`,true)
      .setFooter(`Zeynep 💖 Yardım Menüsü | ?bugbildir`)
  message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Vampir Köylü Yardım.',
  usage: 'yardım'
};