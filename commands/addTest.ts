import { Message, MessageEmbed } from "discord.js";
import { Commands } from "./commandsInt";
import { testManager } from "../commandsManager";
import { FacTestManager } from "../facTest/facTestManager";

export class AddTest implements Commands {
    
    description: string;
    name: string;
    testMan: FacTestManager;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
        this.testMan = testManager;
    }

    execute(msg: Message<boolean>) {
        var stringArray = msg.content.split(" ");
        if(stringArray[1].toLowerCase() === 'help'){
            this.getHelp(msg);
        } else if(stringArray.length !== 4) {
            msg.reply("❌ Incorrect Format!");
        } else {
            this.testMan.addTest(stringArray[1], new Date(stringArray[2]), stringArray[3]);
            msg.reply('🎓 Test added!');
        }
    }
    protected getHelp(msg: Message) {
        const embedmsg = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`"AddTest" - Help 🔔`)
        .setDescription("I'm here to help bby 🤵")
        .addFields(
            {name: 'Format:', value: '-addtest <subject> <date> <description>'},
            {name: 'Date Format', value: 'yyyy-mm-dd'}
        )
        .setTimestamp()
        .setFooter("by MonkeBot 🐒");
        
        msg.reply({ embeds: [embedmsg] });
    }

}


