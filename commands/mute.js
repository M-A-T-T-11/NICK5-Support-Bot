module.exports = {
    name: 'mute',
    description: "this mutes a member!",
    execute(message, args){
          const target = message.mentions.users.first();
          if(target){
              let mainRole = message.guild.roles.cache.find(role => role.name === 'Pleb');   
              let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
              
              let memberTarget= message.guild.members.cahce.get(target.id);

              memberTarget.roles.remove(mainRole.id);
              memberTarget.roles.add(muteRole.id);
              message.channel.send(`<@${memberTarget.user.id}> has been muted`);
          } else{
              message.channel.send('Cant find that member');
          }
    }
}