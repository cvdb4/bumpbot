var Discord = require('discord.js');
var bot = new Discord.Client()

const token = require('./token.json').token;

bot.on('ready', function() {
    console.log(bot.user.username);
});


bot.on('message', function(m) {
    if (m.content === "$loop") {
        var interval = setInterval(function() {
            m.channel.send('=bump');}, 14400000);
    }
});
