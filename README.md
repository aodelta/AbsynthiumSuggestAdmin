
#  AbsynthiumSuggestAdmin

Système d'automatisation de suggestion pour l'administration d'Absynthium
Automation suggestions system for Absynthium staff
  
All the files are available except the config_private.json **(bot token provided)**

## prerequisite

The bot needs permissions to see messages sent from the channelListener and creates channel, send messages for the categoryBox (description of both below in settings)


## Settings

Here are the settings that you can modify with the config.json and what they mean :

||  |
|--|--|
|bot.prefix|The prefix of you bot commands|
|server.channelListener|The channel that the bot will be listening to create suggestion
|server.categoryBox|The category where the bot got p

# Make it up and running

## Build

You'll need to install the **tsc compiler** (official Microsoft TypeScript compiler) and add it to your environement PATH if it is not already in

Some ways to download it :
|Package Manager|Command Installation| Command Run|
|--|--|--|
|npm|`npm install typescript --save-dev`|`npx tsc`|
|yarn|`yarn add typescript --dev`|`yarn tsc`|
|pnpm|`pnpm add typescript -D`|`pnpx tsc`|

https://www.typescriptlang.org/download for more info

Next, create a file named config_private.json and place it next to all other config files. Insert your bot token like this :

    {
	   "bot": {
	       "token": "your_token"
	   }
    }

Now, run the *cmd_compile_ts.bat*.
If everything compile, well done
Otherwise, try to solve the rpoblem with the error given. If you can't solve it, send your problem precisely there : https://github.com/aodelta/AbsynthiumSuggestAdmin/issues

## Run

Once built, you just need to run the app.js by running the *cmd_start_bot.bat* file.

You can still run the *cmd_compile_and_start_bot.bat* file to do all steps in one click, but I'll recommend running them each file at once, to understand better the problems.

If errors occures, same as above.

HF, delta
