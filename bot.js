var Discord = require('discord.js');
var bot = new Discord.Client()

bot.login("NDE0MjQ0MTU3NDY1NTU5MDgw.DWyNxw.UjvIFd6KlaFy4jT63Y9dAgQYumg");

bot.on('ready', function() {
    console.log(bot.user.username);
});


bot.on('message', function(m) {
    if (m.content === "$loop") {
        var interval = setInterval(function() {
            m.channel.send('=bump');}, 14400000);
    }
});
