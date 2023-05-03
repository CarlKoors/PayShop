module.exports.Description = 'Show Current apiKey';
module.exports.Level = 0;

module.exports.cmd = (m, prefix, client) => {
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  const secret = jDbs.parse('Settings', 'api', 'Secret');
  return msg.sendEmbed(client, m.author.id, null, null, 'API Secret',
  'Your current apikey', null, 'Settings: Secrets',
  'Secret', '||'+secret+'||');
}
