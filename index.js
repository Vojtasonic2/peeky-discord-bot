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

var dice = [
    "🎲<:black_dice:440876187808432168><:black_dice:440876187808432168><:black_dice:440876187808432168><:black_dice:440876187808432168><:black_dice:440876187808432168>",
    "🎲🎲<:black_dice:440876187808432168><:black_dice:440876187808432168><:black_dice:440876187808432168><:black_dice:440876187808432168>",
    "🎲🎲🎲<:black_dice:440876187808432168><:black_dice:440876187808432168><:black_dice:440876187808432168>",
    "🎲🎲🎲🎲<:black_dice:440876187808432168><:black_dice:440876187808432168>",
    "🎲🎲🎲🎲🎲<:black_dice:440876187808432168>", 
    "🎲🎲🎲🎲🎲🎲" 
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
    '🥖',
    '🎱',
    '🏈',
    '🏏',
    '✊',
    '🍾',
    '🎸',
    '✂',
    '🥒',
    '🛒'
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
    ' caught a **Perch** (Ranked #30)!\n\n*No description given yet.*\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Perch',
    ' caught a **Megamouth** (Ranked #31)!\n\nSince its discovery in 1976, few megamouth sharks have been seen, with less than 100 specimens being observed or caught.\n\n**Wikipedia:** https://en.wikipedia.org/wiki/Megamouth_shark'
]

var globalMessage = 'No Global message has been set yet!\nType **/Commands** to see how to set one!'
const WordFilterMessage = "I deleted someone's message, because there were some vulgar words."
const ErrorMsg1 = "<:bot_deny:440824010805084171> This command cannot be used in this channel."
const ErrorMsg2 = "<:bot_deny:440824010805084171> You lack the needed permissions to use this command."
const ErrorMsg3 = "<:bot_deny:440824010805084171> Invalid mention, be sure to mention a user."
const ErrorMsg4 = "<:bot_deny:440824010805084171> You need more Peeky Coins to do that."
const SuccessMsg1 = "<:bot_approve:440824011199348736> You have bought a banner!"
var WFReports = 0
const VersionNumber = '3.0'
let coins = require("./coins.json");
var fs = require('fs');
var userData = JSON.parse(fs.readFileSync('./coins.json', 'utf8'))

bot.on('ready', () => { bot.user.setActivity(VersionNumber + ' | /Help') })
bot.on('ready', () => { bot.user.setStatus('idle')} )
bot.on('ready', (message) => { bot.channels.get("319891596772638744").sendMessage("**__Peeky has restarted!__**\nAll the stats have been reset.") });
console.log('The bot is now running')

bot.on('message', (message) => {
    if(message.channel.type == "dm"){
        if(message.author.bot) return;
        message.channel.sendMessage(ErrorMsg1)
    }
});

