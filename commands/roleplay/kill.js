const commando = require('discord.js-commando');

module.exports = class KillCommand extends commando.Command {
    constructor(Client) {
        super(Client, {
            name: 'kill',
            group: 'roleplay',
            memberName: 'kill',
            description: 'Kills someone. (;kill @User)',
            examples: [';kill @User']
        });
    }

    run(message) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        console.log(`[Command] ${message.content}`);
        let thingToRoleplay = message.content.split(" ").slice(1).join(" ");
        return message.channel.send(`${message.author} *kills* ${thingToRoleplay}`);
    }
};
