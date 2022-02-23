import { Message } from "discord.js";
import { Commands } from "./commandsInt";

export class PingCom implements Commands {
    description: string;
    name: string;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }

    execute(msg: Message<boolean>) {
        msg.reply("Pong u dumb");
    }
    
}