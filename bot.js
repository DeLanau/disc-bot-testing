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

    let server_avatar = message.guild.displayAvatarURL;

    if(message.content === "test"){
        message.channel.send(new Discord.RichEmbed()
        .setTitle("Title")
        .setAuthor("Author")
        .setColor("#ff0066")
        .setDescription("Server info")
        .setTumbnail(server_avatar)
        .addField("Server name", message.guild.name)
        .addField("Total users", message.guild.memerCount)
        .setTimestamp()).catch((e) => { console.log(e); });    
    }
     
    if(message.content === "bot" && message.member.id === "266556791440146432"){

        var role = message.guild.roles.find(role => role.name === "");
        message.member.addRole(role);

    }

});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
  
  
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
  
        if(newMember.user.id == '342586243600875521'){

            bot.channels.get(`540590997143552013`).send('<@&620323100084535316>').then(msg => {
                msg.delete(10000)});
  
        }else if(newMember.user.id == '266556791440146432'){

            newMember.voiceChannel.join().then(connection => { 
                console.log("Joined voice channel!");

                let file = path.resolve("./voice.mp3")
                console.log("File: " + file);
        
                const dispatcher = connection.playFile(path);
        
                let start = 0;
                let end = 0;
        
                dispatcher.on('start', () => {
                    start = new Date();
                    start = start.getTime();
                    connection.player.streamingData.pausedTime = 0;
                    dispatcher.setVolume(0.70);
                    console.log("Playing");
        
                });
        
                dispatcher.on('debug', (info) => {
                    console.log("Debug: " + info);
                });
        
                dispatcher.on('end', reason => {
                    console.log("Finished");
                    end = new Date();
                    end = end.getTime();
                    console.log("Playtime: " + (end - start) + "ms");
                    console.log("End: " + reason);
                });

        });
        
    } else if(newUserChannel === undefined){
  
      // User leaves a voice channel
  
    }

});

bot.login(process.env.BOT_TOKEN);