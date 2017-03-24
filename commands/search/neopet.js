const commando = require('discord.js-commando');

module.exports = class NeopetCommand extends commando.Command {
    constructor(Client) {
        super(Client, {
            name: 'neopet',
            group: 'search',
            memberName: 'neopet',
            description: "Gives a Neopet's image, searchable by ID. (;neopet rjwlsb8k)",
            examples: [';neopet rjwlsb8k', ';neopet getID']
        });
    }

    async run(message) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES', 'ATTACH_FILES'])) return;
        }
        console.log(`[Command] ${message.content}`);
        let petID = encodeURI(message.content.toLowerCase().split(" ").slice(1).join(" "));
        if (petID === "getid") {
            let petIDMsg = await message.channel.send("To get your pet's ID, simply go to http://www.sunnyneo.com/petimagefinder.php and enter your pet's name. It's image should show up. Then, find the link below the pet's image, and copy it to your message! It's recommended you keep this ID with you so you can easily share your pet's picture without having to repeat these steps.");
            return message.channel.sendFile('./images/PetID.png');
        }
        else {
            try {
                let petMsg = await message.channel.send(`Result for: ${petID}`);
                return message.channel.sendFile(`http://pets.neopets.com/cp/${petID}/1/5.png`);
            }
            catch (err) {
                return message.channel.send(":x: Error! Pet ID Not Found! Use `;neopet getID` for help on getting your pet ID.");
            }
        }
    }
};
