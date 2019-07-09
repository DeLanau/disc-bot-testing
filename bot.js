const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");

const fs = require("fs");

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){

        console.log("Couldn't find commands!");

        return;
    }

    jsfile.forEach((f, i) => {

        let props = require(`./commands/${f}`);

        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

})

bot.on('ready', async () => {

    console.log(`${bot.user.username} is ready!`);

    bot.user.setActivity('Anime', {type: 'WATCHING'})
    
});

bot.on('message', message => {

    let prefix = botconfig.prefix;

    if (message.content === `${perfix}test`) {
    	message.channel.send('This is test!');
      }

      if(message.console === `${prefix}info`){

        let avatar = bot.user.displayAvatarURL;

        let botembed = new Discord.RichEmbed()
        .setDescription("Информация о Боте")
        .setColor("#00ff00")
        .setTumbnail(avatar)
        .addField("Имя Бота", bot.user.username)
        .addField("Создатель/разработчик", "Happik21 - можете закидать формами")
        .addField("Функционал", "В разработке");

        return message.channel.send(botembed);
      }

      if(message.content === `${prefix}serverinfo`){

        let server_avatar = message.guild.displayAvatarURL;

       let serverembed = new Discord.RichEmbed()
       .setDescription("Информация о Сервере")
       .setColor("#ff0066")
       .setTumbnail(server_avatar)
       .addField("Название сервера", message.guild.name)
       .addField("Всего пользователей", message.guild.memerCount);

       return message.channel.send(serverembed);
      }
      
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);