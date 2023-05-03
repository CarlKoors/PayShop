module.exports.Description = 'Show alert status and channel';
module.exports.Level = 1;

module.exports.cmd = (m, prefix, client) => {
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  const toggle = jDbs.parse('Settings', 'alerts', 'Toggle');
  const channel = jDbs.parse('Settings', 'alerts', 'Channel');
  return msg.sendEmbed(client, m.author.id, client.user.username, client.user.displayAvatarURL(),
  'Alert Settings', 'List Current Alert Settings.', null, 'Settings: Alerts',
  'Alerts: '+toggle, '**Channel ID: '+ channel+'**');
}
