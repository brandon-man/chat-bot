require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");
//In bot.js
const token = process.env.TOKEN;
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

client.on("ready", () => {
  console.log("The AI bot is online"); //message when bot is online
});

client.on("message", (message) => {
  if (message.content.substring(0, 1) === "!") {
    message.channel.send("Hello from Chat bot"); //reply if message has "!" as first character
  }
});

client.login(token);
