module.exports = {
    run: (client, emoji) => {
        const channel = emoji.guild.channels.cache.find(c => c.type === "text" && c.name === "annonces");
        const id = channel ? channel.id : null;
        if (id == null) {
            emoji.guild.channels.create("annonces", {
                type: 'text',
                reason: 'pour annocer les bails'
            })
            .then(console.log)
            .catch(console.error);
        }
        
        channel.send(emoji.toString() + "  " + emoji.toString() + " " + emoji.toString());
        channel.send("\nNouvelle emoji disponible, grace a discord nitro, vous pourez l'utiliser ou vous voulez !!! :scream: ");
    }
};