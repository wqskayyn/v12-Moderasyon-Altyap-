const Discord = require('discord.js')

exports.run = function(client, message, args) {  
const TimsahTim = message.mentions.users.first()
let TimsahTim_K;
if (message.mentions.users.first())  {TimsahTim_K = message.mentions.users.first();}
else {TimsahTim_K = message.author;}
return message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${TimsahTim_K.tag}** Avatar;`)
.setImage(TimsahTim_K.avatarURL()))
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp","avatar","profil"],
  permLevel: 0
};
 
exports.help = {
  name: 'avatar',
  description: 'Profil Fotoğrafını Paylaşır',
  usage: 'p!avatar'
};