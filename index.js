require('dotenv').config({path: __dirname + '/.env'})
const Discord = require('discord.js');
const welcome = require('./welcome');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS']});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("Le meilleur bot");
})

welcome(client)

client.login(process.env.TOKEN);