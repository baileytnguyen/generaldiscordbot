const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pech',
    description: 'Performance Expectation Calculator : Cup & Handle Price Target',
    args: true,
    usage: '<breakout price> <highest of two price bar highs> <lowest of two price bar lows> <current price>',
    execute(message, args) 
    {
        if (args.length < 4) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[1]) - parseInt(args[2])) * (.50);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[3])) / (parseInt(args[3])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Cup & Handle Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Breakout Price: ${args[0]}\nHighest Price of Either Side of the Cup: ${args[1]}\nLow Price at Bottom of Cup: ${args[2]}\nCurrent Price: ${args[3]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};