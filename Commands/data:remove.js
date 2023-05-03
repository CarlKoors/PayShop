module.exports.Description = 'Arguements: Database, value';
module.exports.Level = 0;
const jDbs = require('../Modules/jDbs.js');
const msg = require('../Modules/msg.js');
module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  if (!args[0] || !args[1]) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not be edited', 'Arguements: \nDatabase, value/url\nex:\n'+prefix+'data:add productid https://rentry.co/example/raw',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Args Err');
  if (!jDbs.exists('Data', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not be edited', 'This Database does not exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Not Found');
  data = require('../Databases/Data/'+args[0]+'.json');
  data.value=data.value.filter(v => !v.includes(args[1]));
  jDbs.edit('Data', args[0], data);
  msg.sendEmbed(client, m.author.id, null, null, 'Database updated',
  'Database For '+args[0]+' Updated!', null,
  'Database: '+args[0], 'Data: Value(s) removed', '||'+args[1]+'||');
}
