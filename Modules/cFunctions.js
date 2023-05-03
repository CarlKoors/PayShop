module.exports.Login = (token) => {
  const { Client, GatewayIntentBits, Partials } = require('discord.js');
  const client = new Client({intents: [GatewayIntentBits.DirectMessages, 
	GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.GuildMessages, 
	GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, 
	GatewayIntentBits.GuildMembers],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction,
	Partials.GuildMember,  Partials.User, Partials.ThreadMember]
  });
  client.login(token).catch(console.error);
  return client;
}

module.exports.Level = (client, discord) => {
  const jDbs = require('./jDbs.js');
  const msg = require('./msg.js');
  if (msg.hasRole(client, discord, jDbs.parse('Settings', 'perms', 'R0'))) return 0;
  if (msg.hasRole(client, discord, jDbs.parse('Settings', 'perms', 'R1'))) return 1;
  if (msg.hasRole(client, discord, jDbs.parse('Settings', 'perms', 'R2'))) return 2;
  return 3;
}
