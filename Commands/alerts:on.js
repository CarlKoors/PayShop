module.exports.Description = 'Turns Alerts ON';
module.exports.Level = 1;

module.exports.cmd = (m, prefix, client) => {
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  const channel = jDbs.parse('Settings', 'alerts', 'Channel');
  j = {
    Toggle: true,
    Channel: channel
  };
  jDbs.edit('Settings', 'alerts', j);
  return msg.sendEmbed(client, m.author.id, null, null, 'Settings Changed!',
  'You just changed alert settings!', null, 'Settings: Alerts',
  'Alerts: true','**Channel ID: '+channel+'**');
}
