const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let server_avatar = message.guild.displayAvatarURL;

    let serverembed = new Discord.RichEmbed()
    .setDescription("Server info")
    .setColor("#ff0066")
    .setTumbnail(server_avatar)
    .addField("Server name", message.guild.name)
    .addField("Total users", message.guild.memerCount);

    message.channel.send(serverembed);
}

module.exports.help = {
name: "serverinfo"
}