const cmds_start = "**__Commands - Start__**\nBot's prefix: **/**\n\n ● **Help**\n  • Introduces you to the bot and gives you few helpful commands!\n\n ● **Commands**\n  • Shows the available command categories!\n\n ● **Bonuses**\n  • Sends you the bonuses that Peeky can do!\n\n ● **Links**\n  • Send you some links!"
const cmds_mod = "**__Commands - Moderation__**\nBot's prefix: **/**\n\n ● **ServerName** <Server Name>\n  • Sets the name of your server!\n  • Permissions Needed: **Administrator**\n\n ● **ChannelName** <Channel Name>\n  • Sets the name of your channel!\n  • Permissions Needed: **Administrator**\n\n ● **Censor** <Mention a User>\n  • Censors the nickname of the mentioned user!\n  • Permissions Needed: **Manage Nicknames**\n\n ● **Uncensor** <Mention a User>\n  • Uncensors the name of the mentioned user!\n  • Permissions Needed: **Manage Nicknames**\n\n ● **Ban** <Mention a User>\n  • Bans the first mentioned user!\n  • Permissions Needed: **Ban Members**"
const cmds_dev = "**__Commands - Dev__**\nBot's prefix: **/**\n\n ● **GetEmoji** <Emojis>\n  • Shows you the ID of your emojis!"
const cmds_fun = "**__Commands - Fun__**\nBot's prefix: **/**\n\n ● **DadJoke**\n  • Tells *hilarious* dad joke.\n\n ● **Roll**\n  • Rolls a number between 1 and 6.\n\n ● **Ask** <Question>\n  • Ask me anything! Don't be shy!\n\n ● **Say** <Your Text>\n  • Peeky will repeat what you said!\n\n ● **GlobalSet** <Message>\n  • Sets a global message that can be seen on all the servers with me in!\n\n ● **GlobalShow**\n  • Shows the global message.\n\n ● **Comics**\n  • Creates a comics that's perfect for sitcom laugh track!"
const cmds_mg = "**__Commands - Minigames__**\nBot's prefix: **/**\n\n ● **GoFishing**\n  • Catches a random fish and redirects you to it's Wikipedia page.\n  • Dedicated Channel: **#fishing**\n\n ● **Fight** <Enemy Name>\n  • Starts a fight with someone!\n  • Dedicated Channel: **#arena**\n\n ● **Bet**\n  • Bets **25 Peeky Coins**\n  • Dedicated Channel: **#casino**"
const cmds_other = "**__Commands - Other__**\nBot's prefix: **/**\n\n ● **ServerInfo**\n  • Displays some info about the server!\n\n ● **Profile**\n  • Shows your profile.\n\n ● **BotInfo**\n  • Displays some info about the bot!\n\n ● **Wikipedia** <Search>\n  • Searches the Wikipedia for you!\n\n ● **Suggestion** <Suggestion>\n  • Sends your suggestion to the Support Server!\n\n ● **StartPoll** <Poll Topic>\n  • Starts a poll for you.\n\n ● **StartCountdown** <0001 - 9999> <Countdown Name>\n  • Starts a countdown in seconds."
const cmds_shop = "**__Commands - Shop__**\nBot's prefix: **/**\n\n ● **BuyDescription** <Description>\n  • Sets the description for your profile.\n  • Price: **10 Peeky Coins**\n\n ● **BuyBanner 1**\n  • Buys the **Default** banner.\n  • Price: **0 Peeky Coins**\n\n ● **BuyBanner 2**\n  • Buys the **Red Dinosaur Plushie** banner.\n  • Price: **25 Peeky Coins**\n\n ● **BuyBanner 3**\n  • Buys the **Red Wolf** banner.\n  • Price: **50 Peeky Coins**\n\n ● **BuyBanner 4**\n  • Buys the **PAYDAY 2** banner.\n  • Price: **50 Peeky Coins**\n\n ● **BuyBanner 5**\n  • Buys the **Impact** banner.\n  • Price: **50 Peeky Coins**\n\n ● **BuyBanner 6**\n  • Buys the **Rainbow Six** banner.\n  • Price: **50 Peeky Coins**\n\n ● **BuyBanner 7**\n  • Buys the **S.T.A.L.K.E.R.** banner.\n  • Price: **50 Peeky Coins**\n\n ● **BuyBanner 8**\n  • Buys the **Battlefield 1** banner.\n  • Price: **50 Peeky Coins**\n\n ● **BuyBanner 9**\n  • Buys the **Battlefield 1 (Animated)** banner.\n  • Price: **100 Peeky Coins**"
const cmds_shop2 = "● **BuyBanner 10**\n  • Buys the **S.T.A.L.K.E.R. (Animated)** banner.\n  • Price: **100 Peeky Coins**\n\n ● **BuyBanner 11**\n  • Buys the **Minecraft** banner.\n  • Price: **50 Peeky Coins**"

//BONUSES

bot.on('message', (message) => { //Automatic Reaction #gallery
    if(message.channel.type == "dm") return;
    if(message.channel.name == 'gallery'){
        message.react('<:bot_approve:440824011199348736')
        message.react('<:bot_deny:440824010805084171')
       console.log('The Automatic Reactions (#gallery) bonus has been executed. Executor: ' + message.author.tag)};
});

