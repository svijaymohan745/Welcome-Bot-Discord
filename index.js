const Discord = require('discord.js');
const client = new Discord.Client();
listen(process.env.PORT, '0.0.0.0');
const token = process.env.token;

client.login(token);


client.on('ready', () => {
    console.log('Welcome me into this nasty World');
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "👥people-incoming");
    if(!channel) return;


    channel.send(`Hey ${member}, welcome to CON! :tada::hugging: ! Head over to <#716551185431265331>  to assign yourself roles and get into the channels :D Good luck, Have fun`)
});

client.on('message', message =>{
 
    }
)


