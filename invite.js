const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "INVITE LINK: " + "**__", "https://discord.gg/Gb8Jqkn", true)
          .addField("__**" + "Bot Invite Link: " + "**__", "https://discordapp.com/api/oauth2/authorize?client_id=525814000500342790&permissions=0&scope=bot", false)


          .setColor("0x#FF0000")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "Get the invite link for help server",
  usage: "invite"
};