bot.on('message', (message) => { //Automatic Reaction #events
    if(message.channel.type == "dm") return;
    if(message.channel.name == 'events'){
        message.react('<:bot_approve:440824011199348736')
       console.log('The Automatic Reactions (#events) bonus has been executed. Executor: ' + message.author.tag)};
});

bot.on('message' , (message) => { //Word Filtering
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    WFReports = 0
    const WTMessage = "I deleted **" + message.author.tag + "**'s message, since there was a vulgar word."

    function WFAction() {
    if(WFReports == 0){
    if(message.channel.topic == "Word Filtering: Enabled"){
        WFReports = WFReports + 1
        message.channel.sendMessage(WTMessage).then(msg => {msg.delete(5000)})
        message.author.lastMessage.delete()
        console.log("Peeky's word filter removed a message by " + message.author.tag + ".")}
}};
        
        if(message.content.includes("fuck")){
        WFAction()
        }
        if(message.content.includes("shit")){
        WFAction()
        }
        if(message.content.includes("bitch")){
        WFAction()
        }
        if(message.content.includes("whore")){
        WFAction()
        }
        if(message.content.includes("ass")){
        WFAction()
        }
        if(message.content.includes("piss")){
        WFAction()
        }
        if(message.content.includes("jizz")){
        WFAction()
        }
        if(message.content.includes("cum")){
        WFAction()
        }
        if(message.content.includes("tit")){
        WFAction()
        }
        if(message.content.includes("sex")){
        WFAction()
        }
        if(message.content.includes("kys")){
        WFAction()
        }
        if(message.content.includes("nigg")){
        WFAction()
        }
        if(message.content.includes("scum")){
        WFAction()
        }
        if(message.content.includes("bitch")){
        WFAction()
        }
        if(message.content.includes("clit")){
        WFAction()
        }
        if(message.content.includes("pussy")){
        WFAction()
        }
        if(message.content.includes("dick")){
        WFAction()
        }
        if(message.content.includes("wtf")){
        WFAction()
        }
        if(message.content.includes("omfg")){
        WFAction()
        }
        if(message.content.includes("kill your self")){
        WFAction()
        }
        if(message.content.includes("stfu")){
        WFAction()
        }
});

