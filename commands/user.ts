import { Message } from "discord.js";
import { Commands } from "./commandsInt";

export class UserCom implements Commands{
    description: string;
    name: string;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }

    execute(msg: Message) {
        msg.reply(`Username: ${msg.author.username}\nYour tag: ${msg.author.tag}`);
    }
    


}