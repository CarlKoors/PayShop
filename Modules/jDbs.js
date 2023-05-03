fs = require('fs');
path = require('path');

module.exports.parse = (Database, Key, Value) => {
  return JSON.parse(JSON.stringify(require(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'))))[Value];
  delete require.cache[require.resolve(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'))];
}

module.exports.exists = (Database, Key) => {
  if (!fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'))) return false;
  if (!fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'))) return false;
  return true;
}

module.exports.edit = (Database, Key, Value) => { 
  require('fs').writeFileSync(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'),  JSON.stringify(Value, null, 2));
  return true;
}

module.exports.drop = (Database) => {
  fs.readdirSync(path.join(__dirname, '../Databases/'+Database)).forEach(file => {
	if (file.includes('.')) fs.unlinkSync(path.join(__dirname, '../Databases/'+Database+'/' + file));
  });
  fs.rmdirSync(path.join(__dirname, '../Databases/'+Database));
  return true;
}

module.exports.remove = (Database, Key) => {
  if (!fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'))) return false;
  require('fs').unlinkSync(path.join(__dirname, '../Databases/'+Database+'/'+Key+'.json'));
  return true;
}

module.exports.create = (Database) => {
  if (fs.existsSync(path.join(__dirname, '../Databases/'+Database+'/'))) return false;
  fs.mkdirSync(path.join(__dirname, '../Databases/'+Database));
  return true;
}