bot.on('message', (message) => { //Peeky Coins
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;

    if(!userData[message.author.id]) userData[message.author.id] = {
        messagesSent: 0,
        profileBackground: 1,
        profileDescription: "none"
    };

    userData[message.author.id].messagesSent++;

    fs.writeFile('./coins.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    });

    if(message.content == ("/Profile")){
        var ProfileMessage = ["__**" + message.author.tag + "**__\n\n**Description:** " + userData[message.author.id].profileDescription + "\n**Peeky Coins:** " + userData[message.author.id].messagesSent]
    if(userData[message.author.id].profileBackground == 1){
    message.channel.send(ProfileMessage, {
        files: [
          "./1.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 2){
    message.channel.send(ProfileMessage, {
        files: [
          "./2.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 3){
    message.channel.send(ProfileMessage, {
        files: [
          "./3.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 4){
    message.channel.send(ProfileMessage, {
        files: [
          "./4.jpg"
        ]})
        }
    if(userData[message.author.id].profileBackground == 5){
    message.channel.send(ProfileMessage, {
        files: [
          "./5.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 6){
    message.channel.send(ProfileMessage, {
        files: [
          "./6.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 7){
    message.channel.send(ProfileMessage, {
        files: [
          "./7.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 8){
    message.channel.send(ProfileMessage, {
        files: [
          "./8.png"
        ]})
        }
    if(userData[message.author.id].profileBackground == 9){
        message.channel.send(ProfileMessage, {
        files: [
          "./8A.gif"
        ]})
        }
    if(userData[message.author.id].profileBackground == 10){
        message.channel.send(ProfileMessage, {
        files: [
          "./7A.gif"
        ]})
        }
    if(userData[message.author.id].profileBackground == 11){
        message.channel.send(ProfileMessage, {
        files: [
          "./11.png"
        ]})
        }
        console.log('The Profile command has been executed. Executor: ' + message.author.tag)
    }
});

//COMMANDS

bot.on('message', (message) => { //Commands
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands'){
       message.channel.sendMessage('These are all the command categories:\n\n**/Commands Start**, **/Commands Moderation**, **/Commands Dev**, **/Commands Fun**, **/Commands Minigames**, **/Commands Other**, **/Commands Shop**.')
       console.log('The Commands command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Commands Start
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Start'){
       message.author.sendMessage(cmds_start);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Start)**.')
       console.log('The Commands Start command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Commands Moderation
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Moderation'){
       message.author.sendMessage(cmds_mod);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Moderation)**.')
       console.log('The Commands Moderation command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Commands Dev
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Dev'){
       message.author.sendMessage(cmds_dev);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Dev)**.')
       console.log('The Commands Dev command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Commands Fun
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Fun'){
       message.author.sendMessage(cmds_fun);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Fun)**.')
       console.log('The Commands Fun command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Commands Minigames
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Minigames'){
       message.author.sendMessage(cmds_mg);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Minigames)**.')
       console.log('The Commands Minigames command has been executed. Executor: ' + message.author.tag)
   }
})

bot.on('message', (message) => { //Commands Other
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Other'){
       message.author.sendMessage(cmds_other);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Other)**.')
       console.log('The Commands Other command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Commands Shop
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Commands Shop'){
       message.author.sendMessage(cmds_shop);
       message.author.sendMessage(cmds_shop2);
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Commands (Shop)**.')
       console.log('The Commands Shop command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Help
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Help'){
       message.channel.sendMessage("Hello, **" + message.author.tag + "**!\n\nTo get started with the bot, type **/Commands**!\n\n ● Moderation Commands\n ● Fun Commands\n ● Developer Commands\n ● Automatic Reactions\n ● Word Filtering\n ● Minigames\n ● Custom User Profiles")
       console.log('The Help command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Wikipedia
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Wikipedia ')){
       message.channel.sendMessage("Here is the Wikipedia page that **" + message.author.tag + '** asked for.\nhttps://en.wikipedia.org/wiki' + message.content.replace('/Wikipedia ','/') + '\n\n(Be sure to use the **_** instead of spaces when using multiple words.)')   
       console.log('The Wikipedia command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //ServerInfo
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/ServerInfo'){
       message.channel.sendMessage('**Server Name:** ' + message.guild.name + '\n**Verification Level:** ' + message.guild.verificationLevel + '\n**Owner:** ' + message.guild.owner.displayName + '\n**Members:** ' + message.guild.memberCount + '\n**Role Amount:** ' + message.guild.roles.size + '\n**Custom Emojis:** ' + message.guild.emojis.size + '/100')   
       console.log('The ServerInfo command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //BotInfo
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == ("/BotInfo")){
        var BotUptime = bot.uptime
        var min = BotUptime / 1000 / 60;
        min = Math.floor(min);       
        message.channel.sendMessage('**Name:** ' + bot.user.tag + '\n**Version:** ' + VersionNumber + '\n**Uptime:** ' + min + " Minutes" + '\n**Servers:** ' + bot.guilds.size + '\n**Users:** ' + bot.users.size)   
        console.log('The BotInfo command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //ServerName
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/ServerName ')){
    if(message.member.hasPermission("ADMINISTRATOR")){
        message.guild.setName(message.content.replace('/ServerName ',''))
        message.channel.sendMessage('The server name has been changed!')
        console.log('The ServerName command has been executed. Executor: ' + message.author.tag)
  }}
});
bot.on('message', (message) => { //ServerName - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/ServerName ')){
    if(!message.member.hasPermission("ADMINISTRATOR")){
        message.channel.sendMessage(ErrorMsg2)
  }}
});

bot.on('message', (message) => { //ChannelName
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/ChannelName ')){
    if(message.member.hasPermission("ADMINISTRATOR")){
        message.channel.setName(message.content.replace('/ChannelName ',''))
        message.channel.sendMessage('The channel name has been changed!')
        console.log('The ChannelName command has been executed. Executor: ' + message.author.tag)
  }}
})
bot.on('message', (message) => { //ChannelName - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/ChannelName ')){
    if(!message.member.hasPermission("ADMINISTRATOR")){
        message.channel.sendMessage(ErrorMsg2)
  }}
});

bot.on('message', (message) => { //Ban
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Ban ')){
    if(message.member.hasPermission("BAN_MEMBERS")){
        var userToBan = message.mentions.members.first()
    if(userToBan !== undefined){
        userToBan.sendMessage('You have been banned from **' + message.guild.name + '** by **' + message.author.tag + '**.')
        message.channel.sendMessage('The user **' + userToBan + '** has been banned.')
        message.guild.ban(userToBan)
  }}}
});
bot.on('message', (message) => { //Ban - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Ban ')){
    if(!message.member.hasPermission("BAN_MEMBERS")){
        message.channel.sendMessage(ErrorMsg2)
  }}
});
bot.on('message', (message) => { //Ban - failed 2
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Ban ')){
    if(message.member.hasPermission("BAN_MEMBERS")){
        var userToBan = message.mentions.members.first()
    if(userToBan == undefined){
        message.channel.sendMessage(ErrorMsg3)
  }}}
});

bot.on('message', (message) => { //Censor
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Censor ')){
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        var userToCensor = message.mentions.users.first()
    if(userToCensor !== undefined){
        message.mentions.users.first().sendMessage('Your nickname in **' + message.guild.name + '** has been censored by **' + message.author.tag + '**.')
        message.channel.sendMessage('The user **' + userToCensor + '** has been censored.')
        message.guild.member(userToCensor).setNickname('[nickname censored]')
        console.log('The Censor command has been executed. Executor: ' + message.author.tag)}
  }}
});
bot.on('message', (message) => { //Censor - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Censor ')){
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){
        message.channel.sendMessage(ErrorMsg2)
  }}
});
bot.on('message', (message) => { //Censor - failed 2
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Censor ')){
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        var userToCensor = message.mentions.members.first()
    if(userToCensor == undefined){
        message.channel.sendMessage(ErrorMsg3)
  }}}
});

bot.on('message', (message) => { //Uncensor
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Uncensor ')){
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        var userToCensor = message.mentions.users.first()
    if(userToCensor !== undefined){
        message.mentions.users.first().sendMessage('Your nickname in **' + message.guild.name + '** has been uncensored by **' + message.author.tag + '**.')
        message.channel.sendMessage('The user **' + userToCensor + '** has been uncensored.')
        message.guild.member(userToCensor).setNickname('')
        console.log('The Uncensor command has been executed. Executor: ' + message.author.tag)}
  }}
});
bot.on('message', (message) => { //Uncensor - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Uncensor ')){
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){
        message.channel.sendMessage(ErrorMsg2)
  }}
});
bot.on('message', (message) => { //Uncensor - failed 2
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith('/Uncensor ')){
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){
        var userToCensor = message.mentions.members.first()
    if(userToCensor == undefined){
        message.channel.sendMessage(ErrorMsg3)
  }}}
});


bot.on('message', (message) => { //StartPoll
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/StartPoll ")){
       message.channel.sendMessage('This is a poll that **' + message.author.tag + '** has started!\n\n**Topic:** ' + message.content.replace("/StartPoll ","")).then(sentMessage => sentMessage.react("<:bot_approve:440824011199348736") + (sentMessage.react("<:bot_deny:440824010805084171")));
       console.log('The StartPoll command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //StartCountdown
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
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
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/GlobalSet ")){
          globalMessage = 'This Global Message has been set by **' + message.author.tag + '** .\n\n**Message:** ' + message.content.replace('/GlobalSet ','')
          message.channel.sendMessage('**' +  message.author.tag + '** has set the global message!')
          console.log('The GlobalSet command has been executed. Executor: ' + message.author.tag)
    }
 });

bot.on('message', (message) => { //Global (Show)
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/GlobalShow'){
        message.channel.sendMessage(globalMessage)
        console.log('The GlobalShow command has been executed. Executor: ' + message.author.tag)
  } 
});

bot.on('message', (message) => { //Comics
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
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
});

bot.on('message', (message) => { //DadJokes
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/DadJoke'){
        var randomAnswer = dadJokes[Math.floor(Math.random() * dadJokes.length)];
        message.channel.sendMessage(randomAnswer);
        console.log('The DadJoke command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //GoFishing
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/GoFishing'){
    if(message.channel.name == 'fishing'){
        var fishing_caught = fishing_fish[Math.floor(Math.random() * fishing_fish.length)];
        message.channel.sendMessage('**' + message.author.tag + '**' + fishing_caught)
        console.log('The GoFishing command has been executed. Executor: ' + message.author.tag)
    var FishResults = Math.floor(Math.random() * 5) + 1;
    if(FishResults == 1){
        message.channel.sendMessage("**" + message.author.tag + "** has found **1 Peeky Coin**!")
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent + 1
    }
   }}
});
bot.on('message', (message) => { //GoFishing - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/GoFishing'){
    if(message.channel.name !== 'fishing'){
        message.channel.sendMessage(ErrorMsg1)
   }}
});

bot.on('message', (message) => { //Fight
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
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
        if(health_1 > health_2){
            message.channel.sendMessage("**" + message.author.tag + "** has won **1 Peeky Coins**!")
            userData[message.author.id].messagesSent = userData[message.author.id].messagesSent + 1
        }
   }}
});
bot.on('message', (message) => { //Fight - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/Fight ")){
    if(message.channel.name !== 'arena'){
        message.channel.sendMessage(ErrorMsg1)
   }}
});
bot.on('message', (message) => { //Bet
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/Bet"){
    if(message.channel.name == "casino"){
    if(userData[message.author.id].messagesSent >= 25){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 25
        console.log('The Bet command has been executed. Executor: ' + message.author.tag)
    var BetResults = Math.floor(Math.random() * 4) + 1;
        if(BetResults == 1){
            message.channel.sendMessage("<:bot_approve:440824011199348736> You've won **25 Peeky Coins**!")
            userData[message.author.id].messagesSent = userData[message.author.id].messagesSent + 50
    }
        if(BetResults >= 2){
            message.channel.sendMessage("<:bot_deny:440824010805084171> You've lost **25 Peeky Coins**.")
    }
    }}}
});
bot.on('message', (message) => { //Bet - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/Bet"){
    if(message.channel.name !== 'casino'){
        message.channel.sendMessage(ErrorMsg1)
   }}
});
bot.on('message', (message) => { //Bet - failed 2
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/Bet"){
    if(message.channel.name == "casino"){
    if(userData[message.author.id].messagesSent <= 24){
        message.channel.sendMessage(ErrorMsg4)     
    }}}
});

