const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "m!";
client.login("NDc2ODg4NTkxODEzOTY3ODcz.Dk0IqA.9AO0g5b8sv1VP87xS90ucHeTWFo");
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
  .setFooter("Help - Mars")
    message.channel.sendEmbed(help_embed);
}
});

    
    
    
    


