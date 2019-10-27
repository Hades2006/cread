const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var role = message.guild.roles.find(role => role.name === "Java Script");
   if (message.member.roles.has(role.id)) return message.channel.send("<:yasak:619596371674005515> |  Zaten **JavaScript** rolüne sahipsiniz.")

            message.channel.send("<:doru:619596371879657513> | Başarıyla **Java Script** adlı rol verildi.");
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
  name: 'js',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};