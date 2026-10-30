/*
  JEOPARDY SHOWDOWN QUESTION BANK
  ================================
  Edit this file to add your own categories and questions. The game picks
  5 random categories and random questions every time a new game starts.

  Each question has:
    level      1 to 7, how hard the question is:
                 1-2 easy, 3 medium, 4-5 hard, 6-7 expert
               In the standard mode, level 1 goes on the 100 row and level 5 on
               the 500 row. Intermediate and Expert modes use the harder levels.
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
    spotify    or a Spotify song link (in Spotify: Share > Copy Song Link), like
               "https://open.spotify.com/track/..."
               Questions with an empty spotify link are skipped until you add one.
               Set start to where the best-known part begins, in seconds
               (1:05 = 65). The TV board's browser should be logged into Spotify.
    audio      or a sound file instead, like "songs/my-clip.mp3"
               (upload the file to your repo; use clips you have the right to play)
    start      where the sound file starts, in seconds (default 0)
    length     how many seconds to play (default 8)

  Lyric questions: write three or more underscores ___ where the missing word
  goes, and the game shows an underlined blank.

  Tips:
  - Give each category at least one question for every level, 1 to 5,
    and a few at 6-7 so it can show up in Expert games.
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
        { level: 1, question: "God used him to lead the Israelites out of slavery in Egypt.", answer: "Moses", hint: "As a baby he was hidden in a basket on the Nile.", accept: ["moses"] },
        { level: 2, question: "Called the father of many nations, he waited years for his son Isaac.", answer: "Abraham", hint: "His name used to be Abram.", accept: ["abraham","abram"] },
        { level: 2, question: "This judge had super strength that was tied to his uncut hair.", answer: "Samson", hint: "Delilah betrayed him.", accept: ["samson"] },
        { level: 3, question: "This queen risked her life to save her people, saying, \"If I perish, I perish.\"", answer: "Esther", hint: "Her book comes right before Job.", accept: ["esther"] },
        { level: 3, question: "He led the Israelites into the Promised Land after Moses died.", answer: "Joshua", hint: "The walls of Jericho fell for him.", accept: ["joshua"] },
        { level: 4, question: "This prophetess and judge led Israel to victory alongside Barak.", answer: "Deborah", hint: "She held court under a palm tree.", accept: ["deborah"] },
        { level: 4, question: "This judge tested God with a fleece, then defeated an army with 300 men.", answer: "Gideon", hint: "He fought the Midianites.", accept: ["gideon"] },
        { level: 5, question: "He led the rebuilding of Jerusalem’s walls in just 52 days.", answer: "Nehemiah", hint: "He had been cupbearer to a Persian king.", accept: ["nehemiah"] },
        { level: 6, question: "This left-handed judge killed the Moabite king Eglon.", answer: "Ehud", hint: "It is in Judges 3.", accept: ["ehud"] },
        { level: 6, question: "This judge made a rash vow that cost him his daughter.", answer: "Jephthah", hint: "It is in Judges 11.", accept: ["jephthah","jephtha"] },
        { level: 7, question: "This judge struck down 600 Philistines with an oxgoad.", answer: "Shamgar", hint: "He gets just one verse, Judges 3:31.", accept: ["shamgar"] }
      ]
    },
    {
      name: "Jesus’ Miracles",
      questions: [
        { level: 1, question: "Jesus did his first miracle at a wedding in Cana by doing this.", answer: "Turned water into wine", hint: "Something ran out at the party.", accept: ["water into wine","wine","turned water into wine"] },
        { level: 1, question: "While in a boat with his disciples, Jesus calmed this.", answer: "A storm", hint: "He said, \"Peace, be still!\"", accept: ["storm","the storm","a storm","wind","waves","the sea"] },
        { level: 1, question: "One night Jesus walked across the Sea of Galilee on this.", answer: "Water", hint: "The disciples thought he was a ghost.", accept: ["water","the water","sea","the sea","lake"] },
        { level: 2, question: "Jesus fed 5,000 people with two fish and this many loaves of bread.", answer: "Five", hint: "Count the fingers on one hand.", accept: ["5","five"] },
        { level: 2, question: "Jesus raised this friend after four days in the tomb.", answer: "Lazarus", hint: "He was the brother of Mary and Martha.", accept: ["lazarus"] },
        { level: 2, question: "This disciple stepped out of the boat and walked on water toward Jesus.", answer: "Peter", hint: "He was also called Simon.", accept: ["peter","simon peter","simon"] },
        { level: 3, question: "Friends lowered this man through a roof so Jesus could heal him.", answer: "A paralyzed man", hint: "He could not walk.", accept: ["paralyzed man","paralyzed","paralytic","a paralyzed man","lame man"] },
        { level: 3, question: "Jesus healed this many men with leprosy, but only one came back to thank him.", answer: "Ten", hint: "It is a double-digit number.", accept: ["10","ten"] },
        { level: 4, question: "Jesus healed a man born blind by putting this on his eyes, then sending him to wash.", answer: "Mud", hint: "Jesus made it with his saliva (John 9).", accept: ["mud","clay","dirt","spit and mud"] },
        { level: 5, question: "Jesus healed this blind beggar sitting by the road outside Jericho (Mark 10).", answer: "Bartimaeus", hint: "His name means \"son of Timaeus.\"", accept: ["bartimaeus"] },
        { level: 6, question: "In Gethsemane, Jesus healed the ear of this servant after Peter cut it off.", answer: "Malchus", hint: "He served the high priest.", accept: ["malchus"] },
        { level: 6, question: "Jesus raised this synagogue leader’s daughter, saying \"Talitha koum.\"", answer: "Jairus", hint: "It is in Mark 5.", accept: ["jairus"] },
        { level: 6, question: "Jesus told Peter to find a coin in the mouth of this to pay the temple tax.", answer: "A fish", hint: "It is in Matthew 17.", accept: ["fish","a fish"] },
        { level: 7, question: "At this pool in Jerusalem, Jesus healed a man who had been sick for 38 years.", answer: "Bethesda", hint: "It is in John 5.", accept: ["bethesda","bethzatha"] },
        { level: 7, question: "In this town, Jesus raised a widow’s only son during his funeral.", answer: "Nain", hint: "It is in Luke 7.", accept: ["nain"] }
      ]
    },
    {
      name: "Books of the Bible",
      questions: [
        { level: 1, question: "The very first book of the Bible.", answer: "Genesis", hint: "Its name means \"beginning.\"", accept: ["genesis"] },
        { level: 1, question: "The very last book of the Bible.", answer: "Revelation", hint: "It records John’s vision.", accept: ["revelation","revelations"] },
        { level: 1, question: "The number of Gospels in the New Testament.", answer: "Four", hint: "Matthew, Mark, ...", accept: ["4","four"] },
        { level: 2, question: "The book that comes right after the four Gospels.", answer: "Acts", hint: "Luke wrote it.", accept: ["acts","acts of the apostles"] },
        { level: 2, question: "This book has 150 chapters, many written as songs.", answer: "Psalms", hint: "It is the Bible’s songbook.", accept: ["psalms","psalm"] },
        { level: 3, question: "The number of books in the Protestant Bible.", answer: "66", hint: "39 in the Old Testament plus 27 in the New.", accept: ["66","sixty six"] },
        { level: 3, question: "This doctor wrote a Gospel and the book of Acts.", answer: "Luke", hint: "Paul called him \"the beloved physician.\"", accept: ["luke"] },
        { level: 4, question: "The last book of the Old Testament.", answer: "Malachi", hint: "A minor prophet whose name starts with M.", accept: ["malachi"] },
        { level: 4, question: "The number of books in the New Testament.", answer: "27", hint: "It is 3 times 9.", accept: ["27","twenty seven"] },
        { level: 5, question: "The book that comes right before Esther.", answer: "Nehemiah", hint: "It is about rebuilding Jerusalem’s walls.", accept: ["nehemiah"] },
        { level: 6, question: "This book of the Old Testament comes between Micah and Habakkuk.", answer: "Nahum", hint: "It starts with N.", accept: ["nahum"] },
        { level: 6, question: "This minor prophet’s book comes between Joel and Obadiah.", answer: "Amos", hint: "He was a shepherd.", accept: ["amos"] },
        { level: 6, question: "The writer of this short letter calls himself \"a brother of James.\"", answer: "Jude", hint: "It is the book right before Revelation.", accept: ["jude"] },
        { level: 7, question: "The book that comes right after Lamentations.", answer: "Ezekiel", hint: "He saw a valley of dry bones.", accept: ["ezekiel"] }
      ]
    },
    {
      name: "Finish the Verse",
      questions: [
        { level: 1, question: "\"For God so loved the world, that he gave...\"", answer: "\"...his only Son\" (John 3:16)", hint: "It is John 3:16.", accept: ["his only son","only son","his one and only son","son","his son"] },
        { level: 1, question: "\"The Lord is my shepherd...\"", answer: "\"...I shall not want\" (Psalm 23:1)", hint: "It is Psalm 23.", accept: ["i shall not want","shall not want","i lack nothing"] },
        { level: 2, question: "\"I can do all things...\"", answer: "\"...through Christ who strengthens me\" (Philippians 4:13)", hint: "It is Philippians 4:13.", accept: ["through christ who strengthens me","through christ","christ who strengthens me","through him who gives me strength"] },
        { level: 2, question: "The shortest verse in most English Bibles: \"Jesus ___.\"", answer: "Wept (John 11:35)", hint: "He was at Lazarus’ tomb.", accept: ["wept"] },
        { level: 2, question: "\"Love is patient, love is...\"", answer: "Kind (1 Corinthians 13:4)", hint: "It is read at a lot of weddings.", accept: ["kind"] },
        { level: 3, question: "\"For I know the plans I have for you,\" declares the Lord...", answer: "\"...plans to prosper you and not to harm you\" (Jeremiah 29:11)", hint: "It is Jeremiah 29:11.", accept: ["plans to prosper you and not to harm you","plans to prosper you","prosper you","to prosper you"] },
        { level: 3, question: "\"Trust in the Lord with all your heart...\"", answer: "\"...and lean not on your own understanding\" (Proverbs 3:5)", hint: "It is Proverbs 3:5.", accept: ["lean not on your own understanding","and lean not on your own understanding","do not lean on your own understanding","lean not"] },
        { level: 3, question: "\"Be still, and know...\"", answer: "\"...that I am God\" (Psalm 46:10)", hint: "It is Psalm 46:10.", accept: ["that i am god","i am god"] },
        { level: 4, question: "\"In the beginning was the Word, and the Word was with God, and...\"", answer: "\"...the Word was God\" (John 1:1)", hint: "It is John 1:1.", accept: ["the word was god","word was god"] },
        { level: 5, question: "\"Your word is a lamp for my feet...\"", answer: "\"...a light on my path\" (Psalm 119:105)", hint: "It is in the longest chapter of the Bible.", accept: ["a light on my path","light on my path","a light to my path","light to my path","light unto my path","and a light unto my path"] },
        { level: 5, question: "\"Those who hope in the Lord will renew their strength. They will soar on wings like...\"", answer: "Eagles (Isaiah 40:31)", hint: "It is a bird.", accept: ["eagles","eagle"] },
        { level: 6, question: "\"Now faith is confidence in what we hope for and assurance about...\"", answer: "\"...what we do not see\" (Hebrews 11:1)", hint: "It is Hebrews 11:1.", accept: ["what we do not see","things not seen","what we do not see"] },
        { level: 6, question: "\"And what does the Lord require of you? To act justly and to love mercy and...\"", answer: "\"...to walk humbly with your God\" (Micah 6:8)", hint: "It is Micah 6:8.", accept: ["walk humbly with your god","to walk humbly with your god","walk humbly"] },
        { level: 7, question: "\"The Lord bless you and keep you; the Lord make his face shine on you and...\"", answer: "\"...be gracious to you\" (Numbers 6:25)", hint: "It is the priestly blessing in Numbers 6.", accept: ["be gracious to you","be gracious unto thee","gracious"] }
      ]
    },
    {
      name: "Genesis",
      questions: [
        { level: 1, question: "God set this in the sky as a sign of his promise after the flood.", answer: "A rainbow", hint: "It has many colors.", accept: ["rainbow","a rainbow"] },
        { level: 1, question: "The first woman.", answer: "Eve", hint: "Her name sounds like \"living.\"", accept: ["eve"] },
        { level: 1, question: "The garden where Adam and Eve first lived.", answer: "Eden", hint: "It starts with E.", accept: ["eden","garden of eden","the garden of eden"] },
        { level: 2, question: "On this day of creation, God made people.", answer: "The sixth day", hint: "It is the day before God rested.", accept: ["6","sixth","six","6th","sixth day","the sixth day"] },
        { level: 2, question: "Joseph’s father gave him this special gift, which made his brothers jealous.", answer: "A coat (robe) of many colors", hint: "You wear it.", accept: ["coat","robe","a coat","coat of many colors","robe of many colors","colorful coat"] },
        { level: 2, question: "God asked Abraham to offer this son on an altar, then provided a ram instead.", answer: "Isaac", hint: "His name means \"he laughs.\"", accept: ["isaac"] },
        { level: 3, question: "Jacob tricked this twin brother out of his birthright.", answer: "Esau", hint: "He was hairy and loved to hunt.", accept: ["esau"] },
        { level: 3, question: "After wrestling with God, Jacob was given this new name.", answer: "Israel", hint: "It became the name of a nation.", accept: ["israel"] },
        { level: 4, question: "Abraham’s nephew, whose wife turned into a pillar of salt.", answer: "Lot", hint: "It is a three-letter name.", accept: ["lot"] },
        { level: 4, question: "The oldest person recorded in the Bible, he lived 969 years.", answer: "Methuselah", hint: "He was Noah’s grandfather.", accept: ["methuselah"] },
        { level: 4, question: "The son Abraham had with Hagar.", answer: "Ishmael", hint: "His name means \"God hears.\"", accept: ["ishmael"] },
        { level: 5, question: "Abraham’s servant found a wife for Isaac at a well. What was her name?", answer: "Rebekah", hint: "She watered the servant’s camels.", accept: ["rebekah","rebecca"] },
        { level: 6, question: "In prison, Joseph interpreted dreams for Pharaoh’s cupbearer and this other servant.", answer: "The baker", hint: "His dream had baskets of bread.", accept: ["baker","the baker","chief baker"] },
        { level: 7, question: "This king of Salem, also a priest, blessed Abram and received a tenth of everything.", answer: "Melchizedek", hint: "Hebrews compares Jesus to him.", accept: ["melchizedek","melchisedec"] }
      ]
    },
    {
      name: "Exodus & Wilderness",
      questions: [
        { level: 1, question: "The number of plagues God sent on Egypt.", answer: "Ten", hint: "Same as the number of commandments.", accept: ["10","ten"] },
        { level: 1, question: "The Israelites crossed this sea on dry ground.", answer: "The Red Sea", hint: "It is a color.", accept: ["red sea","the red sea","red"] },
        { level: 1, question: "God first spoke to Moses from this.", answer: "A burning bush", hint: "It was on fire but did not burn up.", accept: ["burning bush","bush","a burning bush","the burning bush"] },
        { level: 2, question: "The bread-like food God sent from heaven in the wilderness.", answer: "Manna", hint: "Its name means \"What is it?\"", accept: ["manna"] },
        { level: 2, question: "Moses received the Ten Commandments on this mountain.", answer: "Mount Sinai", hint: "It is also called Horeb.", accept: ["sinai","mount sinai","mt sinai","horeb","mount horeb"] },
        { level: 2, question: "While Moses was on the mountain, the people made this idol.", answer: "A golden calf", hint: "It is a young cow made of gold.", accept: ["golden calf","calf","a golden calf","the golden calf"] },
        { level: 2, question: "Pharaoh’s daughter found baby Moses in this river.", answer: "The Nile", hint: "It is the longest river in Africa.", accept: ["nile","the nile","nile river"] },
        { level: 3, question: "Moses’ brother, who spoke for him before Pharaoh.", answer: "Aaron", hint: "He became the first high priest.", accept: ["aaron"] },
        { level: 3, question: "The number of years Israel wandered in the wilderness.", answer: "40", hint: "Same as the days of rain in the flood.", accept: ["40","forty"] },
        { level: 4, question: "Moses’ sister, who watched over his basket in the river.", answer: "Miriam", hint: "She led the women in song with a tambourine.", accept: ["miriam"] },
        { level: 5, question: "Moses’ father-in-law, a priest of Midian.", answer: "Jethro", hint: "He is also called Reuel.", accept: ["jethro","reuel"] },
        { level: 6, question: "Aaron and this man held up Moses’ hands during the battle with the Amalekites.", answer: "Hur", hint: "His name has three letters.", accept: ["hur","aaron and hur"] },
        { level: 7, question: "God filled this craftsman with his Spirit to build the tabernacle.", answer: "Bezalel", hint: "He worked with Oholiab.", accept: ["bezalel","bezaleel"] }
      ]
    },
    {
      name: "Kings & Prophets",
      questions: [
        { level: 1, question: "This prophet ran from God and was swallowed by a great fish.", answer: "Jonah", hint: "He was supposed to go to Nineveh.", accept: ["jonah"] },
        { level: 1, question: "He kept praying to God and survived a night in the lions’ den.", answer: "Daniel", hint: "He prayed three times a day.", accept: ["daniel"] },
        { level: 2, question: "This king, known for his wisdom, built the first temple.", answer: "Solomon", hint: "He was David’s son.", accept: ["solomon"] },
        { level: 2, question: "Name one of the three friends thrown into the fiery furnace.", answer: "Shadrach, Meshach or Abednego", hint: "They were Daniel’s friends.", accept: ["shadrach","meshach","abednego","shadrach meshach and abednego"] },
        { level: 3, question: "The first king of Israel.", answer: "Saul", hint: "He shares a name with Paul’s old name.", accept: ["saul"] },
        { level: 3, question: "This prophet was taken up to heaven in a whirlwind.", answer: "Elijah", hint: "He faced the prophets of Baal on Mount Carmel.", accept: ["elijah"] },
        { level: 4, question: "This prophet asked for a double portion of Elijah’s spirit.", answer: "Elisha", hint: "His name is one letter different from Elijah’s.", accept: ["elisha"] },
        { level: 4, question: "This wicked queen, wife of King Ahab, tried to kill Elijah.", answer: "Jezebel", hint: "She worshiped Baal.", accept: ["jezebel"] },
        { level: 5, question: "He became king at age 8 and later rediscovered the Book of the Law.", answer: "Josiah", hint: "Find him in 2 Kings 22.", accept: ["josiah"] },
        { level: 5, question: "This prophet saw a vision of a valley of dry bones coming to life.", answer: "Ezekiel", hint: "It starts with E.", accept: ["ezekiel"] },
        { level: 5, question: "This prophet confronted David about Bathsheba with a story about a lamb.", answer: "Nathan", hint: "He also anointed Solomon.", accept: ["nathan"] },
        { level: 5, question: "Elijah faced the prophets of Baal on this mountain.", answer: "Mount Carmel", hint: "It starts with C.", accept: ["carmel","mount carmel"] },
        { level: 6, question: "God healed this king of Judah and gave him 15 more years of life.", answer: "Hezekiah", hint: "The shadow on the sundial went backward.", accept: ["hezekiah"] },
        { level: 7, question: "This prophet was a shepherd and fig farmer from Tekoa.", answer: "Amos", hint: "His book comes after Joel.", accept: ["amos"] }
      ]
    },
    {
      name: "Who Said It?",
      questions: [
        { level: 1, question: "\"Let there be light.\"", answer: "God", hint: "It is in Genesis 1:3.", accept: ["god","the lord","lord"] },
        { level: 1, question: "\"I am the way and the truth and the life.\"", answer: "Jesus", hint: "It is in John 14:6.", accept: ["jesus","jesus christ","christ"] },
        { level: 2, question: "\"Am I my brother’s keeper?\"", answer: "Cain", hint: "His brother was Abel.", accept: ["cain"] },
        { level: 2, question: "\"Unless I see the nail marks in his hands... I will not believe.\"", answer: "Thomas", hint: "People call him \"Doubting.\"", accept: ["thomas","doubting thomas"] },
        { level: 3, question: "\"Where you go I will go, and where you stay I will stay.\"", answer: "Ruth", hint: "She said it to her mother-in-law, Naomi.", accept: ["ruth"] },
        { level: 3, question: "\"As for me and my household, we will serve the Lord.\"", answer: "Joshua", hint: "He said it after leading Israel into Canaan.", accept: ["joshua"] },
        { level: 4, question: "\"Here am I. Send me!\"", answer: "Isaiah", hint: "A major prophet, chapter 6 of his book.", accept: ["isaiah"] },
        { level: 4, question: "\"Speak, for your servant is listening.\"", answer: "Samuel", hint: "He said it as a boy in the temple with Eli.", accept: ["samuel"] },
        { level: 4, question: "\"You are the Messiah, the Son of the living God.\"", answer: "Peter", hint: "It is in Matthew 16.", accept: ["peter","simon peter","simon"] },
        { level: 5, question: "\"For to me, to live is Christ and to die is gain.\"", answer: "Paul", hint: "He wrote it from prison to the Philippians.", accept: ["paul"] },
        { level: 5, question: "\"I know that my redeemer lives.\"", answer: "Job", hint: "He said it in the middle of his suffering.", accept: ["job"] },
        { level: 6, question: "\"How can I curse those whom God has not cursed?\"", answer: "Balaam", hint: "His donkey talked to him.", accept: ["balaam"] },
        { level: 6, question: "\"Lord, now you are letting your servant depart in peace.\"", answer: "Simeon", hint: "He held baby Jesus in the temple.", accept: ["simeon"] },
        { level: 7, question: "\"Should I not have concern for the great city of Nineveh?\"", answer: "God", hint: "He said it to Jonah.", accept: ["god","the lord"] }
      ]
    },
    {
      name: "Parables",
      questions: [
        { level: 1, question: "In this parable, a son wastes his inheritance, then comes home to a celebration.", answer: "The Prodigal (Lost) Son", hint: "He ended up feeding pigs.", accept: ["prodigal son","prodigal","lost son","the prodigal son"] },
        { level: 1, question: "The wise man built his house on rock. The foolish man built on this.", answer: "Sand", hint: "You find it at the beach.", accept: ["sand"] },
        { level: 1, question: "He stopped to help a beaten man on the road to Jericho.", answer: "The Good Samaritan", hint: "He came from Samaria.", accept: ["good samaritan","samaritan","the good samaritan"] },
        { level: 2, question: "A shepherd leaves 99 sheep to go find this many lost ones.", answer: "One", hint: "The smallest number you can count.", accept: ["1","one","one sheep"] },
        { level: 2, question: "Jesus compared the kingdom of God to this tiny seed.", answer: "The mustard seed", hint: "It shares its name with a yellow condiment.", accept: ["mustard","mustard seed"] },
        { level: 3, question: "A woman swept her whole house to find this lost item.", answer: "A coin", hint: "It is money.", accept: ["coin","a coin","lost coin","silver coin"] },
        { level: 3, question: "A farmer scatters seed on four kinds of soil in this parable.", answer: "The Sower", hint: "It is named after the one planting.", accept: ["sower","the sower","parable of the sower","soils","the soils"] },
        { level: 4, question: "The number of bridesmaids (virgins) with lamps in Matthew 25.", answer: "Ten", hint: "Half were wise and half were foolish.", accept: ["10","ten"] },
        { level: 4, question: "The lazy servant hid his master’s money (talent) here.", answer: "In the ground", hint: "He dug a hole.", accept: ["ground","the ground","in the ground","dirt","earth","hole","a hole"] },
        { level: 5, question: "The rich fool planned to tear down his barns and build these.", answer: "Bigger barns", hint: "He wanted more storage for crops.", accept: ["barns","bigger barns","barn","larger barns"] },
        { level: 5, question: "In the parable of the talents, the servants got five talents, two talents, and this many.", answer: "One", hint: "The servant who got it buried it.", accept: ["1","one","one talent"] },
        { level: 6, question: "In the parable where every worker got the same pay, they worked in this kind of field.", answer: "A vineyard", hint: "Grapes grow there.", accept: ["vineyard","a vineyard"] },
        { level: 6, question: "A widow kept bothering this kind of person until he gave her justice (Luke 18).", answer: "An unjust judge", hint: "He did not fear God or care about people.", accept: ["judge","unjust judge","an unjust judge","the judge"] },
        { level: 7, question: "In Luke 16, a rich man in torment begged Abraham to send this poor beggar.", answer: "Lazarus", hint: "He shares a name with Jesus’ friend.", accept: ["lazarus"] }
      ]
    },
    {
      name: "The Early Church",
      questions: [
        { level: 1, question: "Saul of Tarsus became better known by this name.", answer: "Paul", hint: "It is four letters.", accept: ["paul"] },
        { level: 2, question: "The Holy Spirit came on the believers during this feast in Acts 2.", answer: "Pentecost", hint: "It was 50 days after Passover.", accept: ["pentecost"] },
        { level: 2, question: "Saul met Jesus in a blinding light on the road to this city.", answer: "Damascus", hint: "It is in Syria.", accept: ["damascus","road to damascus"] },
        { level: 3, question: "He was the first Christian martyr, forgiving the people who stoned him.", answer: "Stephen", hint: "He was chosen to serve food to widows.", accept: ["stephen"] },
        { level: 3, question: "Paul’s young helper, who received two letters in the New Testament.", answer: "Timothy", hint: "His mother was Eunice.", accept: ["timothy"] },
        { level: 4, question: "About this many people believed and were baptized on the day of Pentecost.", answer: "3,000", hint: "It is in the thousands.", accept: ["3000","3 000","three thousand"] },
        { level: 4, question: "Paul’s partner on his first missionary journey.", answer: "Barnabas", hint: "His name means \"son of encouragement.\"", accept: ["barnabas"] },
        { level: 5, question: "A seller of purple cloth who became the first known believer in Europe.", answer: "Lydia", hint: "She came from Thyatira (Acts 16).", accept: ["lydia"] },
        { level: 5, question: "This husband and wife lied about the money from selling their land.", answer: "Ananias and Sapphira", hint: "It is in Acts 5.", accept: ["ananias and sapphira","ananias","sapphira"] },
        { level: 5, question: "Philip explained Isaiah to an official from this country riding in a chariot.", answer: "Ethiopia", hint: "The official served Queen Candace.", accept: ["ethiopia"] },
        { level: 5, question: "Paul’s partner who sang hymns with him in the Philippian jail.", answer: "Silas", hint: "He is also called Silvanus.", accept: ["silas","silvanus"] },
        { level: 6, question: "This young man fell asleep and fell from a window during Paul’s long sermon.", answer: "Eutychus", hint: "It happened in Acts 20.", accept: ["eutychus"] },
        { level: 6, question: "This Roman centurion was one of the first Gentiles to believe, after Peter visited him.", answer: "Cornelius", hint: "It is in Acts 10.", accept: ["cornelius"] },
        { level: 6, question: "This sorcerer tried to buy the power of the Holy Spirit.", answer: "Simon", hint: "He is often called Simon Magus.", accept: ["simon","simon magus","simon the sorcerer"] },
        { level: 7, question: "Peter stayed in Joppa with a man named Simon who had this job.", answer: "Tanner", hint: "He worked with leather.", accept: ["tanner","a tanner"] }
      ]
    },
    {
      name: "Faith Today",
      questions: [
        { level: 1, question: "The 1990s bracelet letters \"WWJD\" stand for this question.", answer: "What Would Jesus Do?", hint: "Four words, starting with \"What.\"", accept: ["what would jesus do"] },
        { level: 1, question: "Many Christians give something up during these 40 days before Easter.", answer: "Lent", hint: "It starts on Ash Wednesday.", accept: ["lent"] },
        { level: 1, question: "Dallas Jenkins created this series about Jesus and his disciples.", answer: "The Chosen", hint: "It was crowdfunded by fans.", accept: ["the chosen","chosen"] },
        { level: 2, question: "This free Bible app from Life.Church is known for its \"Verse of the Day.\"", answer: "YouVersion (The Bible App)", hint: "Its name starts with \"You.\"", accept: ["youversion","you version","bible app","the bible app"] },
        { level: 2, question: "Tim Tebow wrote this verse in his eye black during the 2009 college football title game.", answer: "John 3:16", hint: "It is the most famous verse in the Bible.", accept: ["john 3:16","john 316","john 3 16"] },
        { level: 2, question: "This author wrote \"The Chronicles of Narnia.\"", answer: "C.S. Lewis", hint: "Aslan the lion is his creation.", accept: ["cs lewis","c s lewis","lewis","clive staples lewis"] },
        { level: 3, question: "This Christian rapper founded Reach Records and has won multiple Grammys.", answer: "Lecrae", hint: "One name, starts with L.", accept: ["lecrae"] },
        { level: 3, question: "The worship song \"Oceans (Where Feet May Fail)\" was recorded by this group.", answer: "Hillsong United", hint: "The group comes from a church in Australia.", accept: ["hillsong united","hillsong"] },
        { level: 4, question: "The Thursday before Easter, remembering the Last Supper, is called this.", answer: "Maundy (Holy) Thursday", hint: "It starts with M.", accept: ["maundy thursday","maundy","holy thursday"] },
        { level: 4, question: "The famous 1611 English Bible is named after this king.", answer: "King James", hint: "He was king of England and Scotland.", accept: ["king james","james","james i"] },
        { level: 5, question: "The 2023 movie \"Jesus Revolution\" is about this 1970s youth movement.", answer: "The Jesus Movement", hint: "Its followers were sometimes called \"Jesus People.\"", accept: ["jesus movement","the jesus movement","jesus people"] },
        { level: 5, question: "This German inventor printed the Bible with movable type around 1455.", answer: "Johannes Gutenberg", hint: "A famous Bible carries his name.", accept: ["gutenberg","johannes gutenberg"] },
        { level: 6, question: "Martin Luther posted his 95 Theses in this year.", answer: "1517", hint: "It is in the 1500s.", accept: ["1517"] },
        { level: 7, question: "This reformer made the first printed English New Testament in 1526.", answer: "William Tyndale", hint: "He was executed for it in 1536.", accept: ["tyndale","william tyndale"] }
      ]
    },
    {
      name: "Bible Sayings Today",
      questions: [
        { level: 1, question: "An underdog story is often called this kind of matchup.", answer: "David and Goliath", hint: "A boy against a giant.", accept: ["david and goliath","david vs goliath","david versus goliath"] },
        { level: 2, question: "Someone with huge patience is said to have \"the patience of\" this man.", answer: "Job", hint: "He lost almost everything but kept his faith.", accept: ["job"] },
        { level: 3, question: "\"The writing on the wall\" comes from a feast in this book.", answer: "Daniel", hint: "The king was Belshazzar.", accept: ["daniel"] },
        { level: 3, question: "\"Go the extra mile\" comes from this famous teaching of Jesus.", answer: "The Sermon on the Mount", hint: "It starts in Matthew 5.", accept: ["sermon on the mount","the sermon on the mount"] },
        { level: 3, question: "\"Pride goes before a fall\" comes from this book of wise sayings.", answer: "Proverbs", hint: "Much of it was written by Solomon.", accept: ["proverbs"] },
        { level: 4, question: "Lincoln’s \"house divided\" speech quoted words first spoken by him.", answer: "Jesus", hint: "It is in Mark 3:25.", accept: ["jesus","jesus christ","christ"] },
        { level: 4, question: "\"An eye for an eye\" first appears in this book of Moses.", answer: "Exodus", hint: "It is the second book of the Bible.", accept: ["exodus"] },
        { level: 4, question: "\"The salt of the earth\" comes from this famous teaching of Jesus.", answer: "The Sermon on the Mount", hint: "It is in Matthew 5.", accept: ["sermon on the mount","the sermon on the mount"] },
        { level: 5, question: "\"A drop in the bucket\" comes from this prophet’s book.", answer: "Isaiah", hint: "See chapter 40.", accept: ["isaiah"] },
        { level: 5, question: "\"A leopard can’t change its spots\" comes from this prophet.", answer: "Jeremiah", hint: "He is called the weeping prophet.", accept: ["jeremiah"] },
        { level: 5, question: "\"By the skin of my teeth\" comes from this book.", answer: "Job", hint: "He suffered greatly.", accept: ["job"] },
        { level: 6, question: "\"A fly in the ointment\" comes from this book written by \"the Teacher.\"", answer: "Ecclesiastes", hint: "It also says there is \"nothing new under the sun.\"", accept: ["ecclesiastes"] },
        { level: 6, question: "\"Feet of clay\" comes from a statue in a king’s dream in this book.", answer: "Daniel", hint: "The king was Nebuchadnezzar.", accept: ["daniel"] },
        { level: 7, question: "\"The powers that be\" comes from this letter of Paul.", answer: "Romans", hint: "See chapter 13 in the King James Version.", accept: ["romans"] }
      ]
    },
    {
      name: "Women of the Bible",
      questions: [
        { level: 1, question: "The mother of Jesus.", answer: "Mary", hint: "The angel Gabriel visited her.", accept: ["mary"] },
        { level: 2, question: "Mary and this sister welcomed Jesus into their home.", answer: "Martha", hint: "She was busy in the kitchen.", accept: ["martha"] },
        { level: 2, question: "Abraham’s wife, who had a baby at age 90.", answer: "Sarah", hint: "She laughed when she heard the news.", accept: ["sarah","sarai"] },
        { level: 2, question: "She was the first to see Jesus after he rose (John 20).", answer: "Mary Magdalene", hint: "She came from Magdala.", accept: ["mary magdalene","magdalene"] },
        { level: 3, question: "Ruth’s mother-in-law.", answer: "Naomi", hint: "She asked to be called Mara.", accept: ["naomi"] },
        { level: 3, question: "She prayed for a son, and God gave her Samuel.", answer: "Hannah", hint: "Her name is spelled the same backward.", accept: ["hannah"] },
        { level: 3, question: "The mother of John the Baptist.", answer: "Elizabeth", hint: "She was a relative of Mary.", accept: ["elizabeth","elisabeth"] },
        { level: 4, question: "She hid the Israelite spies in Jericho.", answer: "Rahab", hint: "She hung a scarlet cord from her window.", accept: ["rahab"] },
        { level: 4, question: "Jacob loved her and worked 14 years to marry her.", answer: "Rachel", hint: "Her sister was Leah.", accept: ["rachel"] },
        { level: 5, question: "The father of Leah and Rachel.", answer: "Laban", hint: "He tricked Jacob at the wedding.", accept: ["laban"] },
        { level: 6, question: "An 84-year-old prophetess who saw baby Jesus at the temple.", answer: "Anna", hint: "She appears in Luke 2.", accept: ["anna"] },
        { level: 6, question: "This woman killed the army commander Sisera with a tent peg.", answer: "Jael", hint: "It is in Judges 4.", accept: ["jael"] },
        { level: 6, question: "Peter raised this woman, also called Dorcas, from the dead.", answer: "Tabitha", hint: "She was known for making clothes for widows.", accept: ["tabitha","dorcas"] },
        { level: 7, question: "The wife of Moses.", answer: "Zipporah", hint: "She was a daughter of Jethro.", accept: ["zipporah"] }
      ]
    },
    {
      name: "Numbers in the Bible",
      questions: [
        { level: 1, question: "The number of disciples Jesus chose.", answer: "12", hint: "A dozen.", accept: ["12","twelve"] },
        { level: 1, question: "The number of days in the creation week, including the day of rest.", answer: "7", hint: "A full week.", accept: ["7","seven"] },
        { level: 1, question: "The number of commandments God gave on Sinai.", answer: "10", hint: "Count both hands.", accept: ["10","ten"] },
        { level: 2, question: "The number of days and nights it rained during Noah’s flood.", answer: "40", hint: "It is the same as the years in the wilderness.", accept: ["40","forty"] },
        { level: 2, question: "Jonah spent this many days inside the great fish.", answer: "3", hint: "Same as the days before Jesus rose.", accept: ["3","three"] },
        { level: 3, question: "The number of books of Moses at the start of the Bible.", answer: "5", hint: "Think \"Pentateuch.\"", accept: ["5","five"] },
        { level: 3, question: "The number of tribes of Israel.", answer: "12", hint: "One for each son of Jacob.", accept: ["12","twelve"] },
        { level: 4, question: "Judas was paid this many pieces of silver to betray Jesus.", answer: "30", hint: "It is three tens.", accept: ["30","thirty"] },
        { level: 4, question: "Gideon defeated the Midianites with this many men.", answer: "300", hint: "It is in the hundreds.", accept: ["300","three hundred"] },
        { level: 5, question: "The number of people saved on Noah’s ark.", answer: "8", hint: "Noah, his wife, their three sons and their wives.", accept: ["8","eight"] },
        { level: 5, question: "The number of books in the Old Testament (Protestant).", answer: "39", hint: "It is 66 minus 27.", accept: ["39","thirty nine"] },
        { level: 6, question: "The disciples caught this exact number of large fish in John 21.", answer: "153", hint: "It is between 150 and 160.", accept: ["153","one hundred fifty three"] },
        { level: 6, question: "Naaman dipped in the Jordan River this many times to be healed.", answer: "7", hint: "The number of days in a week.", accept: ["7","seven"] },
        { level: 6, question: "Abraham’s age when Isaac was born.", answer: "100", hint: "It is a round number.", accept: ["100","one hundred"] },
        { level: 7, question: "Jacob says he worked for Laban this many years in all.", answer: "20", hint: "See Genesis 31:41.", accept: ["20","twenty"] }
      ]
    },
    {
      name: "Apostles & Disciples",
      questions: [
        { level: 1, question: "The disciple who betrayed Jesus with a kiss.", answer: "Judas Iscariot", hint: "He was paid in silver.", accept: ["judas","judas iscariot"] },
        { level: 2, question: "Peter’s brother, also a fisherman, who followed Jesus.", answer: "Andrew", hint: "He first followed John the Baptist.", accept: ["andrew"] },
        { level: 2, question: "Often called \"the disciple whom Jesus loved.\"", answer: "John", hint: "He wrote a Gospel and three letters.", accept: ["john","the apostle john"] },
        { level: 2, question: "This disciple was sitting at a tax booth when Jesus called him.", answer: "Matthew", hint: "He was also called Levi.", accept: ["matthew","levi"] },
        { level: 3, question: "Jesus nicknamed these two brothers the \"Sons of Thunder.\"", answer: "James and John", hint: "Their father was Zebedee.", accept: ["james and john","james","john","sons of zebedee"] },
        { level: 3, question: "Peter’s name before Jesus called him Peter.", answer: "Simon", hint: "It is a common name in the Gospels.", accept: ["simon","simon bar jonah"] },
        { level: 4, question: "This disciple brought Nathanael to meet Jesus.", answer: "Philip", hint: "He was from Bethsaida.", accept: ["philip"] },
        { level: 4, question: "This disciple was called \"the Zealot.\"", answer: "Simon", hint: "He shares a first name with Peter.", accept: ["simon","simon the zealot"] },
        { level: 5, question: "He was chosen by casting lots to replace Judas.", answer: "Matthias", hint: "It happened in Acts 1.", accept: ["matthias"] },
        { level: 5, question: "The first of the Twelve to be martyred, killed by Herod with a sword (Acts 12).", answer: "James, son of Zebedee", hint: "He was John’s brother.", accept: ["james","james son of zebedee"] },
        { level: 6, question: "Many scholars think Nathanael is the same person as this apostle.", answer: "Bartholomew", hint: "His name starts with \"Bar.\"", accept: ["bartholomew"] },
        { level: 6, question: "Judas Iscariot was in charge of this for the disciples.", answer: "The money bag", hint: "He sometimes stole from it.", accept: ["money bag","money","money box","the money bag","the purse","treasury"] },
        { level: 7, question: "In Luke’s list, the apostle called Thaddaeus elsewhere is named this.", answer: "Judas son of James", hint: "Not Judas Iscariot.", accept: ["judas son of james","judas","jude"] }
      ]
    },
    {
      name: "Places in the Bible",
      questions: [
        { level: 1, question: "Jesus grew up in this town in Galilee.", answer: "Nazareth", hint: "People called him a Nazarene.", accept: ["nazareth"] },
        { level: 1, question: "Its walls fell after the Israelites marched around it and shouted.", answer: "Jericho", hint: "Trumpets were blown.", accept: ["jericho"] },
        { level: 1, question: "David made this city his capital, and Jesus was crucified just outside it.", answer: "Jerusalem", hint: "It is also called Zion.", accept: ["jerusalem","zion"] },
        { level: 2, question: "Jesus called fishermen to follow him beside this sea.", answer: "The Sea of Galilee", hint: "It is also called the Lake of Gennesaret.", accept: ["sea of galilee","galilee","lake of gennesaret","sea of tiberias"] },
        { level: 2, question: "People built a tower here to reach the heavens, and God confused their language.", answer: "Babel", hint: "It sounds like \"babble.\"", accept: ["babel","tower of babel"] },
        { level: 3, question: "Noah’s ark came to rest on the mountains of this place.", answer: "Ararat", hint: "It is in modern-day Turkey.", accept: ["ararat","mount ararat","mountains of ararat"] },
        { level: 3, question: "God sent Jonah to preach to this great city.", answer: "Nineveh", hint: "It was the capital of Assyria.", accept: ["nineveh"] },
        { level: 4, question: "Jesus was crucified at this place, meaning \"place of the skull.\"", answer: "Golgotha", hint: "In Latin it is called Calvary.", accept: ["golgotha","calvary"] },
        { level: 4, question: "Jesus turned water into wine in this town.", answer: "Cana", hint: "It is in Galilee.", accept: ["cana"] },
        { level: 5, question: "Abraham’s hometown before God called him to Canaan.", answer: "Ur", hint: "It was \"of the Chaldeans.\"", accept: ["ur","ur of the chaldeans"] },
        { level: 6, question: "Paul was shipwrecked on this island, where a snake bit him (Acts 28).", answer: "Malta", hint: "It is in the Mediterranean, south of Sicily.", accept: ["malta","melita"] },
        { level: 6, question: "Moses looked out over the Promised Land from this mountain before he died.", answer: "Mount Nebo", hint: "It is in Moab.", accept: ["nebo","mount nebo","pisgah"] },
        { level: 6, question: "Jesus told a blind man to wash in this pool (John 9).", answer: "Siloam", hint: "Its name means \"sent.\"", accept: ["siloam","pool of siloam"] },
        { level: 7, question: "Paul preached about an \"unknown god\" in this city.", answer: "Athens", hint: "He spoke at the Areopagus.", accept: ["athens"] }
      ]
    },
    {
      name: "The Christmas Story",
      questions: [
        { level: 1, question: "Baby Jesus was laid in this feeding trough.", answer: "A manger", hint: "Animals eat from it.", accept: ["manger","a manger"] },
        { level: 1, question: "The town where Jesus was born.", answer: "Bethlehem", hint: "It was called the town of David.", accept: ["bethlehem"] },
        { level: 1, question: "Mary’s husband, a carpenter.", answer: "Joseph", hint: "Angels spoke to him in dreams.", accept: ["joseph"] },
        { level: 1, question: "The wise men followed this to find Jesus.", answer: "A star", hint: "It was seen in the east.", accept: ["star","a star","the star"] },
        { level: 2, question: "This angel told Mary she would have a son.", answer: "Gabriel", hint: "He also appeared to Zechariah.", accept: ["gabriel"] },
        { level: 2, question: "The wise men brought gold, frankincense and this.", answer: "Myrrh", hint: "It was a fragrant resin.", accept: ["myrrh"] },
        { level: 3, question: "This king tried to kill the baby Jesus.", answer: "Herod", hint: "He is known as Herod the Great.", accept: ["herod","king herod","herod the great"] },
        { level: 3, question: "Joseph took Mary and Jesus to this country to escape.", answer: "Egypt", hint: "It is where Israel was once enslaved.", accept: ["egypt"] },
        { level: 4, question: "This name for Jesus means \"God with us.\"", answer: "Immanuel", hint: "It comes from Isaiah 7:14.", accept: ["immanuel","emmanuel"] },
        { level: 5, question: "This Roman emperor ordered the census that sent Joseph to Bethlehem.", answer: "Caesar Augustus", hint: "It is in Luke 2:1.", accept: ["augustus","caesar augustus"] },
        { level: 5, question: "Elizabeth’s husband, a priest who could not speak until John was born.", answer: "Zechariah", hint: "The angel Gabriel appeared to him.", accept: ["zechariah","zacharias"] },
        { level: 5, question: "This old man held baby Jesus in the temple and praised God.", answer: "Simeon", hint: "He had been promised he would see the Messiah.", accept: ["simeon"] },
        { level: 6, question: "This prophet foretold that the Messiah would come from Bethlehem.", answer: "Micah", hint: "See chapter 5 of his book.", accept: ["micah"] },
        { level: 7, question: "The governor of Syria at the time of the census in Luke 2.", answer: "Quirinius", hint: "In older Bibles he is called Cyrenius.", accept: ["quirinius","cyrenius"] }
      ]
    },
    {
      name: "Easter Week",
      questions: [
        { level: 1, question: "Jesus rode into Jerusalem on this animal.", answer: "A donkey", hint: "It was a young colt.", accept: ["donkey","a donkey","colt","a colt"] },
        { level: 1, question: "The crowd waved these as Jesus entered Jerusalem.", answer: "Palm branches", hint: "The day is named after them.", accept: ["palm branches","palms","palm"] },
        { level: 1, question: "The meal Jesus shared with his disciples the night he was arrested.", answer: "The Last Supper", hint: "It was a Passover meal.", accept: ["last supper","the last supper","passover","passover meal"] },
        { level: 1, question: "This disciple denied knowing Jesus three times.", answer: "Peter", hint: "A rooster crowed afterward.", accept: ["peter","simon peter"] },
        { level: 2, question: "The Roman governor who sentenced Jesus to be crucified.", answer: "Pontius Pilate", hint: "He washed his hands before the crowd.", accept: ["pilate","pontius pilate"] },
        { level: 2, question: "Jesus rose from the dead on this day of the week.", answer: "Sunday", hint: "It is the first day of the week.", accept: ["sunday"] },
        { level: 3, question: "The crowd asked Pilate to release this prisoner instead of Jesus.", answer: "Barabbas", hint: "He was a known criminal.", accept: ["barabbas"] },
        { level: 4, question: "This rich man placed Jesus’ body in his own new tomb.", answer: "Joseph of Arimathea", hint: "He was a member of the Jewish council.", accept: ["joseph of arimathea","joseph"] },
        { level: 4, question: "Soldiers cast lots to divide this belonging of Jesus.", answer: "His clothes", hint: "He wore it.", accept: ["clothes","his clothes","garments","tunic","robe","his garments"] },
        { level: 5, question: "The high priest who questioned Jesus at his trial.", answer: "Caiaphas", hint: "He was Annas’ son-in-law.", accept: ["caiaphas"] },
        { level: 5, question: "Jesus appeared to his followers for this many days before he ascended.", answer: "40", hint: "It is in Acts 1:3.", accept: ["40","forty"] },
        { level: 5, question: "Two disciples met the risen Jesus on the road to this village.", answer: "Emmaus", hint: "It was about seven miles from Jerusalem.", accept: ["emmaus"] },
        { level: 6, question: "The field bought with Judas’ silver became known by this name.", answer: "The Field of Blood", hint: "In Aramaic it is Akeldama.", accept: ["field of blood","akeldama","potters field","potter s field"] },
        { level: 7, question: "One of the two disciples on the road to Emmaus was named this.", answer: "Cleopas", hint: "It is in Luke 24.", accept: ["cleopas"] }
      ]
    },
    {
      name: "Animals in the Bible",
      questions: [
        { level: 1, question: "This animal tempted Eve in the garden.", answer: "The serpent (snake)", hint: "It slithers.", accept: ["serpent","snake","the serpent"] },
        { level: 1, question: "Noah sent out this bird, and it came back with an olive leaf.", answer: "A dove", hint: "It is a symbol of peace.", accept: ["dove","a dove"] },
        { level: 2, question: "As a shepherd, David fought off a lion and this animal.", answer: "A bear", hint: "It is big and furry.", accept: ["bear","a bear"] },
        { level: 2, question: "A plague of these insects ate everything green in Egypt.", answer: "Locusts", hint: "They are like grasshoppers.", accept: ["locusts","locust","grasshoppers"] },
        { level: 3, question: "This animal spoke to the prophet Balaam.", answer: "A donkey", hint: "Balaam had been hitting it.", accept: ["donkey","a donkey","ass"] },
        { level: 3, question: "Jesus sent demons into a herd of these animals.", answer: "Pigs", hint: "They ran into the lake.", accept: ["pigs","pig","swine"] },
        { level: 4, question: "The first bird Noah sent out of the ark.", answer: "A raven", hint: "It is a black bird.", accept: ["raven","a raven"] },
        { level: 4, question: "These birds brought Elijah bread and meat by a brook.", answer: "Ravens", hint: "They are black birds.", accept: ["ravens","raven"] },
        { level: 5, question: "Samson tied torches to the tails of 300 of these animals.", answer: "Foxes", hint: "Some translations say jackals.", accept: ["foxes","fox","jackals"] },
        { level: 5, question: "Job 41 describes this mighty sea creature.", answer: "Leviathan", hint: "It starts with L.", accept: ["leviathan"] },
        { level: 5, question: "Samson found honey in the carcass of this animal.", answer: "A lion", hint: "He killed it with his bare hands.", accept: ["lion","a lion"] },
        { level: 6, question: "Noah took this many pairs of every clean animal (Genesis 7:2).", answer: "Seven", hint: "More than the two of unclean animals.", accept: ["7","seven","seven pairs"] },
        { level: 7, question: "Peter saw a vision of a sheet full of animals while staying in this city.", answer: "Joppa", hint: "Jonah also sailed from there.", accept: ["joppa","jaffa"] }
      ]
    },
    {
      name: "Psalms & Proverbs",
      questions: [
        { level: 1, question: "This king wrote many of the Psalms.", answer: "David", hint: "He played the harp.", accept: ["david","king david"] },
        { level: 1, question: "The psalm that begins \"The Lord is my shepherd.\"", answer: "Psalm 23", hint: "It is in the 20s.", accept: ["23","psalm 23"] },
        { level: 2, question: "The book of wise sayings, mostly from Solomon.", answer: "Proverbs", hint: "It comes after Psalms.", accept: ["proverbs"] },
        { level: 3, question: "\"The fear of the Lord is the beginning of\" this.", answer: "Wisdom", hint: "See Proverbs 9:10.", accept: ["wisdom","knowledge"] },
        { level: 3, question: "\"A gentle answer turns away\" this.", answer: "Wrath", hint: "See Proverbs 15:1.", accept: ["wrath","anger"] },
        { level: 3, question: "Psalm 150 ends: \"Let everything that has ___ praise the Lord.\"", answer: "Breath", hint: "You need it to live.", accept: ["breath"] },
        { level: 4, question: "The longest chapter in the Bible.", answer: "Psalm 119", hint: "It has 176 verses.", accept: ["119","psalm 119"] },
        { level: 4, question: "Proverbs 31 describes a wife of noble this.", answer: "Character", hint: "It is sometimes translated \"a virtuous woman.\"", accept: ["character","noble character","virtuous","virtuous woman"] },
        { level: 4, question: "\"Go to the ___, you sluggard; consider its ways and be wise.\"", answer: "The ant", hint: "It is a tiny, hard-working insect.", accept: ["ant","the ant","ants"] },
        { level: 5, question: "The shortest chapter in the Bible.", answer: "Psalm 117", hint: "It has only two verses.", accept: ["117","psalm 117"] },
        { level: 6, question: "David wrote Psalm 51 after this prophet confronted him.", answer: "Nathan", hint: "He told David a story about a lamb.", accept: ["nathan"] },
        { level: 6, question: "The book of Psalms is divided into this many \"books.\"", answer: "5", hint: "Like the books of Moses.", accept: ["5","five"] },
        { level: 7, question: "Psalm 119 has 22 sections named after the letters of this alphabet.", answer: "Hebrew", hint: "The Old Testament was written mostly in it.", accept: ["hebrew"] },
        { level: 7, question: "Proverbs 31 begins with sayings of this king, taught by his mother.", answer: "Lemuel", hint: "It is not Solomon.", accept: ["lemuel","king lemuel"] }
      ]
    },
    {
      name: "Paul’s Letters",
      questions: [
        { level: 1, question: "Paul’s letter to the church in Rome.", answer: "Romans", hint: "It comes right after Acts.", accept: ["romans"] },
        { level: 2, question: "\"Love is patient, love is kind\" is in Paul’s first letter to the church in this city.", answer: "Corinth", hint: "The letters are called Corinthians.", accept: ["corinth","corinthians","1 corinthians"] },
        { level: 2, question: "Paul describes the \"armor of God\" in his letter to this church.", answer: "Ephesians", hint: "The city was Ephesus.", accept: ["ephesians","ephesus"] },
        { level: 3, question: "\"Rejoice in the Lord always. I will say it again: Rejoice!\"", answer: "Philippians", hint: "It was written to the church at Philippi.", accept: ["philippians","philippi"] },
        { level: 3, question: "\"For all have sinned and fall short of the glory of God\" is in this letter.", answer: "Romans", hint: "It is chapter 3, verse 23.", accept: ["romans"] },
        { level: 3, question: "Paul told this young pastor, \"Don’t let anyone look down on you because you are young.\"", answer: "Timothy", hint: "It is in 1 Timothy 4:12.", accept: ["timothy"] },
        { level: 4, question: "This short letter asks a master to welcome back his runaway slave.", answer: "Philemon", hint: "It has just one chapter.", accept: ["philemon"] },
        { level: 4, question: "Paul’s hometown.", answer: "Tarsus", hint: "It was in Cilicia.", accept: ["tarsus"] },
        { level: 4, question: "Paul lists the \"fruit of the Spirit\" in this letter.", answer: "Galatians", hint: "Chapter 5.", accept: ["galatians"] },
        { level: 5, question: "The runaway slave Paul writes about in Philemon.", answer: "Onesimus", hint: "His name means \"useful.\"", accept: ["onesimus"] },
        { level: 5, question: "Paul left Titus on this island to appoint elders.", answer: "Crete", hint: "It is a large Greek island.", accept: ["crete"] },
        { level: 5, question: "Paul wrote that he had learned to be content in every situation in this letter.", answer: "Philippians", hint: "He wrote it from prison.", accept: ["philippians"] },
        { level: 6, question: "The number of New Testament letters traditionally credited to Paul.", answer: "13", hint: "It is a baker’s dozen.", accept: ["13","thirteen"] },
        { level: 6, question: "In 2 Timothy, Paul says only this doctor is with him.", answer: "Luke", hint: "He also wrote Acts.", accept: ["luke"] }
      ]
    },
    {
      name: "Name That Hymn",
      questions: [
        { level: 1, question: "Listen to the tune. Name this hymn.", answer: "Jesus Loves Me", hint: "A children’s song that ends \"...this I know.\"", accept: ["jesus loves me","jesus loves me this i know"], melody: "G4:1 E4:1 E4:1 D4:1 E4:1 G4:1 G4:2 A4:1 A4:1 C5:1 A4:1 A4:1 G4:1 G4:2", bpm: 110, length: 10 },
        { level: 1, question: "Listen to the tune. Name this Christmas carol.", answer: "Joy to the World", hint: "It continues \"...the Lord is come.\"", accept: ["joy to the world"], melody: "D5:1 C#5:0.75 B4:0.25 A4:1.5 G4:0.5 F#4:1 E4:1 D4:1.5", bpm: 88, length: 10 },
        { level: 1, question: "Listen to the tune. Name this Christmas carol.", answer: "Silent Night", hint: "It continues \"...holy night.\"", accept: ["silent night","silent night holy night"], melody: "G4:1.5 A4:0.5 G4:1 E4:3 G4:1.5 A4:0.5 G4:1 E4:3 D5:2 D5:1 B4:3 C5:2 C5:1 G4:3", bpm: 190, length: 10 },
        { level: 2, question: "Listen to the tune. Name this hymn.", answer: "Amazing Grace", hint: "John Newton wrote the words.", accept: ["amazing grace"], melody: "D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:1 G4:2 E4:1 D4:2 D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:0.5 B4:0.5 D5:3", bpm: 100, length: 10 },
        { level: 2, question: "Listen to the tune. Name this gospel song.", answer: "When the Saints Go Marching In", hint: "It is a favorite of New Orleans brass bands.", accept: ["when the saints go marching in","when the saints","the saints go marching in","saints go marching in"], melody: "C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:2 E4:2 C4:2 E4:2 D4:4", bpm: 170, length: 10 },
        { level: 3, question: "Listen to the tune. Name this Christmas carol.", answer: "O Come, All Ye Faithful", hint: "It continues \"...joyful and triumphant.\"", accept: ["o come all ye faithful","come all ye faithful","adeste fideles"], melody: "G4:1 G4:2 D4:1 G4:1 A4:2 D4:2 B4:1 A4:1 B4:1 C5:1 B4:2 A4:1", bpm: 100, length: 10 },
        { level: 4, question: "Listen to the tune. Name this hymn.", answer: "Joyful, Joyful, We Adore Thee", hint: "Its tune comes from Beethoven’s Ninth Symphony.", accept: ["joyful joyful we adore thee","joyful joyful","ode to joy"], melody: "E4:1 E4:1 F4:1 G4:1 G4:1 F4:1 E4:1 D4:1 C4:1 C4:1 D4:1 E4:1 E4:1.5 D4:0.5 D4:2", bpm: 120, length: 10 },
        { level: 4, question: "Listen to the tune. Name this Christmas carol.", answer: "Hark! The Herald Angels Sing", hint: "Charles Wesley wrote the words.", accept: ["hark the herald angels sing","hark the herald"], melody: "C4:1 F4:1 F4:1.5 E4:0.5 F4:1 A4:1 A4:1 G4:1 C5:1 C5:1 C5:1.5 Bb4:0.5 A4:1 G4:1 A4:2", bpm: 112, length: 10 },
        { level: 5, question: "Listen to the tune. Many churches sing these words to it: \"Praise God, from whom all blessings flow.\" What is this short hymn called?", answer: "The Doxology", hint: "Its tune is often called \"Old Hundredth.\"", accept: ["doxology","the doxology","old hundredth","old 100th","praise god from whom all blessings flow"], melody: "G4:2 G4:1 F#4:1 E4:1 D4:2 G4:1 A4:1 B4:2 B4:1 B4:1 A4:1 G4:1 C5:1 B4:1 A4:2", bpm: 92, length: 10 }
      ]
    },
    {
      name: "Finish the Lyric",
      questions: [
        { level: 1, question: "\"Amazing grace, how sweet the ___\"", answer: "Sound", hint: "The hymn is \"Amazing Grace.\"", accept: ["sound"], melody: "D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:1 G4:2 E4:1 D4:2 D4:1 G4:2 B4:0.5 G4:0.5 B4:2 A4:0.5 B4:0.5 D5:3", bpm: 100, length: 10 },
        { level: 1, question: "\"Jesus loves me, this I know, for the ___ tells me so\"", answer: "Bible", hint: "The song is \"Jesus Loves Me.\"", accept: ["bible","the bible"], melody: "G4:1 E4:1 E4:1 D4:1 E4:1 G4:1 G4:2 A4:1 A4:1 C5:1 A4:1 A4:1 G4:1 G4:2", bpm: 110, length: 10 },
        { level: 2, question: "\"Joy to the world, the Lord is ___\"", answer: "Come", hint: "The carol is \"Joy to the World.\"", accept: ["come","come!"], melody: "D5:1 C#5:0.75 B4:0.25 A4:1.5 G4:0.5 F#4:1 E4:1 D4:1.5", bpm: 88, length: 10 },
        { level: 2, question: "\"Silent night, holy night, all is calm, all is ___\"", answer: "Bright", hint: "The carol is \"Silent Night.\"", accept: ["bright"], melody: "G4:1.5 A4:0.5 G4:1 E4:3 G4:1.5 A4:0.5 G4:1 E4:3 D5:2 D5:1 B4:3 C5:2 C5:1 G4:3", bpm: 190, length: 10 },
        { level: 2, question: "\"Oh, when the saints go marching in... Lord, how I want to be in that ___\"", answer: "Number", hint: "The song is \"When the Saints Go Marching In.\"", accept: ["number"], melody: "C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:4 C4:1 E4:1 F4:1 G4:2 E4:2 C4:2 E4:2 D4:4", bpm: 170, length: 10 },
        { level: 3, question: "\"Blessed assurance, Jesus is ___\"", answer: "Mine", hint: "The hymn is \"Blessed Assurance\" by Fanny Crosby.", accept: ["mine"] },
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
  ],
  /*
    SPOTIFY SONGS FROM YOUR PLAYLISTS
    ---------------------------------
    1. Paste your playlists' song links into worshipLinks and hymnLinks below.
       Quick way: in the Spotify desktop app, open the playlist, click one song,
       press Ctrl+A (Cmd+A on Mac), then Ctrl+C (Cmd+C), and paste. Keep them in
       playlist order; "n" below is each song's position in the playlist.
       Paste them as one long block of text between the backticks ` `.
    2. Songs with a link turn into these categories:
         Guess the Worship Song   (worship list)
         Guess the Hymn           (hymns list)
         Finish the Hymn          (lyrics list, only once start and cut are set)
       Each category needs at least 5 songs with links to appear.
    3. Clips start 45 seconds in. Add start: 65 (seconds) to a song to change it.
       Harder rows play shorter clips: 100 = 12 seconds down to 500 = 3 seconds.
    4. Finish the Hymn: set start to a few seconds before the line is sung, and
       cut to the moment just before the missing word (both in seconds; 1:05 = 65).
       The song plays from start and stops at cut, right at the blank.
  */
  spotify: {
    worshipLinks: `
`,
    hymnLinks: `
https://open.spotify.com/track/6XlUFokQc6VZMjdVyS2nv6
https://open.spotify.com/track/3OYdTPsom81ka2fccjQM29
https://open.spotify.com/track/3dbQ6EkRqF9QybiLBK6OtZ
https://open.spotify.com/track/5nlVO7NbTBPwp08V0Ki1Nd
https://open.spotify.com/track/15sauKN8vieeKOVWWR9UG2
https://open.spotify.com/track/6yGkNN8IfqmQenroYW8GQ4
https://open.spotify.com/track/0YuIuR62JK40a0AHeNJUup
https://open.spotify.com/track/00tXkB7eblyLQ2doDckKPX
https://open.spotify.com/track/3W119z4DiQFiypI5Zjn6v2
https://open.spotify.com/track/2Za6mPd4CT813cEZOjwWTB
https://open.spotify.com/track/4o0n1yoeqKglpnlDgprRzL
https://open.spotify.com/track/10reQcK5nekulki4yuCvhQ
https://open.spotify.com/track/6xQucpY9ELAnkaQH5Fjtxs
https://open.spotify.com/track/2ZicbtrMnz97j3WyFf4So4
https://open.spotify.com/track/1nsYAGD6eN6uNdXqpY7MM3
https://open.spotify.com/track/3ClXZdl6wtMsDyhSiEP0ar
https://open.spotify.com/track/0h5C31CdrgABjHATYcBq6e
https://open.spotify.com/track/2A76kMu3t5zsBbEyCwF5Hx
https://open.spotify.com/track/2uWr7ZnjVIkE69aCuBeAc9
https://open.spotify.com/track/5hU9GCuztvoXlhKTJAlql6
https://open.spotify.com/track/68WjCi38EOoOWGomk7CfVH
https://open.spotify.com/track/2VAtZmI9nCB97Kdnn9tMIF
https://open.spotify.com/track/6hCoUrjaWT7Z7PgxWRvYCm
https://open.spotify.com/track/2YtsgFOv3e2oAPvGg5iLBb
https://open.spotify.com/track/0YXRJuktePavqiwqZu4Mjk
https://open.spotify.com/track/5Sh1kiVOwSOcS56YQaRxkq
https://open.spotify.com/track/5obRW0OPQ5SDXWN55mtLLk
https://open.spotify.com/track/5J4xE3gAYvcxnIipeFTmNq
https://open.spotify.com/track/1SUxT5nRYEimRA0ysgE6In
https://open.spotify.com/track/6O1WbrSpcFCFwV4AyiLQfH
https://open.spotify.com/track/0W9bvOiI1fBKVjaaGdUpmp
https://open.spotify.com/track/7lmwDlkBDwPwMO75wHVbl2
https://open.spotify.com/track/4xdzgAag6aZjfhJPDFeTvO
https://open.spotify.com/track/3ZtyWJ13xGys5P788Rhhpa
https://open.spotify.com/track/4EAIZmr7M3QSIACki4qWWy
https://open.spotify.com/track/6wnvzxmFM1EgqOMHptPB0P
https://open.spotify.com/track/63b3Ml9OsczH1iCGZDD0si
https://open.spotify.com/track/7lDMtF5GO5yd90vKsmIued
https://open.spotify.com/track/5bWYXXBCc1pMqr9IZ7zVZL
https://open.spotify.com/track/6tKycnskkPaobPKFo6dw7L
https://open.spotify.com/track/4TvSdxwziuv2uzaXblesBr
https://open.spotify.com/track/1t4cMgdTF0Qc9ySZAhX1e6
https://open.spotify.com/track/73SzlTYfTMy4JR86H3aHeJ
https://open.spotify.com/track/7vv0bWoT3iGCAjA39zUxPZ
https://open.spotify.com/track/2VbLvaEeZ8YjdEHL0JiMeH
https://open.spotify.com/track/5S3KGLRJlrwZq0xfT3VLdV
https://open.spotify.com/track/1TzGB6BZ5Q3adYMtq88zLz
https://open.spotify.com/track/6UWTTuFgQQI2ZAyHxCKEI5
https://open.spotify.com/track/2G2b5w0IiHWmvS68wlJHuZ
https://open.spotify.com/track/1SnZi2eVU2kcXRNJT6ek4J
https://open.spotify.com/track/3JfK0CVrKXDwXHYX7lZ6b8
https://open.spotify.com/track/3uuh0VNuzlMUI900v20588
https://open.spotify.com/track/0JNH9xKLxC1oYzc4riW4pi
https://open.spotify.com/track/3y3SbBdW6zJY1LRxnjQnsf
https://open.spotify.com/track/4LWxGrlOMi3sLOKmFHgyXO
https://open.spotify.com/track/5A4ZXadjljOWZQ5zSovnjV
https://open.spotify.com/track/36NoBturpUMJJmDLEBECfp
https://open.spotify.com/track/5QVgUbFGSeN0S6gFinYjRP
https://open.spotify.com/track/4ipVxFW75zXceushTlxpZH
https://open.spotify.com/track/2kyurwpq49H0egXp7m8peL
https://open.spotify.com/track/4eo01dTibMj0SQR0jLNhLS
https://open.spotify.com/track/4PittRKmlpw9mlIgKPuQ0G
https://open.spotify.com/track/3aF6OE44FTSoZnnhXazpqW
https://open.spotify.com/track/2P4h4BnBsFxdMbHFr0jCo9
https://open.spotify.com/track/3qMQhou4HNCmq8jlu4SYV3
https://open.spotify.com/track/1FKOIzVCErKyUV7ojq4yQW
https://open.spotify.com/track/0ID3FnO65J2HV9sQjs7X5M
https://open.spotify.com/track/7G4FLal4Gx4zBOAgYCvGlp
https://open.spotify.com/track/2iPDTm8ktDoSLCYmdai03Y
https://open.spotify.com/track/67VlbSn55nNtmHEhVfcfCQ
`,
    worship: [
      { n: 7, level: 1, title: "Oceans (Where Feet May Fail)", artist: "Hillsong UNITED", accept: ["oceans", "where feet may fail"] },
      { n: 39, level: 1, title: "Good Good Father", artist: "Chris Tomlin", accept: ["good good father"] },
      { n: 5, level: 1, title: "I Can Only Imagine", artist: "MercyMe", accept: ["i can only imagine"] },
      { n: 4, level: 1, title: "You Say", artist: "Lauren Daigle", accept: ["you say"] },
      { n: 37, level: 2, title: "Who You Say I Am", artist: "Hillsong Worship", accept: ["who you say i am"] },
      { n: 25, level: 2, title: "Graves Into Gardens", artist: "Elevation Worship", accept: ["graves into gardens"] },
      { n: 21, level: 2, title: "How He Loves", artist: "David Crowder Band", accept: ["how he loves"] },
      { n: 28, level: 2, title: "Chain Breaker", artist: "Zach Williams", accept: ["chain breaker"] },
      { n: 29, level: 3, title: "Who Am I", artist: "Casting Crowns", accept: ["who am i"] },
      { n: 30, level: 3, title: "Redeemed", artist: "Big Daddy Weave", accept: ["redeemed"] },
      { n: 91, level: 3, title: "Fear Is a Liar", artist: "Zach Williams", accept: ["fear is a liar"] },
      { n: 16, level: 3, title: "Death Was Arrested", artist: "North Point Worship", accept: ["death was arrested"] },
      { n: 61, level: 4, title: "At The Cross (Love Ran Red)", artist: "Chris Tomlin", accept: ["at the cross", "love ran red"] },
      { n: 3, level: 4, title: "Voice of Truth", artist: "Casting Crowns", accept: ["voice of truth"] },
      { n: 53, level: 4, title: "Fix My Eyes", artist: "for KING & COUNTRY", accept: ["fix my eyes"] },
      { n: 18, level: 4, title: "Hills and Valleys", artist: "Tauren Wells", accept: ["hills and valleys"] },
      { n: 1, level: 5, title: "Oh My Soul", artist: "Casting Crowns", accept: ["oh my soul"] },
      { n: 63, level: 5, title: "Give Me Your Eyes", artist: "Brandon Heath", accept: ["give me your eyes"] },
      { n: 62, level: 5, title: "Never Too Far Gone", artist: "Jordan Feliz", accept: ["never too far gone"] },
      { n: 89, level: 5, title: "Refiner", artist: "Maverick City Music", accept: ["refiner"] },
      { n: 26, level: 6, title: "Lead Me To The Cross", artist: "Hillsong UNITED", accept: ["lead me to the cross"] },
      { n: 69, level: 6, title: "Hope in Front of Me", artist: "Danny Gokey", accept: ["hope in front of me"] },
      { n: 80, level: 7, title: "Drops In the Ocean", artist: "Hawk Nelson", accept: ["drops in the ocean"] }
    ],
    hymns: [
      { n: 1, level: 1, title: "Amazing Grace", artist: "CeCe Winans", accept: ["amazing grace"] },
      { n: 24, level: 1, title: "How Great Thou Art", artist: "Chris Rice", accept: ["how great thou art"] },
      { n: 30, level: 1, title: "It Is Well With My Soul", artist: "Phil Wickham", accept: ["it is well", "it is well with my soul"] },
      { n: 7, level: 1, title: "Holy, Holy, Holy", artist: "Anthem Lights", accept: ["holy holy holy"] },
      { n: 5, level: 2, title: "In Christ Alone", artist: "Keith & Kristyn Getty", accept: ["in christ alone"] },
      { n: 65, level: 2, title: "Blessed Assurance", artist: "Nathan Drake", accept: ["blessed assurance"] },
      { n: 54, level: 2, title: "Come Thou Fount of Every Blessing", artist: "Phil Wickham", accept: ["come thou fount", "come thou fount of every blessing"] },
      { n: 57, level: 2, title: "Doxology", artist: "Nichole Nordeman", accept: ["doxology", "the doxology"] },
      { n: 52, level: 3, title: "The Old Rugged Cross", artist: "Bart Millard", accept: ["the old rugged cross", "old rugged cross"] },
      { n: 67, level: 3, title: "I’ll Fly Away", artist: "The Gray Havens", accept: ["ill fly away", "i ll fly away"] },
      { n: 37, level: 3, title: "Nothing But The Blood", artist: "Keith & Kristyn Getty", accept: ["nothing but the blood"] },
      { n: 29, level: 3, title: "When I Survey The Wondrous Cross", artist: "Chris Rice", accept: ["when i survey the wondrous cross", "when i survey"] },
      { n: 32, level: 4, title: "A Mighty Fortress Is Our God", artist: "Chris Rice", accept: ["a mighty fortress is our god", "a mighty fortress"] },
      { n: 39, level: 4, title: "Before The Throne", artist: "Shane & Shane", accept: ["before the throne", "before the throne of god above"] },
      { n: 59, level: 4, title: "This Is My Father’s World", artist: "Chris Rice", accept: ["this is my fathers world"] },
      { n: 44, level: 4, title: "Abide With Me", artist: "Audrey Assad", accept: ["abide with me"] },
      { n: 11, level: 5, title: "Christ Is Risen, He Is Risen Indeed", artist: "Keith & Kristyn Getty", accept: ["christ is risen he is risen indeed", "christ is risen"] },
      { n: 13, level: 5, title: "Come Thou Long Expected Jesus", artist: "Laura Story", accept: ["come thou long expected jesus"] },
      { n: 38, level: 5, title: "I Stand Amazed", artist: "Bart Millard", accept: ["i stand amazed"] },
      { n: 41, level: 5, title: "Praise to the Lord, the Almighty", artist: "Fernando Ortega", accept: ["praise to the lord the almighty"] },
      { n: 60, level: 6, title: "Come Behold The Wondrous Mystery", artist: "Matt Boswell & Matt Papa", accept: ["come behold the wondrous mystery"] },
      { n: 68, level: 6, title: "For the Beauty of the Earth", artist: "Kyle Church", accept: ["for the beauty of the earth"] },
      { n: 70, level: 7, title: "O, the Sorrows of My LORD", artist: "Melodyblue", accept: ["o the sorrows of my lord"] }
    ],
    lyrics: [
      { n: 1, level: 1, lyric: "\"Amazing grace, how sweet the ___\"", answer: "Sound", accept: ["sound"], start: null, cut: null },
      { n: 52, level: 1, lyric: "\"On a hill far away stood an old rugged ___\"", answer: "Cross", accept: ["cross"], start: null, cut: null },
      { n: 37, level: 1, lyric: "\"What can wash away my sin? Nothing but the blood of ___\"", answer: "Jesus", accept: ["jesus"], start: null, cut: null },
      { n: 65, level: 1, lyric: "\"Blessed assurance, Jesus is ___\"", answer: "Mine", accept: ["mine"], start: null, cut: null },
      { n: 54, level: 2, lyric: "\"Come, Thou Fount of every ___\"", answer: "Blessing", accept: ["blessing"], start: null, cut: null },
      { n: 7, level: 2, lyric: "\"Holy, holy, holy! Lord God ___!\"", answer: "Almighty", accept: ["almighty"], start: null, cut: null },
      { n: 30, level: 3, lyric: "\"When peace like a ___ attendeth my way\"", answer: "River", accept: ["river"], start: null, cut: null },
      { n: 29, level: 3, lyric: "\"When I survey the wondrous ___\"", answer: "Cross", accept: ["cross"], start: null, cut: null },
      { n: 32, level: 4, lyric: "\"A mighty fortress is our God, a bulwark never ___\"", answer: "Failing", accept: ["failing"], start: null, cut: null },
      { n: 44, level: 5, lyric: "\"Abide with me; fast falls the ___\"", answer: "Eventide", accept: ["eventide"], start: null, cut: null },
      { n: 59, level: 5, lyric: "\"This is my Father’s world, and to my listening ___\"", answer: "Ears", accept: ["ears"], start: null, cut: null }
    ]
  }
};
