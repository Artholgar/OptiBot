module.exports = {
    run: (client, message) => {
        message.content = message.content.toLowerCase();
        var regexpOpti = /(?<!pas[ ]*)opti/;
        var regexpPasOpti = /(?<=pas[ ]*)opti/;

        if (message.author.bot) {
            return;
        }

        if (regexpOpti.test(message.content)) {  
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'opti');
            message.react(reactionEmoji);
        }
        if (regexpPasOpti.test(message.content)) {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'pasopti');
            message.react(reactionEmoji);
        }
    }
};