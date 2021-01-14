module.exports = {
    name: 'youtube',
    description: "sends the YouTube link!",
    execute(message, args){

        if(message.member.roles.cache.has('788898797606273066')){
            message.channel.send('https://www.youtube.com/NickStern')    


        } else {
            message.channel.send('You dont have permission to execute this command, let me change that :)');
            message.member.roles.add('788898797606273066');
        }
        
    }
}