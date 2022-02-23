import { Message } from "discord.js";

export interface Commands {

    description: string;
    name: string;

    execute(msg: Message);
}