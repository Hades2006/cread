


const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const useful = require('useful-tools');
const ms = require('parse-ms')
// DATABASE AYARI
/* 
 <%if (bot.users.get(id).presence.status){%>
						<% if (bot.users.get(id).presence.status === 'online') {%>
			<img src="https://cdn.discordapp.com/emojis/532658353915297794.png" width="40" height="40" style="margin-left: 100px; margin-top: -140px;">
						<%}else if(bot.users.get(id).presence.status === 'offline'){%>
			<img src="https://cdn.discordapp.com/emojis/532658353340416010.png?v=1" width="40" height="40" style="margin-left: 140px; margin-top: -190px;">
						<%}else if (bot.users.get(id).presence.status === 'dnd'){%>
				<img src="https://cdn.discordapp.com/emojis/532658362031144987.png" width="40" height="40" style="margin-left: 140px; margin-top: -190px;">
						<%}else if(bot.users.get(id).presence.status === 'idle'){%>
						<img src="https://cdn.discordapp.com/emojis/551428323302047771.png" width="40" height="40" style="margin-left: 170px; margin-top: -170px;">
						<%} %>  
        <% } %>
        */


client.ayar = db; 
// DATABASE AYARI
client.htmll = require('cheerio');
client.useful = useful;
client.tags = require('html-tags');

let profil = JSON.parse(fs.readFileSync('./profil.json', 'utf8')) // PROFIL KAYIT
client.profil = profil

client.ayarlar = {
  "prefix": "!",
  "oauthSecret": "x8fyu79V5GtLo14ow5QaBNrIVww1Inqh",
	"callbackURL": "https://www.bestdiscordbotlist.com/callback", 
	"kayıt": "617809273497583617",
  "renk": "1ED760" 
};
0   
client.admin = ["380753087012405249","602030875999469569"]


client.on('ready', async message => {
  
  
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
  
  
   require("./app.js")(client);
  
  client.user.setActivity(``, { type:"STREAMING" })
  
  console.log("Site ve Bot Aktif Oldu Artik Sistem Son Hizla Calisiyor!")

});



// OYNUYOR




setInterval(() => {

  
}, 10000);
//`Sistemimizde ${sayi.length} Bot Mevcut`

  


client.on("guildMemberAdd", member => {
      if (member.user.bot === true) {
          member.addRole(member.guild.roles.find(r=>r.name==='Approved Bots').id) //bot rolü
       }
});

const chalk = require('chalk')

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir(`./src/komutlar/`, (err, files) => {
	let jsfiles = files.filter(f => f.split(".").pop() === "js")

	if(jsfiles.length <= 0) {
		console.log("Olamazz! Hiç komut dosyası bulamadım!")
	} else {
		if (err) {
			console.error("Hata! Bir komutun name veya aliases kısmı yok!")
		}
		console.log(`${jsfiles.length} komut yüklenecek.`)

		jsfiles.forEach(f => {
			let props = require(`./src/komutlar/${f}`)
			client.commands.set(props.help.name, props)
			props.conf.aliases.forEach(alias => {
				client.aliases.set(alias, props.help.name)
			})
			console.log(`Yüklenen komut: ${props.help.name}`)
		})
	}
});

client.on("message", async message => {

	if (message.author.bot) return
	if (!message.content.startsWith('!')) return
	var command = message.content.split(' ')[0].slice('!'.length)
	var args = message.content.split(' ').slice(1)
	var cmd = ''

	if (client.commands.has(command)) {
		var cmd = client.commands.get(command)
	} else if (client.aliases.has(command)) {
		var cmd = client.commands.get(client.aliases.get(command))
	}
  
  
	if (cmd) {
    if (cmd.conf.permLevel === 'ozel') { 
      if (client.yetkililer.includes(message.author.id) === false) {
				message.channel.send("Yetersiz Yetki.")
				return
      }
    }
    
		if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				message.channel.send("Yetersiz yetki.")
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				message.channel.send("Üyeleri atma yetkin yok.")
				return
			}
		}
		if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				message.channel.send("Yetersiz yetki.")
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			const x = await client.fetchApplication()
      var arr = [x.owner.id, '380753087012405249']
			if (!arr.includes(message.author.id)) {
				message.channel.send("Yetersiz yetki.")
				return
			}
		}
    		if (cmd.conf.permLevel === 5) {
			const x = await client.fetchApplication()
      var arr = [x.owner.id, '602030875999469569']
			if (!arr.includes(message.author.id)) {
				message.channel.send("Yetersiz yetki.")
				return
			}
		}
		if (cmd.conf.enabled === false) {
			message.channel.send("Bu komut devre dışı.")
			return
		}
		if(message.channel.type === "dm") {
			if (cmd.conf.guildOnly === true) {
				message.channel.send("Bu komutu özel mesajlarda kullanamazsın.")
				return
			}
		}
		cmd.run(client, message, args)
	}
});

client.on("message", async msg => {
  if(msg.author.id === "608936845216186380") return;
  if(msg.author.id === "616144893399662602") return;
const db = require('quick.db');   
    let i = db.fetch(`otobsilicia_${msg.channel.id+msg.guild.id}`)
      if (i == undefined) {           
          }
        if (i == 'acik') {   
              let kanal = db.fetch(`otobsilici_${msg.channel.id+msg.guild.id}`)

          if (msg.channel.id != kanal.id) {
  if (msg.content.length > 0) {

    if(msg.author.bot === true){
      msg.delete(100).then(
      msg.channel.send(`<:yasak:619596371674005515> Burada bot komut kullanmamalısın! \n\n(Kullanabileceğin kanallar:  <#617809507950788616> <#617809548933070850>)`).then(s => s.delete(5000))
      )
    }
  }
          }
        }
       
  
  })


client.on("guildMemberAdd", (member) => {
        try {
            member.guild.setName(`Best Discord Bot List | Kod Paylaşım - ${member.guild.memberCount} Kişi`);
        
        }
        catch (e) {
        console.log(e);
        }
  });

client.on("guildMemberRemove", (member) => {
        try {
            member.guild.setName(`Best Discord Bot List | Kod Paylaşım - ${member.guild.memberCount} Kişi`);

        
        }
        catch (e) {
        console.log(e);
        }
});

client.login("NjA4OTM2ODQ1MjE2MTg2Mzgw.XYo-FQ.KG9rUS89kwQgQTNDsS691IHtZls")

process.env = {}
process.env.TOKEN = "NjA4OTM2ODQ1MjE2MTg2Mzgw.XYo-FQ.KG9rUS89kwQgQTNDsS691IHtZls"; // TUM DOSYALARDA CLIENT TOKEN