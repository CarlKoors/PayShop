module.exports.Description = 'Completly and PERMANETLY Deletes a Database.';
module.exports.Level = 0;

module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  if (!args[0]) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not Found', 'Arguements: \nDatabase\nex:\n'+prefix+'data:drop productid',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Args Err');
  if (!jDbs.exists('Data', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not be Found', 'This Database does not exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Not Found');
  jDbs.remove('Data', args[0]);
  msg.sendEmbed(client, m.author.id, null, null, 'Database Dropped', 'Database'+args[0]+' Deleted!',
  null, 'Database: '+args[0], 'Database Dropped', args[0]);
}
