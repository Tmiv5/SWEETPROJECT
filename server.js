const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const util = require("util")
var prefix = "m!";

var token = 'NDc3MTAzMjYxMjc5NzE1NDAz.Dk3Qog.RLgjGOVFOBpsGbtCf5qM1gS8P_M';
client.login(token);
client.on('ready', () => {
client.user.setPresence({ game: { name: "1.0! || m!help " , type : 0}}); {}
console.log("Started with no error.\nVersion 1.0\n" + client.guilds.size + " serveurs.\n" + client.users.size + " Utilisateurs\n\n\nLogs :\n\n");

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
  .addField("Bonjour" , "Le bot vous répondera!")
  .addField("m!help", "La commande d'aide du bot")
  .addField("m!invite", "La commande d'invite du bot")
  .addField("m!info", "Donne des info sur le bot")
  .addField("m!say", "Le bot répétera ce que vous dites !")//
  .addField("m!ping", "Donne le ping")
  .addField("m!avatar", "Montre votre avatar")
  .addField("m!serverinfo", "Montre les info du serv")
  .addField("m!clear", "Efface des message!")
  .setFooter("Help - Mars")
  message.channel.sendEmbed(help_embed);
  console.log("Un utilisateur a demandé de l'aide")
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
    var inf_embed = new Discord.RichEmbed()
    .setColor('00cbff')
    .setDescription("**Info sur moi**")
    .addField("Nom", "Mars", true)
    .addField("Créateur", "Lunatiik", true)
    .addField("Version (discord.js)", `${require('discord.js').version}`)
    .addField(`Servers`, `${client.guilds.size} serveur(s)`, false)
    .setThumbnail(client.user.avatarURL)
    .setFooter("Info - Mars")
    message.member.sendEmbed(inf_embed)
    
  //message.member.send(`:eyes:Info sur moi:eyes:\nNom: Mars\nCreateur: LunatiikXD\nCreer avec discord.js 11.4.0\nJe suis sur ${client.guilds.size} serveurs !`)
    message.reply("Regarde tes MP! :eyes: ")
  }
});
client.on('message', message => {
  if(message.content === prefix + "serverinfo") {
    var embed = new Discord.RichEmbed()
    .setColor('00cbff')//mec pk ta retirer C koi cette couleur Blue Ok
    .setDescription("**Info du serveur Discord**")//tu peUx maider avec le clear? oui Mrc
    .addField("Nom du serveur", message.guild.name, false)
    .addField("Cree le", message.guild.createdAt, true)
    .addField("Tu a rejoins le", message.member.joinedAt, true)
    .addField("Membres sur le serveur", message.guild.memberCount, false)
    .setFooter("ServerInfo - Mars")
    message.channel.sendEmbed(embed)
  }
    if(message.content.startsWith(prefix + "clear")) {
  	let args = message.content.split(' ').slice(1)
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas la permission !");
  if(!args[0]) return message.channel.send("Entres un nombre valide entre 2 et 100");
  if (args>=101) return message.channel.send(`Quoi ? Mec c'est trop.. Voici la limite: (2-100)`)
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Jai effacé ${args[0]} messages.`).then(msg => msg.delete(2000));
});
}
  });
//tes sur mon bot
    
client.on('message', message => {
  if(message.content === prefix + "ping")
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
}
          );
client.on('message', message => {
  if(message.content === prefix + "avatar")
    var help_embed = new Discord.RichEmbed()
	  .setColor("000000")
	  .setTitle("Avatar")
	  .setImage(message.author.avatarURL)
	  .setFooter("Avatar - Mars")
	  message.channel.sendEmbed(help_embed);
  }
);
client.on('message', message => {
if(message.content.startsWith(prefix + "say")) {
  var args = message.content.split(' ').slice(1)
  var argresult = args.join(' ');
  if(!argresult) return message.reply("Dis quelque chose avec m!say...")
  message.channel.send(argresult)
}
});
client.on('message', message => {
	if(message.content.startsWith(prefix + "eval")){
		if (message.author.id !== '405106840532156416') return message.channel.send("Tu n'as pas la permission")
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


//