const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")


module.exports = {
  name: "snipe",
  aliases: ["s"],
  category: "info",
  usage: "snipe",
  description: "Gets Last Deleted Message!",
  run: async (client, message, args) => {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("no messages found!")
    
    const embed = new Discord.MessageEmbed()
    
    .setTitle("Snipe Command!")
        .setDescription(` Content:   ${msg.content}`)
            .setTimestamp()
    .setFooter("Snipe Command!")
        if(msg.image)embed.setImage(msg.image)
    .setTimestamp()
    .setFooter("Snipe Command!")
    
    
    message.channel.send(embed)
    
    
    
  }
}