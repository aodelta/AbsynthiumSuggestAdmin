import { bot } from "./client"
import config  from '../config_private.json'

bot.start();

bot.login(config.bot.token);
