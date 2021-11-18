const Discord = require("discord.js");
const client = new Discord.Client();
const config = require(./config.json);

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "put-whatever-you-want-here" } })
})
client.on('message', message => {
  if (message.content === `${config.prefix}ping`) {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});
client.login(config.token)
