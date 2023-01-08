module.exports.cmd = (msg, client) => {
  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd= args.shift().toLocaleLowerCase();
  
  if (msg.guild.id != null) // ok ok
  
  if (require('../../Modules/jDbs.js').exists('brokie', msg.author.id) === false && require('../../Modules/jDbs.js').exists('alpha', msg.author.id) === false && require('../../Modules/jDbs.js').exists('topg', msg.author.id) === false) require('../../Modules/msg.js').sendEmbed(client,
  msg.author.id, client.user.username, client.user.avatarURL(),
  'I\'m Sorry', 'You need to purchase a plan.', 'iOFF by Togglable');
  // so it goes
  
 
  
  
  
  
  
  
  
}
     
