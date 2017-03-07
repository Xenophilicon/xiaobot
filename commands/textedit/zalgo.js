const commando = require('discord.js-commando');
const zalgo = require('zalgolize');

class ZalgoCommand extends commando.Command {
    constructor(Client){
        super(Client, {
            name: 'zalgo', 
            group: 'textedit',
            memberName: 'zalgo',
            description: 'Zalgoizes Text (;zalgo This Text)',
            examples: [';zalgo This Text']
        });
    }

    async run(message, args) {
        if(message.channel.type !== 'dm') {
            if(!message.channel.permissionsFor(this.client.user).hasPermission('SEND_MESSAGES')) return;
            if(!message.channel.permissionsFor(this.client.user).hasPermission('READ_MESSAGES')) return;
        }
        console.log("[Command] " + message.content);
        let zalgoified = zalgo(message.content.split(" ").slice(1).join(" "));
        if(zalgoified === '') {
            message.channel.sendMessage(":x: Error! Nothing to zalgoify!");
        } else if(zalgoified.length > 1950) {
            message.channel.sendMessage(":x: Error! Your message is too long!");
        } else {
            message.channel.sendMessage(zalgoified);
        }
    }
}

module.exports = ZalgoCommand;