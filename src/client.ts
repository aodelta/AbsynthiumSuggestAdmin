import Discord from 'discord.js';
import { CommandHandler } from './command_handler';

export class Client {
    private bot: Discord.Client;
    private commandHandler: CommandHandler;
    private prefix: string

    constructor(prefix:string) {
        this.prefix = prefix
        this.bot = new Discord.Client();
        this.commandHandler = new CommandHandler(this.prefix);
    }
    
    public async start() {
        this.bot.on('ready', () => {
            console.log("ready");
        });
        this.bot.user?.setActivity({type: 'CUSTOM_STATUS', name: "[ONLINE]Waiting for suggestions :yum:"});

        this.bot.on('message', (msg) => {
            if(msg.author.bot || msg.channel.type != 'text' || !msg.content.startsWith(this.commandHandler.prefix)) return;
            this.commandHandler.handleMessage(this.bot, msg);
        });
    }

    public login(token: string): Promise<string> {
        return this.bot.login(token);
    }
}

export let bot: Client = new Client("sug|")