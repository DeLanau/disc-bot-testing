const Discord= require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.id === "266556791440146432") return message.channel.send("Ты не достоен")

    let argsresult
    let mChannel = message.mentions.channels.first();

    message.delete()
    if(mChannel){
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    }else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
   
}

module.exports.help = {
    name: "say",
    aliases: ["s", "msg"]
}