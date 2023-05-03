module.exports.Description = 'Arguements: Database';
module.exports.Level = 1;
module.exports.cmd = (m, prefix, client) => {
  // /product:edit pid key v a l u e
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  if(!jDbs.exists('Data', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not be displayed', 'This Data Table doesn\'t exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Not Found');
  return msg.sendEmbed(client, m.author.id,
  null, null, args[0]+' Data Table', 'Fetching all the data for '+args[0],
  null, 'Data: Found', 'Data', '```'+require('../Databases/Data/'+args[0] +'.json').value.join('\n')+'```');
}