bot.on('message', (message) => { //BuyDescription
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/BuyDescription ")){
    if(userData[message.author.id].messagesSent >= 10){
       var BoughtDescription = message.content.slice("16","66")
        userData[message.author.id].profileDescription = BoughtDescription
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 10
        message.channel.sendMessage("<:bot_approve:440824011199348736> Your description was set to **" + BoughtDescription + "**!")
        console.log('The BuyDescription command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyDescription - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/BuyDescription ")){
    if(userData[message.author.id].messagesSent <= 9){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 1
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBannerBuyBanner 1"){
        userData[message.author.id].profileBackground = 1
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 1 command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //BuyBanner 2
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 2"){
    if(userData[message.author.id].messagesSent >= 25){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 25
        userData[message.author.id].profileBackground = 2
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 2 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 2 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 2"){
    if(userData[message.author.id].messagesSent <= 24){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 3
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 3"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 3
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 3 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 3 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 3"){
    if(userData[message.author.id].messagesSent <= 49){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 4
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 4"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 4
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 4 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 4 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 4"){
    if(userData[message.author.id].messagesSent <= 49){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 5
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 5"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 5
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 5 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 5 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 5"){
    if(userData[message.author.id].messagesSent <= 49){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 6
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 6"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 6
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 6 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 6 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 6"){
    if(userData[message.author.id].messagesSent <= 49){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 7
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 7"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 7
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 7 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 7 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 7"){
    if(userData[message.author.id].messagesSent <= 50){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 8
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 8"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 8
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 8 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 8 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 8"){
    if(userData[message.author.id].messagesSent <= 50){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 9
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 9"){
    if(userData[message.author.id].messagesSent >= 100){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 100
        userData[message.author.id].profileBackground = 9
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 9 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 9 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 9"){
    if(userData[message.author.id].messagesSent <= 99){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 10
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 10"){
    if(userData[message.author.id].messagesSent >= 100){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 100
        userData[message.author.id].profileBackground = 10
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 10 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 10 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 10"){
    if(userData[message.author.id].messagesSent <= 99){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});

bot.on('message', (message) => { //BuyBanner 11
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 11"){
    if(userData[message.author.id].messagesSent >= 50){
        userData[message.author.id].messagesSent = userData[message.author.id].messagesSent - 50
        userData[message.author.id].profileBackground = 11
        message.channel.sendMessage(SuccessMsg1)
        console.log('The BuyBanner 11 command has been executed. Executor: ' + message.author.tag)
    }}
});
bot.on('message', (message) => { //BuyBanner 11 - failed
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == "/BuyBanner 11"){
    if(userData[message.author.id].messagesSent <= 50){
        message.channel.sendMessage(ErrorMsg4)     
    }}
});


bot.on('message', (message) => { //Roll
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Roll'){
        var randomNumber = dice[Math.floor(Math.random() * dice.length)];
        message.channel.sendMessage('**' + message.author.tag + '** has rolled a dice!\n' + randomNumber);
        console.log('The Roll command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Ask
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/Ask ")){
          var randomReply = reply[Math.floor(Math.random() * reply.length)];
          message.channel.sendMessage('**' + message.author.tag + "** asked me **" + message.content.replace('/Ask ','') + "**\nTo which I'd say that **" + randomReply + '**.');
          console.log('The Ask command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Say
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/Say ")){
           message.channel.sendMessage(message.content.replace('/Say ',''))
           message.delete()
           console.log('The Say command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //GetEmoji
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/GetEmoji ")){
       message.channel.sendMessage('Here are your Emoji IDs!\n`' + message.content.replace('/GetEmoji ','') + '`')
       console.log('The GetEmoji command has been executed. Executor: ' + message.author.tag)
    }
});

bot.on('message', (message) => { //Suggestion
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content.startsWith("/Suggestion ")){
          bot.channels.get('429227074587197441').sendMessage("This is a suggestion from **" + message.author.tag + "**.\n\n**Suggestion:** " + message.content.replace('/Suggestion',''))
          .then(sentMessage => sentMessage.react('<:bot_neutral:441968156781707264'));
          message.channel.sendMessage('**' + message.author.tag + '** has send a suggestion!')
          console.log('The Suggestion command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Links
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Links'){
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Links**.')
       message.author.sendMessage("**__Links__**\n\n<:bot_discord:429185737406152704> **Discord Support Server:** <https://discord.io/vojtasonic>\n<:peeky:398855238725009418> **Bot's Page:** <https://discordbots.org/bot/415259002310623232>\n<:bot_twitter:429185436141748225> **Twitter:** <https://twitter.com/vojtasonic>")
       console.log('The Links command has been executed. Executor: ' + message.author.tag)
   }
});

bot.on('message', (message) => { //Bonuses
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;
    if(message.content == '/Bonuses'){
       message.channel.sendMessage('**' + message.author.tag + '** has received a DM with the **Bonuses**.')
       message.author.sendMessage("**__Bonuses__**\n\n ● **Automatic Reactions**\n  • Messages in a channel called **#gallery** get automatic reactions!\n  • Messages in a channel called **#events** get automatic reactions!\n\n ● **Word Filtering**\n  • Messages in a channel that has **Word Filtering: Enabled** (and nothing else) in the topic will get filtered!\n\n ● **Custom User Profiles**\n  • Encourage users into talking in your server by rewarding them with Peeky Coins, which they can spend to customize their profiles!")
       console.log('The Bonuses command has been executed. Executor: ' + message.author.tag)
   }
});

bot.login(process.env.BOT_TOKEN);
