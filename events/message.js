module.exports = {
    run: (client, message) => {
        if (message.content.includes("opti")) {  
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'opti');
            message.react(reactionEmoji);
        }
        if (message.content.includes("pas opti")) {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'pasopti');
            message.react(reactionEmoji);
        }
    }
};