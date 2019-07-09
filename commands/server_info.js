const { Discord, RichEmbed }= require("discord.js");

module.exports.run = async (bot, message, args) => {

    let server_avatar = message.guild.displayAvatarURL;

    const embed = new RichEmbed()
    .setDescription("Server info")
    .setColor("#ff0066")
    .setTumbnail(server_avatar)
    .addField("Server name", message.guild.name)
    .addField("Total users", message.guild.memerCount);

    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"
}