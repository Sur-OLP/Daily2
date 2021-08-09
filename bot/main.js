const { Client, Intents, Message } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.once('ready', () => {

console.log("The Bot is online and running");

})
let  joke = "Which bear is the most condescending? A pan-duh!"
let  joke1  = "What kind of noise does a witch’s vehicle make? Brrrroooom, brrroooom."
let joke2 = "What’s brown and sticky? A stick."
let joke3 = "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels."
let joke4 = "Error"
let joke5 = "Why are elevator jokes so classic and good? They work on many levels."
let joke6 = "What do you call a pudgy psychic? A four-chin teller."
let joke7 = "Want to know why nurses like red crayons? Sometimes they have to draw blood."
let joke8 = "Want to know why nurses like red crayons? Sometimes they have to draw blood."
let joke9 = "Why do bees have sticky hair? Because they use a honeycomb"




    
    
    
function generatearandomjoke(){


let thisnum  = Math.floor((Math.random() * 10) + 1);

if(thisnum === 1) return joke
else if(thisnum ===2) return joke1
else if(thisnum ===3) return joke2
else if(thisnum ===4) return joke3
else if(thisnum ===5) return joke4
else if(thisnum ===6) return joke5
else if(thisnum ===7) return joke6
else if(thisnum ===8) return joke7
else if(thisnum ===9) return joke8
else if(thisnum ===10) return joke9


}

client.on("message", msg =>{
if(msg.content === "Hi" && !msg.author.bot)
 msg.reply("Hello");







if(msg.content ==="Tell Me A Joke" && !msg.author.bot)



msg.reply(generatearandomjoke());


if(msg.content === "Who Am I"  && !msg.author.bot)
msg.channel.send("Your Tag: " + msg.author.tag + ' ' + " Your Id: " + msg.author.id)


if(msg.content === "Ping"  && !msg.author.bot)

    msg.author.send("Pong");


})



client.login('ODc0MDA4NjkyMzEwMjgyMjQw.YRAuBg.mAwLqMcbv4RYRwdLs0P1MbQ7Om0')
