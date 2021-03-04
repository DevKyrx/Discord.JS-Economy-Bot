const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
        let user = message.author;

        let timeout = 86400000;
        let amount = 200;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            message.channel.send(`You Have Already Collected Your Daily Reward!`);
         
        } else {
            
                message.channel.send(`You Collected Your Daily Reward Of: ${amount} Coins!`);
            
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
  }
