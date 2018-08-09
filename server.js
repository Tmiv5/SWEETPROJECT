const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "m!";
client.login("NDc3MTAzMjYxMjc5NzE1NDAz.Dk3Qog.RLgjGOVFOBpsGbtCf5qM1gS8P_M");
client.on('ready', () => {
client.user.setPresence({ game: { name: "IN DEV! || m!help " , type : 0}}); {}
console.log("Bot ready");

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
if(message.content.startsWith(prefix + "kick")) {
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) 
    return message.channel.send("Vous n'avez pas la permission!!");
  
  if(message.mentions.user.size === 0) {
    return message.channe.send("Mentionne quelqun!")
  }
    var kick = message.guild.member(message.mentions.users.first());
    if(!kick) {
      return message.channel.send("Est-il en vie? :eyes: ")
    }
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
    return message.channeL.send("Je n'ai pas la permission!!")
  }
  kick.kick().then(member => {
    message.channel.send(`$(member.user.username) a été kick par $(message.author.username)`)
  });
}