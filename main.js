//Creating Objects from discord.js //copy Paste
const { Client, Intents, Message, Attachment, Guild, DiscordAPIError } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



const { MessageEmbed } = require('discord.js');

const { Permissions } = require('discord.js');
const Weather = require('weather');
const weather = require('weather-js');




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


//embed


const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

//embed










//ON event function
//Current event is on each message

client.on("message", msg =>{


//so basically it first converts it into a string, and then lower cases the message and if it matches the if statment then the code will run.
if(msg.content.toString().toLowerCase() === "/hi" && !msg.author.bot)
{
	
	msg.channel.send("Hello "+"<@" + msg.author.id + ">");
	
}
if(msg.content.toString().toLowerCase() === "/react" && !msg.author.bot)
{
	msg.react("👍");

	
}


if(msg.content.toString().toLowerCase() === "/addadmin" && !msg.author.bot)
{
	msg.member.roles.add('874359274229354537')
	
	
}





if(msg.content.toString().toLowerCase() ==="/tell me a joke" && !msg.author.bot)


msg.reply(generatearandomjoke());


if(msg.content.toString().toLowerCase() === "/who am i"  && !msg.author.bot)
msg.channel.send("Your Tag: " + msg.author.tag + ' ' + " Your Id: " + msg.author.id)


if(msg.content.toString().toLowerCase() === "/ping"  && !msg.author.bot)

    msg.author.send("Pong");

if(msg.content.toString().toLowerCase() === "/play" && !msg.author.bot)
msg.channel.send("Wanna Play Chess With Why "+"<@" + "739626391825285190"+">");

if((msg.content.toString().toLowerCase() === "/git hub") && !msg.author.bot)
msg.channel.send({ embeds: [githubembed] });

if(msg.content.toString().toLowerCase() === "/youtube" && !msg.author.bot)
msg.channel.send("http://youtube.com//");

if(msg.content.toString().toLowerCase() === '/git' && !msg.author.bot)
msg.channel.send('https://avatars.githubusercontent.com/u/18133?s=200&v=4');
if(msg.content.toString().toLowerCase() === '/createmodrole' && !msg.author.bot)
msg.guild.roles.create({ name: 'Mod', permissions: [Permissions.FLAGS.MANAGE_MESSAGES, Permissions.FLAGS.KICK_MEMBERS] });



if(msg.content.toString().toLowerCase() === "/kick me" && !msg.author.bot){


msg.member.kick();



}


if(msg.content.toString().toLowerCase() === "/ban me" && !msg.author.bot){
try{
msg.member.ban();
}catch(err){



msg.channel.send("Error")

}

}



if(msg.content.toString().toLowerCase().includes("/name") && !msg.author.bot) {

	let toslicecontent = msg.content.toString().toLowerCase();
	let newcontent = toslicecontent.slice(6);

 msg.channel.send("Hello " + newcontent);
 
	
}





if(msg.content.toString().toLowerCase() === "/guild count"  && !msg.author.bot){

	msg.channel.send(`${msg.guild.memberCount}`);


	
	}




	if(msg.content.toString().toLowerCase() === "/where am i"  && !msg.author.bot){

		msg.channel.send(`You are in <#${msg.channel.id}>`);
	
	
		
		}
	




//Lists of commands

if(msg.content.toString().toLowerCase() === "/help" && !msg.author.bot){

	msg.channel.send("Commands:\n /hi \n /react \n /addadmin \n /tell me a joke \n /ping \n /play \n /git hub \n /youtube \n /git \n /kick me \n /ban me \n /name \n /guild count \n /where am i ");

	
	}

})



//Function ends here


//ON event function``
client.on("guildMemberAdd", (member) => {
	



	msg.channel.send(`${interaction.guild.memberCount}`)

})



//ON event function





//Token 

client.login('ODc0MDA4NjkyMzEwMjgyMjQw.YRAuBg.kREEL8pY1QNRqG7-08XAX70MpQQ')
//Token