const Discord = require('discord.js')
const config = require('./config.json');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("Le meilleur bot");
})

client.login(config.token);