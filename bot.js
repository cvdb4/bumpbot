var Discord = require('discord.js');
var bot = new Discord.Client()

bot.login("NDE0MjQ0MTU3NDY1NTU5MDgw.DWthZw.gadOqltLRxDrTqEr8Y6J3u8m2eY");

bot.on('ready', function() {
    console.log(bot.user.username);
});

bot.on('message', function() {
    if (message.content == "$loop") { 
      var interval = setInterval (function () {
        bot.channels.get(413422410415603713).send('=bump');
      }, 1 * 1000); 
    }
});
