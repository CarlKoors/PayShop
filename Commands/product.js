module.exports.Description = 'Arguements: product-id';
module.exports.Level = 1;
module.exports.cmd = (m, prefix, client) => {
  // /product:edit pid key v a l u e
  const args = m.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  if(!jDbs.exists('Products', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Product could not be displayed', 'A product with this id doesn\'t exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Product: Not Found');
  Title = require('../Databases/Products/'+args[0]+'.json').Title;
  Thumbnail = require('../Databases/Products/'+args[0]+'.json').Thumbnail;
  Description = require('../Databases/Products/'+args[0]+'.json').Description;
  Price = require('../Databases/Products/'+args[0]+'.json').Price;
  Type = require('../Databases/Products/'+args[0]+'.json').Type;
  Role = require('../Databases/Products/'+args[0]+'.json').Role;
  Term = require('../Databases/Products/'+args[0]+'.json').Term;
  V1 = require('../Databases/Products/'+args[0]+'.json').V1;
  F1 = require('../Databases/Products/'+args[0]+'.json').F1;
  url = require('../Databases/Products/'+args[0] +'.json').url;
  return msg.sendEmbed(client, m.author.id,
  null, null, Title+' $'+Price+'  :dollar:', ''+Description,
  Thumbnail, Type+' '+Term, 
  'Role: '+Role, 'Url: '+url,
  F1, ''+V1+'');
  
}
