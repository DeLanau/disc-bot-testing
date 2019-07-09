const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

    client.user.setActivity("Anime", {type: "WATCHING"})
    
});

client.on('message', message => {

    if (message.content === 'test') {
    	message.channel.send('This is test!');
      }
      
});

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission(["MANAGE_MESSAGEs", "ADMINISTRATOR"])) return message.channel.send("You cannot use this command!")

let argsresult;
let mChannel = message.mentions.channel.first();

message.delete();
if(mChannel){
    argsresult = args.slice(1).join(" ")
    mChannel.send(argsresult)
}else {
    argsresult = args.join(" ")
    message.channel.send(argsresult)
}

}

module.exports.config = {
    name: "say",
    description: "sends message",
    usage: "#say",
    aliases: ["#s", "#msg"]
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);