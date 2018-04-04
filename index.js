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
    "🎲⬛⬛⬛⬛⬛ (1)",
    "🎲🎲⬛⬛⬛⬛ (2)",
    "🎲🎲🎲⬛⬛⬛ (3)",
    "🎲🎲🎲🎲⬛⬛ (4)",
    "🎲🎲🎲🎲🎲⬛ (5)", 
    "🎲🎲🎲🎲🎲🎲 (6)" 
  ]

var reply = [
    "yes",
    "no",
    "I'm not sure",
    "probably yes",
    "probably no",
    "maybe"
  ]

var cmcs_face = [
    '<:vojtasonic_rblx:427444622235795467>',
    '<:oerwout10_rblx:427097440412237824>',
    '<:peeky:398855238725009418>',
    '<:over_flexing:426442155062722560>',
    '<:turtle_cute:427096783659728897>',
    '🐸',
    '😎',
    '<:threathing:402597935184871426>',
    '<:brainless:426443591502528527>',
    '<:the_owner:376842538071359488>'
]

var cmcs_name1 = [
    'The',
    'Minecraft',
    '3D',
    'The Amazing',
    'The Red',
    'A very cool',
    'Youtube',
    'Shrek: The',
    'The Amazing',
    'Attack on the'
]

var cmcs_name2 = [
    'Room',
    'Killer',
    'Sniper',
    'Minecrafter',
    'Robloxian',
    'Boxing',
    'Disstracks',
    'Yass!',
    'Ogres',
    'Shreks',
    'Minecraft Studios',
    "Let's play (CZ)"
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
    'Mind using a different command?',
    'Get out of my swamp!',
    'I have feelings for you...',
    'Peeky is just a spam bot!'
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

var fight_damage = [
    1,
    2,
    6,
    8,
    10,
    12,
    15,
    17,
    19,
    20
]

var fight_weapon = [
    '🔪',
    '🗡',
    '🔫',
    '🔌',
    '⛏',
    '🔨',
    '🔧',
    '💣',
    '🛡',
    '📏',
    '📐', 
    '🗑',
    '🤜'
]

var fishing_fish = [
    ' caught a **Sinarapan** (Ranked #1)!\n\nThis fish grows up to 2.5 centimeters long. It is transparent with a few dark spots and black eyes.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Sinarapan',
    ' caught a **Archerfish** (Ranked #2)!\n\nThis fish can shoot insects above water in a small distance.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Archerfish',
    ' caught a **Rose Fish** (Ranked #3)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Rose_fish',
    ' caught a **Clownfish**  (Ranked #4)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Amphiprioninae',
    ' caught a **Jellyfish** (Ranked #5)!\n\n*The popular English name **Jellyfish** has been in use since 1796.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/jellyfish',
    ' caught a **Grouper** (Ranked #6)!\n\nFemale groupers change their sex to male if no male is available.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Grouper',
    ' caught a **Dwarf seahorse** (Ranked #7)!\n\nThe slowest-moving fishes are the sea horses, the Dwarf seahorse attains speed of 5 feet per hour.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Dwarf_seahorse',
    ' caught a **Puffer Fish** (Ranked #8)!\n\nThe puffer fish is the most poisonous fish in the world.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Puffer_fish',
    ' caught a **Four-eyed fish** (Ranked #9)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Four-eyed_fish',
    ' caught a **Piranha** (Ranked #10)!\n\nDepending on the exact species, most piranhas grow to between 12 and 35 cm long.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Piranha',
    ' caught a **Parrotfish** (Ranked #11)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Parrotfish',
    ' caught a **Box Jellyfish** (Ranked #12)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Box_Jellyfish',
    ' caught a **Cod** (Ranked #13)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Cod',
    ' caught a **Swordfish** (Ranked #14)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Swordfish',
    ' caught a **Pacu** (Ranked #15)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Pacu',
    ' caught a **Barracuda** (Ranked #16)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Barracuda',
    ' caught a **Blobfish** (Ranked #17)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Blobfish',
    ' caught a **Tarpon** (Ranked #18)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Tarpon',
    ' caught a **Trout** (Ranked #19)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Trout',
    ' caught a group of **Sardines** (Ranked #20)!\n\nSardines move in enourmous groups.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/sardines',
    ' caught a **Golden Dorado** (Ranked #21)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Salminus_brasiliensis',
    ' caught a **Southern platyfish** (Ranked #22)!\n\nThe southern platyfish grows to a maximum overall length of 6.0 centimetres.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Southern_platyfish',
    ' caught a **Common carp** (Ranked #23)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Common_carp',
    ' caught a **Neon tetra** (Ranked #24)!\n\nThe neon tetra is found in the western and northern Amazon basin in southeastern Colombia, eastern Peru, and western Brazil.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Neon_tetra',
    ' caught a **Giant trevally** (Ranked #25)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Giant_trevally',
    ' caught a **Eel** (Ranked #26)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Eel',
    ' caught a **Brachyplatystoma** (Ranked #27)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Brachyplatystoma',
    ' caught a **Halibut** (Ranked #28)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Halibut',
    ' caught a **Sturgeon** (Ranked #29)!\n\nThe evolution of this fish dates back to the Triassic some 245 to 208 million years ago\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Sturgeon',
    ' caught a **Perch** (Ranked #30)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Perch'
]
    
var RPS_all = [
    '✋',
    '✌',
    '✊'
]

var globalMessage = 'No Global message has been set yet!\nType **/Commands** to see how to set one!'
var fishing_amount = 0
var VersionNumber = '2.0'

bot.on('ready', () => { bot.user.setActivity(VersionNumber + ' | ' + bot.guilds.size + ' Servers') })
bot.on('ready', () => { bot.user.setStatus('idle')} )
console.log('The bot is now running')

bot.on('message', (message) => { //Commands
    if(message.content == '/Commands'){
       message.author.sendMessage("**__Commands__**\nBot's prefix: **/**\n\n ● **About**\n  • Introduces you to the bot and gives you few helpful commands!\n\n ● **Commands**\n  • Shows the commands!\n\n ● **Bonuses**\n  • Sends you the bonuses that Peeky can do!\n\n ● **Tags**\n  • Explains the tags!\n\n ● **Help**\n  • Send you some links to help out you or the bot!\n\n ● **Wikipedia** <Search_request>\n  • Searches the Wikipedia for you!\n\n ● **ServerInfo**\n  • Displays some useful stuff about your server!\n\n ● **UserInfo**\n  • Tells you something about yourself.\n\n ● **StartPoll** <Poll Topic>\n  • Starts a poll for you.\n\n ● **StartCountdown** <0000 - 9999> <Countdown Name>\n  • Starts a countdown in seconds.\n\n ● **GlobalSet** <Message>\n  • Sets a global message that can be seen on all the servers with me in!\n\n ● **GlobalShow**\n  • Shows the global message.\n\n ● **Comics**\n  • Creates a comics that's perfect for sitcom laugh track!\n\n ● **GoFishing**\n  • Catches a random fish and redirects you to it's Wikipedia page.\n  • **Command Tags:** 🐟\n\n ● **FishesCaught**\n  • Shows how many fishes have been caught in total.\n  • **Command Tags:** 🐟\n\n ● **Fight** <Enemy Name>\n  • Starts a fight with someone!\n  • **Command Tags:** ⚔\n\n ● **DadJoke**\n  • Tells *hilarious* dad joke.\n\n ● **Fml**\n  • Wanna hear an FML story?\n\n ● **Roll**\n  • Rolls a number between 1 and 6.\n\n ● **Ask** <Question>\n  • Ask me anything! Don't be shy!\n\n ● **Say** <Your Text>\n  • Peeky will repeat what you said!\n\n ● **GetEmoji** <Emojis>\n  • Shows you the id for your custom emojis!\n\n ● **Suggestion** <Suggestion>\n  • Sends your suggestion to the Support Server!\n\n ● **Refresh**\n  • Refreshes Peeky's status!\n  • **Command Tags:** 👑");
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands**.')
       console.log('The Commands command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //About
    if(message.content == '/About'){
       message.channel.sendMessage('Hello **' + message.author.tag + "**!\n\nIf you wanna get started with the bot, type **/Commands** and see what I can do for yourself!")
       console.log('The About command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //Wikipedia
    if(message.content.startsWith('/Wikipedia ')){
       message.channel.sendMessage("Here is the Wikipedia page that **" + message.author.tag + '** asked for.\nhttps://en.wikipedia.org/wiki' + message.content.replace('/Wikipedia ','/') + '\n\n(Be sure to use the **_** instead of spaces when using multiple words.)')   
       console.log('The Wikipedia command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //ServerInfo
    if(message.content == '/ServerInfo'){
       message.channel.sendMessage('**Server Name:** ' + message.guild.name + '\n**Verification Level:** ' + message.guild.verificationLevel + '\n**Owner:** ' + message.guild.owner.displayName + '\n**Members:** ' + message.guild.memberCount + '\n**Role Amount:** ' + message.guild.roles.size + '\n**Custom Emojis:** ' + message.guild.emojis.size + '/100')   
       console.log('The ServerInfo command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //UserInfo
    if(message.content == '/UserInfo'){
       message.channel.sendMessage('**Username:** ' + message.author.tag + '\n**Status:** ' + message.author.presence.status)
       console.log('The UserInfo command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //StartPoll
    if(message.content.startsWith("/StartPoll ")){
       message.channel.sendMessage('This is a poll that **' + message.author.tag + '** has started!\n\n**' + message.content.replace("/StartPoll ","") + '**').then(sentMessage => sentMessage.react("<:bot_approve:416366096053174273") + (sentMessage.react("<:bot_deny:416366135223517186")));
       console.log('The StartPoll command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //StartCountdown
    if(message.content.startsWith("/StartCountdown ")){
        var cntd_time = message.content.slice('16','20') + '000'
        var cntd_note = message.content.slice('21','70')
        message.channel.sendMessage('**' + message.author.tag + "** has started a **" + cntd_time.slice('0','4') + " seconds** long countdown called **" + cntd_note + "**!")
        console.log('The StartCountdown command has been executed. Executor: ' + message.author.tag)
        setTimeout(function (){
        message.channel.sendMessage('**' + message.author.tag + "**'s countdown called **" + cntd_note + "** has finished!")
        message.author.sendMessage('Hello **' + message.author.tag + '**, one of your countdowns at the server **' + message.guild.name + '** has finished!')
      }, cntd_time);
    }
});

bot.on('message', (message) => { //Global (Set)
  if(message.content.startsWith("/GlobalSet ")){
        globalMessage = 'This Global Message has been set by **' + message.author.tag + '**.\n\n**' + message.content.replace('/GlobalSet ','') + '**'
        message.channel.sendMessage('**' +  message.author.tag + '** has set the global message!')
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
        var randomName1 = cmcs_name1[Math.floor(Math.random() * cmcs_name1.length)];
        var randomName2 = cmcs_name2[Math.floor(Math.random() * cmcs_name2.length)];
        var randomQuote = cmcs_1[Math.floor(Math.random() * cmcs_1.length)];
        var randomAnswer = cmcs_2[Math.floor(Math.random() * cmcs_2.length)];
        message.channel.sendMessage('**__' + randomName1 + ' ' + randomName2 + '__**\n\n' +  randomFace + ": " + randomQuote + "\n" + randomFace2 + ": " + randomAnswer)
        console.log('The Comics command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //DadJokes
    if(message.content == '/DadJoke'){
        var randomAnswer = dadJokes[Math.floor(Math.random() * dadJokes.length)];
        message.channel.sendMessage(randomAnswer);
        console.log('The DadJoke command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //GoFishing
    if(message.content == '/GoFishing'){
    if(message.channel.name == 'fishing'){
        var fishing_caught = fishing_fish[Math.floor(Math.random() * fishing_fish.length)];
        message.channel.sendMessage('**' + message.author.tag + '**' + fishing_caught)
        fishing_amount = fishing_amount + 1
        console.log('The GoFishing command has been executed. Executor: ' + message.author.tag)
   }}
})

bot.on('message', (message) => { //FishesCaught
    if(message.content == '/FishesCaught'){
    if(message.channel.name == 'fishing'){
        message.channel.sendMessage('So far, **' + fishing_amount + ' fishes** have been caught!')
        console.log('The FishesCaught command has been executed. Executor: ' + message.author.tag)
   }}
})

bot.on('message', (message) => { //Fight
    if(message.content.startsWith("/Fight ")){
        if(message.channel.name == 'arena'){
        var weapon_used = fight_weapon[Math.floor(Math.random() * fight_weapon.length)];
        var damage_dealt_1 = fight_damage[Math.floor(Math.random() * fight_damage.length)];
        var weapon_used_2 = fight_weapon[Math.floor(Math.random() * fight_weapon.length)];
        var damage_dealt_2 = fight_damage[Math.floor(Math.random() * fight_damage.length)];
        var health_1 = 20
        var health_2 = 20
        var target_user = message.content.slice('7',' 27')
        var attacker_user = message.author.tag
        health_1 = health_1 - damage_dealt_2
        health_2 = health_2 - damage_dealt_1
            if(weapon_used == '🛡'){
                health_1 = health_1 + damage_dealt_2
                damage_dealt_2 = 0}
            if(weapon_used_2 == '🛡'){
                health_2 = health_2 + damage_dealt_1
                damage_dealt_1 = 0}
        message.channel.sendMessage('**' + attacker_user + '** vs **' + target_user + '**\n\n**' + attacker_user + '** has attacked **' + target_user + '** with a **' + weapon_used + '** and dealt **' + damage_dealt_1 + ' damage**!\n**' + target_user + '** has attacked **' + attacker_user + '** back with a **' + weapon_used_2 + '** and dealt **' + damage_dealt_2 + ' damage**!\n\n**' + attacker_user + '** has **' + health_1 + ' Health** left. \n**' + target_user + '** has **' + health_2 + ' Health** left.')
        console.log('The Fight command has been executed. Executor: ' + message.author.tag)
            if(weapon_used == '🛡'){
            message.channel.sendMessage("**" + attacker_user + "** has blocked **all** the damage with a 🛡!")
            if(weapon_used_2 == '🛡'){
            message.channel.sendMessage("**" + target_user + "** has blocked **all** the damage with a 🛡!")
            }}}}
});

bot.on('message', (message) => { //FML
    if(message.content == '/Fml'){
        var randomFml = fml[Math.floor(Math.random() * fml.length)];
        message.channel.sendMessage(randomFml);
        console.log('The Fml command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //Roll
    if(message.content == '/Roll'){
        var randomNumber = dice[Math.floor(Math.random() * dice.length)];
        message.channel.sendMessage('**' + message.author.tag + '** has rolled:\n' + randomNumber + '!');
        console.log('The Roll command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //Ask
    if(message.content.startsWith("/Ask ")){
          var randomReply = reply[Math.floor(Math.random() * reply.length)];
          message.channel.sendMessage('**' + message.author.tag + "** asked me **" + message.content.replace('/Ask ','') + "**\nTo which I'd say that **" + randomReply + '**.');
          console.log('The Ask command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Say
    if(message.content.startsWith("/Say ")){
           message.channel.sendMessage(message.content.replace('/Say ',''))
           message.delete()
           console.log('The Say command has been executed. Executor: ' + message.author.tag)
    }
})

bot.on('message', (message) => { //GetEmoji
    if(message.content.startsWith("/GetEmoji ")){
       message.channel.sendMessage('Here are your Emoji IDs!\n`' + message.content.replace('/GetEmoji ','') + '`')
       console.log('The GetEmoji command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Suggestion
    if(message.content.startsWith("/Suggestion ")){
          bot.channels.get('429227074587197441').sendMessage("This is a suggestion from **" + message.author.tag + "**.\n\n**" + message.content.replace(('/Suggestion'),('')) + '**.');
          message.channel.sendMessage('**' + message.author.tag + '** has send a suggestion!')
          console.log('The Suggestion command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Refresh
    if(message.content == '/Refresh'){
    if(message.author.id == '108899856889737216'){
        bot.user.setActivity(VersionNumber + ' | ' + bot.guilds.size + ' Servers')  
        message.channel.sendMessage("**" + message.author.tag + "** has refreshed Peeky's status.")
       console.log('The Refresh command has been executed. Executor: ' + message.author.tag)
    }}
})

bot.on('message', (message) => { //Help
    if(message.content == '/Help'){
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Help**.')
       message.author.sendMessage("**__Help__**\n\n<:bot_patreon:429246678542057473> **Patreon Page:** *https://www.patreon.com/vojtasonic*\n<:peeky:398855238725009418> **Bot's Page:** *https://discordbots.org/bot/415259002310623232*\n<:bot_twitter:429185436141748225> **Twitter:** *https://twitter.com/vojtasonic*\n<:bot_discord:429185737406152704> **Discord Support Server:** https://discord.gg/j4kArRh")
       console.log('The Help command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //Bonuses
    if(message.content == '/Bonuses'){
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Bonuses**.')
       message.author.sendMessage("**__Bonuses__**\n\n ● **Automatic Reactions**\n  • Messages in a channel called **#gallery** get automatic ❤ reactions!\n  • Messages in a channel called **#events** get automatic 🎟 reactions!")
       console.log('The Bonuses command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //Tags
    if(message.content == '/Tags'){
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Tags**.')
       message.author.sendMessage("**__Tags__**\n\n👑 - Commands with this tag can be used only by the creator of Peeky, **Vojtasonic#5792**.\n\n🐟 - Commands with this tag can be used only in a channel called **#fishing**.\n\n⚔ - Commands with this tag can be used only in a channel called **#arena**.")
       console.log('The Tags command has been executed. Executor: ' + message.author.tag)
   }
})

//BONUSES

bot.on('message', (message) => { //Automatic Reaction #gallery
    if(message.channel.name == 'gallery'){
        message.react('❤')
       console.log('The Automatic Reactions (#gallery) bonus has been executed. Executor: ' + message.author.tag)};
});

bot.on('message', (message) => { //Automatic Reaction #events
    if(message.channel.name == 'events'){
        message.react('🎟')
       console.log('The Automatic Reactions (#events) bonus has been executed. Executor: ' + message.author.tag)};
});

bot.login(process.env.BOT_TOKEN);
