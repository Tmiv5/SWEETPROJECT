const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const util = require("util")
var prefix = "m!";
client.on('ready', () => {
client.user.setPresence({ game: { name: "Alpha Beta || m!help " , type : 0}}); {}
console.log("Mars as started");

});

client.on('message', message => {
  if(message.content === "Bonjour"){
    message.reply("Salut");
  }
});
client.on('message', message => {
if(message.content === prefix + "help"){
  var help_embed = new Discord.RichEmbed()
  .setColor("000000")
  .setTitle("Help!")
  .addField("Bonjour" , "Le bot vous repondera!")
  .addField("m!help", "La commande de help!")
  .addField("m!invite", "La commande d'invite du bot")
  .addField("m!info", "Donne des info sur le bot")
  .addField("m!say", "Le bot vous repetera!")//
  .setFooter("Help - Mars")
  message.channel.sendEmbed(help_embed);
}
});
client.on('message', message => {
  if(message.content === prefix + "invite"){
    var help_embed = new Discord.RichEmbed()
    .setColor("000000")
    .setTitle("Invite")
    .addField("Utilise ce lien pour m'inviter", "<https://discordapp.com/oauth2/authorize?client_id=477103261279715403&scope=bot&permissions=8>")
    .setFooter("Invite - Mars")
    message.channel.sendEmbed(help_embed)
  }
});
client.on('message', message => {
  if(message.content === prefix + "info") {
    message.member.send(":eyes:Info sur moi:eyes:\nNom: Mars\nCreateur: LunatiikXD\nCreer avec discord.js 11.4.0\n Merci a Alexou de cometer pour l'aide!")
    message.reply("Regarde tes MP! :eyes: ")
  }
});
client.on('message', message => {
if(message.content.startsWith(prefix + "say")) {
  var args = message.content.split(' ').slice(1)
  var argresult = args.join(' ');
  if(!argresult) return message.reply("Dis quelque chose avec m!say...")
  message.channel.send(argresult)
}
});
  client.login("NDc3MTAzMjYxMjc5NzE1NDAz.Dk3Qog.RLgjGOVFOBpsGbtCf5qM1gS8P_M");
//


bot.on('message',message=> {
	if(message.content.startsWith(prefix + "eval")){
		if (message.author.id !== '405106840532156416')return message.channel.send(`**:x: You are not my owner !`)
		var args = message.content.split(' ').slice(1)
		let code = args.join(' ');
		
		try {
		  
		  let evaled = eval(code);
		  let str = require("util").inspect(evaled, {
			depth: 1
		  })
		  //message.channel.send("✅ Eval réussi");
		  message.channel.send(`✅\n\n`+str.substr(0, 1800), {code:"js"});
		} catch (err) {
		  //message.channel.send("❌ Eval échouer");
		  message.channel.send(`❌\n\n`+err, {code:"js"})
		}
	
	}
})