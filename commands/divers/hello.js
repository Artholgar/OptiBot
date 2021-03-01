const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			memberName: 'hello',
			group: 'divers',
			aliases: ['bonjour', 'hi'],
            description: 'Replies with a hello message.',
            clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
            userPermissions: ['ADMINISTRATOR'], // l'utilisateur doit être administrateur pour exécuter la commande
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10,
            },
            args: [
                {
                    key: 'text',
                    prompt: 'Quel texte voulez-vous que le bot répondre ?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 101 && text.length > 11) return true;
                        return 'Le texte doit avoir au minimum 10 caractères, et maximum 100.';
                    }
                },
            ],
		});
	}

	async run(msg, { text }) {
		msg.say(`Votre texte est: ${text}`);
	}
};