const Discord = require('discord.js');
const client = new Discord.Client();


/*
 * Prepare Bot
 */
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


/*
 * EVENT - Join/Leave channel
 */
client.on('voiceStateUpdate', (oldMember, newMember) => {
  /*
  * List of user with spec. role
  */
  let valrontPlayers;
  let boardgamePlayers;
  let LeaugeOfLegendsPlayers;
  let watch2getherPlayers;
  /*
   * Turning message on
   */
  let messageBoardgame = true;
  let messageValorant = true;
  let messageLeaugeOfLegends = true;
  let messageWatch2Gether = true;
  /*
   *  Id of newMember channel
   */
  let newUserChannel = newMember.channelID

  /*
   * Channel - BOARDGAME; id - 706525403992293398
   */
  if(newUserChannel === "706525403992293398") {
    /*
     * Assing variables to list of users
     */
    boardgamePlayers = Array.from(client.guilds.cache.get("539889142373548032").roles.cache.get("706544728245796876").members.keys());
    /*
     * Amount of current in spec. channel
     */
    client.channels.fetch('706525403992293398')
    .then(channel => {
      /*
       * Channel size: 1 -> send message, then turn of sennding messages
       */
      if(channel.members.size === 1){
        if(messageBoardgame){

          let userName = channel.members.values().next().value.user.username;
          boardgamePlayers.forEach(userId =>{
            if(client.users.cache.get(userId).presence.status !== 'offline'){
              if(userId !==  channel.members.values().next().value.user.id){
              /*
               * Sending messages to other user of same role
               */
              client.users.cache.get(userId).send(` ${userName} zaprasza na planszówkę`);
              }
              
            }
          });
          /*
               * MESSAGE TURNED OF
               */
          messageBoardgame = false;
        }
      }
    });
    /*
     * Channnel size: 0 -> turn on sending messages
     */
  } if(newMember.voiceChannel === undefined  && oldMember.channelID ==='706525403992293398'){
    messageBoardgame = turnOnMessage('706525403992293398');
  }

  /*
   * Channel - VALORANT; id - 706525496996921406
   */
   if(newUserChannel === '706525496996921406'){
     /*
      * Assing variables to list of users
      */
     valrontPlayers = Array.from(client.guilds.cache.get("539889142373548032").roles.cache.get("706543671792762940").members.keys());
     /*
      * Amount of current in spec. channel
      */
    client.channels.fetch('706525496996921406')
    .then(channel => {
      /*
       * Channel size: 1 -> send message, then turn of sennding messages
       */
      if(channel.members.size === 1){
        if(messageValorant){
          let userName = channel.members.values().next().value.user.username;
          valrontPlayers.forEach(userId =>{
            if(client.users.cache.get(userId).presence.status !== 'offline'){
              if(userId !==  channel.members.values().next().value.user.id){
               /*
                * Sending messages to other user of same role
                */
                client.users.cache.get(userId).send(` ${userName} zaprasza na grę w Valorant'a`);
              }
            }
          });
          /*
           * MESSAGE TURNED OF
           */
          messageValorant = false;
        }
      }
    });
    /*
     * Channnel size: 0 -> turn on sending messages
     */
  } if(newMember.voiceChannel === undefined  && oldMember.channelID ==='706525496996921406'){
    messageValorant = turnOnMessage('706525496996921406');
  }


/*
   * Channel - LEAUGE OF LEGENDS; id - 706526177929724245
   */
  if(newUserChannel === '706526177929724245'){
    /*
     * Assing variables to list of users
     */
    LeaugeOfLegendsPlayers = Array.from(client.guilds.cache.get("539889142373548032").roles.cache.get("706544637988438096").members.keys());
    /*
     * Amount of current in spec. channel
     */
   client.channels.fetch('706526177929724245')
   .then(channel => {
     /*
      * Channel size: 1 -> send message, then turn of sennding messages
      */
     if(channel.members.size === 1){
       if(messageLeaugeOfLegends){
         let userName = channel.members.values().next().value.user.username;
         LeaugeOfLegendsPlayers.forEach(userId =>{
           if(client.users.cache.get(userId).presence.status !== 'offline'){
            if(userId !==  channel.members.values().next().value.user.id){
             /*
              * MESSAGE TURNED OF
              */
              client.users.cache.get(userId).send(` ${userName} zaprasza na grę w LOL'a`);
            }
           }
         });
         /*
          *   MESSAGE TURNED OF
          */
         messageLeaugeOfLegends = false;
       }
     }
   });
   /*
    * Channnel size: 0 -> turn on sending messages
    */
 } if(newMember.voiceChannel === undefined  && oldMember.channelID ==='706526177929724245'){
  messageLeaugeOfLegends = turnOnMessage('706526177929724245');
 }


  /*
   * Channel - Watch2Gether; id - 706546210902900737
   */
  if(newUserChannel === '706546210902900737'){
    /*
     * Assing variables to list of users
     */
    watch2getherPlayers = Array.from(client.guilds.cache.get("539889142373548032").roles.cache.get("706544843379441754").members.keys());
    /*
     * Amount of current in spec. channel
     */
   client.channels.fetch('706546210902900737')
   .then(channel => {
     /*
      * Channel size: 1 -> send message, then turn of sennding messages
      */
     if(channel.members.size === 1){
       if(messageWatch2Gether){
         let userName = channel.members.values().next().value.user.username;
         watch2getherPlayers.forEach(userId =>{
           if(client.users.cache.get(userId).presence.status !== 'offline'){
             /*
              * Sending message
              */
             client.users.cache.get(userId).send(` HawryloBot zaprasza na oglondanko-> https://www.watch2gether.com/rooms/oglondanko-urevlabm6dk8mwtcf5?lang=pl <-`);

           }
         });
         /*
          *   MESSAGE TURNED OF
          */
         messageWatch2Gether = false;
       }
     }
   });
   /*
    * Channnel size: 0 -> turn on sending messages
    */
 } if(newMember.voiceChannel === undefined  && oldMember.channelID ==='706546210902900737'){
  messageWatch2Gether = turnOnMessage('706546210902900737');
 }

 
/*
 * END OF LISTENER
 */
});

/*
 * Function to turn off messages for spec channel (DRY) 
 */
function turnOnMessage(channelId){
  client.channels.fetch(channelId)
  .then(channel => {
    /*
     *  Channel size: 0 -> turning messages ON for /'channel'/
     */
    if(channel.members.size === 0){
      return true;
    }
  });
}





