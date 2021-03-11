module.exports = {
    run: (client) => {
        client.on('message',message => {
            if(message.content === 'opti') {
                const reactionEmoji = message.gulid.emojis.cache.find(emoji => emoji.name === 'opti');  
                message.react(reactionEmoji);
            }
        });
    }
}