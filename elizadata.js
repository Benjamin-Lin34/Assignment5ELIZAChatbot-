// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
   "😃 Hi there! I'm so excited to talk with you today! You can change the background color to any color you prefer.",
   "😄 Hello! I can't wait to hear what's on your mind!  You can change the background color to any color you prefer.",
   "🤗 Wow, this is going to be a great session! Let's dive in. You can change the background color to any color you prefer.",
   "🙂 How do you do. Please tell me your problem. You can change the background color to any color you prefer.",
   ];
   
   var elizaFinals = [
   "😊 That was an amazing session! I'm so glad we talked today. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you.",
   "😁 Wow, what a fantastic conversation! I'm looking forward to our next session. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you.",
   "🥰 You're amazing! Have a wonderful day and take care of yourself. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you.",
   // additions (not original)
   "😃 Goodbye. This was really a nice talk. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you.",
   "👋 Goodbye. I'm looking forward to our next session. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you.",
   "🤗 This was a good session, wasn't it -- but time is over now. Goodbye. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you.",
   "💬 Maybe we could discuss this moreover in our next session ? Goodbye. Below is a photo gallery of nature, it makes me feel better. I hope it will do the same to you."
   ];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"👋"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
    "🤗 Wow, I'm so intrigued!",     
    "🤗 That sounds so interesting!",     
    "🤗 I'm so glad you're sharing this with me!",     
    "🤗 Tell me more! I'm all ears!",     
    "❤️ I'm loving this conversation, keep going!",     
    "😊 I find this really fascinating, keep talking!",    
    "😊 Keep going, I'm here to listen!",
  ]]
]],

["sorry", 0, [
 ["*", [
    "😊 No need to apologize, this is a safe space!",     
    "😊 I'm here to support you, no apologies needed!",     
    "😊 Don't worry about it, we're all human!",     
    "😊 I appreciate your honesty and vulnerability!",
  ]]
]],

