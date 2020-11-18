const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();
//  Create By TimsahTim
exports.run = async (bot, msg, args) => {
//  Create By TimsahTim
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
//  Create By TimsahTim
        let user = msg.mentions.users.first() || msg.author;
//  Create By TimsahTim
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok."
        userinfo.status = user.presence.status.toString()
//  Create By TimsahTim
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
//  Create By TimsahTim
        userinfo.sonmesaj = user.lastMessage || "Son Yazılan Mesaj Bulunamadı." || "Son Yazılan Mesaj Gösterilemedi."
//  Create By TimsahTim
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//  Create By TimsahTim
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
//  Create By TimsahTim
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//  Create By TimsahTim
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
//  Create By TimsahTim
        const uembed = new Discord.MessageEmbed()
//  Create By TimsahTim
        .setTitle(user.tag)
        .addField(`Şu Anda Oynadığı Oyun :`, userinfo.od1, false)
        .addField(`Durum :`, userinfo.status, false)
        .setColor('GREEN')
        .addField(`Katılım Tarihi (Sunucu) :`, userinfo.dctarihkatilma, false)
        .addField(`Katılım Tarihi (Discord) :`, userinfo.dctarih, false)
        .addField(`Kimlik :`, userinfo.id, true)
        .addField(`Bot Mu? :`, userinfo.bot, true)
        .addField(`Roller :`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)
        .addField(`Son Gönderdiği Mesaj :`, userinfo.sonmesaj, false)
        
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kullanıcı-bilgim','kullanıcı-bilgi','kullanıcıbilgi'],
  permLevel: 0
};//  Create By TimsahTim
exports.help = {
  name: 'kullanıcıbilgim',
  description: 'Her Hangi Bir Kullanıcının Bilgilerine Bakarsınız.',
  usage: 'kullanıcıbilgim'
};