

const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  var role = message.guild.roles.find(role => role.name === "Html");
   if (message.member.roles.has(role.id)) return message.channel.send("<:yasak:619596371674005515> |  Zaten **JavaScript** rolüne sahipsiniz.")

            message.channel.send("<:doru:619596371879657513> | Başarıyla **HTML** adlı rol verildi.");
            message.member.addRole(role);
          

        }
    

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'html',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};