
var Discord = require('discord.js');
var bot = new Discord.Client()

bot.login("NDE0MjQ0MTU3NDY1NTU5MDgw.DWthZw.gadOqltLRxDrTqEr8Y6J3u8m2eY");

bot.on('ready', function() {
    console.log(bot.user.username);
});

bot.on('message', function() {
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        sendMessage.channel.send("123")
      }, 1 * 1000); 
    }
});
