module.exports.Description = 'Changes Permission Level Roles';
module.exports.Level = 0;

module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  l0 = jDbs.parse('Settings', 'perms', 'R0');
  l1 = jDbs.parse('Settings', 'perms', 'R0');
  l2 = jDbs.parse('Settings', 'perms', 'R0');
  if (args[0] === '0') l0=args[1];
  if (args[0] === '1') l1=args[1];
  if (args[0] === '2') l1=args[1];
  j = {
    R0: l0,
    R1: l1,
    R2: l2
  };
  jDbs.edit('Settings', 'perms', j);
  return msg.sendEmbed(client, m.author.id, null, null, 'Level '+args[0]+' Role Changed',
  'You just changed the a role permission!', 'https://i.imgur.com/fZ4kVi0.png', 'Settings: Roles',
  'Level 0', l0,
  'Level 1', l1,
  'Level 2', l2);
}
