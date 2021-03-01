const CommandoClient = require('./client');

const path = require('path') // on ajoute la librairie path
const fs = require('fs')
const dotenv = require('dotenv')

const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

const client = new CommandoClient({
	commandPrefix: 'fdp!', // Préfixe des commandes (ex: ?help)
	owner: process.env.BOT_OWNER_ID, // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
    disableMentions: 'everyone' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
    .registerDefaultTypes()
    .registerGroups(['divers'])  
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.on('error', console.error); // Afficher les erreurs

client.login(process.env.BOT_TOKEN);
