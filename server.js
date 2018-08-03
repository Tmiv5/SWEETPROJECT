// Const
const Discord = require('discord.js');
const client = new Discord.Client();
// VAR
var BotVersion = ("0.1")
// Bot on ready
client.on('ready', () => {
	client.user.setPresence({ game: { name: "0.1 Beta || r!help " , type : 0}}); {}
  console.log("Bot ready\nConnecté a l'espace Heroku de BlastyBot");
});

client.on('message', message => {
  if (message.content === 'r!pingpong') {
    message.channel.send('Ping-Pong! :ping_pong: ');
  }
});
client.on('message', message => {
	if(message.content.startsWith("send.news")) {
	if(message.author.id != "405106840532156416") return;
	        let args = message.content.split(' ').slice(1);
        var angresult = args.join(' ');
	bot.channels.get("474709177470681109").send(angresult)
}
});

client.on('message', message => {
  if (message.content === 'r!help') {
	  var help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("Rainbow")
	  .addField("Aide", "`r!help`, `r!ping`, `r!news`, `r!info`, `r!support`, `r!invite`, `r!avatar`,`r!update`")
	  .addField("Fun", "`r!roblox`, `r!pingpong`")
	  .setImage("https://tmiv5.weebly.com/uploads/5/5/6/5/55652459/blasty-bot-by-zenka_orig.png")
	  .setFooter(message.author.username + " | r!help | Rainbow " + BotVersion + " | © Rainbow 2018-2019")
	  message.channel.sendEmbed(help_embed);
    //message.channel.send('Message d`aide de BlastyBot, ```b!help : affiche ce message.\nb!ping : Affiçhe le ping.\nb!pingpong: Fais Ping-Pong!\nb!news: Donne les news du bot.\nb!roblox : Un gif roblox.\nb!info : Info a propos du bot\nb!support: Donne un serveur daide.\nb!invite : Invite le bot sur votre serveur.```\n\nBlastyBot V0.4');
  
  }
});
client.on('message', message => {
  if (message.content === 'r!invite') {
    message.reply("Voici l'invitation pour inviter Rainbow sur votre serveur\n<https://discordapp.com/oauth2/authorize?client_id=474739891175948288&scope=bot&permissions=8>");
  }
}); 
client.on('message', message => {
  if (message.content === 'r!support') {
    message.channel.send("Voici le serveur d'aide de Rainbow : https://discord.gg/pf9jbNB ");
  }
});
client.on('message', message => {
  if (message.content === 'r!ping') {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
  }
});
client.on('message', message => {
  if (message.content === 'r!news') {
	  var help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("News")
	  .addField("03-08-18", "Ajout d'une commande de news privée pour Lunatiik\n`par Alexou!`")
	  .addField("08-03-18", "Ajout de la commande `b!avatar` et `b!update`\n`par Boasty`")
	  .addField("07-03-18", "Enlevement des commandes NSFW\n`par Boasty`")
	  .addField("07-03-18", "Sortie de la NSFW Update\n`par Boasty`")
	  .addField("06-03-18", "Changement d'hebergeur vers Heroku\n`par Boasty`")
	  .addField("03-03-18", "La bêta 1.0 est sortie\n`par Zenka`")
	  .addField("03-03-18", "Début du code de la Bêta 1.0\n`par Boasty`")
	  .addField("03-03-18", "Zenka est Admin\n`par BlastyBot`")
	  .addField("02-03-18", "Sortie de la 0.4\n`par Boasty`")
	  .setFooter(message.author.username + " | r!news | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
  //  message.channel.send('**NEWS**\nSortie de la V0.4.\nDev de la 1.0 beta bientot.')
  }
});
client.on('message', message => {
  if (message.content === 'r!roblox') {
	  var help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("Rublux")
	  .setImage("http://wiki.roblox.com/images/5/59/NetworkPhysicsSolution1.gif")
	  .setFooter(message.author.username + " | b!roblox | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
    //message.channel.send('Rublux http://wiki.roblox.com/images/5/59/NetworkPhysicsSolutions1
  }
});
client.on('message', message => {
  if (message.content === 'b!info') {
	  var help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("Info")
	  .addField("Utilisateurs", "user : " + client.users.size + "utilisateurs\nServer : " + client.guilds.size + "servers")
	  .addField("Version", "BlastyBot " + BotVersion)
	  .addField("Hébergement", "Le bot est hébergé sur l'espace Heroku de BlastyBot.")
	  .setFooter(message.author.username + " | b!info | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
    //message.channel.send('```Nom: BlastyBot. Creer par Boasty. Heberger sur le serveur de TMI. V0.4
  }
});
client.on('message', message => {
  if (message.content ==='b!avatar') {
help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("Avatar")
	  .setImage(message.author.avatarURL)
	  .setFooter(message.author.username + " | b!avatar | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
  }
});
client.on('message', message => {
 if(message.content === 'b!update') {
	 help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("Updates")
	  .addField("Nom", "Meme Update")
	  .addField("Sortie", "Non-prevu")
	  .addField("Ajouts", "Pleins de memes!")
	  .setFooter(message.author.username + " | b!update | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
 }
});



          


client.login('NDc0NzM5ODkxMTc1OTQ4Mjg4.DkU3lA.Vg7bNbr3uusUneoNpmztjdxu3k0');
