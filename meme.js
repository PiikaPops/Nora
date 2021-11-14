const Discord = require('discord.js');

channelID = '906197093478203463'
nbDownvote = 5
nbUpvote = 5

module.exports = (client) => {
  client.on('messageCreate', msg => {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return;
    //===========//  
    // auto-react//
    //===========// 
    if ((msg.channel.id === channelID) && (!msg.author.bot) && ((msg.attachments.size > 0) || (msg.content.includes("https://")) || (msg.content.includes("http://")))) {
      msg.react("909422194168299551");
      msg.react("909422194382221355");
    }
  })  


    //===============//  
    // pin or delete //
    //===============//
  client.on('messageReactionAdd', async react => {
    if (react.partial) {
        try {
            await react.fetch();
            await react.message.fetch();
            console.log("test")
        }
        catch (error) {
            console.error('Something went wrong when fetching the message: ', error);
        }
      }
    if (react.emoji.id === "909422194168299551" && react.count >= nbUpvote) {
        react.message.pin();
            react.message.channel.send("https://cdn.discordapp.com/attachments/589501693839015977/848643585699610634/Knuckles_Meme_Approved.mp4")
      }
    if (react.emoji.id === "909422194382221355" && react.count >= nbDownvote) {
        react.message.delete();
      } 
  })
}