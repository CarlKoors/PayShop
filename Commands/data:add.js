module.exports.Description = 'Arguements: Database Value';
module.exports.Level = 0;
const jDbs = require('../Modules/jDbs.js');
const msg = require('../Modules/msg.js');
const axios = require('axios');
module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  if (!args[0] || !args[1]) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not be edited', 'Arguements: \nDatabase, value/url\nex:\n'+prefix+'data:add productid https://rentry.co/example/raw',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Args Err');
  if (!jDbs.exists('Data', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Database could not be edited', 'This Database does not exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Database: Not Found');
  if (!args[1].includes('://')) {
	data = require('../Databases/Data/'+args[0]+'.json');
	data.value.push(args[1]);
	jDbs.edit('Data', args[0], data);
  }
  if (args[1].includes('://')) url(args[1], args[0]);
  msg.sendEmbed(client, m.author.id, null, null, 'Database updated',
  'Database For '+args[0]+' Updated!', null,
  'Database: '+args[0], 'Data: Value(s) added', '||'+args[1]+'||');
}

function url(url, db) {
  data = require('../Databases/Data/'+db+'.json');
  axios.get(url)
  .then(r => {
	data.value=data.value.concat(r.data.split('\r\n'));
	jDbs.edit('Data', db, data);
  });
}
