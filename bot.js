var Discord = require('discord.js');
var bot = new Discord.Client()

bot.login("NDE0MjQ0MTU3NDY1NTU5MDgw.DWxPZg.WjPND6Dr25Bh4hbRgjAYVk_WoJA");

bot.on('ready', function() {
    console.log(bot.user.username);
});

bot.on('message', function m => {
  if (m.content === 'ping') m.reply('pong');
});
