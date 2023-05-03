module.exports.Description = 'Changes apiKey';
module.exports.Level = 0;

module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  j = {
    Secret: args[0],
  };
  jDbs.edit('Settings', 'api', j);
  return msg.sendEmbed(client, m.author.id, null, null, 'ApiKey Secret Changed',
  'You just changed the secret!', 'https://i.imgur.com/fZ4kVi0.png', 'Settings: Secret',
  'New Secret', '||'+args[0]+'||');
}
