require('dotenv').config({path: __dirname + '/.env'})
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("Le meilleur bot");
})

client.login(process.env.TOKEN);