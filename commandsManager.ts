import { Client, Message, MessageEmbed} from "discord.js";
import { AddTest } from "./commands/addTest";
import { Commands } from "./commands/commandsInt";
import { PingCom } from "./commands/ping";
import { UserCom } from "./commands/user";
import { FacTestManager } from "./facTest/facTestManager";

export var testManager;

export class CommandsManager{
    
    private client: Client;
    private coms: Map<string, Commands>;
    public testManager: FacTestManager;
    
    
    
    constructor(client : Client){
        this.client = client;
        this.coms = new Map<string, Commands>();
        this.testManager = new FacTestManager();
        this.fillComs();
    }
    
    public executeCommand(key: string, msg: Message) {
        
        if(!this.coms.has(key)){
            msg.reply("❌ This is not a command!"); 
        } else {
            console.log("Exec execute " + key);
            this.coms.get(key).execute(msg);
        }
    }
    
    public execAdminComs(message: Message<boolean>) {
        //TODO **************************************
        throw new Error('Method not implemented.');
    }
    
    
    public helpCommand(msg: Message){
        const embedmsg = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle("Help 🔔")
        .setDescription("I'm here to help bby 🤵")
        .setTimestamp()
        .setFooter("by MonkeBot 🐒");
        const set = new Set(this.coms.values());
        
        set.forEach((com: Commands) => {
            embedmsg.addField(com.name, com.description);            
        });
        
        msg.reply({ embeds: [embedmsg] });
    }

    protected fillComs() {
        this.coms.set('ping',new PingCom('Ping', 'Replies with Pong!'));
        this.coms.set('user', new UserCom('User', `Returns your user's data`));
        this.coms.set('addtest', new AddTest('Add Test', 'Adds a Test to a Subject'));
    }
}