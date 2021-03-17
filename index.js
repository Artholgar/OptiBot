const CommandoClient = require('./client');

const path = require('path') // on ajoute la librairie path
const fs = require('fs')
const dotenv = require('dotenv')

const envConfig = dotenv.parse(fs.readFileSync('.env'))
for (const k in envConfig) {
    process.env[k] = envConfig[k]
}

const config = require('./config.json');

const client = new CommandoClient({
    ws: { intents: ['GUILD_PRESENCES', 'GUILD_MEMBERS'] },
	commandPrefix: 'fdp!', // Préfixe des commandes (ex: ?help)
	owner: process.env.BOT_OWNER_ID, // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
    disableMentions: 'everyone', // Désactive, par sécurité, l'utilisation du everyone par le bot
    presence: {
        activity: {
            name: "fdp! | souleve des daronnes", // message de présence
            type: '' // type d'activité
        }
    },
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const { once } = eventFunction;

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(client, ...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});

client.registry
    .registerDefaultTypes()
    .registerGroups(['divers'])  
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.on('error', console.error); // Afficher les erreurs

client.login(config.token);
