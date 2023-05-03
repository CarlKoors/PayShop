module.exports.Description = 'Arguements: product-id Price';
module.exports.Level = 1;
module.exports.cmd = (m, prefix, client) => {
  const args = m.content.slice(prefix.length).split(/ +/);
  const sFunctions = require('../Modules/sFunctions.js');
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  if (!jDbs.exists('Products', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Could not remove product!', args[0]+' doesn\'t exist.',
  'https://i.imgur.com/fZ4kVi0.png', 'Product: Not Found');
  jDbs.remove('Products', args[0]);
  jDbs.drop(args[0]);
  return msg.sendEmbed(client, m.author.id, null, null, 'Product Removed',
  args[0]+' has been completely removed!',
  'https://i.imgur.com/fZ4kVi0.png', 'Product: Deleted');
}
