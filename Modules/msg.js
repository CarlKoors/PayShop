
module.exports.sendEmbed = (client, user, author, iconURL, title, Description, Thumbnail, footer, F1, V1, F2, V2, F3, V3, F4, V4, F5, V5, F6, V6, F7, V7, F8, V8, F9, V9, F10, V10 ) => { 
  const { EmbedBuilder } = require('discord.js');
  if (author === null) author = client.user.username;
  if (iconURL === null) iconURL = client.user.avatarURL();
    const embed = new EmbedBuilder()
    .setColor(0x2F3136)
    .setTitle(title)
    .setAuthor({ name: author, iconURL: iconURL})
    .setDescription(Description)
    .setTimestamp()
    if (Thumbnail != null) embed.setThumbnail(Thumbnail);
    if (F1 != undefined) {
      if (F1) embed.addFields({ name: F1, value: V1 });
      if (F2) embed.addFields({ name: F2, value: V2 });
      if (F3) embed.addFields({ name: F3, value: V3 });
      if (F4) embed.addFields({ name: F4, value: V4 });
      if (F5) embed.addFields({ name: F5, value: V5 });
      if (F6) embed.addFields({ name: F6, value: V6 });
      if (F7) embed.addFields({ name: F7, value: V7 });
      if (F8) embed.addFields({ name: F8, value: V8 });
      if (F9) embed.addFields({ name: F9, value: V9 });
      if (F10) embed.addFields({ name: F10, value: V10 });
    }
  embed.setFooter({ text: footer, iconURL: client.user.displayAvatarURL()})
  client.guilds.cache.forEach(r => {
  r.members.fetch().then(m => {
  m.forEach(b => {
  if (b.user.id === user) {
	b.user.send({ embeds: [embed] });
    user = null;
  }})})});
}

module.exports.chEmbed = (client, channel, author, iconURL, title, Description, Thumbnail, footer, F1, V1, F2, V2, F3, V3, F4, V4, F5, V5, F6, V6, F7, V7, F8, V8, F9, V9, F10, V10 ) => { 
  const { EmbedBuilder } = require('discord.js');
  if (author === null) author = require('../config.json').shopName;
  if (iconURL === null) iconURL = require('../config.json').Thumbnail;
    const embed = new EmbedBuilder()
    .setColor(0x2F3136)
    .setTitle(title)
    .setAuthor({ name: author, iconURL: iconURL})
    .setDescription(Description)
    .setTimestamp()
    if(Thumbnail.includes('http')) embed.setThumbnail(Thumbnail);
    if (F1 != undefined) {
      if (F1) embed.addFields({ name: F1, value: V1 });
      if (F2) embed.addFields({ name: F2, value: V2 });
      if (F3) embed.addFields({ name: F3, value: V3 });
      if (F4) embed.addFields({ name: F4, value: V4 });
      if (F5) embed.addFields({ name: F5, value: V5 });
      if (F6) embed.addFields({ name: F6, value: V6 });
      if (F7) embed.addFields({ name: F7, value: V7 });
      if (F8) embed.addFields({ name: F8, value: V8 });
      if (F9) embed.addFields({ name: F9, value: V9 });
      if (F10) embed.addFields({ name: F10, value: V10 });
    }
  client.guilds.cache.forEach(r => {
  r.channels.fetch().then(ch => {
  ch.forEach(b => {
  if (b.channel.id === channel) {
    b.channel.send({ embeds: [embed] })
    channel = undefined;
  }})})});
}

module.exports.addRole = (client, user, id) => { 
  client.guilds.cache.forEach(r => {
  r.members.fetch().then(m => {
  m.forEach(b => {
  if (b.user.id === user) {
    b.user.roles.add(id);
    user = undefined;
  }})})});
}

module.exports.removeRole = (client, user, id) => { 
  client.guilds.cache.forEach(r => {
  r.members.fetch().then(m => {
  m.forEach(b => {
  if (b.user.id === user) {
    b.user.roles.remove(id);
    user = undefined;
  }})})});
}

module.exports.hasRole = (client, user, id) => {
  client.guilds.cache.forEach(r => {
  r.members.fetch().then(m => {
  m.forEach(b => {
    if (b.user.id === user && b.user.roles.cache.has(id)) return true;
    user = null;
  })})});
  return false;
}
