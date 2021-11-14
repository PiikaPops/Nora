require('dotenv').config({path: __dirname + '/.env'})
const Discord = require('discord.js');
const meme = require('./meme');
const welcome = require('./welcome');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'GUILD_EMOJIS_AND_STICKERS']});

const keepAlive = require("./server"); //express


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("Le meilleur bot");

	let channel = client.channels.cache.get('906197093478203463');
	channel.messages.size;
	channel.messages.fetch({ limit: 90 }).then((fetchedChannel) => {
    console.log("fetched meme");
});
})

welcome(client)
meme(client)
keepAlive()

client.login(process.env.TOKEN);