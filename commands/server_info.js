const Discord= require("discord.js");

module.exports.run = async (bot, message, args) => {

    let server_avatar = message.guild.displayAvatarURL;

    const embed = new Discord.RichEmbed()
    .setTitle("Title")
    .setAuthor("Author")
    .setColor("#ff0066")
    .setDescription("Server info")
    .setTumbnail(server_avatar)
    .addField("Server name", message.guild.name)
    .addField("Total users", message.guild.memerCount);

    message.channel.send({embed});
    return;
}

module.exports.help = {
    name: "serverinfo"
}