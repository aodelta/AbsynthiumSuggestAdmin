// creates basic suggestion
import Discord from 'discord.js'

import { Command } from './../command'
import { CommandContext } from './../command_context'

import { Embed, color } from './../Utility/embed'

export class Suggestion implements Command {
    readonly commandName: string = "suggest"

    async run(cmdCtx: CommandContext) {
        if(cmdCtx.qArgs.length <= 2) {
            return Embed.Create(cmdCtx.bot, cmdCtx.msg, color.gray, "Erreur d'envoie de suggestion",
            [{title: "Erreur syntaxique", content: "Vous n'avez pas fourni assez d'argument pour procéder à votre suggestion"}],
            cmdCtx.msg.channel,
            { self: { removeItSelf: true, timeout:5000 } } )
        }

        if (cmdCtx.msg.channel instanceof Discord.GuildChannel) { // If not DMs
            if(!cmdCtx.msg.channel.name.startsWith("sug|")) {
                return
            }
        }

        let args:string[] = [cmdCtx.qArgs[0], cmdCtx.qArgs[1], cmdCtx.qArgs.slice(2).join(" ")]

        let categoryAimed = cmdCtx.msg.guild.channels.cache.filter((channel) => channel.type == 'category' && channel.name.startsWith("sug|")).first()

        if(!categoryAimed) {
            return Embed.Create(cmdCtx.bot, cmdCtx.msg, color.gray, "Erreur d'envoie de suggestion",
            [{title: "Erreur système", content: "L'ID de la categorie renseignée ne correspond à aucune catégorie sur le serveur"}],
            cmdCtx.msg.channel,
            { self: { removeItSelf:true, timeout: 5000 } } )
        }
        
        cmdCtx.botGM.guild.channels.create(args[1], { topic: ("Suggestion pour \" " + args[1] + " \"\n " + args[2]), parent: categoryAimed})
        .catch((err) => {
            if(err == "DiscordAPIError: Missing Permissions") {
                return Embed.Create(cmdCtx.bot, cmdCtx.msg, color.gray, "Erreur d'envoie de suggestion",
                [{title: "Erreur permissions", content: "Le bot n'a pas assez les permissions requises pour créer des channels et envoyez des messages"}],
                cmdCtx.msg.channel,
                { self: { removeItSelf:true, timeout: 5000 } } )
            }
        }).then((channelSuggest) => {
            if (channelSuggest) {
                return Embed.Create(cmdCtx.bot, cmdCtx.msg, color.blue, args[1],
                [{title: "Suggestion", content: args[2]}],
                channelSuggest)
            }
        })
    }
}
