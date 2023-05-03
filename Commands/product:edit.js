module.exports.Description = 'Arguements: product-id Key Value\nex: product1 Price 10';
module.exports.Level = 1;
module.exports.cmd = (m, prefix, client) => {
  // /product:edit pid key v a l u e
  const args = m.content.slice(prefix.length).split(/ +/);
  const sFunctions = require('../Modules/sFunctions.js');
  const cmd= args.shift().toLocaleLowerCase();
  const jDbs = require('../Modules/jDbs.js');
  const msg = require('../Modules/msg.js');
  if(!jDbs.exists('Products', args[0])) return msg.sendEmbed(client, m.author.id,
  null, null, 'Product could not be edited', 'A product with this id doesn\'t exist',
  'https://i.imgur.com/fZ4kVi0.png', 'Product: Not Found');
  vTitle = require('../Databases/Products/'+args[0]+'.json').Title;
  vThumbnail = require('../Databases/Products/'+args[0]+'.json').Thumbnail;
  vDescription = require('../Databases/Products/'+args[0]+'.json').Description;
  vPrice = require('../Databases/Products/'+args[0]+'.json').Price;
  vType = require('../Databases/Products/'+args[0]+'.json').Type;
  vRole = require('../Databases/Products/'+args[0]+'.json').Role;
  vTerm = require('../Databases/Products/'+args[0]+'.json').Term;
  vV1 = require('../Databases/Products/'+args[0]+'.json').V1;
  vurl = require('../Databases/Products/'+args[0] +'.json').url;
  const Val = m.content.split(args[1]+' ')[1];
  if (args[1] === 'title') vTitle = Val;
  if (args[1] === 'thumbnail') vThumbnail = Val;
  if (args[1] === 'description') vDescription = Val;
  if (args[1] === 'price') vPrice = Val;
  if (args[1] === 'type') vType = Val;
  if (args[1] === 'term') vTerm = Val;
  if (args[1] === 'features') vV1 = Val;
  if (args[1] === 'role') vRole = Val;
  if (args[1] === 'url') vurl = Val;
  j = {
    Title: vTitle,
    Description: vDescription,
    Thumbnail: vThumbnail,
    Price: vPrice,
    Role: vRole,
    Type: vType,
    url: vurl,
    F1: "Product Features",
    V1: vV1
  };

  jDbs.edit('Products', args[0], j);
  delete require.cache[require.resolve(path.join(__dirname, '../Databases/Products/'+args[0]+'.json'))];
  return msg.sendEmbed(client, m.author.id, null, null, 'Product '+args[0]+' Edited',
  'you just made changes to '+args[0], 'https://i.imgur.com/fZ4kVi0.png', 'Product: saved',
  args[1], '**'+Val+'**');
}

