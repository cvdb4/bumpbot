var Discord = require('discord.js');
var bot = new Discord.Client({
    
     autorun: true,
});
process.env.BOT_TOKEN
bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message == "!test") { // command to trigger
      var interval = setInterval (function (){
        bot.sendMessage({
          to: 413422410415603713,
          message: "=bump" // message to send
        });
      }, 5000); // time between each interval in milliseconds
    }
});
