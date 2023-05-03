const jDbs = require('./jDbs.js');
const msg = require('./msg.js');
const path = require('path');
const fs = require('fs');

// Shop Functions

module.exports.exists = (PID) => {
  return require('fs').existsSync(require('path').join(__dirname+'../Databases/Products/'+PID+'.json'));
}
