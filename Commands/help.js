module.exports.Description = 'List some helpful commands!';
module.exports.Level = 3;
module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(client, prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  let level = Number(require('../Modules/cFunctions.js').Level(client, m.author.id));
  if (client.guilds.cache.find(g => (g.ownerId === m.author.id)).ownerId===m.author.id) level=0;
  let Owner = get(0);
  let Admin = get(1);
  let Mod = get(2);
  let Community = get(3);
  const { EmbedBuilder } = require('discord.js');
  const embed = new EmbedBuilder()
  .setColor(0x2F3136)
  .setTitle(require('../config.json').shopName)
  .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
  .setFooter({ text: require('../config.json').footer, iconURL: client.user.displayAvatarURL()})
  .setDescription('Community Commands')
  .setTimestamp()
  for(i=0;i< Community.length;i++){
	embed.addFields({ name: Community[i].toString().split(':::')[0]+'', value: Community[i].toString().split(':::')[1]+'' });
  }
  const embed1 = new EmbedBuilder()
  .setColor(0x2F3136)
  .setTitle(require('../config.json').shopName)
  .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
  .setFooter({ text: require('../config.json').footer, iconURL: client.user.displayAvatarURL()})
  .setDescription('Moderation Commands')
  .setTimestamp()
  for(i=0;i< Mod.length;i++){
	embed1.addFields({ name: Mod[i].toString().split(':::')[0]+'', value: Mod[i].toString().split(':::')[1]+'' });
  }
  const embed2 = new EmbedBuilder()
  .setColor(0x2F3136)
  .setTitle(require('../config.json').shopName)
  .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
  .setFooter({ text: require('../config.json').footer, iconURL: client.user.displayAvatarURL()})
  .setDescription('Admin Commands')
  .setTimestamp()
  for(i=0;i< Admin.length;i++){
	embed2.addFields({ name: Admin[i].toString().split(':::')[0]+'', value: Admin[i].toString().split(':::')[1]+'' });
  }
  const embed3 = new EmbedBuilder()
  .setColor(0x2F3136)
  .setTitle(require('../config.json').shopName)
  .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
  .setFooter({ text: require('../config.json').footer, iconURL: client.user.displayAvatarURL()})
  .setDescription('Owner / Developer Commands')
  .setTimestamp()
  for(i=0;i< Owner.length;i++){
	embed3.addFields({ name: Owner[i].toString().split(':::')[0]+'', value: ''+Owner[i].toString().split(':::')[1]+'' });
  }
  if (level === 0) m.author.send({ embeds: [embed, embed1, embed2, embed3] })
  if (level === 1) m.author.send({ embeds: [embed, embed1, embed2] })
  if (level === 2) m.author.send({ embeds: [embed, embed1] })
  if (level === 3) m.author.send({ embeds: [embed] })
}

function get(id){
  let x = 0;
  let List = [];
  let files = [];
  fs.readdirSync(__dirname).forEach(file => files.push(file));
  files = files.filter(f => f.includes('.js'));
  for (i=0;i<files.length;i++) {
    if (require(__dirname+'/'+files[i]).Level == id) List.push(files[i].toString().split('.js')[0]+':::'+require(__dirname+'/'+files[i]).Description);
  }
  return List;
}
