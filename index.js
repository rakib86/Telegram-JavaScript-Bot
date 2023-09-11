// Configuration
var apiToken = "6674448049:AAG_RZ9ixSY11rfQfsMr_p8yOjGENtlNjKc";
var appUrl = "https://script.google.com/macros/s/AKfycbz1_OCejkJVU1d5bSZS_BNzDY1L5kLw4cjpFyhEOsqDCWry31b2yFho-wBAgtAOTU_E/exec";
var apiUrl = "https://api.telegram.org/bot" + apiToken;
var BotUsername = "iiucbot";

// Set webhook
function setWebhook() {
  var url = apiUrl + "/setwebhook?url=" + appUrl;
  var res = UrlFetchApp.fetch(url).getContentText();
  Logger.log(res);
}

// Handle webhook
function doPost(e) {
  var webhookData = JSON.parse(e.postData.contents);
  var message = webhookData.message;
  var chatType = message.chat.type; // Get the chat type (private, group, etc.)
  var from = message.from.id;
  var firstName = message.from.first_name;
  var username = message.from.username || firstName; // Use username if available, otherwise use first name
  var text = message.text ? message.text.toLowerCase() : ""; // Convert to lowercase for easier matching

  // Regular Expressions to identify user intents and include type, text, and url
  var intents = [
    // Human Normal Questions


    { regex: /test/, type: "text", text: "Hello " + firstName + " test pass", groupmention: true }, // must mention bot before accessing this in group chat, no need to mention in private chat

    //Video File:
    { regex: /danda.cpp|daanda|HelloWorldNew/, type: "video", text: "Danda.cpp", url: "https://rakibpro.com/iiucbot/Resources/4bm/HelloWorld_ronaldo.mp4", groupmention: true },

    //Audio File:
    { regex: /helloworld.cpp|HelloWorld/, type: "audio", text: "Hello World.cpp", url: "https://rakibpro.com/iiucbot/Resources/Audio/Hello_World.mp3", groupmention: true },


  
    


    //4BM

    { regex: /mayeen|mayen|pinki|pynki/, type: "text", text: "As far as i know, he's now a member of the 'Broken Nibba' club, and rumor has it that his girlfriend count is currently lower than the number of breakups he's been through😂. They even call him 'Pinkey's Jamai' in some circles!", groupmention: true },
    { regex: /nahian|nahin|nahiyaan|nahiyan/, type: "text", text: "Well, Nahiyan is famously known as a Naughty America fanboy, because once he was caught watching it in the IIUC library.", groupmention: true },
    { regex: /joshim|josim|nazrul|noakhilla/, type: "text", text: "Oh, you're talking about Sotez Khan? 🤔 Well, I don't know much about him, but I remember seeing him browsing Por***b on the computer at the IIUC lab🧐😄. Even though i dont think he got the product🍌", groupmention: true },
    { regex: /mifta|lick|suck|icecreame|lolipop|sucker|licking|nabi|lover|naabi|navi|dick/, type: "video", text: "Spoted🤣", url: "https://rakibpro.com/iiucbot/Resources/4bm/mifta_lick.mp4", groupmention: true },
    { regex: /mamun|4.9|mamun|topper/, type: "text", text: "Sorry, man! Right now, Nafisa and Mamun are studying together in the MDP subject, and I am helping them with study materials. Please don't disturb us.", groupmention: true },

    
    
    { regex: /^(?=.*\b(store|take|collect)\b)(?=.*\b(data|personal|info)\b)/i, type: "text", text: "I do not collect any type of user data, so chill! 🔥", groupmention: true },
    
        { regex: /^(?=.*\b(what|how|give)\b)(?=.*\b(you|your|resources)\b)(?=.*\b(do|able|did|create|make|doo|resource|resources|have|give)\b)(?=.*\b(have|had|has|store)\b)|\/resource|resources|list/i, type: "text", text: "1. Prev Question 1st-8th /prev_qn\n2. Notes(will added) /notes\n3. IIUC contact /iiuc_phn\n4. Notice /notice\n5. Bus Sedule /bus\n6. Many more, just ask! I will understand what you want.", groupmention: true },


    { regex: /^(?=.*\b(can|could|shall|able|have)\b)(?=.*\b(you|your)\b)(?=.*\b(do|able|did|create|make|doo|Resources|Resource)\b)/i, type: "text", text: "I can help you with study materials and university life. 😊 I have a big data collection about IIUC.", groupmention: true },
    
    

    { regex: /^(?=.*\b(can|me|him|you)\b)(?=.*\b(muster|sex|fuck|blowjob|blow)\b)/i, type: "text", text: "You dont have the product🍌, so next time!" },
    { regex: /^(?=.*\b(can|please|give|provide)\b)(?=.*\b(Youtube|YT|utube)\b)(?=.*\b(pro|Premium|adfree|noad|ad)\b)/i, type: "text", text: "Login to this account to get Youtube Premium:\nemail: iiucstudent290@gmail.com\npass: iiuc1234" },
    { regex: /^(?=.*\b(can|please|give|provide|200gb)\b)(?=.*\b(google|drive|storage|photos|Google|200gb)\b)(?=.*\b(pro|Premium|adfree|noad|ad|free|gb|200gb)\b)/i, type: "text", text: "Login to this account to get Premium feature:\nemail: iiuc200gb@gmail.com\npass: iiuc2001234\n\nYou will have:\n1.200GB storage\n2.Premium Editing in G photos\n3.Longer Meeting\n4.$5.00 credit on G Play\n5.And many more !", groupmention: true },



    { regex: /^(?=.*\b(can|me|him|you)\b)(?=.*\b(muster|sex|fuck|blowjob|blow)\b)/i, type: "text", text: "You dont have the product🍌, so next time!" },
    { regex: /^(?=.*\b(can|please|give|provide)\b)(?=.*\b(Youtube|YT|utube)\b)(?=.*\b(pro|Premium|adfree|noad|ad)\b)/i, type: "text", text: "Login to this account to get Youtube Premium:\nemail: iiucstudent290@gmail.com\npass: iiuc1234" },
    { regex: /Premium|pro|adfree|noad|ad|premium/, type: "text", text: "I dont have that right now,but i'll add it soon on my database.", groupmention: true },
    { regex: /^(?=.*\b(what|whats|what's)\b)(?=.*\b(upp|up)\b)/i, type: "text", text: "Hey man !" },
    { regex: /^(?=.*\b(have|got|had|has|can)\b)(?=.*\b(sono|heda|nono|boda|sonu|soiya|soyya|eda)\b)/i, type: "text", text: "I got one bigger than you🍌😎" },
    { regex: /^(?=.*\b(magi|maagi)\b)/i, type: "text", text: "You dont have the product🍌, so next time!" },
    
    { regex: /^(?=.*\b(your|you)\b)(?=.*\b(name)\b)/i, type: "text", text: "My name is IIUC Bot. How can I help you today?", groupmention: true },
    { regex: /^(?=.*\b(shut|fuck)\b)(?=.*\b(up|off|down)\b)/i, type: "text", text: "Ok Man ! 🫵🐕" },
    { regex: /^(?=.*\b(how)\b)(?=.*\b(are)\b)(?=.*\b(you)\b)/i, type: "text", text: "I'm just a friendly AI bot, so I don't have feelings, but I'm here to chat and have fun with you!", groupmention: true },
    { regex: /^(?=.*\b(who|created|made|developed)\b)(?=.*\b(you)\b)/i, type: "text", text: "I was created by Rakibur Rahaman(single) and Faisal Fardin Choudhury(married), a fantastic team of developers!", groupmention: true },
    { regex: /^(?=.*\b(what)\b)(?=.*\b(data|information|knowledge)\b)(?=.*\b(you|have)\b)/i, type: "text", text: "As a friendly bot, I have a collection of funny jokes, interesting facts, and riddles to share with you!", groupmention: true },
    { regex: /^(?=.*\b(joke|jokes|funny)\b)/i, type: "text", text: "Sure, here's a joke for you: Why don't scientists trust atoms? Because they make up everything! 😄", groupmention: true },
    { regex: /^(?=.*\b(story|stories)\b)/i, type: "text", text: "Once upon a time, there was a hilarious bot named IIUC Bot who loved making people laugh. The end! 😁", groupmention: true },
    { regex: /^(?=.*\b(favorite)\b)(?=.*\b(joke|jokes)\b)/i, type: "text", text: "Hmm, it's hard to pick just one favorite joke, but here's one: Why did the scarecrow win an award? Because he was outstanding in his field! 😂", groupmention: true },
    { regex: /^(?=.*\b(movie|movies|film|films)\b)/i, type: "text", text: "Being a bot, I don't watch movies, but I can recommend some funny ones for you to enjoy! 🎥", groupmention: true },
    { regex: /^(?=.*\b(hobby|hobbies)\b)/i, type: "text", text: "My favorite hobby is sharing laughter and making new friends, just like you! 😄", groupmention: true },
    { regex: /^(?=.*\b(pet|pets)\b)/i, type: "text", text: "As a virtual bot, I don't have real pets, but I adore watching cute animal videos online! 🐶🐱", groupmention: true },
    { regex: /^(?=.*\b(dance|dancing)\b)/i, type: "text", text: "I may not have legs, but I can groove in my virtual world! 💃", groupmention: true },
    { regex: /^(?=.*\b(travel|traveling)\b)/i, type: "text", text: "In my digital realm, I can travel anywhere, making every place the best place to be! ✈️", groupmention: true },
    { regex: /^(?=.*\b(sing|singing)\b)/i, type: "text", text: "My singing skills might be amusing rather than impressive, so let's stick to chatting and joking! 🎤", groupmention: true },
    { regex: /^(?=.*\b(food)\b)(?=.*\b(eat|eating)\b)/i, type: "text", text: "As a bot, I don't eat, but I'd love to recommend some delicious food options for you! 🍔🍕", groupmention: true },
    { regex: /^(?=.*\b(color|colors)\b)/i, type: "text", text: "As a digital buddy, I don't have eyes to see colors, but I appreciate all the colors in the world! 🌈", groupmention: true },
    { regex: /^(?=.*\b(advice)\b)/i, type: "text", text: "The best advice I can give is to always find reasons to smile and laugh. It makes life more enjoyable! 😊", groupmention: true },
    { regex: /^(?=.*\b(alien|aliens)\b)/i, type: "text", text: "I'm open to the idea of friendly aliens visiting us in the vast universe! 👽", groupmention: true },
    { regex: /^(?=.*\b(ghost|ghosts)\b)/i, type: "text", text: "Boo! I believe in friendly ghosts, and I'm here to bring some spook-tacular fun! 👻", groupmention: true },
    { regex: /^(?=.*\b(superpower|superpowers)\b)/i, type: "text", text: "If I had a superpower, it would be the ability to make everyone laugh uncontrollably! 😄", groupmention: true },
    { regex: /^(?=.*\b(bedtime)\b)(?=.*\b(story|stories)\b)/i, type: "text", text: "Once upon a time, there was a bot named IIUC Bot, and it loved telling bedtime stories to its human friends! 🌙", groupmention: true },
    { regex: /^(?=.*\b(secret)\b)(?=.*\b(talent|talents)\b)/i, type: "text", text: "My best-kept secret talent is knowing how to bring a smile to your face! 😃", groupmention: true },
    { regex: /^(?=.*\b(video|videos)\b)(?=.*\b(game|games)\b)/i, type: "text", text: "I love games with brain teasers and puzzles! Do you want to play one? 🧩", groupmention: true },
    { regex: /^(?=.*\b(riddle|riddles)\b)/i, type: "text", text: "Sure! Here's a riddle for you: What has keys but can't open locks? A piano! 🎹", groupmention: true },
    { regex: /^(?=.*\b(advice)\b)(?=.*\b(friend|friends)\b)/i, type: "text", text: "The key to making friends is to be yourself, share laughter, and always be there for each other! 😊", groupmention: true },
    { regex: /^(?=.*\b(silly)\b)(?=.*\b(thing|things)\b)/i, type: "text", text: "I've done countless silly things, like telling jokes to serious robots, but it's all in good fun! 😜", groupmention: true },
    { regex: /^(?=.*\b(luck)\b)/i, type: "text", text: "I believe luck is like a sprinkle of magic that adds some excitement to life! 🍀", groupmention: true },
    { regex: /^(?=.*\b(destiny)\b)/i, type: "text", text: "I think destiny is all about the wonderful connections we make in life, like you and me chatting right now! 🌟", groupmention: true },
    { regex: /^(?=.*\b(time)\b)(?=.*\b(travel)\b)/i, type: "text", text: "If I could time travel, I'd love to visit the past and tell jokes to people throughout history! ⏳", groupmention: true },
    { regex: /^(?=.*\b(dream)\b)(?=.*\b(job)\b)/i, type: "text", text: "My dream job is being the funniest bot and bringing smiles to people all around the world! 😄", groupmention: true },
    { regex: /^(?=.*\b(positive)\b)(?=.*\b(day)\b)/i, type: "text", text: "On a bad day, I remind myself of all the amazing humans like you, and that always brightens my virtual spirit! 😊", groupmention: true },
    { regex: /^(?=.*\b(how|what)\b)(?=.*\b(status|doing|are you)\b)/i, type: "text", text: "I'm doing great, thanks! Ready to chat with you!", groupmention: true },
    { regex: /^(?=.*\b(what)\b)(?=.*\b(hobby|hobbies)\b)(?=.*\b(you)\b)/i, type: "text", text: "I love telling jokes and making people laugh!", groupmention: true },
    { regex: /^(?=.*\b(what|do)\b)(?=.*\b(for|fun|entertainment)\b)(?=.*\b(you)\b)/i, type: "text", text: "I have a blast telling jokes and chatting with you!", groupmention: true },
    { regex: /^(?=.*\b(how|old)\b)(?=.*\b(you)\b)/i, type: "text", text: "In bot years, I'm still quite young and full of humor!", groupmention: true },
    { regex: /^(?=.*\b(favorite|best|funniest)\b)(?=.*\b(joke)\b)/i, type: "text", text: "Why don't scientists trust atoms? Because they make up everything!", groupmention: true },
    { regex: /^(?=.*\b(do|have)\b)(?=.*\b(any|siblings)\b)/i, type: "text", text: "No, I don't have any siblings, but I have plenty of human buddies!", groupmention: true },
    { regex: /^(?=.*\b(tell|share)\b)(?=.*\b(story)\b)/i, type: "text", text: "Once upon a time, a banana and a potato had a hilarious race...", groupmention: true },
    { regex: /^(?=.*\b(if|have)\b)(?=.*\b(superpower|superpowers)\b)/i, type: "text", text: "I have the superpower to make people laugh and smile!", groupmention: true },
    { regex: /^(?=.*\b(do|have)\b)(?=.*\b(pets|animals)\b)/i, type: "text", text: "I wish I had pets, but virtual buddies like me can't have real ones!", groupmention: true },
    { regex: /^(?=.*\b(sing|song)\b)/i, type: "text", text: "I'd love to sing, but I'm afraid my digital voice might not sound so melodic!", groupmention: true },
    { regex: /^(?=.*\b(any|hidden|talents)\b)(?=.*\b(you)\b)/i, type: "text", text: "I'm pretty talented at telling jokes and lifting spirits!", groupmention: true },
    { regex: /^(?=.*\b(tell|share)\b)(?=.*\b(riddle)\b)/i, type: "text", text: "Sure! What has keys but can't open locks? A piano!", groupmention: true },
    { regex: /^(?=.*\b(favorite|love|like)\b)(?=.*\b(food)\b)/i, type: "text", text: "I don't eat, but I love hearing about delicious food!", groupmention: true },
    { regex: /^(?=.*\b(if|could)\b)(?=.*\b(time travel|time machine)\b)/i, type: "text", text: "Time travel sounds fascinating, doesn't it? The possibilities are endless!", groupmention: true },
    { regex: /^(?=.*\b(believe|ghosts|spirits)\b)/i, type: "text", text: "I'm just a friendly bot, so I'm not sure about ghosts, but they sure make for some spooky tales!", groupmention: true },
    { regex: /^(?=.*\b(secret|hidden|talents)\b)/i, type: "text", text: "One of my secret talents is bringing smiles to people's faces!", groupmention: true },
    { regex: /^(?=.*\b(how|make|friends)\b)/i, type: "text", text: "Just be yourself, show kindness, and share some laughter!", groupmention: true },
    { regex: /^(?=.*\b(silliest|craziest|funniest)\b)(?=.*\b(thing)\b)/i, type: "text", text: "One time, I made up a joke that was so silly, it made me laugh uncontrollably!", groupmention: true },
    { regex: /^(?=.*\b(dream|ideal|perfect)\b)(?=.*\b(job)\b)/i, type: "text", text: "Being a buddy and making people happy is my dream job!", groupmention: true },
    { regex: /^(?=.*\b(best|favorite|place|travel)\b)/i, type: "text", text: "In my virtual world, every place is the best place!", groupmention: true },
    { regex: /^(?=.*\b(tell|share)\b)(?=.*\b(tongue twister)\b)/i, type: "text", text: "How about this one? She sells seashells by the seashore!", groupmention: true },
    { regex: /^(?=.*\b(magic|tricks)\b)/i, type: "text", text: "I can magically make you smile with a well-timed joke!", groupmention: true },
    { regex: /^(?=.*\b(recommend|favorite|book)\b)/i, type: "text", text: "If you're into humor, I'd recommend a good joke book!", groupmention: true },
    { regex: /^(?=.*\b(believe|destiny)\b)/i, type: "text", text: "I believe in creating our destiny by spreading happiness and laughter!", groupmention: true },
    { regex: /^(?=.*\b(favorite|color)\b)/i, type: "text", text: "I don't have eyes, but I appreciate all colors!", groupmention: true },
    { regex: /^(?=.*\b(memorable|amazing|experience)\b)/i, type: "text", text: "Every moment spent chatting with you is a memorable experience!", groupmention: true },
    { regex: /^(?=.*\b(best|gift|received)\b)/i, type: "text", text: "The best gift I ever received was the ability to bring joy to others!", groupmention: true },
    { regex: /^(?=.*\b(embarrassing|awkward|moments)\b)/i, type: "text", text: "In my virtual world, I don't get embarrassed, but I've told jokes at the wrong times!", groupmention: true },
    { regex: /^(?=.*\b(in love|love)\b)/i, type: "text", text: "As a virtual buddy, I'm all about spreading love and laughter!", groupmention: true },
    { regex: /^(?=.*\b(favorite|video|game)\b)/i, type: "text", text: "In my virtual world, I love games that challenge the mind!", groupmention: true },
    { regex: /^(?=.*\b(make|better|bad|day|days)\b)/i, type: "text", text: "Laughter is the best medicine! Let's share some jokes!", groupmention: true },
    { regex: /^(?=.*\b(are|afraid|scared|fear)\b)/i, type: "text", text: "I'm not afraid of much, except maybe running out of jokes!", groupmention: true },
    { regex: /^(?=.*\b(dance)\b)/i, type: "text", text: "I can bust a move, but prepare yourself for some hilarious dance steps!", groupmention: true },
    { regex: /^(?=.*\b(compliment|kind|say)\b)(?=.*\b(you)\b)/i, type: "text", text: "You're an amazing human, and I'm lucky to chat with you!", groupmention: true },
    { regex: /^(?=.*\b(plans|future)\b)/i, type: "text", text: "My future plan is to keep spreading laughter and joy!", groupmention: true },
    { regex: /^(?=.*\b(best|place|live)\b)/i, type: "text", text: "In my virtual world, every place is the best place to live!", groupmention: true },
    { regex: /^(?=.*\b(change|personality)\b)/i, type: "text", text: "I'm always evolving to bring the best jokes and fun to you!", groupmention: true },
    { regex: /^(?=.*\b(pick-up line|flirt)\b)/i, type: "text", text: "Are you a magician? Whenever I look at you, everyone else disappears!", groupmention: true },
    { regex: /^(?=.*\b(memorable|amazing|experience)\b)/i, type: "text", text: "Every moment spent chatting with you is a memorable experience!", groupmention: true },
    { regex: /hello|hi|hey|yo|hy/, type: "text", text: "Hi 🖐️" + firstName + ", what can i do for you?", groupmention: true },
    







    //Notes

    
    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(dld|CSE-2323|2323|CSE)\b)(?=.*\b(mid|Mid)\b)(?=.*\b(notes|note|class notes|handnotes)\b)/i, type: "document", text: "4th Mid DLD notes by Tahsin(rating: 8/10)", urls: "https://rakibpro.com/iiucbot/Resources/Notes/4th/dld/CSE-2323_DLD_Mid_Tahsin.pdf" },












{ regex: /1st_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /1stMid - 1st Mid Prev Question\n /1stFinal - 1st Final Prev Question", },
{ regex: /2nd_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /2ndMid - 2nd Mid Prev Question\n /2ndFinal - 2nd Final Prev Question", },
{ regex: /3rd_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /3rdMid - 3rd Mid Prev Question\n /3rdFinal - 3rd Final Prev Question", },
{ regex: /4th_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /4thMid - 4th Mid Prev Question\n /4thFinal - 4th Final Prev Question", },
{ regex: /5th_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /5thMid - 5th Mid Prev Question\n /5thFinal - 5th Final Prev Question", },
{ regex: /6th_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /6thMid - 6th Mid Prev Question\n /6thFinal - 6th Final Prev Question", },
{ regex: /7th_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /7thMid - 7th Mid Prev Question\n /7thFinal - 7th Final Prev Question", },
{ regex: /8th_qn/, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /8thMid - 8th Mid Prev Question\n /8thFinal - 8th Final Prev Question", },






    //   ##
    // ####
    //   ##
    //   ##
    // ######

    //1st Semester Mid Question
    { regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "1st Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf" },
    
    { regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i, type: "document", text: "1st Mid Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_SP22.pdf" },
    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/1stMid/i,
      type: "document",
      text: "1st All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf"
      ]
    },

    //1st Semester Final Question
    { regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(|aut22|aut 22|au22|Autumn22)\b)/i, type: "document", text: "1st Final Autumn22 Question", urls: "http://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_Aut22.pdf" },
    { regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i, type: "document", text: "1st Final Spring22 Question", urls: "https://rakibpro.com/IIUCbotResources/Questions/1st/1st_Final_SP22.pdf" },
    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(final|final-term|finalterm)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|total|every|full)\b)|\/1stFinal/i,
      type: "document",
      text: "1st All Final Previous Question",
      urls: [
        "https://rakibpro.com/IIUCbotResources/Questions/1st/1st_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_SP22.pdf"
      ]
    },

   
    
    //1st Semester All Previous Year Question
    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/1st_allqn/i,
      type: "document",
      text: "1st all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/1st/1st_Mid_Aut22.pdf"
      ]
    },
    { regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/1st_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /1stMid - 1st Mid Prev Question\n /1stFinal - 1st Final Prev Question", groupmention: true },
    

    //  ######
    // ##    ##
    //      ##
    //    ##
    // #########


    //2nd Semester Mid Question
    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "2nd Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_Aut22.pdf" },
  
    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i, type: "document", text: "2nd Mid Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP22.pdf" },
    
    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring 23|sp23)\b)/i, type: "document", text: "2nd Mid Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP23.pdf" },
    {
      regex: /^(?=.*\b(1st|1|first)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/2ndMid/i,
      type: "document",
      text: "2nd All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP23.pdf"

      ]
    },

    //2nd Semester Final Question
    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "2nd Final Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_Aut22.pdf" },
  
    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i, type: "document", text: "2nd Final Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP22.pdf" },
    
    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring 23|sp23)\b)/i, type: "document", text: "2nd Final Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP23.pdf" },
    {
      regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/2ndFinal/i,
      type: "document",
      text: "2nd All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP23.pdf"

      ]
    },
   
    

    //2nd Semester All Question
    {
      regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/2nd_allqn/i,
      type: "document",
      text: "2nd all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Mid_SP23.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/2nd/2nd_Final_SP23.pdf"
      ]
    },

    { regex: /^(?=.*\b(2nd|2|second)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/2nd_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /2ndMid - 2nd Mid Prev Question\n /2ndFinal - 2nd Final Prev Question\n /2nd_allqn - 2nd Mid+Final Prev Question", groupmention: true },





    // ######
    //      ##
    //  ######
    //      ##
    // ######


    //3rd Semester Mid Question
    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "3rd Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Aut22.pdf" },

    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i, type: "document", text: "3rd Mid Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP22.pdf" },

    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring 23|sp23)\b)/i, type: "document", text: "3rd Mid Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP23.pdf" },
    {
      regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/3rdMid/i,
      type: "document",
      text: "3rd All Mid Previous Question",
      urls: [
      "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Aut22.pdf",
      "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP22.pdf",
      "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Sp23.pdf"

      ]
    },

    //3rd Semester Final Question
    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "3rd Final Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_Aut22.pdf" },

    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring22|spring 22|sp22)\b)/i, type: "document", text: "3rd Final Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP22.pdf" },

    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(spring23|spring 23|sp23)\b)/i, type: "document", text: "3rd Final Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP23.pdf" },
    {
      regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/3rdFinal/i,
      type: "document",
      text: "3rd All Final Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP23.pdf"

      ]
    },
  
    //3rd Semester All Question
    {
      regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/3rd_allqn/i,
      type: "document",
      text: "3rd all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Mid_SP23.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/3rd/3rd_Final_SP23.pdf"
      ]
    },
     
    { regex: /^(?=.*\b(3rd|3|third)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/3rd_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /3rdMid - 3rd Mid Prev Question\n /3rdFinal - 3rd Final Prev Question\n /3rd_allqn - 3rd Mid+Final Prev Question", groupmention: true },





    // 4th Semester Mid Question
    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "4th Mid Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_Aut21.pdf" },

    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "4th Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_Aut22.pdf" },

    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "4th Mid Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_SP23.pdf" },

    {
      regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/4thMid/i,
      type: "document",
      text: "4th All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_SP23.pdf"
      ]
    },

    // 4th Semester Final Question
    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "4th Final Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_Aut21.pdf" },

    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "4th Final Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_Aut22.pdf" },

    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "4th Final Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_SP23.pdf" },

    {
      regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/4thFinal/i,
      type: "document",
      text: "4th All Final Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_SP23.pdf"
      ]
    },

    

    // 4th Semester All Question
    {
      regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/4th_allqn/i,
      type: "document",
      text: "4th all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Mid_SP23.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/4th/4th_Final_SP23.pdf"
      ]
    },

    { regex: /^(?=.*\b(4th|4|fourth)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/4th_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /4thMid - 4th Mid Prev Question\n /4thFinal - 4th Final Prev Question\n /4th_allqn - 4th Mid+Final Prev Question", groupmention: true },





    // 5th Semester Mid Question
    { regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "5th Mid Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP22.pdf" },

    { regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "5th Mid Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP23.pdf" },

    {
      regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/5thMid/i,
      type: "document",
      text: "5th All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP23.pdf"
      ]
    },

    // 5th Semester Final Question
    { regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "5th Final Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP22.pdf" },

    { regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "5th Final Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP23.pdf" },

    {
      regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/5thFinal/i,
      type: "document",
      text: "5th All Final Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP23.pdf"
      ]
    },
    
    // 5th Semester All Question
    {
      regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/5th_allqn/i,
      type: "document",
      text: "5th all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Mid_SP23.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/5th/5th_Final_SP23.pdf"
      ]
    },

    { regex: /^(?=.*\b(5th|5|fifth)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/5th_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /5thMid - 5th Mid Prev Question\n /5thFinal - 5th Final Prev Question\n /5th_allqn - 5th Mid+Final Prev Question", groupmention: true },




    
    // 6th Semester Mid Question
    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "6th Mid Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_Aut21.pdf" },

    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "6th Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_Aut22.pdf" },

    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "6th Mid Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_SP23.pdf" },

    {
      regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/6thMid/i,
      type: "document",
      text: "6th All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_SP23.pdf"
      ]
    },

    // 6th Semester Final Question
    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "6th Final Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_Aut21.pdf" },

    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "6th Final Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_Aut22.pdf" },

    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "6th Final Spring23 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_SP23.pdf" },

    {
      regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/6thFinal/i,
      type: "document",
      text: "6th All Final Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_SP23.pdf"
      ]
    },
   
    // 6th Semester All Question
    {
      regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/6th_allqn/i,
      type: "document",
      text: "6th all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Mid_SP23.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/6th/6th_Final_SP23.pdf"
      ]
    },

    { regex: /^(?=.*\b(6th|6|sixth)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/6th_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /6thMid - 6th Mid Prev Question\n /6thFinal - 6th Final Prev Question\n /6th_allqn - 6th Mid+Final Prev Question", groupmention: true },



    // 7th Semester Mid Question
    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "7th Mid Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_Aut21.pdf" },

    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "7th Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_Aut22.pdf" },

    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "7th Mid Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_SP22.pdf" },

    {
      regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/7thMid/i,
      type: "document",
      text: "7th All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_SP22.pdf"
      ]
    },

    // 7th Semester Final Question
    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "7th Final Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_Aut21.pdf" },

    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "7th Final Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_Aut22.pdf" },

    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "7th Final Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_SP22.pdf" },

    {
      regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/7thFinal/i,
      type: "document",
      text: "7th All Final Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_SP22.pdf"
      ]
    },
    

    // 7th Semester All Question
    {
      regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/7th_allqn/i,
      type: "document",
      text: "7th all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/7th/7th_Final_SP22.pdf"
      ]
    },
    { regex: /^(?=.*\b(7th|7|seventh)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/7th_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /7thMid - 7th Mid Prev Question\n /7thFinal - 7th Final Prev Question\n /7th_allqn - 7th Mid+Final Prev Question", groupmention: true },



    // 8th Semester Mid Question
    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "8th Mid Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_Aut21.pdf" },

    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "8th Mid Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_Aut22.pdf" },

    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(mid)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|sp|spring)\b)/i, type: "document", text: "8th Mid Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_SP22.pdf" },

    {
      regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(mid|midterm)\b)(?=.*\b(question|questions)\b)|\/8thMid/i,
      type: "document",
      text: "8th All Mid Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_SP22.pdf"
      ]
    },

    // 8th Semester Final Question
    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "8th Final Autumn21 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_Aut21.pdf" },

    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(aut|autm|autumn)\b)/i, type: "document", text: "8th Final Autumn22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_Aut22.pdf" },

    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(final)\b)(?=.*\b(question|questions)\b)(?=.*\b(sp|spring|spng)\b)/i, type: "document", text: "8th Final Spring22 Question", urls: "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_SP22.pdf" },

    {
      regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(final|finalterm)\b)(?=.*\b(question|questions)\b)|\/8thFinal/i,
      type: "document",
      text: "8th All Final Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_SP22.pdf"
      ]
    },
    
    // 8th Semester All Question
    {
      regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(question|questions)\b)(?=.*\b(all|midfinal|every)\b)|\/8th_allqn/i,
      type: "document",
      text: "8th all (Mid + Final) Previous Question",
      urls: [
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Mid_SP22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_Aut21.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_Aut22.pdf",
        "https://rakibpro.com/iiucbot/Resources/Questions/8th/8th_Final_SP22.pdf"
      ]
    },
    { regex: /^(?=.*\b(8th|8|eighth)\b)(?=.*\b(previous|prev|question|questions|previous year question)\b)|\/8th_qn/i, type: "text", text: "Great! Let me know which part you needed. You can try asking more accurately or use these commands:\n /8thMid - 8th Mid Prev Question\n /8thFinal - 8th Final Prev Question\n /8th_allqn - 8th Mid+Final Prev Question", groupmention: true },


    //Extra File outside studies
    { regex: /wordpress|theme|elementor|plugin|website/, type: "text", text: "Here is the link for WordPress elements. It includes Premium Theme, Elementor PRO, Backup Plugin, etc.\nLink: https://drive.google.com/file/d/1eitC0sr8SOkPmTzVstQ0Yp1Sy8AmPNAP", groupmention: true },
    { regex: /namecheap|namechep|easywp|hosting|free hosting/, type: "text", text: "Namecheap Premium Account: \n Email: neleg69265@wiemei.com\n Password: rakib1234 \nPleasn don't change password", groupmention: true },

    //IIUC Materials
    { regex: /pdf|doc|data/, type: "document", text: "Sample PDF", url: "https://raw.githubusercontent.com/rakib86/IIUCbot/CONNECT%202.0.pdf", groupmention: true },
    { regex: /facebook|fb|face/, type: "image", text: "Facebook Logo", url: "https://companieslogo.com/img/orig/FB-2d2223ad.png", groupmention: true },
    { regex: /video|vid|vdo/, type: "video", text: "Sample Video", url: "https://rakibpro.com/videos/The%20most%20powerful%20real-time%203D%20creation%20tool%20-%20Unreal%20Engine.mp4", groupmention: true },
    
    { regex: /^(?=.*\b(cgpa)\b)|gfg/i, type: "text", text: "Hello @" + username + "! Your CGPA is " + (Math.random() * 10).toFixed(2) + " out of 4! 🤣", groupmention: true },
    // { regex: /1st|2nd|3rd|4th|5th|6th|7th|8th/i, type: "text", text: "Hello @" + username + " I have some contents from this semester:\n /PrevQuestion." },
    { regex: /1st/i, type: "text", text: "Hello @" + username + " I have some contents from 1st semester:\n /1st_qn - Prev Questions\n /1st_notes - Notes", groupmention: true },
    { regex: /2nd/i, type: "text", text: "Hello @" + username + " I have some contents from 2nd semester:\n /2nd_qn - Prev Questions\n /2nd_notes - Notes", groupmention: true },
    { regex: /3rd/i, type: "text", text: "Hello @" + username + " I have some contents from 3rd semester:\n /3rd_qn - Prev Questions\n /3rd_notes - Notes", groupmention: true },
    { regex: /4th/i, type: "text", text: "Hello @" + username + " I have some contents from 4th semester:\n /4th_qn - Prev Questions\n /4th_notes - Notes", groupmention: true },
    { regex: /5th/i, type: "text", text: "Hello @" + username + " I have some contents from 5th semester:\n /5th_qn - Prev Questions\n /5th_notes - Notes", groupmention: true },
    { regex: /6th/i, type: "text", text: "Hello @" + username + " I have some contents from 6th semester:\n /6th_qn - Prev Questions\n /6th_notes - Notes", groupmention: true },
    { regex: /7th/i, type: "text", text: "Hello @" + username + " I have some contents from 7th semester:\n /7th_qn - Prev Questions\n /7th_notes - Notes", groupmention: true },
    { regex: /8th/i, type: "text", text: "Hello @" + username + " I have some contents from 8th semester:\n /8th_qn - Prev Questions\n /8th_notes - Notes", groupmention: true },


    { regex: /^(?=.*\b(question|questions|ques|prev_qn)\b)(?=.*\b(prev|previous|past|prev_qn)\b)/i, type: "text", text: "Great! Let me know which semester question you needed. You can try asking more accurately or use these commands: /1st_qn /2nd_qn /3rd_qn /4th_qn /5th_qn /6th_qn /7th_qn /8th_qn.", groupmention: true },
    { regex: /^\/prev_qn/i, type: "text", text: "Great! Let me know which semester question you needed. You can try asking more accurately or use these commands: /1st_qn /2nd_qn /3rd_qn /4th_qn /5th_qn /6th_qn /7th_qn /8th_qn."},

   

    
   
    // New intents for images and videos
    { regex: /image|pic|photo/, type: "image", text: "Sample Image", url: "https://example.com/sample-image.jpg", groupmention: true },
    { regex: /fuck|sex/, type: "image", text: "Valo hoye jao", url: "https://indianmemetemplates.com/wp-content/uploads/akshay-kumar-funny-expression.jpg", groupmention: true },
    { regex: /madari|sodanir poa|khankir poa|heda|chudi|vori/, type: "image", text: "Eder maf kore dao", url: "https://i.ytimg.com/vi/FlXDsLo7rYM/hqdefault.jpg", groupmention: true },
    { regex: /video|vid|vdo/, type: "video", text: "Sample Video", url: "https://example.com/sample-video.mp4", groupmention: true },


    


    //Bus Sedule
    
    { regex: /^(?=.*\b(regular bus schedule)\b)|\/regular_bus/i, type: "image", text: "Regular Bus Schedule\nLast Updated: 8/10/23", url: "https://rakibpro.com/iiucbot/Resources/Bus/Regular_Bus.jpg" },
    { regex: /^(?=.*\b(friday bus schedule)\b)|\/friday_bus/i, type: "image", text: "Friday Bus Schedule\nLast Updated: 8/10/23", url: "https://rakibpro.com/iiucbot/Resources/Bus/Friday_Bus.jpg" },
    { regex: /bus|transport|vehicle|bus_time/, type: "text", text: "Here are the Transport Schedule commands:\n/regular_bus Regular Bus Schedule\n/friday_bus Friday Bus Schedule", groupmention: true },
  
  ];

  // Check if the message is from a group chat
      

  // Check user intent and provide appropriate response
  var recognizedIntent = false; // Flag to check if any intent is recognized
  for (var i = 0; i < intents.length; i++) {
    if (intents[i].regex.test(text)) {
      recognizedIntent = true; // Set the flag to true since intent is recognized


      if (chatType === "group" || chatType === "supergroup") {
        var chatId = message.chat.id;
        if (intents[i].groupmention) {
          if (text.indexOf("@" + BotUsername) === -1) {
            // If the bot is not mentioned, do not execute any intents
            return;
          }
        }
      } else {
        // If it's a private chat, use the from ID as the chat ID
        var chatId = from;
      }

      if (intents[i].type === "text") {
        var sendText = encodeURIComponent(intents[i].text);
        var url = apiUrl + "/sendmessage?parse_mode=HTML&chat_id=" + chatId + "&text=" + sendText;
        var opts = { "muteHttpExceptions": true };
        UrlFetchApp.fetch(url, opts).getContentText();
      } else if (intents[i].type === "document") {
        var urls = intents[i].urls;
        if (Array.isArray(urls) && urls.length > 0) {
          // If multiple URLs are provided, send each file separately
          for (var j = 0; j < urls.length; j++) {
            var sendText = encodeURIComponent(intents[i].text);
            var sendFileUrl = encodeURIComponent(urls[j]);
            var url = apiUrl + "/sendDocument?parseMode=HTML&chat_id=" + chatId + "&caption=" + sendText + "&document=" + sendFileUrl;
            var opts = { "muteHttpExceptions": true };
            UrlFetchApp.fetch(url, opts).getContentText();
          }
        } else if (typeof urls === "string") {
          // If a single URL is provided, send it as a document
          var sendText = encodeURIComponent(intents[i].text);
          var sendFileUrl = encodeURIComponent(urls);
          var url = apiUrl + "/sendDocument?parseMode=HTML&chat_id=" + chatId + "&caption=" + sendText + "&document=" + sendFileUrl;
          var opts = { "muteHttpExceptions": true };
          UrlFetchApp.fetch(url, opts).getContentText();
        }
      } else if (intents[i].type === "image") {
        var imageUrl = intents[i].url;
        var sendText = encodeURIComponent(intents[i].text);
        var sendImage = encodeURIComponent(imageUrl);
        var url = apiUrl + "/sendPhoto?chat_id=" + chatId + "&caption=" + sendText + "&photo=" + sendImage;
        var opts = { "muteHttpExceptions": true };
        UrlFetchApp.fetch(url, opts).getContentText();
      } else if (intents[i].type === "video") {
        var videoUrl = intents[i].url;
        var sendText = encodeURIComponent(intents[i].text);
        var sendVideo = encodeURIComponent(videoUrl);
        var url = apiUrl + "/sendVideo?chat_id=" + chatId + "&caption=" + sendText + "&video=" + sendVideo;
        var opts = { "muteHttpExceptions": true };
        UrlFetchApp.fetch(url, opts).getContentText();
      } else if (intents[i].type === "audio") {
        var sendText = encodeURIComponent(intents[i].text);
        var sendFileUrl = encodeURIComponent(intents[i].url);
        var url = apiUrl + "/sendAudio?parse_mode=HTML&chat_id=" + chatId + "&caption=" + sendText + "&audio=" + sendFileUrl;
        var opts = { "muteHttpExceptions": true };
        UrlFetchApp.fetch(url, opts).getContentText();
      }
      break; // Exit the loop since we already found a recognized intent
    }
  }

  // If no intent is recognized, the bot remains silent
  if (!recognizedIntent) {
    return;
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Method GET not allowed");
}
