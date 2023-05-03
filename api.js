const { port } = require('./config.json');
const sFunctions = require('./Modules/sFunctions.js');
const jDbs = require('./Modules/jDbs.js');
const msg = require('./Modules/msg.js');
const express = require('express');
const app = express();
client = require('./Modules/cFunctions.js').Login(require('./config.json').token);
app.post('/', express.raw({type: 'application/json'}), (req, res) => {
  apiKey = jDbs.parse('Settings', 'api', 'Secret');
  if (req.headers.apikey === null && req.query.apiKey === null) return res.sendStatus(401);
  if (req.headers.apikey != apiKey && req.query.apiKey != apiKey) return res.sendStatus(401);
  if (req.query.apiKey === apiKey) { // we are using a url params likely sell app or shoppy
    if (req.query.cmd === 'sellAppPurchase' && sFunctions.exists(req.query.pid) != false && itemSold(JSON.parse(req.body.toString()).additional_information[0].value, req.query.pid) === true) return res.send('Please check discord!');
    //if (req.query.cmd === 'sellixPurchase') COMING SOON
    //if (req.query.cmd === 'shoppyPurchase') COMING SOON
    return res.sendStatus(403);
  } else if (req.headers.apikey === apiKey) { // paybot only
        if (sFunctions.exists(req.headers.pid) === false) return res.sendStatus(404); // not found
        if (req.headers.cmd === 'itemsold' && itemSold(JSON.parse(req.body.toString()).additional_information[0].value, req.query.pid) === true) return res.send('true');
        if (req.headers.cmd === 'getProduct') return res.send(jDbs.parse('Products', req.headers.pid, 'Title')+':'+jDbs.parse('Products', req.headers.pid, 'Price'));
  }
  return res.sendStatus(403);
});

setTimeout(() => {
  app.listen(port, () => console.log('Alive on port '+port));
},(5000));

async function itemSold(discord, product) {
  client = await require('./Modules/cFunctions.js').Login(require('./config.json').token);
  const current = new Date().setDate(new Date().getDate());
  const p = require('../Databases/Products/'+product+'.json');
  let j;
  if (p.Type === 'subscription') {
        if (p.Term === '1d') j={expire:current+Number(1)};
        if (p.Term === '2d') j={expire:current+Number(2)};
        if (p.Term === '3d') j={expire:current+Number(3)};
        if (p.Term === '4d') j={expire:current+Number(4)};
        if (p.Term === '5d') j={expire:current+Number(5)};
        if (p.Term === '6d') j={expire:current+Number(6)};
        if (p.Term === '1w') j={expire:current+Number(7)};
        if (p.Term === '2w') j={expire:current+Number(14)};
        if (p.Term === '3w') j={expire:current+Number(21)};
        if (p.Term === '1m') j={expire:current+Number(30)};
        if (p.Term === '2m') j={expire:current+Number(60)};
        if (p.Term === '3m') j={expire:current+Number(90)};
        if (p.Term === '4m') j={expire:current+Number(120)};
        if (p.Term === '5m') j={expire:current+Number(150)};
        if (p.Term === '6m') j={expire:current+Number(180)};
        if (p.Term === '7m') j={expire:current+Number(210)};
        if (p.Term === '8m') j={expire:current+Number(240)};
        if (p.Term === '9m') j={expire:current+Number(270)};
        if (p.Term === '10m') j={expire:current+Number(300)};
        if (p.Term === '11m') j={expire:current+Number(330)};
        if (p.Term === '1y') j={expire:current+Number(365)};
        jDbs.edit(p.id, discord, j);
    msg.sendEmbed(client, discord, null, null,
    'Thanks for your Purchase!', 'You just bought\n'+p.Title+'!',
    null, 'Term: '+p.Term);
  }
  if (p.Type === 'keyauth'){
    key = await require('axios').get(p.url);
    msg.sendEmbed(client, discord, null, null, 'Thanks for your Purchase!',
    'You just bought a License Key for '+p.Title+'.',
    null, 'Product: KeyAuth', 'License Key', '||'+key.data+'||');
  }
  if (p.Type === 'data') {
    data = require('../Databases/Data/'+product+'.json');
    i = Math.floor(Math.random()*data.value.length);
    msg.sendEmbed(client, discord, null, null, 'Thanks for your Purchase!',
    'You just bought.\n'+p.Title+'\nFor $'+p.Price+'  :dollar:',
    null, 'Product: Data', 'Product', '||'+data.value[i]+'||');
    data.value = data.value.filter(v => v != data.value[i]);
    jDbs.edit('Data', product, data);
  }
  msg.addRole(client, discord, p.Role);
  if (jDbs.parse('Settings', 'alerts', 'Toggle') === true) {
    ch = jDbs.parse('Settings', 'alerts', 'Channel');
    msg.chEmbed(client, ch, null, null, 'New Purchase!',
    '<@'+discord+'> has bought something.',
    null, 'Alerts: ON', p.Title, p.Description,
    '$'+p.Price+'  :dollar:', 'Product Type: '+p.Type);
  }

  return true;
}
