const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let server_avatar = message.guild.displayAvatarURL;

    let serverembed = new Discord.RichEmbed()
    .setDescription("Информация о Сервере")
    .setColor("#ff0066")
    .setTumbnail(server_avatar)
    .addField("Название сервера", message.guild.name)
    .addField("Всего пользователей", message.guild.memerCount);

    return message.channel.send(serverembed);
}

module.exports.help = {
name: "serverinfo"
}