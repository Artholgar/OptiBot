module.exports = {
    run: (client, emoji) => {
        if (!emoji.guild.channels.cache.has("name", "annonces")) {
            console.log(emoji.guild.channels.cache.has("name", "annonces"));
            emoji.guild.channels.create("annonces", {
                type: 'text',
                reason: 'pour annocer les bails'
            })
            .then(console.log)
            .catch(console.error);
        }

        emoji.guild.channels.cache.get("name", "Annonces").overwritePermissions('user_id', { SEND_MESSAGES: true});
        const defaultChannel = emoji.guild.channels.cache.get("name", "Annonces")
        defaultChannel.send(`nouvelle emoji ${emoji}`);
        emoji.guild.channels.cache.get("name", "Annonces").overwritePermissions('user_id', { SEND_MESSAGES: false});
    }
};