const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

//Sets the bot's status to "Type .help for a list of commands!"
bot.on("ready", () => { 
  bot.user.setStatus("online");
  bot.user.setActivity('Type .help for a list of commands!', { type: "PLAYING"})
})

//Reads an incoming message and reacts accordingly
bot.on('message', (ReceivedMessage) => {

  //Replies with a copypasta to messages containing the word 'based'
  if(ReceivedMessage.content.toLowerCase().split(" ").join("").includes('based')) {
    if (ReceivedMessage.author == bot.user) {
      return
    }

    RandomInteger = Math.floor(Math.random() * 10)

    if (RandomInteger == 0 || RandomInteger == 1) {
      ReceivedMessage.channel.send("*Based*? Are you fucking kidding me? I spent a decent portion of my life writing all of that and your response to me is *Based*? Are you so mentally handicapped that the only word you can comprehend is *Based* - or are you just some fucking asshole who thinks that with such a short response, he can make a statement about how meaningless what was written was? Well, I'll have you know that what I wrote was NOT meaningless, in fact, I even had my written work proof-read by several professors of literature. Don't believe me? I doubt you would, and your response to this will probably be *Based* once again. Do I give a fuck? No, does it look like I give even the slightest fuck about five fucking letters? I bet you took the time to type those five letters too, I bet you sat there and chuckled to yourself for 20 hearty seconds before pressing *send*. You're so fucking pathetic. I'm honestly considering directing you to a psychiatrist, but I'm simply far too nice to do something like that. You, however, will go out of your way to make a fool out of someone by responding to a well-thought-out, intelligent, or humorous statement that probably took longer to write than you can last in bed with a chimpanzee. What do I have to say to you? Absolutely nothing. I couldn't be bothered to respond to such a worthless attempt at a response. Do you want *Based* on your gravestone?");
    }
    if (RandomInteger == 2 || RandomInteger == 3 || RandomInteger == 4 || RandomInteger == 5) {
      ReceivedMessage.channel.send("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
    }
    if (RandomInteger == 7 || RandomInteger == 8 || RandomInteger == 9) {
      ReceivedMessage.channel.send("Based? Based on what? In your dick? Please shut the fuck up and use words properly you fuckin troglodyte, do you think God gave us a freedom of speech just to spew random words that have no meaning that doesn't even correllate to the topic of the conversation? Like please you always complain about why no one talks to you or no one expresses their opinions on you because you're always spewing random shit like poggers based cringe and when you try to explain what it is and you just say that it's funny like what? What the fuck is funny about that do you think you'll just become a stand-up comedian that will get a standing ovation just because you said *cum* in the stage? HELL NO YOU FUCKIN IDIOT, so please shut the fuck up and use words properly you dumb bitch");
    }
  
  }


  //Replies with a copypasta to messages containing the word 'cringe'
  if(ReceivedMessage.content.toLowerCase().split(" ").join("").includes('cringe')) {
    if (ReceivedMessage.author == bot.user) {
      return
    }

    RandomInteger = Math.floor(Math.random() * 13)

    if (RandomInteger == 0 || RandomInteger == 1) {
      ReceivedMessage.channel.send("DUHHH CIRNGE!!!! DUHHH BRINGE!!???!!1 CRINGE!!!!! IS THAT ALL YOU SHITPOSTING FUCKS CAN SAY!!??? DURR BASED BASED BASED CRINGE CRINGE BASED BASED CRINGE CRINGE CRINGE BASED CRINGE I FEEL LIKE IM IN A FUCKING ASYLUM FULL OF DEMENTIA RIDDEN OLD PEOPLE THAT CAN DO NOTHING BUT REPEAT THE SAME FUCKING WORDS ON LOOP LIKE A FUCKING BROKEN RECORD CRINGE CRINGE CRINGE BASED BASED CRINGE ONIONS ONIONS ONIONS SNOYY ONIONS LOL ONIONS!!! CRINGE!!!1 BOOMER!! LE ZOOMER!!!! I AM BOOMER!!!! NO ZOOM ZOOM ZOOMIES ZOOMER GOING ZOOMIES AHGHGH I FUCKING HATE THE INTERNET SO GODDAMN MUCH FUCKJK YOU SHITPOST I HONEST TO GOD HOPE YOUR MOTHER CHOKES ON HER OWN FECES IN HELL YOU COCKSUCKER VUT OHHH I KNOWM MY POST IS CRINGE ISNT IT?? CRINGE CRINGE CRINGR CRINGEY BASED CRINGE BASED REDDIT REDDIT CRINGE ZOOM CRINGE ONIONS REDDIT BASED BASED!!!!!!");
    }
    if (RandomInteger == 2 || RandomInteger == 3 || RandomInteger == 4 || RandomInteger == 5) {
      ReceivedMessage.channel.send("Cringe doesn't even begin to explain how this made me feel. \n My very soul sunk into oblivion. The air in my lungs suddenly became very thin, my every muscle relaxed, and all systems responsible for keeping me alive quietly powered down as my will to exist simply stopped but for a moment. There was no pain, no tunnel, no light, no dead friends or relatives to greet me. Only inner peace, as I was nearly freed from this mortal coil. \n Then, when my functions returned, I looked back up and it was still there. That damn thing never left my screen. It was mocking me. Reminding me that Hell is a very real place, and that place is called Earth.");
    }
    if (RandomInteger == 7 || RandomInteger == 8 || RandomInteger == 9) {
      ReceivedMessage.channel.send("[WARNING EXTREME CRINGE PROCEED WITH CAUTION] \n \n Cringe, amongus, anime, fortnite, Dababy, big chungus, Karen’s,furries, white gang members, band kids, thots, mrblocku, roblox, Minecraft, call of duty, Valorent, doom on console, Nintendo, Post Malone, Playboi Carti, Anti vaccers, anti mask people, anyone living in Texas, bri’ish people, Joe Biden, Donald trump, Hillary Clinton, AOC plays amangas, #1 victory royale, Tyler Blevins, Twitch, E-girls, traps, 9 year olds playing fortnite, playing PUBG in 2021, liking battle royale in 2021, putting milk before the cereal, snitching (or being tekashi), not watching pewdiepie, not being gangster, watching the NFL, still paying attention to the Toronto Raptors, being relevant, not getting canceled, dying, dying in armed conflict, having a different opinion, WWE, Florida, Activision, Ubisoft, Microsoft, CSGO in 2021, TF2 in 2021, valve, the U.S military, the U.S government, U.S military E-sports, E-sports in general, Mr beast, Dream, Dream Stan’s, half-life 3, halo infinite, professional curling, , school, work, teachers, covid, the national guard, Vietnam, the 21st century and finally...you!");
    }
    if(RandomInteger == 10 || RandomInteger == 11 || RandomInteger == 12) {
      ReceivedMessage.channel.send("How do I (13 M) get my family to stop making Among Us references? \n It seems like the more I (13 M) play Amongus, the more my family tries to embaras me. The other day, I overheard my dad (49 M) say that he needed to *complete tasks* while working at home😯🤬 don't worry it gets worse. Then I hear my Mom (42 F) say that the amount of time I spend on my computer is *suspiscios.* Ummm ok so (#1) ur too good to say *sus* 🤔 and (#2) u dont even play amogus??? 😂😂😂. Even my moms work friend (28 M or somthing idk) came over yesterday to *look at her vents* I'm not even making this up 🙄🙄🙄 But then the worse part😑 every sunday my granpa (69 M) comes over. He reminisces about his *Crewmates* from his Navy days and apparently a few of them died so u cry about it at dinner? Just start a new game FFS 😆 but he's lying so uhhh we get it bro: u just want attention 😯😅🤣 \n The problem is NONE of them even Play Omungus. How do i tell em that being a poser is a cringe Brie Larson unholesome Black History Month anti-chungus move?");
    }
  
  }

  //Replies to a message containing 'useless'
  if(ReceivedMessage.content.toLowerCase().split(" ").join("").includes('useless')) {
    if (ReceivedMessage.author == bot.user) {
      return
    }

    ReceivedMessage.channel.send("Useless? One might instead say 'About as useful as tits on a fish'");
  }

  //Handles deleting prompt and replacing it with ascii emoji
  if(ReceivedMessage.content == ".lenny") {
    ReceivedMessage.delete();
    ReceivedMessage.channel.send("( ͡° ͜ʖ ͡°)");
  }

  if(ReceivedMessage.content == ".kawaii") {
    ReceivedMessage.delete();
    ReceivedMessage.channel.send("(✿◠‿◠)");
  }

  if(ReceivedMessage.content == ".acid") {
   ReceivedMessage.delete();
   ReceivedMessage.channel.send("⊂(◉‿◉)つ");
  }

  if(ReceivedMessage.content == ".hug") {
    ReceivedMessage.delete();
    ReceivedMessage.channel.send("ʕっ•ᴥ•ʔっ");
  }

  //Sends help command on request
  if(ReceivedMessage.content == ".help") {
   ReceivedMessage.channel.send("Hey! I'm Impostor bot :D \n \n I've got a few useful features that you can directly activate, such as: \n .lenny - deletes your message and sends a lenny face instead! \n .kawaii - deletes your message and sends a cute face instead! \n .acid - deletes your message and sends an ascii dude on acid. \n .hug - deletes your message and sends a cute hugging bear instead :)");
  }

  //Responds with a link to the github
  if(ReceivedMessage.content == ".code") {
    ReceivedMessage.channel.send("You can find the code here: https://github.com/LukasKelemen/ImpostorBot");
  }

});

//handles login with API key
bot.login(config.token);