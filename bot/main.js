//Creating Objects from discord.js //copy Paste
const { Client, Intents, Message, Attachment, Guild } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



const { MessageEmbed } = require('discord.js');

const { Permissions } = require('discord.js');

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
//Courotine FUnction




//Courooutin function

//Embed


// inside a command, event listener, etc.
const githubembed = new MessageEmbed()
	githubembed.setColor('#FF0000')
	githubembed.setTitle('Git Hub')
	githubembed.setURL('https://github.com/')
	githubembed.setDescription('You can put your code here if you want and have a version control')
	githubembed.setThumbnail('https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_505df21738edbe9baababa9d60be291d/github.png')
	githubembed.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_505df21738edbe9baababa9d60be291d/github.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_505df21738edbe9baababa9d60be291d/github.png');
    




//Embed















//ON event function
//Current event is on each message

client.on("message", msg =>{

	let a = msg.content.toString();
	a = a.toLowerCase();


if(a === "/hi" && !msg.author.bot)
{
	
	msg.channel.send("Hello "+"<@" + msg.author.id + ">");
	
}
if(a === "/react" && !msg.author.bot)
{
	msg.react("👍");

	
}


if(a === "/addadmin" && !msg.author.bot)
{
	msg.member.roles.add('874359274229354537')
	
	
}





if(a ==="/tell me a joke" && !msg.author.bot)


msg.reply(generatearandomjoke());


if(a === "/who am i"  && !msg.author.bot)
msg.channel.send("Your Tag: " + msg.author.tag + ' ' + " Your Id: " + msg.author.id)


if(a === "/ping"  && !msg.author.bot)

    msg.author.send("Pong");

if(a === "play" && !msg.author.bot)
msg.channel.send("Wanna Play Chess With Why "+"<@" + "739626391825285190"+">");

if((a === "/git hub") && !msg.author.bot)
msg.channel.send({ embeds: [githubembed] });

if(a === "youtube" && !msg.author.bot)
msg.channel.send("http://youtube.com//");

if(a === '/git' && !msg.author.bot)
msg.channel.send('https://avatars.githubusercontent.com/u/18133?s=200&v=4');
if(a === '/createmodrole' && !msg.author.bot)
msg.guild.roles.create({ name: 'Mod', permissions: [Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.KICK_MEMBERS] });
})




//Token

client.login('ODc0MDA4NjkyMzEwMjgyMjQw.YRAuBg.mAwLqMcbv4RYRwdLs0P1MbQ7Om0')
//Token