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


bot.on("ready", async () => {

    console.log(`${bot.user.username} is ready!`);

    bot.user.setGame('Anime')
});

bot.on("message", async message => {

    if(message.author.bot) return;

    let prefix = botconfig.prefix;
    let msgArray = message.content.split(" ");
    let args = msgArray.slice(1);
    let cmd = msgArray[0];
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
      
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);