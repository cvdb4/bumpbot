var Discord = require('discord.js');
var bot = new Discord.Client({
    
     autorun: true,
         email: "", // email
    password: "", // password
    //OR
    token: "NDE0MjQ0MTU3NDY1NTU5MDgw.DWuLfg._Lw2IqjSU5C4H_frhQpqAwZIxXY",
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === "!test") { // command to trigger
      var interval = setInterval (function (){
        bot.sendMessage({
          to: 413422410415603713,
          message: "=bump" // message to send
        });
      }, 14400000); // time between each interval in milliseconds
    }
});
