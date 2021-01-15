import json
import discord

client = discord.Client()
with open('config.json') as f:
    TOKEN = json.load(f)

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')


@client.event
async def on_message(message):
    if message.author == client.user:
        return
    
    if message.content.startswith('n!hello'):
        await message.channel.send('Hello!')


client.run(TOKEN)