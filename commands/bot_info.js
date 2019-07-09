const Discord= require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("Информация о БОТЕ:\n" + "Название Бота: " + bot.user.username +
    + "\nСоздатель и Разработчик: " + "Happik21 - можете закидать формами" + "\nФункционал: " + "В разработке")    
   
}

module.exports.help = {
    name: "botinfo"
}