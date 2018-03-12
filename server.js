// Const
const Discord = require('discord.js');
const client = new Discord.Client();
// VAR
var BotVersion = ("1.0")
// Bot on ready
client.on('ready', () => {
	client.user.setPresence({ game: { name: "b!help || "+ client.guilds.size + "serveurs!" , type : 0}}); {}
  console.log("Bot ready\nConnecté a l'espace Heroku de BlastyBot");
});

client.on('message', message => {
  if (message.content === 'b!pingpong') {
    message.channel.send('Ping-Pong! :ping_pong: ');
  }
});

client.on('message', message => {
  if (message.content === 'b!help') {
	  var help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("BlastyBot")
	  .addField("Aide", "`b!help`, `b!news`, `b!info`, `b!support`, `b!invite`, `b!avatar`,`b!update`")
	  .addField("Fun", "`b!roblox`, `b!pingpong`")
	  .setImage("https://tmiv5.weebly.com/uploads/5/5/6/5/55652459/blasty-bot-by-zenka_orig.png")
	  .setFooter(message.author.username + " | b!help | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
    //message.channel.send('Message d`aide de BlastyBot, ```b!help : affiche ce message.\nb!ping : Affiçhe le ping.\nb!pingpong: Fais Ping-Pong!\nb!news: Donne les news du bot.\nb!roblox : Un gif roblox.\nb!info : Info a propos du bot\nb!support: Donne un serveur daide.\nb!invite : Invite le bot sur votre serveur.```\n\nBlastyBot V0.4');
  
  }
});
client.on('message', message => {
  if (message.content === 'b!invite') {
    message.reply('Voici linvitation pour inviter BlastyBot sur votre serveur\n<https://discordapp.com/oauth2/authorize?client_id=418167447032692768&scope=bot&permissions=2146958591>');
  }
}); 
client.on('message', message => {
  if (message.content === 'b!support') {
    message.channel.send("Voici le serveur d'aide de BlastyBot : https://discord.gg/pf9jbNB ");
  }
});
client.on('message', message => {
  if (message.content === 'b!ping') {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
  }
});
client.on('message', message => {
  if (message.content === 'b!news') {
	  var help_embed = new Discord.RichEmbed()
	  .setColor("247CFF")
	  .setTitle("News")
	  .addField("08-03-18", "Ajout de la commande `b!avatar` et `b!update`\n`par Boasty`")
	  .addField("07-03-18", "Enlevement des commandes NSFW\n`par Boasty`")
	  .addField("07-03-18", "Sortie de la NSFW Update\n`par Boasty`")
	  .addField("06-03-18", "Changement d'hebergeur vers Heroku\n`par Boasty`")
	  .addField("03-03-18", "La bêta 1.0 est sortie\n`par Zenka`")
	  .addField("03-03-18", "Début du code de la Bêta 1.0\n`par Boasty`")
	  .addField("03-03-18", "Zenka est Admin\n`par BlastyBot`")
	  .addField("02-03-18", "Sortie de la 0.4\n`par Boasty`")
	  .setFooter(message.author.username + " | b!news | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
  //  message.channel.send('**NEWS**\nSortie de la V0.4.\nDev de la 1.0 beta bientot.')
  }
});
client.on('message', message => {
  if (message.content === 'b!roblox') {
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
	  .addField("Nom: Meme Update")
	  .addField("Date de sortie : Non-Prevu")
	  .addField("Ajouts: Plein de memes")
	  .setFooter(message.author.username + " | b!update | BlastyBot " + BotVersion + " | © BlastyBot 2018-2019")
	  message.channel.sendEmbed(help_embed);
 }
});
	 

bot.on('guildMemberAdd', member => {
       member.guild.defaultChannel.send(`Bienvenue sur le serveur, ${member}!`);
       console.log(`${member.user.username} has joined`);
});
          


client.login('NDEMTY3NDQ3MDMyNjkyNzY4.DYA9nA.mX3AWiNfFH9HU6XK87tAz9SJB3c');
