import json
import discord


class DiscordBot(discord.Client):
    
    def __init__(self):
        super().__init__()
        self.__prefix = 'n!'

    async def on_ready(self):
        print('{0} has connected to Discord!'.format(self.user))

    async def on_message(self, message):
        if message.author != self.user:
            if message.content.lower().startswith('n!hello'):   # Check lower case
                await message.channel.send('Hello!')

        print('{0} :  {1}'.format(message.author, message.content))


if __name__ == "__main__":
    with open('config.json') as f:
        TOKEN = json.load(f)['DISCORD_TOKEN']

    bot = DiscordBot()
    bot.run(TOKEN)