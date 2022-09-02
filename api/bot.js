require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences] });

client.once('ready', () => {
	console.log('Discord bot logged!');
});

module.exports = client.login(process.env.TOKEN);
