module.exports.Description = 'Create a new Data Table.';
module.exports.Level = 0;

module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  if (!args[0]) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not Found', 'Arguements: \nDatabase\nex:\n'+prefix+'data:create productid',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Args Err');
  if (jDbs.exists('Data', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database Found', 'This Database exists.',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Overwrite Err');
  j = {
    value: [
    ]
  };
  jDbs.edit('Data', args[0], j);
  msg.sendEmbed(client, m.author.id, null, null, 'Database Created', 'Database'+args[0]+' Created!',
  null, 'Database: '+args[0], 'Database Created', args[0]);
}
