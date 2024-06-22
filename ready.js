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
