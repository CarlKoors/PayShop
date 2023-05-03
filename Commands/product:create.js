module.exports.Description = 'Arguements: product-id Price';
module.exports.Level = 1;
module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const sFunctions = require('../Modules/sFunctions.js');
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  
  if (args[0] == '' || args[1] =='' || Number(args[1]) === NaN) return msg.sendEmbed(client, m.author.id,
  null, null, 'Product could not be created', require('./config.json').prefix+'product:create product-id price\nex:\n  '+require('./config.json').prefix+'product:create some-id 50',
  'https://i.imgur.com/fZ4kVi0.png', 'Product: Wrong Command Syntax');
  if (sFunctions.exists(args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Product could not be created', 'A product with this id already exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Product: Already Exist');
  j = {
	Title: null,
    Description: null,
    Thumbnail: null,
    Price: Number(args[1]),
    Role: null,
    Type: null,
    url: null,
    F1: "Product Features",
    V1: null
  };
  jDbs.create(args[0]);
  jDbs.edit('Products', args[0], j);
  return msg.sendEmbed(client, m.author.id, null, null, 'Product Title $'+j.Price+'  :dollar:',
  'Some corny Product Description', 'https://i.imgur.com/hpiGU9U.png', 'Please Finish Product');
}
