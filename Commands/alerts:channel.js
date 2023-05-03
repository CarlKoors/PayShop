module.exports.Description = 'Changes the Alerts Channel (id)';
module.exports.Level = 1;

module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  const toggle = jDbs.parse('Settings', 'alerts', 'Toggle');
  j = {
    Toggle: toggle,
    Channel: args[0]
  };
  jDbs.edit('Settings', 'alerts', j);
  return msg.sendEmbed(client, m.author.id, null, null, 'Settings Changed!',
  'You just changed alert settings!', null, 'Settings: Alerts',
  'Alerts: '+toggle,'**Channel ID: '+args[0]+'**');
}
