const Eris = require("eris");
const keep_alive = require('./keep_alive.js')
module.exports = async (client) => {
    client.on('ready', async () => {
        client.user.setPresence({
            activities: [
                {
                    name: `Nik`,
                    type: `WATCHING`
                }
            ],
            status: `idle`
        })
        client.logger.log(`Logged in to ${client.user.tag}`, 'ready')
    })

}

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
