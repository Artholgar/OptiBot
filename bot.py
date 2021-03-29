import discord
import os
from dotenv import load_dotenv
from discord.ext.commands import Bot
from discord import Intents

intents = Intents.all()
bot = Bot(intents=intents, command_prefix='!') # or whatever prefix you choose(!,%,?)

#Commands

@bot.command(name='server', help = 'Fetches server information')
async def fetchServerInfo(context):
    guild = context.guild
	
    await context.send(f'Server Name: {guild.name}')
    await context.send(f'Server Size: {len(guild.members)}')
    await context.send(f'Owner Name: {guild.owner.display_name}')

#Events
@bot.event
async def on_ready():
    await bot.change_presence(activity = discord.Activity( 
                                                        type = discord.ActivityType.custom,
                                                        name = '!'))
    print(f'Bot connected as {bot.user}')
	
@bot.event
async def on_message(message):
    await bot.process_commands(message)

    if message.content == 'test':
        await message.channel.send('Testing 1 2 3!')

@bot.event
async def on_member_join(member):
    guild = member.guild
    if guild.system_channel is not None:
        to_send = 'Welcome {0.mention} to {1.name}!'.format(member, guild)
        await guild.system_channel.send(to_send)
    
@bot.event
async def on_guild_emojis_update(guild, before, after):
    if len(after) > len(before):
        emoji = [val for val in after if val not in before][0]
        if guild.system_channel is not None:
            to_send = 'New emoji {0} in {1.name}!'.format(str(emoji), guild)
            await guild.system_channel.send(to_send)

#End of the file
load_dotenv()

bot.run(os.getenv('TOKEN'))