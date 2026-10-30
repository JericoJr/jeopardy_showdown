/*
  JEOPARDY SHOWDOWN QUESTION BANK
  ================================
  Edit this file to add your own categories and questions. The game picks
  5 random categories and random questions every time a new game starts.

  Each question has:
    level      1 to 5 (1 = easiest, the 100 row; 5 = hardest, the 500 row)
    question   the clue shown on screen
    answer     the correct answer shown when the host reveals it
    hint       optional, shown when the host gives a hint
    accept     optional, other answers that count as correct when players type
               answers (spelling mistakes are already forgiven a little)

  Optional audio for a question (plays on the TV board when the clue opens):
    melody     notes the game plays itself, like "C4:1 E4:1 G4:2"
               (note name + octave, then a colon and the length in beats;
               use # for sharp, b for flat, and R for a rest)
    bpm        speed of the melody in beats per minute (default 100)
    audio      or a sound file instead, like "songs/my-clip.mp3"
               (upload the file to your repo; use clips you have the right to play)
    start      where the sound file starts, in seconds (default 0)
    length     how many seconds to play (default 8)

  Lyric questions: write three or more underscores ___ where the missing word
  goes, and the game shows an underlined blank.

  Tips:
  - Give each category at least one question for every level, 1 to 5.
    Two or more per level means more variety between games.
  - Keep the commas between items, and put text in "double quotes".
  - To add a category, copy one whole { name: ..., questions: [ ... ] } block,
    paste it after the last one (add a comma between them), and change it.
  - Final round questions go in "finals" at the bottom.
*/
window.QUESTION_BANK = {
  categories: [
    {
      name: "Heroes of the Faith",
      questions: [
        { level: 1, question: "He built an ark to save his family and the animals from the flood.", answer: "Noah", hint: "His story starts in Genesis 6.", accept: ["noah"] },
        { level: 1, question: "This shepherd boy defeated Goliath with a sling and a stone.", answer: "David", hint: "He later became king of Israel.", accept: ["david"] },
        { level: 2, question: "God used him to lead the Israelites out of slavery in Egypt.", answer: "Moses", hint: "As a baby he was hidden in a basket on the Nile.", accept: ["moses"] },
        { level: 2, question: "Called the father of many nations, he waited years for his son Isaac.", answer: "Abraham", hint: "His name used to be Abram.", accept: ["abraham","abram"] },
        { level: 3, question: "This queen risked her life to save her people, saying, \"If I perish, I perish.\"", answer: "Esther", hint: "Her book comes right before Job.", accept: ["esther"] },
        { level: 3, question: "This judge had super strength that was tied to his uncut hair.", answer: "Samson", hint: "Delilah betrayed him.", accept: ["samson"] },
        { level: 4, question: "He led the Israelites into the Promised Land after Moses died.", answer: "Joshua", hint: "The walls of Jericho fell for him.", accept: ["joshua"] },
        { level: 4, question: "He led the rebuilding of Jerusalem’s walls in just 52 days.", answer: "Nehemiah", hint: "He had been cupbearer to a Persian king.", accept: ["nehemiah"] },
        { level: 5, question: "This prophetess and judge led Israel to victory alongside Barak.", answer: "Deborah", hint: "She held court under a palm tree.", accept: ["deborah"] },
        { level: 5, question: "This judge tested God with a fleece, then defeated an army with 300 men.", answer: "Gideon", hint: "He fought the Midianites.", accept: ["gideon"] }
      ]
    },
    {
      name: "Jesus’ Miracles",
      questions: [
        { level: 1, question: "Jesus did his first miracle at a wedding in Cana by doing this.", answer: "Turned water into wine", hint: "Something ran out at the party.", accept: ["water into wine","wine","turned water into wine"] },
        { level: 1, question: "While in a boat with his disciples, Jesus calmed this.", answer: "A storm", hint: "He said, \"Peace, be still!\"", accept: ["storm","the storm","a storm","wind","waves","the sea"] },
        { level: 2, question: "Jesus fed 5,000 people with two fish and this many loaves of bread.", answer: "Five", hint: "Count the fingers on one hand.", accept: ["5","five"] },
        { level: 2, question: "One night Jesus walked across the Sea of Galilee on this.", answer: "Water", hint: "The disciples thought he was a ghost.", accept: ["water","the water","sea","the sea","lake"] },
        { level: 3, question: "Jesus raised this friend after four days in the tomb.", answer: "Lazarus", hint: "He was the brother of Mary and Martha.", accept: ["lazarus"] },
        { level: 3, question: "This disciple stepped out of the boat and walked on water toward Jesus.", answer: "Peter", hint: "He was also called Simon.", accept: ["peter","simon peter","simon"] },
        { level: 4, question: "Friends lowered this man through a roof so Jesus could heal him.", answer: "A paralyzed man", hint: "He could not walk.", accept: ["paralyzed man","paralyzed","paralytic","a paralyzed man","lame man"] },
        { level: 4, question: "Jesus healed this many men with leprosy, but only one came back to thank him.", answer: "Ten", hint: "It is a double-digit number.", accept: ["10","ten"] },
        { level: 5, question: "Jesus healed this blind beggar sitting by the road outside Jericho (Mark 10).", answer: "Bartimaeus", hint: "His name means \"son of Timaeus.\"", accept: ["bartimaeus"] },
        { level: 5, question: "In Gethsemane, Jesus healed the ear of this servant after Peter cut it off.", answer: "Malchus", hint: "He served the high priest.", accept: ["malchus"] }
      ]
    },
    {
      name: "Books of the Bible",
      questions: [
        { level: 1, question: "The very first book of the Bible.", answer: "Genesis", hint: "Its name means \"beginning.\"", accept: ["genesis"] },
        { level: 1, question: "The very last book of the Bible.", answer: "Revelation", hint: "It records John’s vision.", accept: ["revelation","revelations"] },
        { level: 2, question: "The book that comes right after the four Gospels.", answer: "Acts", hint: "Luke wrote it.", accept: ["acts","acts of the apostles"] },
        { level: 2, question: "The number of books in the Protestant Bible.", answer: "66", hint: "39 in the Old Testament plus 27 in the New.", accept: ["66","sixty six"] },
        { level: 3, question: "This book has 150 chapters, many written as songs.", answer: "Psalms", hint: "It is the Bible’s songbook.", accept: ["psalms","psalm"] },
        { level: 3, question: "The number of Gospels in the New Testament.", answer: "Four", hint: "Matthew, Mark, ...", accept: ["4","four"] },
        { level: 4, question: "The last book of the Old Testament.", answer: "Malachi", hint: "A minor prophet whose name starts with M.", accept: ["malachi"] },
        { level: 4, question: "This doctor wrote a Gospel and the book of Acts.", answer: "Luke", hint: "Paul called him \"the beloved physician.\"", accept: ["luke"] },
        { level: 5, question: "The number of books in the New Testament.", answer: "27", hint: "It is 3 times 9.", accept: ["27","twenty seven"] },
        { level: 5, question: "This book of the Old Testament comes between Micah and Habakkuk.", answer: "Nahum", hint: "It starts with N.", accept: ["nahum"] }
      ]
    },
    {
      name: "Finish the Verse",
      questions: [
        { level: 1, question: "\"For God so loved the world, that he gave...\"", answer: "\"...his only Son\" (John 3:16)", hint: "It is John 3:16.", accept: ["his only son","only son","his one and only son","son","his son"] },
        { level: 1, question: "\"The Lord is my shepherd...\"", answer: "\"...I shall not want\" (Psalm 23:1)", hint: "It is Psalm 23.", accept: ["i shall not want","shall not want","i lack nothing"] },
        { level: 2, question: "\"I can do all things...\"", answer: "\"...through Christ who strengthens me\" (Philippians 4:13)", hint: "It is Philippians 4:13.", accept: ["through christ who strengthens me","through christ","christ who strengthens me","through him who gives me strength"] },
        { level: 2, question: "The shortest verse in most English Bibles: \"Jesus ___.\"", answer: "Wept (John 11:35)", hint: "He was at Lazarus’ tomb.", accept: ["wept"] },
        { level: 3, question: "\"For I know the plans I have for you,\" declares the Lord...", answer: "\"...plans to prosper you and not to harm you\" (Jeremiah 29:11)", hint: "It is Jeremiah 29:11.", accept: ["plans to prosper you and not to harm you","plans to prosper you","prosper you","to prosper you"] },
        { level: 3, question: "\"Trust in the Lord with all your heart...\"", answer: "\"...and lean not on your own understanding\" (Proverbs 3:5)", hint: "It is Proverbs 3:5.", accept: ["lean not on your own understanding","and lean not on your own understanding","do not lean on your own understanding","lean not"] },
        { level: 4, question: "\"Be still, and know...\"", answer: "\"...that I am God\" (Psalm 46:10)", hint: "It is Psalm 46:10.", accept: ["that i am god","i am god"] },
        { level: 4, question: "\"Your word is a lamp for my feet...\"", answer: "\"...a light on my path\" (Psalm 119:105)", hint: "It is in the longest chapter of the Bible.", accept: ["a light on my path","light on my path","a light to my path","light to my path","light unto my path","and a light unto my path"] },
        { level: 5, question: "\"Those who hope in the Lord will renew their strength. They will soar on wings like...\"", answer: "Eagles (Isaiah 40:31)", hint: "It is a bird.", accept: ["eagles","eagle"] },
        { level: 5, question: "\"Love is patient, love is...\"", answer: "Kind (1 Corinthians 13:4)", hint: "It is read at a lot of weddings.", accept: ["kind"] }
      ]
    },
    {
      name: "Genesis",
      questions: [
        { level: 1, question: "On this day of creation, God made people.", answer: "The sixth day", hint: "It is the day before God rested.", accept: ["6","sixth","six","6th","sixth day","the sixth day"] },
        { level: 1, question: "God set this in the sky as a sign of his promise after the flood.", answer: "A rainbow", hint: "It has many colors.", accept: ["rainbow","a rainbow"] },
        { level: 2, question: "The first woman.", answer: "Eve", hint: "Her name sounds like \"living.\"", accept: ["eve"] },
        { level: 2, question: "The garden where Adam and Eve first lived.", answer: "Eden", hint: "It starts with E.", accept: ["eden","garden of eden","the garden of eden"] },
        { level: 3, question: "Jacob tricked this twin brother out of his birthright.", answer: "Esau", hint: "He was hairy and loved to hunt.", accept: ["esau"] },
        { level: 3, question: "Joseph’s father gave him this special gift, which made his brothers jealous.", answer: "A coat (robe) of many colors", hint: "You wear it.", accept: ["coat","robe","a coat","coat of many colors","robe of many colors","colorful coat"] },
        { level: 4, question: "Abraham’s nephew, whose wife turned into a pillar of salt.", answer: "Lot", hint: "It is a three-letter name.", accept: ["lot"] },
        { level: 4, question: "God asked Abraham to offer this son on an altar, then provided a ram instead.", answer: "Isaac", hint: "His name means \"he laughs.\"", accept: ["isaac"] },
        { level: 5, question: "The oldest person recorded in the Bible, he lived 969 years.", answer: "Methuselah", hint: "He was Noah’s grandfather.", accept: ["methuselah"] },
        { level: 5, question: "After wrestling with God, Jacob was given this new name.", answer: "Israel", hint: "It became the name of a nation.", accept: ["israel"] }
      ]
    },
    {
      name: "Exodus & Wilderness",
      questions: [
        { level: 1, question: "The number of plagues God sent on Egypt.", answer: "Ten", hint: "Same as the number of commandments.", accept: ["10","ten"] },
        { level: 1, question: "The Israelites crossed this sea on dry ground.", answer: "The Red Sea", hint: "It is a color.", accept: ["red sea","the red sea","red"] },
        { level: 2, question: "The bread-like food God sent from heaven in the wilderness.", answer: "Manna", hint: "Its name means \"What is it?\"", accept: ["manna"] },
        { level: 2, question: "Moses received the Ten Commandments on this mountain.", answer: "Mount Sinai", hint: "It is also called Horeb.", accept: ["sinai","mount sinai","mt sinai","horeb","mount horeb"] },
        { level: 3, question: "Moses’ brother, who spoke for him before Pharaoh.", answer: "Aaron", hint: "He became the first high priest.", accept: ["aaron"] },
        { level: 3, question: "God first spoke to Moses from this.", answer: "A burning bush", hint: "It was on fire but did not burn up.", accept: ["burning bush","bush","a burning bush","the burning bush"] },
        { level: 4, question: "While Moses was on the mountain, the people made this idol.", answer: "A golden calf", hint: "It is a young cow made of gold.", accept: ["golden calf","calf","a golden calf","the golden calf"] },
        { level: 4, question: "The number of years Israel wandered in the wilderness.", answer: "40", hint: "Same as the days of rain in the flood.", accept: ["40","forty"] },
        { level: 5, question: "Moses’ sister, who watched over his basket in the river.", answer: "Miriam", hint: "She led the women in song with a tambourine.", accept: ["miriam"] },
        { level: 5, question: "Pharaoh’s daughter found baby Moses in this river.", answer: "The Nile", hint: "It is the longest river in Africa.", accept: ["nile","the nile","nile river"] }
      ]
    },
    {
      name: "Kings & Prophets",
      questions: [
        { level: 1, question: "This prophet ran from God and was swallowed by a great fish.", answer: "Jonah", hint: "He was supposed to go to Nineveh.", accept: ["jonah"] },
        { level: 1, question: "He kept praying to God and survived a night in the lions’ den.", answer: "Daniel", hint: "He prayed three times a day.", accept: ["daniel"] },
        { level: 2, question: "The first king of Israel.", answer: "Saul", hint: "He shares a name with Paul’s old name.", accept: ["saul"] },
        { level: 2, question: "This king, known for his wisdom, built the first temple.", answer: "Solomon", hint: "He was David’s son.", accept: ["solomon"] },
        { level: 3, question: "This prophet was taken up to heaven in a whirlwind.", answer: "Elijah", hint: "He faced the prophets of Baal on Mount Carmel.", accept: ["elijah"] },
        { level: 3, question: "Name one of the three friends thrown into the fiery furnace.", answer: "Shadrach, Meshach or Abednego", hint: "They were Daniel’s friends.", accept: ["shadrach","meshach","abednego","shadrach meshach and abednego"] },
        { level: 4, question: "This prophet asked for a double portion of Elijah’s spirit.", answer: "Elisha", hint: "His name is one letter different from Elijah’s.", accept: ["elisha"] },
        { level: 4, question: "This wicked queen, wife of King Ahab, tried to kill Elijah.", answer: "Jezebel", hint: "She worshiped Baal.", accept: ["jezebel"] },
        { level: 5, question: "He became king at age 8 and later rediscovered the Book of the Law.", answer: "Josiah", hint: "Find him in 2 Kings 22.", accept: ["josiah"] },
        { level: 5, question: "This prophet saw a vision of a valley of dry bones coming to life.", answer: "Ezekiel", hint: "It starts with E.", accept: ["ezekiel"] }
      ]
    },
    {
      name: "Who Said It?",
      questions: [
        { level: 1, question: "\"Here am I. Send me!\"", answer: "Isaiah", hint: "A major prophet, chapter 6 of his book.", accept: ["isaiah"] },
        { level: 1, question: "\"Let there be light.\"", answer: "God", hint: "It is in Genesis 1:3.", accept: ["god","the lord","lord"] },
        { level: 2, question: "\"Where you go I will go, and where you stay I will stay.\"", answer: "Ruth", hint: "She said it to her mother-in-law, Naomi.", accept: ["ruth"] },
        { level: 2, question: "\"Am I my brother’s keeper?\"", answer: "Cain", hint: "His brother was Abel.", accept: ["cain"] },
        { level: 3, question: "\"As for me and my household, we will serve the Lord.\"", answer: "Joshua", hint: "He said it after leading Israel into Canaan.", accept: ["joshua"] },
        { level: 3, question: "\"Speak, for your servant is listening.\"", answer: "Samuel", hint: "He said it as a boy in the temple with Eli.", accept: ["samuel"] },
        { level: 4, question: "\"I am the way and the truth and the life.\"", answer: "Jesus", hint: "It is in John 14:6.", accept: ["jesus","jesus christ","christ"] },
        { level: 4, question: "\"Unless I see the nail marks in his hands... I will not believe.\"", answer: "Thomas", hint: "People call him \"Doubting.\"", accept: ["thomas","doubting thomas"] },
        { level: 5, question: "\"You are the Messiah, the Son of the living God.\"", answer: "Peter", hint: "It is in Matthew 16.", accept: ["peter","simon peter","simon"] },
        { level: 5, question: "\"For to me, to live is Christ and to die is gain.\"", answer: "Paul", hint: "He wrote it from prison to the Philippians.", accept: ["paul"] }
      ]
    },
    {
      name: "Parables",
      questions: [
        { level: 1, question: "In this parable, a son wastes his inheritance, then comes home to a celebration.", answer: "The Prodigal (Lost) Son", hint: "He ended up feeding pigs.", accept: ["prodigal son","prodigal","lost son","the prodigal son"] },
        { level: 1, question: "The wise man built his house on rock. The foolish man built on this.", answer: "Sand", hint: "You find it at the beach.", accept: ["sand"] },
        { level: 2, question: "A shepherd leaves 99 sheep to go find this many lost ones.", answer: "One", hint: "The smallest number you can count.", accept: ["1","one","one sheep"] },
        { level: 2, question: "He stopped to help a beaten man on the road to Jericho.", answer: "The Good Samaritan", hint: "He came from Samaria.", accept: ["good samaritan","samaritan","the good samaritan"] },
        { level: 3, question: "Jesus compared the kingdom of God to this tiny seed.", answer: "The mustard seed", hint: "It shares its name with a yellow condiment.", accept: ["mustard","mustard seed"] },
        { level: 3, question: "A woman swept her whole house to find this lost item.", answer: "A coin", hint: "It is money.", accept: ["coin","a coin","lost coin","silver coin"] },
        { level: 4, question: "The number of bridesmaids (virgins) with lamps in Matthew 25.", answer: "Ten", hint: "Half were wise and half were foolish.", accept: ["10","ten"] },
        { level: 4, question: "The lazy servant hid his master’s money (talent) here.", answer: "In the ground", hint: "He dug a hole.", accept: ["ground","the ground","in the ground","dirt","earth","hole","a hole"] },
        { level: 5, question: "A farmer scatters seed on four kinds of soil in this parable.", answer: "The Sower", hint: "It is named after the one planting.", accept: ["sower","the sower","parable of the sower","soils","the soils"] },
        { level: 5, question: "The rich fool planned to tear down his barns and build these.", answer: "Bigger barns", hint: "He wanted more storage for crops.", accept: ["barns","bigger barns","barn","larger barns"] }
      ]
    },
    {
      name: "The Early Church",
      questions: [
        { level: 1, question: "Saul of Tarsus became better known by this name.", answer: "Paul", hint: "It is four letters.", accept: ["paul"] },
        { level: 1, question: "The Holy Spirit came on the believers during this feast in Acts 2.", answer: "Pentecost", hint: "It was 50 days after Passover.", accept: ["pentecost"] },
        { level: 2, question: "Saul met Jesus in a blinding light on the road to this city.", answer: "Damascus", hint: "It is in Syria.", accept: ["damascus","road to damascus"] },
        { level: 2, question: "He was the first Christian martyr, forgiving the people who stoned him.", answer: "Stephen", hint: "He was chosen to serve food to widows.", accept: ["stephen"] },
        { level: 3, question: "Paul’s young helper, who received two letters in the New Testament.", answer: "Timothy", hint: "His mother was Eunice.", accept: ["timothy"] },
        { level: 3, question: "About this many people believed and were baptized on the day of Pentecost.", answer: "3,000", hint: "It is in the thousands.", accept: ["3000","3 000","three thousand"] },
        { level: 4, question: "Paul’s partner on his first missionary journey.", answer: "Barnabas", hint: "His name means \"son of encouragement.\"", accept: ["barnabas"] },
        { level: 4, question: "A seller of purple cloth who became the first known believer in Europe.", answer: "Lydia", hint: "She came from Thyatira (Acts 16).", accept: ["lydia"] },
        { level: 5, question: "This young man fell asleep and fell from a window during Paul’s long sermon.", answer: "Eutychus", hint: "It happened in Acts 20.", accept: ["eutychus"] },
        { level: 5, question: "This husband and wife lied about the money from selling their land.", answer: "Ananias and Sapphira", hint: "It is in Acts 5.", accept: ["ananias and sapphira","ananias","sapphira"] }
      ]
    },
    {
      name: "Faith Today",
      questions: [
        { level: 1, question: "The 1990s bracelet letters \"WWJD\" stand for this question.", answer: "What Would Jesus Do?", hint: "Four words, starting with \"What.\"", accept: ["what would jesus do"] },
        { level: 1, question: "Many Christians give something up during these 40 days before Easter.", answer: "Lent", hint: "It starts on Ash Wednesday.", accept: ["lent"] },
        { level: 2, question: "This free Bible app from Life.Church is known for its \"Verse of the Day.\"", answer: "YouVersion (The Bible App)", hint: "Its name starts with \"You.\"", accept: ["youversion","you version","bible app","the bible app"] },
        { level: 2, question: "Dallas Jenkins created this series about Jesus and his disciples.", answer: "The Chosen", hint: "It was crowdfunded by fans.", accept: ["the chosen","chosen"] },
        { level: 3, question: "Tim Tebow wrote this verse in his eye black during the 2009 college football title game.", answer: "John 3:16", hint: "It is the most famous verse in the Bible.", accept: ["john 3:16","john 316","john 3 16"] },
        { level: 3, question: "This Christian rapper founded Reach Records and has won multiple Grammys.", answer: "Lecrae", hint: "One name, starts with L.", accept: ["lecrae"] },
        { level: 4, question: "The worship song \"Oceans (Where Feet May Fail)\" was recorded by this group.", answer: "Hillsong United", hint: "The group comes from a church in Australia.", accept: ["hillsong united","hillsong"] },
        { level: 4, question: "The 2023 movie \"Jesus Revolution\" is about this 1970s youth movement.", answer: "The Jesus Movement", hint: "Its followers were sometimes called \"Jesus People.\"", accept: ["jesus movement","the jesus movement","jesus people"] },
        { level: 5, question: "The Thursday before Easter, remembering the Last Supper, is called this.", answer: "Maundy (Holy) Thursday", hint: "It starts with M.", accept: ["maundy thursday","maundy","holy thursday"] },
        { level: 5, question: "This author wrote \"The Chronicles of Narnia.\"", answer: "C.S. Lewis", hint: "Aslan the lion is his creation.", accept: ["cs lewis","c s lewis","lewis","clive staples lewis"] }
      ]
    },
    {
      name: "Bible Sayings Today",
      questions: [
        { level: 1, question: "An underdog story is often called this kind of matchup.", answer: "David and Goliath", hint: "A boy against a giant.", accept: ["david and goliath","david vs goliath","david versus goliath"] },
        { level: 1, question: "Someone with huge patience is said to have \"the patience of\" this man.", answer: "Job", hint: "He lost almost everything but kept his faith.", accept: ["job"] },
        { level: 2, question: "\"The writing on the wall\" comes from a feast in this book.", answer: "Daniel", hint: "The king was Belshazzar.", accept: ["daniel"] },
        { level: 2, question: "\"Go the extra mile\" comes from this famous teaching of Jesus.", answer: "The Sermon on the Mount", hint: "It starts in Matthew 5.", accept: ["sermon on the mount","the sermon on the mount"] },
        { level: 3, question: "\"A drop in the bucket\" comes from this prophet’s book.", answer: "Isaiah", hint: "See chapter 40.", accept: ["isaiah"] },
        { level: 3, question: "\"A leopard can’t change its spots\" comes from this prophet.", answer: "Jeremiah", hint: "He is called the weeping prophet.", accept: ["jeremiah"] },
        { level: 4, question: "\"Pride goes before a fall\" comes from this book of wise sayings.", answer: "Proverbs", hint: "Much of it was written by Solomon.", accept: ["proverbs"] },
        { level: 4, question: "\"A fly in the ointment\" comes from this book written by \"the Teacher.\"", answer: "Ecclesiastes", hint: "It also says there is \"nothing new under the sun.\"", accept: ["ecclesiastes"] },
        { level: 5, question: "Lincoln’s \"house divided\" speech quoted words first spoken by him.", answer: "Jesus", hint: "It is in Mark 3:25.", accept: ["jesus","jesus christ","christ"] },
        { level: 5, question: "\"An eye for an eye\" first appears in this book of Moses.", answer: "Exodus", hint: "It is the second book of the Bible.", accept: ["exodus"] }
      ]
    },
    {
      name: "Women of the Bible",
      questions: [
        { level: 1, question: "The mother of Jesus.", answer: "Mary", hint: "The angel Gabriel visited her.", accept: ["mary"] },
        { level: 1, question: "Mary and this sister welcomed Jesus into their home.", answer: "Martha", hint: "She was busy in the kitchen.", accept: ["martha"] },
        { level: 2, question: "Ruth’s mother-in-law.", answer: "Naomi", hint: "She asked to be called Mara.", accept: ["naomi"] },
        { level: 2, question: "Abraham’s wife, who had a baby at age 90.", answer: "Sarah", hint: "She laughed when she heard the news.", accept: ["sarah","sarai"] },
        { level: 3, question: "She was the first to see Jesus after he rose (John 20).", answer: "Mary Magdalene", hint: "She came from Magdala.", accept: ["mary magdalene","magdalene"] },
        { level: 3, question: "She prayed for a son, and God gave her Samuel.", answer: "Hannah", hint: "Her name is spelled the same backward.", accept: ["hannah"] },
        { level: 4, question: "She hid the Israelite spies in Jericho.", answer: "Rahab", hint: "She hung a scarlet cord from her window.", accept: ["rahab"] },
        { level: 4, question: "Jacob loved her and worked 14 years to marry her.", answer: "Rachel", hint: "Her sister was Leah.", accept: ["rachel"] },
        { level: 5, question: "The mother of John the Baptist.", answer: "Elizabeth", hint: "She was a relative of Mary.", accept: ["elizabeth","elisabeth"] },
        { level: 5, question: "An 84-year-old prophetess who saw baby Jesus at the temple.", answer: "Anna", hint: "She appears in Luke 2.", accept: ["anna"] }
      ]
    },
    {
      name: "Numbers in the Bible",
      questions: [
        { level: 1, question: "The number of disciples Jesus chose.", answer: "12", hint: "A dozen.", accept: ["12","twelve"] },
        { level: 1, question: "The number of days in the creation week, including the day of rest.", answer: "7", hint: "A full week.", accept: ["7","seven"] },
        { level: 2, question: "The number of commandments God gave on Sinai.", answer: "10", hint: "Count both hands.", accept: ["10","ten"] },
        { level: 2, question: "The number of days and nights it rained during Noah’s flood.", answer: "40", hint: "It is the same as the years in the wilderness.", accept: ["40","forty"] },
        { level: 3, question: "The number of books of Moses at the start of the Bible.", answer: "5", hint: "Think \"Pentateuch.\"", accept: ["5","five"] },
        { level: 3, question: "Jonah spent this many days inside the great fish.", answer: "3", hint: "Same as the days before Jesus rose.", accept: ["3","three"] },
        { level: 4, question: "Judas was paid this many pieces of silver to betray Jesus.", answer: "30", hint: "It is three tens.", accept: ["30","thirty"] },
        { level: 4, question: "The number of tribes of Israel.", answer: "12", hint: "One for each son of Jacob.", accept: ["12","twelve"] },
        { level: 5, question: "Gideon defeated the Midianites with this many men.", answer: "300", hint: "It is in the hundreds.", accept: ["300","three hundred"] },
        { level: 5, question: "The disciples caught this exact number of large fish in John 21.", answer: "153", hint: "It is between 150 and 160.", accept: ["153","one hundred fifty three"] }
      ]
    },
    {
      name: "Apostles & Disciples",
      questions: [
        { level: 1, question: "Peter’s brother, also a fisherman, who followed Jesus.", answer: "Andrew", hint: "He first followed John the Baptist.", accept: ["andrew"] },
        { level: 1, question: "The disciple who betrayed Jesus with a kiss.", answer: "Judas Iscariot", hint: "He was paid in silver.", accept: ["judas","judas iscariot"] },
        { level: 2, question: "Jesus nicknamed these two brothers the \"Sons of Thunder.\"", answer: "James and John", hint: "Their father was Zebedee.", accept: ["james and john","james","john","sons of zebedee"] },
        { level: 2, question: "He was chosen by casting lots to replace Judas.", answer: "Matthias", hint: "It happened in Acts 1.", accept: ["matthias"] },
        { level: 3, question: "This disciple brought Nathanael to meet Jesus.", answer: "Philip", hint: "He was from Bethsaida.", accept: ["philip"] },
        { level: 3, question: "Often called \"the disciple whom Jesus loved.\"", answer: "John", hint: "He wrote a Gospel and three letters.", accept: ["john","the apostle john"] },
        { level: 4, question: "This disciple was sitting at a tax booth when Jesus called him.", answer: "Matthew", hint: "He was also called Levi.", accept: ["matthew","levi"] },
        { level: 4, question: "This disciple was called \"the Zealot.\"", answer: "Simon", hint: "He shares a first name with Peter.", accept: ["simon","simon the zealot"] },
        { level: 5, question: "Many scholars think Nathanael is the same person as this apostle.", answer: "Bartholomew", hint: "His name starts with \"Bar.\"", accept: ["bartholomew"] },
        { level: 5, question: "The first of the Twelve to be martyred, killed by Herod with a sword (Acts 12).", answer: "James, son of Zebedee", hint: "He was John’s brother.", accept: ["james","james son of zebedee"] }
      ]
    },
    {
      name: "Places in the Bible",
      questions: [
        { level: 1, question: "Jesus grew up in this town in Galilee.", answer: "Nazareth", hint: "People called him a Nazarene.", accept: ["nazareth"] },
        { level: 1, question: "Its walls fell after the Israelites marched around it and shouted.", answer: "Jericho", hint: "Trumpets were blown.", accept: ["jericho"] },
        { level: 2, question: "Noah’s ark came to rest on the mountains of this place.", answer: "Ararat", hint: "It is in modern-day Turkey.", accept: ["ararat","mount ararat","mountains of ararat"] },
        { level: 2, question: "David made this city his capital, and Jesus was crucified just outside it.", answer: "Jerusalem", hint: "It is also called Zion.", accept: ["jerusalem","zion"] },
        { level: 3, question: "Jesus called fishermen to follow him beside this sea.", answer: "The Sea of Galilee", hint: "It is also called the Lake of Gennesaret.", accept: ["sea of galilee","galilee","lake of gennesaret","sea of tiberias"] },
        { level: 3, question: "People built a tower here to reach the heavens, and God confused their language.", answer: "Babel", hint: "It sounds like \"babble.\"", accept: ["babel","tower of babel"] },
        { level: 4, question: "God sent Jonah to preach to this great city.", answer: "Nineveh", hint: "It was the capital of Assyria.", accept: ["nineveh"] },
        { level: 4, question: "Abraham’s hometown before God called him to Canaan.", answer: "Ur", hint: "It was \"of the Chaldeans.\"", accept: ["ur","ur of the chaldeans"] },
        { level: 5, question: "Jesus was crucified at this place, meaning \"place of the skull.\"", answer: "Golgotha", hint: "In Latin it is called Calvary.", accept: ["golgotha","calvary"] },
        { level: 5, question: "Paul was shipwrecked on this island, where a snake bit him (Acts 28).", answer: "Malta", hint: "It is in the Mediterranean, south of Sicily.", accept: ["malta","melita"] }
      ]
    },
    {
      name: "The Christmas Story",
      questions: [
        { level: 1, question: "Baby Jesus was laid in this feeding trough.", answer: "A manger", hint: "Animals eat from it.", accept: ["manger","a manger"] },
        { level: 1, question: "The town where Jesus was born.", answer: "Bethlehem", hint: "It was called the town of David.", accept: ["bethlehem"] },
        { level: 2, question: "This angel told Mary she would have a son.", answer: "Gabriel", hint: "He also appeared to Zechariah.", accept: ["gabriel"] },
        { level: 2, question: "Mary’s husband, a carpenter.", answer: "Joseph", hint: "Angels spoke to him in dreams.", accept: ["joseph"] },
        { level: 3, question: "The wise men followed this to find Jesus.", answer: "A star", hint: "It was seen in the east.", accept: ["star","a star","the star"] },
        { level: 3, question: "The wise men brought gold, frankincense and this.", answer: "Myrrh", hint: "It was a fragrant resin.", accept: ["myrrh"] },
        { level: 4, question: "This king tried to kill the baby Jesus.", answer: "Herod", hint: "He is known as Herod the Great.", accept: ["herod","king herod","herod the great"] },
        { level: 4, question: "Joseph took Mary and Jesus to this country to escape.", answer: "Egypt", hint: "It is where Israel was once enslaved.", accept: ["egypt"] },
        { level: 5, question: "This Roman emperor ordered the census that sent Joseph to Bethlehem.", answer: "Caesar Augustus", hint: "It is in Luke 2:1.", accept: ["augustus","caesar augustus"] },
        { level: 5, question: "This name for Jesus means \"God with us.\"", answer: "Immanuel", hint: "It comes from Isaiah 7:14.", accept: ["immanuel","emmanuel"] }
      ]
    },
    {
      name: "Easter Week",
      questions: [
        { level: 1, question: "Jesus rode into Jerusalem on this animal.", answer: "A donkey", hint: "It was a young colt.", accept: ["donkey","a donkey","colt","a colt"] },
        { level: 1, question: "The crowd waved these as Jesus entered Jerusalem.", answer: "Palm branches", hint: "The day is named after them.", accept: ["palm branches","palms","palm"] },
        { level: 2, question: "The meal Jesus shared with his disciples the night he was arrested.", answer: "The Last Supper", hint: "It was a Passover meal.", accept: ["last supper","the last supper","passover","passover meal"] },
        { level: 2, question: "This disciple denied knowing Jesus three times.", answer: "Peter", hint: "A rooster crowed afterward.", accept: ["peter","simon peter"] },
        { level: 3, question: "The Roman governor who sentenced Jesus to be crucified.", answer: "Pontius Pilate", hint: "He washed his hands before the crowd.", accept: ["pilate","pontius pilate"] },
        { level: 3, question: "Jesus rose from the dead on this day of the week.", answer: "Sunday", hint: "It is the first day of the week.", accept: ["sunday"] },
        { level: 4, question: "The crowd asked Pilate to release this prisoner instead of Jesus.", answer: "Barabbas", hint: "He was a known criminal.", accept: ["barabbas"] },
        { level: 4, question: "This rich man placed Jesus’ body in his own new tomb.", answer: "Joseph of Arimathea", hint: "He was a member of the Jewish council.", accept: ["joseph of arimathea","joseph"] },
        { level: 5, question: "The high priest who questioned Jesus at his trial.", answer: "Caiaphas", hint: "He was Annas’ son-in-law.", accept: ["caiaphas"] },
        { level: 5, question: "Jesus appeared to his followers for this many days before he ascended.", answer: "40", hint: "It is in Acts 1:3.", accept: ["40","forty"] }
      ]
    },
    {
      name: "Animals in the Bible",
      questions: [
        { level: 1, question: "This animal tempted Eve in the garden.", answer: "The serpent (snake)", hint: "It slithers.", accept: ["serpent","snake","the serpent"] },
        { level: 1, question: "Noah sent out this bird, and it came back with an olive leaf.", answer: "A dove", hint: "It is a symbol of peace.", accept: ["dove","a dove"] },
        { level: 2, question: "This animal spoke to the prophet Balaam.", answer: "A donkey", hint: "Balaam had been hitting it.", accept: ["donkey","a donkey","ass"] },
        { level: 2, question: "As a shepherd, David fought off a lion and this animal.", answer: "A bear", hint: "It is big and furry.", accept: ["bear","a bear"] },
        { level: 3, question: "The first bird Noah sent out of the ark.", answer: "A raven", hint: "It is a black bird.", accept: ["raven","a raven"] },
        { level: 3, question: "Jesus sent demons into a herd of these animals.", answer: "Pigs", hint: "They ran into the lake.", accept: ["pigs","pig","swine"] },
        { level: 4, question: "These birds brought Elijah bread and meat by a brook.", answer: "Ravens", hint: "They are black birds.", accept: ["ravens","raven"] },
        { level: 4, question: "Samson tied torches to the tails of 300 of these animals.", answer: "Foxes", hint: "Some translations say jackals.", accept: ["foxes","fox","jackals"] },
        { level: 5, question: "A plague of these insects ate everything green in Egypt.", answer: "Locusts", hint: "They are like grasshoppers.", accept: ["locusts","locust","grasshoppers"] },
        { level: 5, question: "Job 41 describes this mighty sea creature.", answer: "Leviathan", hint: "It starts with L.", accept: ["leviathan"] }
      ]
    },
    {
      name: "Psalms & Proverbs",
      questions: [
        { level: 1, question: "This king wrote many of the Psalms.", answer: "David", hint: "He played the harp.", accept: ["david","king david"] },
        { level: 1, question: "The psalm that begins \"The Lord is my shepherd.\"", answer: "Psalm 23", hint: "It is in the 20s.", accept: ["23","psalm 23"] },
        { level: 2, question: "The book of wise sayings, mostly from Solomon.", answer: "Proverbs", hint: "It comes after Psalms.", accept: ["proverbs"] },
        { level: 2, question: "\"The fear of the Lord is the beginning of\" this.", answer: "Wisdom", hint: "See Proverbs 9:10.", accept: ["wisdom","knowledge"] },
        { level: 3, question: "The shortest chapter in the Bible.", answer: "Psalm 117", hint: "It has only two verses.", accept: ["117","psalm 117"] },
        { level: 3, question: "The longest chapter in the Bible.", answer: "Psalm 119", hint: "It has 176 verses.", accept: ["119","psalm 119"] },
        { level: 4, question: "\"A gentle answer turns away\" this.", answer: "Wrath", hint: "See Proverbs 15:1.", accept: ["wrath","anger"] },
        { level: 4, question: "Proverbs 31 describes a wife of noble this.", answer: "Character", hint: "It is sometimes translated \"a virtuous woman.\"", accept: ["character","noble character","virtuous","virtuous woman"] },
        { level: 5, question: "\"Go to the ___, you sluggard; consider its ways and be wise.\"", answer: "The ant", hint: "It is a tiny, hard-working insect.", accept: ["ant","the ant","ants"] },
        { level: 5, question: "Psalm 150 ends: \"Let everything that has ___ praise the Lord.\"", answer: "Breath", hint: "You need it to live.", accept: ["breath"] }
      ]
    },
    {
      name: "Paul’s Letters",
      questions: [
        { level: 1, question: "Paul’s letter to the church in Rome.", answer: "Romans", hint: "It comes right after Acts.", accept: ["romans"] },
        { level: 1, question: "\"Love is patient, love is kind\" is in Paul’s first letter to the church in this city.", answer: "Corinth", hint: "The letters are called Corinthians.", accept: ["corinth","corinthians","1 corinthians"] },
        { level: 2, question: "Paul describes the \"armor of God\" in his letter to this church.", answer: "Ephesians", hint: "The city was Ephesus.", accept: ["ephesians","ephesus"] },
        { level: 2, question: "This short letter asks a master to welcome back his runaway slave.", answer: "Philemon", hint: "It has just one chapter.", accept: ["philemon"] },
        { level: 3, question: "\"Rejoice in the Lord always. I will say it again: Rejoice!\"", answer: "Philippians", hint: "It was written to the church at Philippi.", accept: ["philippians","philippi"] },
        { level: 3, question: "\"For all have sinned and fall short of the glory of God\" is in this letter.", answer: "Romans", hint: "It is chapter 3, verse 23.", accept: ["romans"] },
        { level: 4, question: "The runaway slave Paul writes about in Philemon.", answer: "Onesimus", hint: "His name means \"useful.\"", accept: ["onesimus"] },
        { level: 4, question: "Paul’s hometown.", answer: "Tarsus", hint: "It was in Cilicia.", accept: ["tarsus"] },
        { level: 5, question: "Paul left Titus on this island to appoint elders.", answer: "Crete", hint: "It is a large Greek island.", accept: ["crete"] },
        { level: 5, question: "Paul told this young pastor, \"Don’t let anyone look down on you because you are young.\"", answer: "Timothy", hint: "It is in 1 Timothy 4:12.", accept: ["timothy"] }
      ]
    },
    {
      name: "Name That Hymn",
      questions: [
        { level: 1, question: "Listen to the tune. Name this hymn.", answer: "Jesus Loves Me", hint: "A children’s song that ends \"...this I know.\"", accept: ["jesus loves me", "jesus loves me this i know"], melody: "G4:1 E4:1 E4:1 D4:1 E4:1 G4:1 G4:2 A4:1 A4:1 C5:1 A4:1 A4:1 G4:1 G4:2", bpm: 110, length: 10 },
        { level: 1, question: "Listen to the tune. Name this Christmas carol.", answer: "Joy to the World", hint: "It continues \"...the Lord is come.\"", accept: ["joy to the world"], melody: "D5:1 C#5:0.75 B4:0.25 A4:1.5 G4:0.5 F#4:1 E4:1 D4:1.5", bpm: 88, length: 10 },
        { level: 2, question: "Listen to the tune. Name this Christmas carol.", answer: "Silent Night", hint: "It continues \"...holy night.\"", accept: ["silent night", "silent night holy night"], melody: "G4:1.5 A4:0.5 G4:1 E4:3 G4:1.5 A4:0.5 G4:1 E4:3 D5:2 D5:1 B4:3 C5:2 C5:1 G4:3", bpm: 190, length: 10 },
        { level: 2, question: "Listen to the tune. Name this hymn.", answer: "Amazing Grace", hint: "John Newton wrote the words.", accept: ["amazing grace"], melody: "D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:1 G4:2 E4:1 D4:2 D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:0.5 B4:0.5 D5:3", bpm: 100, length: 10 },
        { level: 3, question: "Listen to the tune. Name this gospel song.", answer: "When the Saints Go Marching In", hint: "It is a favorite of New Orleans brass bands.", accept: ["when the saints go marching in", "when the saints", "the saints go marching in", "saints go marching in"], melody: "C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:2 E4:2 C4:2 E4:2 D4:4", bpm: 170, length: 10 },
        { level: 3, question: "Listen to the tune. Name this Christmas carol.", answer: "O Come, All Ye Faithful", hint: "It continues \"...joyful and triumphant.\"", accept: ["o come all ye faithful", "come all ye faithful", "adeste fideles"], melody: "G4:1 G4:2 D4:1 G4:1 A4:2 D4:2 B4:1 A4:1 B4:1 C5:1 B4:2 A4:1", bpm: 100, length: 10 },
        { level: 4, question: "Listen to the tune. Name this hymn.", answer: "Joyful, Joyful, We Adore Thee", hint: "Its tune comes from Beethoven’s Ninth Symphony.", accept: ["joyful joyful we adore thee", "joyful joyful", "ode to joy"], melody: "E4:1 E4:1 F4:1 G4:1 G4:1 F4:1 E4:1 D4:1 C4:1 C4:1 D4:1 E4:1 E4:1.5 D4:0.5 D4:2", bpm: 120, length: 10 },
        { level: 4, question: "Listen to the tune. Name this Christmas carol.", answer: "Hark! The Herald Angels Sing", hint: "Charles Wesley wrote the words.", accept: ["hark the herald angels sing", "hark the herald"], melody: "C4:1 F4:1 F4:1.5 E4:0.5 F4:1 A4:1 A4:1 G4:1 C5:1 C5:1 C5:1.5 Bb4:0.5 A4:1 G4:1 A4:2", bpm: 112, length: 10 },
        { level: 5, question: "Listen to the tune. Many churches sing these words to it: \"Praise God, from whom all blessings flow.\" What is this short hymn called?", answer: "The Doxology", hint: "Its tune is often called \"Old Hundredth.\"", accept: ["doxology", "the doxology", "old hundredth", "old 100th", "praise god from whom all blessings flow"], melody: "G4:2 G4:1 F#4:1 E4:1 D4:2 G4:1 A4:1 B4:2 B4:1 B4:1 A4:1 G4:1 C5:1 B4:1 A4:2", bpm: 92, length: 10 }
      ]
    },
    {
      name: "Finish the Lyric",
      questions: [
        { level: 1, question: "\"Amazing grace, how sweet the ___\"", answer: "Sound", hint: "The hymn is \"Amazing Grace.\"", accept: ["sound"], melody: "D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:1 G4:2 E4:1 D4:2 D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:0.5 B4:0.5 D5:3", bpm: 100, length: 10 },
        { level: 1, question: "\"Jesus loves me, this I know, for the ___ tells me so\"", answer: "Bible", hint: "The song is \"Jesus Loves Me.\"", accept: ["bible", "the bible"], melody: "G4:1 E4:1 E4:1 D4:1 E4:1 G4:1 G4:2 A4:1 A4:1 C5:1 A4:1 A4:1 G4:1 G4:2", bpm: 110, length: 10 },
        { level: 2, question: "\"Joy to the world, the Lord is ___\"", answer: "Come", hint: "The carol is \"Joy to the World.\"", accept: ["come", "come!"], melody: "D5:1 C#5:0.75 B4:0.25 A4:1.5 G4:0.5 F#4:1 E4:1 D4:1.5", bpm: 88, length: 10 },
        { level: 2, question: "\"Silent night, holy night, all is calm, all is ___\"", answer: "Bright", hint: "The carol is \"Silent Night.\"", accept: ["bright"], melody: "G4:1.5 A4:0.5 G4:1 E4:3 G4:1.5 A4:0.5 G4:1 E4:3 D5:2 D5:1 B4:3 C5:2 C5:1 G4:3", bpm: 190, length: 10 },
        { level: 2, question: "\"Blessed assurance, Jesus is ___\"", answer: "Mine", hint: "The hymn is \"Blessed Assurance\" by Fanny Crosby.", accept: ["mine"] },
        { level: 3, question: "\"Oh, when the saints go marching in... Lord, how I want to be in that ___\"", answer: "Number", hint: "The song is \"When the Saints Go Marching In.\"", accept: ["number"], melody: "C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:2 E4:2 C4:2 E4:2 D4:4", bpm: 170, length: 10 },
        { level: 3, question: "\"O come, all ye faithful, joyful and ___\"", answer: "Triumphant", hint: "The carol is \"O Come, All Ye Faithful.\"", accept: ["triumphant"], melody: "G4:1 G4:2 D4:1 G4:1 A4:2 D4:2 B4:1 A4:1 B4:1 C5:1 B4:2 A4:1", bpm: 100, length: 10 },
        { level: 3, question: "\"Holy, holy, holy! Lord God ___!\"", answer: "Almighty", hint: "The hymn is \"Holy, Holy, Holy.\"", accept: ["almighty"] },
        { level: 4, question: "\"Joyful, joyful, we adore Thee, God of glory, Lord of ___\"", answer: "Love", hint: "The hymn is \"Joyful, Joyful, We Adore Thee.\"", accept: ["love"], melody: "E4:1 E4:1 F4:1 G4:1 G4:1 F4:1 E4:1 D4:1 C4:1 C4:1 D4:1 E4:1 E4:1.5 D4:0.5 D4:2", bpm: 120, length: 10 },
        { level: 4, question: "\"Hark! The herald angels sing, glory to the newborn ___\"", answer: "King", hint: "The carol is \"Hark! The Herald Angels Sing.\"", accept: ["king"], melody: "C4:1 F4:1 F4:1.5 E4:0.5 F4:1 A4:1 A4:1 G4:1 C5:1 C5:1 C5:1.5 Bb4:0.5 A4:1 G4:1 A4:2", bpm: 112, length: 10 },
        { level: 5, question: "\"Praise God, from whom all ___ flow\"", answer: "Blessings", hint: "This is \"The Doxology.\"", accept: ["blessings"], melody: "G4:2 G4:1 F#4:1 E4:1 D4:2 G4:1 A4:1 B4:2 B4:1 B4:1 A4:1 G4:1 C5:1 B4:1 A4:2", bpm: 92, length: 10 },
        { level: 5, question: "\"When peace like a ___ attendeth my way\"", answer: "River", hint: "The hymn is \"It Is Well with My Soul.\"", accept: ["river"] }
      ]
    }
  ],
  finals: [
    { category: "The Disciples", question: "Before following Jesus, this disciple was a tax collector. The first Gospel carries his name.", answer: "Matthew", hint: "He was also called Levi.", accept: ["matthew","levi"] },
    { category: "Last Words", question: "The apostle John received the vision in the book of Revelation while on this island.", answer: "Patmos", hint: "It is in the Aegean Sea.", accept: ["patmos"] },
    { category: "Holy Places", question: "Jesus prayed in this garden on the night he was arrested.", answer: "Gethsemane", hint: "It is on the Mount of Olives.", accept: ["gethsemane","garden of gethsemane"] },
    { category: "Kings", question: "This Babylonian king threw three young men into a fiery furnace.", answer: "Nebuchadnezzar", hint: "He also had a dream about a giant statue.", accept: ["nebuchadnezzar","nebuchadnezzer"] },
    { category: "The Early Church", question: "Followers of Jesus were first called \"Christians\" in this city.", answer: "Antioch", hint: "See Acts 11:26.", accept: ["antioch"] },
    { category: "Prophets", question: "God told this prophet to marry Gomer as a picture of his faithful love.", answer: "Hosea", hint: "His book is the first of the minor prophets.", accept: ["hosea"] },
    { category: "The Cross", question: "This man was forced to carry Jesus’ cross.", answer: "Simon of Cyrene", hint: "His first name matches Peter’s original name.", accept: ["simon of cyrene","simon"] },
    { category: "Long Lives", question: "The oldest person recorded in the Bible, he lived 969 years.", answer: "Methuselah", hint: "He was Noah’s grandfather.", accept: ["methuselah"] },
    { category: "Bible Firsts", question: "The first person in the Bible to die, killed by his brother.", answer: "Abel", hint: "His brother was Cain.", accept: ["abel"] },
    { category: "Paul’s Journeys", question: "Paul and Silas sang hymns at midnight in a jail in this city before an earthquake.", answer: "Philippi", hint: "It is in Acts 16.", accept: ["philippi"] },
    { category: "Kings", question: "This king of Babylon saw a hand write on the wall during his feast.", answer: "Belshazzar", hint: "It is in Daniel 5.", accept: ["belshazzar"] },
    { category: "Women of the Bible", question: "A Moabite woman, she is the great-grandmother of King David.", answer: "Ruth", hint: "A book of the Bible is named after her.", accept: ["ruth"] }
  ]
};
