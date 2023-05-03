const fs = require('fs');
let client = require('./Modules/cFunctions.js').Login(require('./config.json').token);
client.on('ready', () => {
  setTimeout(() => { // re login to the bot every 15 mins [discord sometimes boots your connection!]
	client = require('./Modules/cFunctions.js').Login(require('./config.json').token);
  },(1000*60*15));
});

client.on('messageCreate', msg => {
  const prefix = require('./config.json').prefix;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  if(msg.author.id === client.user.id || !msg.content.startsWith(prefix) || !fs.existsSync('./Commands/'+cmd+'.js')) return;
  let userLevel = Number(require('./Modules/cFunctions.js').Level(client, msg.author.id));
  const cmdLevel = Number(require('./Commands/'+cmd+'.js').Level);
  if (msg.guild != null && msg.author.id === msg.guild.ownerId) userLevel=0;
  if (client.guilds.cache.find(g => (g.ownerId === msg.author.id)).ownerId===msg.author.id) userLevel=0;
  if (cmdLevel >= userLevel) require('./Commands/'+cmd+'.js').cmd(msg, prefix, client);
  delete require.cache[require.resolve('./Commands/'+cmd+'.js')];
});
