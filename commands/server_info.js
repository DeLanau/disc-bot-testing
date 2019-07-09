const Discord= require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("Информация о сервере:\n" + "Название сервера: " + message.guild.name +
    + "\nКоличество пользователей: " + message.guild.memberCount)    
   
}

module.exports.help = {
    name: "serverinfo"
}