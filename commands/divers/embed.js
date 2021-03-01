const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            memberName: 'embed',
            group: 'divers',
            description: 'Send an embed message.',
            ownerOnly: true,
            clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'], // le bot doit avoir la permission d'envoyer des messages
            throttling: {
                usages: 2,
                duration: 10,
            },
        });
    }

    async run(msg) {
        const embed = new Discord.MessageEmbed(); // création de l'embed

        embed
            .setColor(`PURPLE`) // ou .setColor(`#0099ff`)
            .setTitle(`Kaaris le boss`)

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://mtxserv.com/fr/`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, '')

            .setDescription(`Actu : Kaaris soulève la mère de Booba`)
            .setFooter(`Pied de page du message`, `${this.client.user.displayAvatarURL()}`)

            .setImage(`https://photos.lci.fr/images/1920/1080/booba-kaaris-20190128-1419-b12b58-0@1x.png`)
            .setThumbnail(`http://www.non-stop-people.com/sites/non-stop-people.com/files/images/2019/04/kaaris.jpg`)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields

            // Sur une ligne complète :
            .addField(`Titre, maximum 256 caractères`,`Votre texte, maximum 1024 caractères`)

            // Plusieurs sur une même ligne :
            .addField(`Titre 1`,`Votre texte 1`, true)
            .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)
        ;

        msg.say(embed)
    }
};