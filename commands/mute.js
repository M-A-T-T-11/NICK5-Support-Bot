module.exports = {
    name: 'mute',
    description: "this mutes a member!",
    execute(message, args){
          const target = message.mentions.users.first();
          if(target){
              let mainRole = message.guild.roles.cache.find(role => role.name === 'Pleb');   
              let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
              
              
          } else{
              message.channel.send('Cant find that member');
          }
    }
}