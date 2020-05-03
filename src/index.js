const Discord = require('discord.js');
const client = new Discord.Client();
let valrontPlayers;
let boardgamers;
let roles;
let messageBoardgame = true;;
let messageValorant = true;;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  boardgamers = Array.from(client.guilds.cache.get("539889142373548032").roles.cache.get("706544728245796876").members.keys());
  valrontPlayers = Array.from(client.guilds.cache.get("539889142373548032").roles.cache.get("706543671792762940").members.keys());
 
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


///Connecting to channel
client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.channelID

  ///boardgames
  if(newUserChannel === "706525403992293398") {
    ///get boardgame channel amount of current users
    client.channels.fetch('706525403992293398')
    .then(channel => {
      ///if amount of user = 1, then message all boardgames user with message
      if(channel.members.size === 1){
        if(messageBoardgame){
          console.log("message ON truning to off")
          let userName = channel.members.values().next().value.user.username;
          boardgamers.forEach(userId =>{
            
            client.users.cache.get(userId).send(` ${userName} zaprasza na planszówkę`);
            messageBoardgame = false;
            
          });
        }
      }
    });
    ///if channel is empty messages are turned on
  } if(newMember.voiceChannel === undefined  && oldMember.channelID ==='706525403992293398'){
    client.channels.fetch('706525403992293398')
    .then(channel => {
      ///if amount of user = 1, then message all boardgames user with message  
      if(channel.members.size === 0){
        console.log("boardgame message ON")
        messageBoardgame = true;
      }
    });
  }


   if(newUserChannel === '706525496996921406'){
    client.channels.fetch('706525496996921406')
    .then(channel => {
      if(channel.members.size === 1){
        if(messageValorant){
          console.log("Valront off")
          let userName = channel.members.values().next().value.user.username;
          valrontPlayers.forEach(userId =>{
          
            client.users.cache.get(userId).send(` ${userName} zaprasza na grę w Valorant'a`);
            messageValorant = false;
            
          });
        }
      }
    });
  } if(newMember.voiceChannel === undefined  && oldMember.channelID ==='706525496996921406'){
    client.channels.fetch('706525496996921406')
    .then(channel => {
      ///if amount of user = 1, then message all boardgames user with message  
      if(channel.members.size === 0){
        console.log("valornt on")
        messageValorant = true;
      }
    });
  }


})




