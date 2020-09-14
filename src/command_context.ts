import Discord from 'discord.js'

import { splitWithQuotesLimiter } from './Utility/functions'

export class CommandContext {
    readonly command: string;
    readonly args: string[];
    readonly prefix: string;
    readonly qArgs:string[]
    
    readonly msg: Discord.Message;
    readonly bot: Discord.Client;
    readonly botGM: Discord.GuildMember;

    constructor(bot: Discord.Client, msg: Discord.Message, prefix: string ) {
        this.bot = bot;
        this.botGM = msg.guild.members.cache.get(bot.user.id);

        this.msg = msg;
        this.prefix = prefix;
        this.args = msg.toString().slice(prefix.length).trim().split(/ +/g);
        this.qArgs = splitWithQuotesLimiter(this.args.join(" "))

        this.command = this.args[0].toLowerCase();
    }
}
