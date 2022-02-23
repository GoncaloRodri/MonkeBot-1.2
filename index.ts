import * as DiscordJS from 'discord.js';
import { Client, Intents, Message, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { CommandsManager } from './commandsManager';
const fs = require('fs');
dotenv.config();

//?_______________________________________________________________________

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const comsMan = new CommandsManager(client);

client.once('ready', (c: Client) => {
        console.log(`Monke is ready! Logged in as ${c.user.tag}`);
        const channel = client.channels.cache.get('943469462269595690');
        (channel as TextChannel).send('🟢  Monke is on!');
});

client.on('messageCreate', (message: Message) => {
    if((message.content.startsWith('-') || message.content.startsWith('/')) && !message.author.bot){
        const key = (message.content.toLowerCase().replace('-', '').split(" "))[0];
        console.log(key)
        if(key === 'help'){
            comsMan.helpCommand(message);
        }else if(key === 'admin'){
            comsMan.execAdminComs(message);
        }else{ 
            comsMan.executeCommand(key,message); 
        }   
    }
})

client.login(process.env.TOKEN)