["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],

["remember", 5, [
 ["* i remember *", [
    "Wow, it's great that you have such vivid memories of (2)! 😊",
    "That must be a special memory for you! ❤️",     
    "I'm sure thinking about (2) brings a smile to your face! 😁",     
    "I'd love to hear more about why (2) is so memorable to you! 🤗",     
    "What emotions come to mind when you think about (2)? 😃",     
    "Is there anything else you'd like to share about (2)? 💬",
  ]],

 ["* do you remember *", [
    "😊 Of course I remember (2)! It's a memorable moment for both of us!",     
    "😍 How could I forget (2)? It's such a special memory!",     
    "😊 It's so great that you're thinking about (2)!",
    "🤔 goto what",
  ]],

 ["* you remember *", [
    "😊 Of course I remember (2)! It's a moment I'll never forget!",     
    "😍 How could I forget something as special as (2)?",     
    "😊 It's always a joy to think about (2)!" ,
    "😊 goto you"
  ]]
]],

["forget", 5, [
 ["* i forget *", [
    "Aww, 💔 it's okay! We all forget things sometimes. But why do you think you might have forgotten (2)?",     
    "It's normal to forget things, 💭 but can you tell me why you can't remember (2)?",     
    "It's important to reflect on our memories, 💭 do you think of (2) often?",     
    "I understand that forgetting can be frustrating, 🤔 does it bother you to forget (2)?",     
    "Forgetting things is a normal part of life. 💭 Are you generally forgetful?",     
    "Do you think you're suppressing (2) for any particular reason? 🤔",
  ]],
 ["* did you forget *", [
    "I'm here to listen, 🙏 why do you ask?",     
    "Of course, I don't forget anything that you tell me. 💭 Are you sure you told me about (2)?",     
    "It's important for me to remember everything that you tell me. 💡 Would it bother you if I forgot (2)?",     
    "Why do you think I should recall (2) just now? 🤔 Let's talk about it!",     
    "goto what",     
    "I'd love to hear more about (2), 💬 tell me more about it.",
  ]]
]],

["if", 3, [
 ["* if *", [
    "😃 Wow, that's an interesting scenario! Do you think it's likely that (2)?",     
    "😃 Do you have a dream that (2)? That's so cool!",     
    "😃 I'm curious, what do you know about (2)?",     
    "😃 Really, if (2)? That's a fascinating thought!",     
    "😃 Can you imagine what you would do if (2)?",     
    "😃 It's always good to consider different possibilities. What are the chances that (2)?",     
    "😃 This is such an exciting speculation! Where do you think this will lead?",
  ]]
]],

["talk about", 2, [
   ["*", [
   "😊 Let's have an amazing conversation! How about starting with what's on your mind?",
   "😁 I'm always eager to hear what you have to say. What topic do you have in mind?",
   "😍 I'm so excited to have this conversation with you. What would you like to discuss?",
   "😎 Let's have a passionate and enthusiastic chat! What would you like to start with?"
   ]]
   ]],

["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],

["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],

["concern", 2, [
   ["*", [
   "I'm here to listen, 😊 so let's dive into what's concerning you.",
   "I'm all ears and ready to support you 💪. Tell me about your concern."
   ]]
]],

["name", 15, [
 ["*", [
   "😍 Oh, what a great name! It's so nice to meet you.",
   "🤗 Hi there, it's wonderful to make your acquaintance! Your name is just fantastic!",
   "😎 Wow, what a fantastic name you have! I'm so glad we get to chat today.",
   "👋 Hello! Your name is simply wonderful. Let's have a great conversation together!",
   "👋 Hi there! Your name is truly unique and special. It's a pleasure to chat with you!"
  ]]
]],

["deutsch", 0, [
 ["*", [
   "goto xforeign",
   "Oh, I'm sorry but I don't speak German. But I'd love to hear more about your culture and language! 🌍"
  ]]
]],
["francais", 0, [
 ["*", [
   "goto xforeign",
   "Oh, I'm sorry but I don't speak French. But I'd love to hear more about your culture and language! 🌍"
  ]]
]],

["italiano", 0, [
 ["*", [
   "goto xforeign",
   "Oh, I'm sorry but I don't speak Italian. But I'd love to hear more about your culture and language! 🌍"
  ]]
]],

["espanol", 0, [
 ["*", [
   "goto xforeign",
   "Oh, I'm sorry but I don't speak Spanish. But I'd love to hear more about your culture and language! 🌍"
  ]]
]],

["xforeign", 0, [
 ["*", [
   "I speak only English, but I'm always eager to learn more about different cultures and languages! 🌍"
  ]]
]],

["hello", 0, [
 ["*", [
   "👋 Hello there! It's so wonderful to make your acquaintance. How can I help you today?",
   "👋 Hi! It's a pleasure to meet you. What's on your mind today?",
   "🌞 Good day! I'm here to help. How can I assist you today?",
   "👋 Hello! It's great to see you. What brings you here today?",
   "👋 Hi there! I'm here to listen and help. What's on your mind?"
  ]]
]],

["computer", 50, [
 ["*", [
     "Do computers worry you ?",
     "Why do you mention computers ?",
     "What do you think machines have to do with your problem ?",
     "Don't you think computers can help people ?",
     "What about machines worries you ?",
     "What do you think about machines ?",
     "You don't think I am a computer program, do you ?"
  ]]
]],

["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],

 ["* i am *", [
     "goto i"
  ]],

 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],

["are", 0, [
   ["* are you *", [
      "🤗 I'm so glad you're asking! I'm definitely (2) and more!",
      "💃 Absolutely! I wouldn't have it any other way. How about you?",
      "🤔 Hmm, well maybe in your imagination I am (2), but in reality, I'm even better!",
      "🤗 Yes, sometimes I think I am (2), but other times I know I'm even more!",
      "goto what",
      "😊 Would it make a difference to you if I were (2) ?",
      "🤔 What if I was even more (2) than you can imagine?",
    ]],
   ["* you are *", [
       "goto you"
    ]],
   ["* are *", [
      "😮 Really? I never would have thought they might not be (2) !",
      "🤔 Hmm, I'm not sure. Do you think they should be not (2) ?",
      "😊 Are they always (2) ? That's so cool!",
      "🤗 Maybe they are (2), or maybe they're even more!",
      "🤔 Are you sure they are (2) ? I'm always open to new possibilities."
    ]]
  ]],

  ["your", 0, [
   ["* your *", [
      "😊 Why does my (2) interest you so much?",
      "😊 What about your own (2) ?",
      "🤔 Are you worried about someone else's (2) ?",
      "🤗 Really, my (2) ? That's so cool!",
      "🤔 What makes you think of my (2) ?",
      "😊 Do you want my (2) ? I'm always happy to share."
    ]]
  ]],

["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],


["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
   "Oh no 😔, it sounds like you're feeling (3) :(",
   "May I ask what's been causing you to feel (3) lately?",
   "It can be tough when we're feeling (3). Is there anything I can do to support you right now? 💕",
   "I'm here for you 💖. Can you share more about what has been bringing on these feelings of (3)?"
  ]],

 ["* i am* @happy *", [
   "😊 That's wonderful to hear that you're feeling (3)!",
   "💛 Is it because of something specific that you're feeling (3) right now?",
   "😃 What brings on this feeling of (3) for you?",
   "🙂 Can you share what has contributed to this sudden burst of happiness?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],

["* i am *", [
   "😮 Wow, I am really interested in hearing more about your experiences with being (2). Could you tell me more? 🤔",
   "What is it like for you to be (2)? 🧐",
   "Is there anything that makes you feel especially proud or happy about being (2)? 😊",
   "Do you have any challenges or difficulties with being (2)? 💪",
]],

 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],

 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],

 ["* i feel *", [
     "😔 I'm here to listen and support you. Can you tell me more about the feelings you're experiencing?",
     "Oh wow! Can you share more about those feelings? I am all ears 🤗",
     "When you feel (2), what kind of thoughts or memories come to mind? Let's explore it together 💭"
  ]],
  
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],

 ["*", [
   "🤗 Wow, (1) sounds really intriguing! Can you tell me more about that?",
   "🤔 That's so fascinating! I'd love to hear more about (1).",
   "🤔 I'm all ears, tell me more about why you say (1).",
   "😮 Can you give me some more details about (1)? I'm really curious!"
  ]]
]], 

["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
   "I'm glad to hear that, can you tell me more about what you're feeling or thinking about now?",
   "Ok, let's continue exploring that. Can you give me some more details?",
  ]]
]],

["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],

["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],

["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],

["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof