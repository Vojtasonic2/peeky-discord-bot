const Discord = require('discord.js');
const bot = new Discord.Client();

var dadJokes = [
    "Whenever we drive past a graveyard my dad says, 'Do you know why I can’t be buried there?' And we all say, 'Why not?' And he says, 'Because I’m not dead yet!",
    "Did you hear about the restaurant On the moon? Great food, no atmosphere.",
    "How many apples grow on a tree? All of them.",
    "Why did the coffee file a police report? It got mugged.",
    "The shovel was a ground-breaking invention.",
    "I would avoid the sushi if I was you. It’s a little fishy.",
    "Can February March? No, but April May.",
    "Dad, I'm hungry. Hi Hungry, I'm dad.",
    "Why can't you have a 12 inch long nose? Because then it would be a foot.",
    "Dad, did you get a haircut? No I got them all cut.",
    "Dad, who is an alchoholic? See those 4 cars son? An alcoholic would see 8. But dad, there are only 2 cars.",
    "Why do bees hum? Because they don't know the words!",
    "I would tell you a joke about pizza, but, it's just too cheesy.",
    "Wanna hear a joke about paper? Nevermind, it's tearable.",
    "Why couldn't the Bicycle stand up by it self? It was two tired.",
    "I'm confused. Hey confused, have you seen my son Dallon?",
    "What do you a deer with no eyes? No idea!",
    "Why do crabs never give to charity? Because they're too shellfish.",
    "Don't trust atoms. They make up everything.",
    "Our wedding was beatiful, even the cake was in tiers.",
    "Guess how many tickles it takes to make a squid laugh. Tenticles.",
    "My dad is a doctor and one of his patients has lost a left hand, so he told the patient's parents that he's all-right."
  ]

var fml = [
    'Today, I got robbed. They took my stereo and laptop, but they left my car and a note that reads "Wtf is this?" FML.',
    'Today, I started a new job at a glass shop and my boss asked me to vacuum. I ended up tipping over and shattering the most expensive bong in the shop, which retailed at $3,000. FML.',
    'Today, I woke up feeling ill. My mom sent me to school anyway, and grounded me for "lying" about being sick. As soon as I got to school, I began vomiting blood. FML.',
    'Today, my boyfriend dislocated my jaw by sitting on my face while trying to fart on it. FML.',
    'Today, my phone went missing. My 8-year-old son took it to school and sold it for $10. FML.',
    "Today, as I was planning my impending nuptials with my fiancé, my sister jokingly told him it's not too late to call it off. He took her seriously and bailed. He won’t answer my calls. FML.",
    "Today, I went on a beach date, so I wore flip flops. When she showed up, she took one look at me and said, “I could never date a guy who shaves his feet” and left. This from the girl wearing socks with her sandals. FML.",
    "Today, my dad asked what I wanted for my birthday. The only thing I wanted was the complete series of Dragon Ball Z on DVD. He just sighed, shook his head, and asked me to pick something normal. FML.",
    'Today, I told my class I was giving them 60 seconds to do a problem. A girl replied furiously "At least give us one minute!!" I teach a high school honors math class. FML.',
    "Today, my 17-year-old son attempted to rob the bank I work at while I was off shift. FML.",
    "Today, I’m having knee surgery. I can’t drive for the next week because of the heavy duty pain killers, so my mom told me I'll have to walk to and from school. It’s only a couple of miles. FML.",
    "Today, my doctor told me that my lungs are as bad as a 60-year-old heavy smoker's. I'm 19 and I've never touched a cigarette in my life. FML.",
    "Today, I found out that while my mother-in-law claimed to be babysitting my son, she was actually dropping him off at an unlicensed “day care” in a shady part of town so she could go out. How did I find out? The house was raided by police. FML.",
    "Today, I went to the dentist to get a tooth pulled. When I woke up I found out they pulled the wrong one. FML."
]

var dice = [
    " **1**!",
    " **2**!",
    " **3**!",
    " **4**!",
    " **5**!", 
    " **6**!" 
  ]

var reply = [
    "yes.",
    "no.",
    "that I'm not sure",
    "that probably yes.",
    "that probably no."
  ]

var cmcs_face = [
    '<:vojtasonic_rblx:427444622235795467>',
    '<:oerwout10_rblx:427097440412237824>',
    '<:peeky:398855238725009418>',
    '<:over_flexing:426442155062722560>',
    '<:turtle_cute:427096783659728897>'
]

var cmcs_1 = [
    'I like turtles.',
    'How are you?',
    "I'm a robot and i will kill you!",
    'MEE6 is better.',
    "I'm hungry.",
    'Life is pain.',
    'I wanna play Impact.',
    'I have new watches everyone!',
    'Hey!',
    'Hello!',
    'Roblox is better than Minecraft.',
    'I prefer dogs over cats.',
    'I prefer cats over dogs.',
    'XXL Plyšáci were great.',
    'Mind using a different command?'
]

var cmcs_2 = [
    'I agree!',
    'Meh.',
    'Same.',
    'Shame.',
    'Yeah.',
    'Nope.',
    'Cool.',
    "*deds*",
    'Wait this supposed to be a punch line?',
    '<:ok_hand_down:426840561450745868>',
    'lol',
    "Just don't eat me.",
    "That's deep.",
    'Woah.',
    'Hi.',
    'Hello.',
    'No u',
    "I don't care.",
    'Whatever.',
    '...',
    'Not interested.',
    'Delet this',
    '*smiles*'
]

var globalMessage = '*No Global message has been set yet!*'

bot.on('ready', () => { bot.user.setActivity('Ver 1.0 | /About')} )
bot.on('ready', () => { bot.user.setStatus('idle')} )
console.log('The bot is now running')

bot.on('message', (message) => { //Commands
    if(message.content == '/Commands'){
       message.channel.send("Alright, here are my commands!\n\n**About**\nwill make me introduce myself!\n**Commands**\nwill show my comm again!\n**SupportServer**\nwill make me invite you to my support server!\n**Wikipedia**\will give you a random page of Wikipedia!\n**ServerInfo**\nwill make me display some useful stuff about your server!\n**UserInfo**\nwill make me tell you something about yourself.\n**StartPolls**\nwill make me create a poll for you.\n**StartCountdown**\nwill make me remind you of something in 10 minutes.\n**GlobalSet**\nwill set a global message that can be seen on all the servers with me in it!\n**GlobalShow**\nwill show the global message.\n**Comics**\ncreates a comics that's perfect for sitcom laugh track!\n**DadJoke**\nwill force me to say a *hilarious* dad joke.\n**Fml**\nwanna hear an FML story?\n**Roll**\nI will roll a 6 sided dice.\n**Ask**\nask me anything! Don't be shy!\n**GetEmoji**\nI will show you the id for your custom emojis!\n**Highfive**\ngives someone a highfive!\n**Support**\nwill support the bot!");
       console.log('The Commands command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //About
    if(message.content == '/About'){
       message.reply('Hello! I am Peeky and I can do all kinds of simple, but very good stuff. To see what I am capable of doing, just type **/Commands**.\nIf you need any assistance with the bot or want to report a bug, be sure to contact **Vojtasonic#5792** or join the Support Server by typing **/SupportServer**.')
       console.log('The About command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //SupportServer
    if(message.content == '/SupportServer'){
       message.reply('The Support Server invite has been sent to your Private Messages.')
       message.author.sendMessage("Hello! Here is the link that will put you in our Discord server where we can help you with your problem!")
       message.author.sendMessage("https://discord.gg/j4kArRh")
       console.log('The SupportServer command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //Wikipedia
    if(message.content == '/Wikipedia'){
       message.reply('Here is a random page of Wikipedia, just for you!\n*https://en.wikipedia.org/wiki/Special:Random*')   
       console.log('The Wikipedia command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //ServerInfo
    if(message.content == '/ServerInfo'){
       message.reply('This server is called **' + message.guild.name + '** and has ' + '**' + message.guild.memberCount + '** members.')   
       console.log('The ServerInfo command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //UserInfo
    if(message.content == '/UserInfo'){
       message.channel.sendMessage('Your username is **' + message.author.tag + '** and your ID is **' + message.author.id + '**.')
       console.log('The UserInfo command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //Poll
    if(message.content.startsWith("/StartPoll ")){
       message.reply('You have started a poll!')
       message.react('<:bot_approve:416366096053174273')
       message.react('<:bot_deny:416366135223517186')
       console.log('The Poll command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Countdown
    if(message.content.startsWith("/StartCountdown ")){ //10 Minutes//
        message.reply('You have started a 10 minute countdown!')
        console.log('The Countdown command has been executed. Executor: ' + message.author.tag)
        setTimeout(function (){
        message.reply('*Your StartCountdown has finished!* **(' + message.content.replace('/StartCountdown ','') + ')**') 
      }, 600000);
    }
});

bot.on('message', (message) => { //Global (Set)
  if(message.content.startsWith("/GlobalSet ")){
        globalMessage = '**' + message.author.tag + ':** ' + message.content.replace('/GlobalSet ','')
        message.reply('You have set the global message!')
        console.log('The GlobalSet command has been executed. Executor: ' + message.author.tag)
  }
});

bot.on('message', (message) => { //Global (Show)
    if(message.content == '/GlobalShow'){
        message.channel.sendMessage(globalMessage)
        console.log('The GlobalShow command has been executed. Executor: ' + message.author.tag)
  } 
})

bot.on('message', (message) => { //Comics
    if(message.content == '/Comics'){
        var randomFace = cmcs_face[Math.floor(Math.random() * cmcs_face.length)];
        var randomFace2 = cmcs_face[Math.floor(Math.random() * cmcs_face.length)];
        var randomQuote = cmcs_1[Math.floor(Math.random() * cmcs_1.length)];
        var randomAnswer = cmcs_2[Math.floor(Math.random() * cmcs_2.length)];
        message.channel.send(randomFace + ": " + randomQuote + "\n" + randomFace2 + ": " + randomAnswer)
        console.log('The Comics command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //DadJokes
    if(message.content == '/DadJoke'){
        var randomAnswer = dadJokes[Math.floor(Math.random() * dadJokes.length)];
        message.reply(randomAnswer);
        console.log('The DadJoke command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //FML
    if(message.content == '/Fml'){
        var randomFml = fml[Math.floor(Math.random() * fml.length)];
        message.reply(randomFml);
        console.log('The Fml command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //Roll
    if(message.content == '/Roll'){
        var randomNumber = dice[Math.floor(Math.random() * dice.length)];
        message.reply('You have rolled the number' + randomNumber);
        console.log('The Roll command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //Ask
  if(message.content.startsWith("/Ask ")){
        var randomReply = reply[Math.floor(Math.random() * reply.length)];
        message.reply("I'd say " + randomReply);
        console.log('The Ask command has been executed. Executor: ' + message.author.tag)
  }
});

bot.on('message', (message) => { //Highfive
  if(message.content.startsWith("/Highfive ")){
        message.channel.sendMessage(message.author + '🙏' + message.mentions.members.first());
        console.log('The Highfive command has been executed. Executor: ' + message.author.tag)
  }
});

bot.on('message', (message) => { //GetEmoji
    if(message.content.startsWith("/GetEmoji ")){
       message.reply('`' + message.content.replace('/GetEmoji ','') + '`')
       console.log('The GetEmoji command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Support
    if(message.content == '/Support'){
       message.reply('The Support links have been sent to your Private Messages.')
       message.author.sendMessage("**Thank you for choosing to support the bot!**")
       message.author.sendMessage("**VOTE:** `https://discordbots.org/bot/415259002310623232` (Free)")
       message.author.sendMessage("**PLEDGE:** `https://www.patreon.com/vojtasonic` (Paid)")
       console.log('The Support command has been executed. Executor: ' + message.author.tag)
   }
})

bot.login(process.env.BOT_TOKEN);
