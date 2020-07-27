const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if ( (msg.content == "ping") || (msg.content == "Ping") || (msg.content == "PING"))
  {
    msg.reply("Pong!")
  }
  if ( (msg.content == "start") )
  {
   // Math.floor((Math.random() * 100) + 1);
    msg.reply("I am ready!")
  }
  if ( (msg.content == "next") )
  {
    var nextNumber = Math.floor((Math.random() * 100) + 1);
    msg.reply("Next Number is !" + nextNumber)
  }
}

)

client.login("NzM2ODMzNzQwOTM1OTIxNjk2.Xx0j5Q.WR2oxTifrn88MMWcXqUYnwmWJ7o")