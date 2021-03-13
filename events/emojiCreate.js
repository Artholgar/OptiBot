const Discord = require('discord.js');

module.exports = {
    run: (client, emoji) => {
        const channel = emoji.guild.channels.cache.find(c => c.type === "text" && c.name === "annonces");
        const id = channel ? channel.id : null;
        const embed = new Discord.MessageEmbed(); // création de l'embed

        if (id == null) {
            emoji.guild.channels.create("annonces", {
                type: 'text',
                reason: 'pour annocer les bails'
            })
                .then(console.log)
                .catch(console.error);
        }
        
        embed
            .setColor('PURPLE') // ou .setColor(`#0099ff`)
            .setTitle('New emoji !')

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://mtxserv.com/fr/`)
            //.setAuthor(emoji.author.tag, emoji.author.tag.displayAvatarURL(), '')

            .setDescription("Nouvelle emoji disponible, grace a discord nitro, vous pourez l'utiliser ou vous voulez !!! :scream: ")
            .setFooter(`Pied de page du message`, client.user.displayAvatarURL())

            .setThumbnail(emoji.url)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields
            .addField('Name', emoji.name, true)
            ;
        console.log(emoji);
        //channel.send(embed);
    }
}