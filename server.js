// Load up the discord.js library
const Discord = require("discord.js");
var bot = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 1000000);


// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`m!help | Sur ${client.guilds.size} serveurs`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`m!help | Sur ${client.guilds.size} serveurs`);
   var found = false;
  guild.channels.forEach(function(channel, id) {
      if(found == true || channel.type != "text") {
        return;
      }
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true;
        return channel.send("Hey, je suis Mars, Merci de m'avoir invité dans le serveur! Voir mes commandes est facile, faites m!help. Oh, vous voulez mon discord? Voila le lien! :https://discord.gg/fk2edmu")
        console.log("Server joined")
      }
  })
});





client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`m!help | Sur ${client.guilds.size} serveurs`);
});
client.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "bienvenue", "discutage", "join-leave", "welcome").send(`Bienvenue ${member} !`)
}
          );
client.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "bienvenue", "discutage", "join-leave", "welcome").send(`${member} nous a quitté..`)
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! :ping_pong: La latence est de ${m.createdTimestamp - message.createdTimestamp}ms. La latence de l'API est de ${Math.round(client.ping)}ms`);
  }
  if(command === "annonce") {
client.channels.get("476050560039124992").send("Test")
};
 
    
  if(command === 'reporterror') {
	if (!args.length) {
		return message.channel.send(`Tu n'as pas fournie d'erreur!, ${message.author}!`)
	}
	else if (args[0] === `${message}`) {
		return message.channel.send();
	}

	    client.channels.get("480884109858832404").send(`${message.author.tag} a signaler une erreur. L'erreur est: ${args[0]}`)
};

  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  if (command === "flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		bot.reply(message, "La piece est tomber sur pile");
    	} else if (result == 2) {
    		bot.reply(message, "La piece est tomber sur face");
    	}
    }

    if (command === "8ball") {
     
      var sayings = ["Oui", "Non", "Peut-etre", "Peut-etre pas", "Certainement", "Certainement pas", "Bien sur!", "Pas-sur...",]

			var result = Math.floor((Math.random() * sayings.length) + 0);
			const embed = new Discord.RichEmbed()
     .setColor("000000")
    .setTitle("8ball")
    .addField(args, sayings[result])
    message.channel.send({embed:embed})
    }

  


  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Modo", "Createur", "Fondateur", ].includes(r.name)) )
      return message.reply("Desolé! Tu n'as pas les permissions!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Mentionnez une personne dans le serveur");
    if(!member.kickable) 
      return message.reply("Je ne peut pas le kick! Ont-il un role plus haut? Est-ce que j'ai les permissions de kick?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pas de raison fournie";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Desolé ${message.author}, Je n'ai pas pu kick la personne a cause de : ${error}`));
    message.reply(`${member.user.tag} a été kick par ${message.author.tag} a cause de: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Admin", "Modo", "Createur", "Fondateur",].includes(r.name)) )
      return message.reply("Desolé! Tu n'as pas les permissions!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mentionnez une personne dans le serveur");
    if(!member.bannable) 
      return message.reply("Je ne peut pas le kick! Ont-il un role plus haut? Est-ce que j'ai les permissions de kick?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pas de raison fournie";
    
    await member.ban(reason)
      .catch(error => message.reply(`Desolé ${message.author}, Je n'ai pas pu kick la personne a cause de : ${error}`));
    message.reply(`{member.user.tag} a été kick par ${message.author.tag} a cause de: ${reason}`);
  }
if(command === "help"){
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
  .addField("m!ban", "Bannez une personne")
  .addField("m!kick", "Kickez une personne")
  .addField("m!ban", "Bannez une personne")
  .addField("m!8ball", "Avez une question? 8ball va vous repondre! (Beta)")
  .addField("m!reporterror", "Reportez une erreur sur le discord de Mars! (**NE METTEZ AUCUNE ESPACE. METTEZ DES TIRET (-) OU DES (_)**")
  .setFooter("Help - Mars")
  message.member.send(help_embed);
  message.channel.send("Regarde tes MP! :eyes:")
  console.log("Un utilisateur a demandé de l'aide")
}
  if(command === "invite"){
  var help_embed = new Discord.RichEmbed()
  .setColor("000000")
  .setTitle("Invitation")
  .addField("Invitez le bot sur votre serveur!", "https://discordapp.com/oauth2/authorize?client_id=477103261279715403&scope=bot&permissions=268443710")
  .setFooter("Invite - Mars")
  message.channel.send(help_embed);
  }
  
 
     if(command === "info") {
    var inf_embed = new Discord.RichEmbed()
    .setColor('00cbff')
    .setDescription("**Info sur moi**")
    .addField("Nom:", "Mars", true)
    .addField("Créateur:", "LunatiikXD", true)
    .addField("Version (discord.js):", `${require('discord.js').version}`)
    .addField(`Serveurs:`, `${client.guilds.size} serveur(s)`, false)
    .addField(`Utilisateurs:`, `${client.users.size} personnes utilisent Mars`, false)
    .addField("Serveur Discord:", "https://discord.gg/fk2edmu")
    .setThumbnail(client.user.avatarURL)
    .setFooter("Info - Mars")
    message.member.sendEmbed(inf_embed)
    
  //message.member.send(`:eyes:Info sur moi:eyes:\nNom: Mars\nCreateur: LunatiikXD\nCreer avec discord.js 11.4.0\nJe suis sur ${client.guilds.size} serveurs !`)
    message.reply("Regarde tes MP! :eyes: ")
  }

  if(command === "serverinfo") {
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
  if(command === "avatar") {
    var help_embed = new Discord.RichEmbed()
	  .setColor("000000")
	  .setTitle("Avatar")
	  .setImage(message.author.avatarURL)
	  .setFooter("Avatar - Mars")
	  message.channel.sendEmbed(help_embed);
  }


	
	


          
  
  if(command === "clear") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Mettez un nombre entre 2 et 100 pour effacer les messages");
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Je n'ai pas reussi a effacer les message a cause de: ${error}`));
  }
});

client.login(config.token);