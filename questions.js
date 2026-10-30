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
    style      (on a category) "emoji" shows big emojis; "exact" needs an exact typed answer (for yes/no categories like Bible or Not?)
    verse      optional Bible reference for the hint, like "Daniel 6:16"; it shows as 📖 Daniel 6:16
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

  Pictures: add image: "art:burning-bush" to use a built-in drawing (see images.js),
  or image: "images/your-photo.jpg" for your own picture uploaded to the repo.
  Emoji categories: add style: "emoji" to a category and write the emojis as the question.

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
        { level: 1, question: "He built an ark to save his family and the animals from the flood.", answer: "Noah", hint: "His story starts in Genesis 6.", accept: ["noah"], verse: "Genesis 6:14" },
        { level: 1, question: "This shepherd boy defeated Goliath with a sling and a stone.", answer: "David", hint: "He later became king of Israel.", accept: ["david"], verse: "1 Samuel 17:49" },
        { level: 1, question: "God used him to lead the Israelites out of slavery in Egypt.", answer: "Moses", hint: "As a baby he was hidden in a basket on the Nile.", accept: ["moses"], verse: "Exodus 3:10" },
        { level: 2, question: "Called the father of many nations, he waited years for his son Isaac.", answer: "Abraham", hint: "His name used to be Abram.", accept: ["abraham","abram"], verse: "Genesis 17:5" },
        { level: 2, question: "This judge had super strength that was tied to his uncut hair.", answer: "Samson", hint: "Delilah betrayed him.", accept: ["samson"], verse: "Judges 16:17" },
        { level: 3, question: "This queen risked her life to save her people, saying, \"If I perish, I perish.\"", answer: "Esther", hint: "Her book comes right before Job.", accept: ["esther"], verse: "Esther 4:16" },
        { level: 3, question: "He led the Israelites into the Promised Land after Moses died.", answer: "Joshua", hint: "The walls of Jericho fell for him.", accept: ["joshua"], verse: "Joshua 1:2" },
        { level: 4, question: "This prophetess and judge led Israel to victory alongside Barak.", answer: "Deborah", hint: "She held court under a palm tree.", accept: ["deborah"], verse: "Judges 4:4" },
        { level: 4, question: "This judge tested God with a fleece, then defeated an army with 300 men.", answer: "Gideon", hint: "He fought the Midianites.", accept: ["gideon"], verse: "Judges 7:7" },
        { level: 5, question: "He led the rebuilding of Jerusalem’s walls in just 52 days.", answer: "Nehemiah", hint: "He had been cupbearer to a Persian king.", accept: ["nehemiah"], verse: "Nehemiah 6:15" },
        { level: 6, question: "This left-handed judge killed the Moabite king Eglon.", answer: "Ehud", hint: "It is in Judges 3.", accept: ["ehud"], verse: "Judges 3:21" },
        { level: 6, question: "This judge made a rash vow that cost him his daughter.", answer: "Jephthah", hint: "It is in Judges 11.", accept: ["jephthah","jephtha"], verse: "Judges 11:30-31" },
        { level: 7, question: "This judge struck down 600 Philistines with an oxgoad.", answer: "Shamgar", hint: "He gets just one verse, Judges 3:31.", accept: ["shamgar"], verse: "Judges 3:31" }
      ]
    },
    {
      name: "Jesus’ Miracles",
      questions: [
        { level: 1, question: "Jesus did his first miracle at a wedding in Cana by doing this.", answer: "Turned water into wine", hint: "Something ran out at the party.", accept: ["water into wine","wine","turned water into wine"], verse: "John 2:9" },
        { level: 1, question: "While in a boat with his disciples, Jesus calmed this.", answer: "A storm", hint: "He said, \"Peace, be still!\"", accept: ["storm","the storm","a storm","wind","waves","the sea"], verse: "Mark 4:39" },
        { level: 1, question: "One night Jesus walked across the Sea of Galilee on this.", answer: "Water", hint: "The disciples thought he was a ghost.", accept: ["water","the water","sea","the sea","lake"], verse: "Matthew 14:25" },
        { level: 2, question: "Jesus fed 5,000 people with two fish and this many loaves of bread.", answer: "Five", hint: "Count the fingers on one hand.", accept: ["5","five"], verse: "Matthew 14:17" },
        { level: 2, question: "Jesus raised this friend after four days in the tomb.", answer: "Lazarus", hint: "He was the brother of Mary and Martha.", accept: ["lazarus"], verse: "John 11:43-44" },
        { level: 2, question: "This disciple stepped out of the boat and walked on water toward Jesus.", answer: "Peter", hint: "He was also called Simon.", accept: ["peter","simon peter","simon"], verse: "Matthew 14:29" },
        { level: 3, question: "Friends lowered this man through a roof so Jesus could heal him.", answer: "A paralyzed man", hint: "He could not walk.", accept: ["paralyzed man","paralyzed","paralytic","a paralyzed man","lame man"], verse: "Mark 2:4" },
        { level: 3, question: "Jesus healed this many men with leprosy, but only one came back to thank him.", answer: "Ten", hint: "It is a double-digit number.", accept: ["10","ten"], verse: "Luke 17:15-17" },
        { level: 4, question: "Jesus healed a man born blind by putting this on his eyes, then sending him to wash.", answer: "Mud", hint: "Jesus made it with his saliva (John 9).", accept: ["mud","clay","dirt","spit and mud"], verse: "John 9:6-7" },
        { level: 5, question: "Jesus healed this blind beggar sitting by the road outside Jericho (Mark 10).", answer: "Bartimaeus", hint: "His name means \"son of Timaeus.\"", accept: ["bartimaeus"], verse: "Mark 10:46" },
        { level: 6, question: "In Gethsemane, Jesus healed the ear of this servant after Peter cut it off.", answer: "Malchus", hint: "He served the high priest.", accept: ["malchus"], verse: "John 18:10" },
        { level: 6, question: "Jesus raised this synagogue leader’s daughter, saying \"Talitha koum.\"", answer: "Jairus", hint: "It is in Mark 5.", accept: ["jairus"], verse: "Mark 5:41" },
        { level: 6, question: "Jesus told Peter to find a coin in the mouth of this to pay the temple tax.", answer: "A fish", hint: "It is in Matthew 17.", accept: ["fish","a fish"], verse: "Matthew 17:27" },
        { level: 7, question: "At this pool in Jerusalem, Jesus healed a man who had been sick for 38 years.", answer: "Bethesda", hint: "It is in John 5.", accept: ["bethesda","bethzatha"], verse: "John 5:2-9" },
        { level: 7, question: "In this town, Jesus raised a widow’s only son during his funeral.", answer: "Nain", hint: "It is in Luke 7.", accept: ["nain"], verse: "Luke 7:11-15" }
      ]
    },
    {
      name: "Books of the Bible",
      questions: [
        { level: 1, question: "The very first book of the Bible.", answer: "Genesis", hint: "Its name means \"beginning.\"", accept: ["genesis"], verse: "Genesis 1:1" },
        { level: 1, question: "The very last book of the Bible.", answer: "Revelation", hint: "It records John’s vision.", accept: ["revelation","revelations"], verse: "Revelation 1:1" },
        { level: 1, question: "The number of Gospels in the New Testament.", answer: "Four", hint: "Matthew, Mark, ...", accept: ["4","four"] },
        { level: 2, question: "The book that comes right after the four Gospels.", answer: "Acts", hint: "Luke wrote it.", accept: ["acts","acts of the apostles"], verse: "Acts 1:1" },
        { level: 2, question: "This book has 150 chapters, many written as songs.", answer: "Psalms", hint: "It is the Bible’s songbook.", accept: ["psalms","psalm"] },
        { level: 3, question: "The number of books in the Protestant Bible.", answer: "66", hint: "39 in the Old Testament plus 27 in the New.", accept: ["66","sixty six"] },
        { level: 3, question: "This doctor wrote a Gospel and the book of Acts.", answer: "Luke", hint: "Paul called him \"the beloved physician.\"", accept: ["luke"], verse: "Colossians 4:14" },
        { level: 4, question: "The last book of the Old Testament.", answer: "Malachi", hint: "A minor prophet whose name starts with M.", accept: ["malachi"] },
        { level: 4, question: "The number of books in the New Testament.", answer: "27", hint: "It is 3 times 9.", accept: ["27","twenty seven"] },
        { level: 5, question: "The book that comes right before Esther.", answer: "Nehemiah", hint: "It is about rebuilding Jerusalem’s walls.", accept: ["nehemiah"] },
        { level: 6, question: "This book of the Old Testament comes between Micah and Habakkuk.", answer: "Nahum", hint: "It starts with N.", accept: ["nahum"] },
        { level: 6, question: "This minor prophet’s book comes between Joel and Obadiah.", answer: "Amos", hint: "He was a shepherd.", accept: ["amos"], verse: "Amos 1:1" },
        { level: 6, question: "The writer of this short letter calls himself \"a brother of James.\"", answer: "Jude", hint: "It is the book right before Revelation.", accept: ["jude"], verse: "Jude 1:1" },
        { level: 7, question: "The book that comes right after Lamentations.", answer: "Ezekiel", hint: "He saw a valley of dry bones.", accept: ["ezekiel"], verse: "Ezekiel 37:1" }
      ]
    },
    {
      name: "Finish the Verse",
      questions: [
        { level: 1, question: "\"For God so loved the world, that he gave...\"", answer: "\"...his only Son\" (John 3:16)", hint: "It is John 3:16.", accept: ["his only son","only son","his one and only son","son","his son"], verse: "John 3:16" },
        { level: 1, question: "\"The Lord is my shepherd...\"", answer: "\"...I shall not want\" (Psalm 23:1)", hint: "It is Psalm 23.", accept: ["i shall not want","shall not want","i lack nothing"], verse: "Psalm 23:1" },
        { level: 2, question: "\"I can do all things...\"", answer: "\"...through Christ who strengthens me\" (Philippians 4:13)", hint: "It is Philippians 4:13.", accept: ["through christ who strengthens me","through christ","christ who strengthens me","through him who gives me strength"], verse: "Philippians 4:13" },
        { level: 2, question: "The shortest verse in most English Bibles: \"Jesus ___.\"", answer: "Wept (John 11:35)", hint: "He was at Lazarus’ tomb.", accept: ["wept"], verse: "John 11:35" },
        { level: 2, question: "\"Love is patient, love is...\"", answer: "Kind (1 Corinthians 13:4)", hint: "It is read at a lot of weddings.", accept: ["kind"], verse: "1 Corinthians 13:4" },
        { level: 3, question: "\"For I know the plans I have for you,\" declares the Lord...", answer: "\"...plans to prosper you and not to harm you\" (Jeremiah 29:11)", hint: "It is Jeremiah 29:11.", accept: ["plans to prosper you and not to harm you","plans to prosper you","prosper you","to prosper you"], verse: "Jeremiah 29:11" },
        { level: 3, question: "\"Trust in the Lord with all your heart...\"", answer: "\"...and lean not on your own understanding\" (Proverbs 3:5)", hint: "It is Proverbs 3:5.", accept: ["lean not on your own understanding","and lean not on your own understanding","do not lean on your own understanding","lean not"], verse: "Proverbs 3:5" },
        { level: 3, question: "\"Be still, and know...\"", answer: "\"...that I am God\" (Psalm 46:10)", hint: "It is Psalm 46:10.", accept: ["that i am god","i am god"], verse: "Psalm 46:10" },
        { level: 4, question: "\"In the beginning was the Word, and the Word was with God, and...\"", answer: "\"...the Word was God\" (John 1:1)", hint: "It is John 1:1.", accept: ["the word was god","word was god"], verse: "John 1:1" },
        { level: 5, question: "\"Your word is a lamp for my feet...\"", answer: "\"...a light on my path\" (Psalm 119:105)", hint: "It is in the longest chapter of the Bible.", accept: ["a light on my path","light on my path","a light to my path","light to my path","light unto my path","and a light unto my path"], verse: "Psalm 119:105" },
        { level: 5, question: "\"Those who hope in the Lord will renew their strength. They will soar on wings like...\"", answer: "Eagles (Isaiah 40:31)", hint: "It is a bird.", accept: ["eagles","eagle"], verse: "Isaiah 40:31" },
        { level: 6, question: "\"Now faith is confidence in what we hope for and assurance about...\"", answer: "\"...what we do not see\" (Hebrews 11:1)", hint: "It is Hebrews 11:1.", accept: ["what we do not see","things not seen","what we do not see"], verse: "Hebrews 11:1" },
        { level: 6, question: "\"And what does the Lord require of you? To act justly and to love mercy and...\"", answer: "\"...to walk humbly with your God\" (Micah 6:8)", hint: "It is Micah 6:8.", accept: ["walk humbly with your god","to walk humbly with your god","walk humbly"], verse: "Micah 6:8" },
        { level: 7, question: "\"The Lord bless you and keep you; the Lord make his face shine on you and...\"", answer: "\"...be gracious to you\" (Numbers 6:25)", hint: "It is the priestly blessing in Numbers 6.", accept: ["be gracious to you","be gracious unto thee","gracious"], verse: "Numbers 6:24-25" }
      ]
    },
    {
      name: "Genesis",
      questions: [
        { level: 1, question: "God set this in the sky as a sign of his promise after the flood.", answer: "A rainbow", hint: "It has many colors.", accept: ["rainbow","a rainbow"], verse: "Genesis 9:13" },
        { level: 1, question: "The first woman.", answer: "Eve", hint: "Her name sounds like \"living.\"", accept: ["eve"], verse: "Genesis 3:20" },
        { level: 1, question: "The garden where Adam and Eve first lived.", answer: "Eden", hint: "It starts with E.", accept: ["eden","garden of eden","the garden of eden"], verse: "Genesis 2:8" },
        { level: 2, question: "On this day of creation, God made people.", answer: "The sixth day", hint: "It is the day before God rested.", accept: ["6","sixth","six","6th","sixth day","the sixth day"], verse: "Genesis 1:27-31" },
        { level: 2, question: "Joseph’s father gave him this special gift, which made his brothers jealous.", answer: "A coat (robe) of many colors", hint: "You wear it.", accept: ["coat","robe","a coat","coat of many colors","robe of many colors","colorful coat"], verse: "Genesis 37:3" },
        { level: 2, question: "God asked Abraham to offer this son on an altar, then provided a ram instead.", answer: "Isaac", hint: "His name means \"he laughs.\"", accept: ["isaac"], verse: "Genesis 22:2" },
        { level: 3, question: "Jacob tricked this twin brother out of his birthright.", answer: "Esau", hint: "He was hairy and loved to hunt.", accept: ["esau"], verse: "Genesis 25:29-34" },
        { level: 3, question: "After wrestling with God, Jacob was given this new name.", answer: "Israel", hint: "It became the name of a nation.", accept: ["israel"], verse: "Genesis 32:28" },
        { level: 4, question: "Abraham’s nephew, whose wife turned into a pillar of salt.", answer: "Lot", hint: "It is a three-letter name.", accept: ["lot"], verse: "Genesis 19:26" },
        { level: 4, question: "The oldest person recorded in the Bible, he lived 969 years.", answer: "Methuselah", hint: "He was Noah’s grandfather.", accept: ["methuselah"], verse: "Genesis 5:27" },
        { level: 4, question: "The son Abraham had with Hagar.", answer: "Ishmael", hint: "His name means \"God hears.\"", accept: ["ishmael"], verse: "Genesis 16:15" },
        { level: 5, question: "Abraham’s servant found a wife for Isaac at a well. What was her name?", answer: "Rebekah", hint: "She watered the servant’s camels.", accept: ["rebekah","rebecca"], verse: "Genesis 24:15" },
        { level: 6, question: "In prison, Joseph interpreted dreams for Pharaoh’s cupbearer and this other servant.", answer: "The baker", hint: "His dream had baskets of bread.", accept: ["baker","the baker","chief baker"], verse: "Genesis 40:16" },
        { level: 7, question: "This king of Salem, also a priest, blessed Abram and received a tenth of everything.", answer: "Melchizedek", hint: "Hebrews compares Jesus to him.", accept: ["melchizedek","melchisedec"], verse: "Genesis 14:18-20" }
      ]
    },
    {
      name: "Exodus & Wilderness",
      questions: [
        { level: 1, question: "The number of plagues God sent on Egypt.", answer: "Ten", hint: "Same as the number of commandments.", accept: ["10","ten"], verse: "Exodus 7\u201312" },
        { level: 1, question: "The Israelites crossed this sea on dry ground.", answer: "The Red Sea", hint: "It is a color.", accept: ["red sea","the red sea","red"], verse: "Exodus 14:21-22" },
        { level: 1, question: "God first spoke to Moses from this.", answer: "A burning bush", hint: "It was on fire but did not burn up.", accept: ["burning bush","bush","a burning bush","the burning bush"], verse: "Exodus 3:2" },
        { level: 2, question: "The bread-like food God sent from heaven in the wilderness.", answer: "Manna", hint: "Its name means \"What is it?\"", accept: ["manna"], verse: "Exodus 16:15" },
        { level: 2, question: "Moses received the Ten Commandments on this mountain.", answer: "Mount Sinai", hint: "It is also called Horeb.", accept: ["sinai","mount sinai","mt sinai","horeb","mount horeb"], verse: "Exodus 19:20" },
        { level: 2, question: "While Moses was on the mountain, the people made this idol.", answer: "A golden calf", hint: "It is a young cow made of gold.", accept: ["golden calf","calf","a golden calf","the golden calf"], verse: "Exodus 32:4" },
        { level: 2, question: "Pharaoh’s daughter found baby Moses in this river.", answer: "The Nile", hint: "It is the longest river in Africa.", accept: ["nile","the nile","nile river"], verse: "Exodus 2:5" },
        { level: 3, question: "Moses’ brother, who spoke for him before Pharaoh.", answer: "Aaron", hint: "He became the first high priest.", accept: ["aaron"], verse: "Exodus 4:14-16" },
        { level: 3, question: "The number of years Israel wandered in the wilderness.", answer: "40", hint: "Same as the days of rain in the flood.", accept: ["40","forty"], verse: "Numbers 14:33" },
        { level: 4, question: "Moses’ sister, who watched over his basket in the river.", answer: "Miriam", hint: "She led the women in song with a tambourine.", accept: ["miriam"], verse: "Exodus 2:4" },
        { level: 5, question: "Moses’ father-in-law, a priest of Midian.", answer: "Jethro", hint: "He is also called Reuel.", accept: ["jethro","reuel"], verse: "Exodus 3:1" },
        { level: 6, question: "Aaron and this man held up Moses’ hands during the battle with the Amalekites.", answer: "Hur", hint: "His name has three letters.", accept: ["hur","aaron and hur"], verse: "Exodus 17:12" },
        { level: 7, question: "God filled this craftsman with his Spirit to build the tabernacle.", answer: "Bezalel", hint: "He worked with Oholiab.", accept: ["bezalel","bezaleel"], verse: "Exodus 31:2-3" }
      ]
    },
    {
      name: "Kings & Prophets",
      questions: [
        { level: 1, question: "This prophet ran from God and was swallowed by a great fish.", answer: "Jonah", hint: "He was supposed to go to Nineveh.", accept: ["jonah"], verse: "Jonah 1:17" },
        { level: 1, question: "He kept praying to God and survived a night in the lions’ den.", answer: "Daniel", hint: "He prayed three times a day.", accept: ["daniel"], verse: "Daniel 6:10" },
        { level: 2, question: "This king, known for his wisdom, built the first temple.", answer: "Solomon", hint: "He was David’s son.", accept: ["solomon"], verse: "1 Kings 6:1" },
        { level: 2, question: "Name one of the three friends thrown into the fiery furnace.", answer: "Shadrach, Meshach or Abednego", hint: "They were Daniel’s friends.", accept: ["shadrach","meshach","abednego","shadrach meshach and abednego"], verse: "Daniel 3:20" },
        { level: 3, question: "The first king of Israel.", answer: "Saul", hint: "He shares a name with Paul’s old name.", accept: ["saul"], verse: "1 Samuel 10:1" },
        { level: 3, question: "This prophet was taken up to heaven in a whirlwind.", answer: "Elijah", hint: "He faced the prophets of Baal on Mount Carmel.", accept: ["elijah"], verse: "2 Kings 2:11" },
        { level: 4, question: "This prophet asked for a double portion of Elijah’s spirit.", answer: "Elisha", hint: "His name is one letter different from Elijah’s.", accept: ["elisha"], verse: "2 Kings 2:9" },
        { level: 4, question: "This wicked queen, wife of King Ahab, tried to kill Elijah.", answer: "Jezebel", hint: "She worshiped Baal.", accept: ["jezebel"], verse: "1 Kings 19:2" },
        { level: 5, question: "He became king at age 8 and later rediscovered the Book of the Law.", answer: "Josiah", hint: "Find him in 2 Kings 22.", accept: ["josiah"], verse: "2 Kings 22:8" },
        { level: 5, question: "This prophet saw a vision of a valley of dry bones coming to life.", answer: "Ezekiel", hint: "It starts with E.", accept: ["ezekiel"], verse: "Ezekiel 37:1-10" },
        { level: 5, question: "This prophet confronted David about Bathsheba with a story about a lamb.", answer: "Nathan", hint: "He also anointed Solomon.", accept: ["nathan"], verse: "2 Samuel 12:1-7" },
        { level: 5, question: "Elijah faced the prophets of Baal on this mountain.", answer: "Mount Carmel", hint: "It starts with C.", accept: ["carmel","mount carmel"], verse: "1 Kings 18:19-20" },
        { level: 6, question: "God healed this king of Judah and gave him 15 more years of life.", answer: "Hezekiah", hint: "The shadow on the sundial went backward.", accept: ["hezekiah"], verse: "2 Kings 20:6" },
        { level: 7, question: "This prophet was a shepherd and fig farmer from Tekoa.", answer: "Amos", hint: "His book comes after Joel.", accept: ["amos"], verse: "Amos 7:14" }
      ]
    },
    {
      name: "Who Said It?",
      questions: [
        { level: 1, question: "\"Let there be light.\"", answer: "God", hint: "It is in Genesis 1:3.", accept: ["god","the lord","lord"], verse: "Genesis 1:3" },
        { level: 1, question: "\"I am the way and the truth and the life.\"", answer: "Jesus", hint: "It is in John 14:6.", accept: ["jesus","jesus christ","christ"], verse: "John 14:6" },
        { level: 2, question: "\"Am I my brother’s keeper?\"", answer: "Cain", hint: "His brother was Abel.", accept: ["cain"], verse: "Genesis 4:9" },
        { level: 2, question: "\"Unless I see the nail marks in his hands... I will not believe.\"", answer: "Thomas", hint: "People call him \"Doubting.\"", accept: ["thomas","doubting thomas"], verse: "John 20:25" },
        { level: 3, question: "\"Where you go I will go, and where you stay I will stay.\"", answer: "Ruth", hint: "She said it to her mother-in-law, Naomi.", accept: ["ruth"], verse: "Ruth 1:16" },
        { level: 3, question: "\"As for me and my household, we will serve the Lord.\"", answer: "Joshua", hint: "He said it after leading Israel into Canaan.", accept: ["joshua"], verse: "Joshua 24:15" },
        { level: 4, question: "\"Here am I. Send me!\"", answer: "Isaiah", hint: "A major prophet, chapter 6 of his book.", accept: ["isaiah"], verse: "Isaiah 6:8" },
        { level: 4, question: "\"Speak, for your servant is listening.\"", answer: "Samuel", hint: "He said it as a boy in the temple with Eli.", accept: ["samuel"], verse: "1 Samuel 3:10" },
        { level: 4, question: "\"You are the Messiah, the Son of the living God.\"", answer: "Peter", hint: "It is in Matthew 16.", accept: ["peter","simon peter","simon"], verse: "Matthew 16:16" },
        { level: 5, question: "\"For to me, to live is Christ and to die is gain.\"", answer: "Paul", hint: "He wrote it from prison to the Philippians.", accept: ["paul"], verse: "Philippians 1:21" },
        { level: 5, question: "\"I know that my redeemer lives.\"", answer: "Job", hint: "He said it in the middle of his suffering.", accept: ["job"], verse: "Job 19:25" },
        { level: 6, question: "\"How can I curse those whom God has not cursed?\"", answer: "Balaam", hint: "His donkey talked to him.", accept: ["balaam"], verse: "Numbers 23:8" },
        { level: 6, question: "\"Lord, now you are letting your servant depart in peace.\"", answer: "Simeon", hint: "He held baby Jesus in the temple.", accept: ["simeon"], verse: "Luke 2:29" },
        { level: 7, question: "\"Should I not have concern for the great city of Nineveh?\"", answer: "God", hint: "He said it to Jonah.", accept: ["god","the lord"], verse: "Jonah 4:11" }
      ]
    },
    {
      name: "Parables",
      questions: [
        { level: 1, question: "In this parable, a son wastes his inheritance, then comes home to a celebration.", answer: "The Prodigal (Lost) Son", hint: "He ended up feeding pigs.", accept: ["prodigal son","prodigal","lost son","the prodigal son"], verse: "Luke 15:11-32" },
        { level: 1, question: "The wise man built his house on rock. The foolish man built on this.", answer: "Sand", hint: "You find it at the beach.", accept: ["sand"], verse: "Matthew 7:26" },
        { level: 1, question: "He stopped to help a beaten man on the road to Jericho.", answer: "The Good Samaritan", hint: "He came from Samaria.", accept: ["good samaritan","samaritan","the good samaritan"], verse: "Luke 10:33" },
        { level: 2, question: "A shepherd leaves 99 sheep to go find this many lost ones.", answer: "One", hint: "The smallest number you can count.", accept: ["1","one","one sheep"], verse: "Luke 15:4" },
        { level: 2, question: "Jesus compared the kingdom of God to this tiny seed.", answer: "The mustard seed", hint: "It shares its name with a yellow condiment.", accept: ["mustard","mustard seed"], verse: "Matthew 13:31" },
        { level: 3, question: "A woman swept her whole house to find this lost item.", answer: "A coin", hint: "It is money.", accept: ["coin","a coin","lost coin","silver coin"], verse: "Luke 15:8" },
        { level: 3, question: "A farmer scatters seed on four kinds of soil in this parable.", answer: "The Sower", hint: "It is named after the one planting.", accept: ["sower","the sower","parable of the sower","soils","the soils"], verse: "Matthew 13:3-8" },
        { level: 4, question: "The number of bridesmaids (virgins) with lamps in Matthew 25.", answer: "Ten", hint: "Half were wise and half were foolish.", accept: ["10","ten"], verse: "Matthew 25:1" },
        { level: 4, question: "The lazy servant hid his master’s money (talent) here.", answer: "In the ground", hint: "He dug a hole.", accept: ["ground","the ground","in the ground","dirt","earth","hole","a hole"], verse: "Matthew 25:18" },
        { level: 5, question: "The rich fool planned to tear down his barns and build these.", answer: "Bigger barns", hint: "He wanted more storage for crops.", accept: ["barns","bigger barns","barn","larger barns"], verse: "Luke 12:18" },
        { level: 5, question: "In the parable of the talents, the servants got five talents, two talents, and this many.", answer: "One", hint: "The servant who got it buried it.", accept: ["1","one","one talent"], verse: "Matthew 25:15" },
        { level: 6, question: "In the parable where every worker got the same pay, they worked in this kind of field.", answer: "A vineyard", hint: "Grapes grow there.", accept: ["vineyard","a vineyard"], verse: "Matthew 20:1" },
        { level: 6, question: "A widow kept bothering this kind of person until he gave her justice (Luke 18).", answer: "An unjust judge", hint: "He did not fear God or care about people.", accept: ["judge","unjust judge","an unjust judge","the judge"], verse: "Luke 18:2-5" },
        { level: 7, question: "In Luke 16, a rich man in torment begged Abraham to send this poor beggar.", answer: "Lazarus", hint: "He shares a name with Jesus’ friend.", accept: ["lazarus"], verse: "Luke 16:24" }
      ]
    },
    {
      name: "The Early Church",
      questions: [
        { level: 1, question: "Saul of Tarsus became better known by this name.", answer: "Paul", hint: "It is four letters.", accept: ["paul"], verse: "Acts 13:9" },
        { level: 2, question: "The Holy Spirit came on the believers during this feast in Acts 2.", answer: "Pentecost", hint: "It was 50 days after Passover.", accept: ["pentecost"], verse: "Acts 2:1-4" },
        { level: 2, question: "Saul met Jesus in a blinding light on the road to this city.", answer: "Damascus", hint: "It is in Syria.", accept: ["damascus","road to damascus"], verse: "Acts 9:3" },
        { level: 3, question: "He was the first Christian martyr, forgiving the people who stoned him.", answer: "Stephen", hint: "He was chosen to serve food to widows.", accept: ["stephen"], verse: "Acts 7:59-60" },
        { level: 3, question: "Paul’s young helper, who received two letters in the New Testament.", answer: "Timothy", hint: "His mother was Eunice.", accept: ["timothy"], verse: "Acts 16:1" },
        { level: 4, question: "About this many people believed and were baptized on the day of Pentecost.", answer: "3,000", hint: "It is in the thousands.", accept: ["3000","3 000","three thousand"], verse: "Acts 2:41" },
        { level: 4, question: "Paul’s partner on his first missionary journey.", answer: "Barnabas", hint: "His name means \"son of encouragement.\"", accept: ["barnabas"], verse: "Acts 13:2" },
        { level: 5, question: "A seller of purple cloth who became the first known believer in Europe.", answer: "Lydia", hint: "She came from Thyatira (Acts 16).", accept: ["lydia"], verse: "Acts 16:14" },
        { level: 5, question: "This husband and wife lied about the money from selling their land.", answer: "Ananias and Sapphira", hint: "It is in Acts 5.", accept: ["ananias and sapphira","ananias","sapphira"], verse: "Acts 5:1-2" },
        { level: 5, question: "Philip explained Isaiah to an official from this country riding in a chariot.", answer: "Ethiopia", hint: "The official served Queen Candace.", accept: ["ethiopia"], verse: "Acts 8:27" },
        { level: 5, question: "Paul’s partner who sang hymns with him in the Philippian jail.", answer: "Silas", hint: "He is also called Silvanus.", accept: ["silas","silvanus"], verse: "Acts 16:25" },
        { level: 6, question: "This young man fell asleep and fell from a window during Paul’s long sermon.", answer: "Eutychus", hint: "It happened in Acts 20.", accept: ["eutychus"], verse: "Acts 20:9" },
        { level: 6, question: "This Roman centurion was one of the first Gentiles to believe, after Peter visited him.", answer: "Cornelius", hint: "It is in Acts 10.", accept: ["cornelius"], verse: "Acts 10:1" },
        { level: 6, question: "This sorcerer tried to buy the power of the Holy Spirit.", answer: "Simon", hint: "He is often called Simon Magus.", accept: ["simon","simon magus","simon the sorcerer"], verse: "Acts 8:18-19" },
        { level: 7, question: "Peter stayed in Joppa with a man named Simon who had this job.", answer: "Tanner", hint: "He worked with leather.", accept: ["tanner","a tanner"], verse: "Acts 9:43" }
      ]
    },
    {
      name: "Faith Today",
      questions: [
        { level: 1, question: "The 1990s bracelet letters \"WWJD\" stand for this question.", answer: "What Would Jesus Do?", hint: "Four words, starting with \"What.\"", accept: ["what would jesus do"] },
        { level: 1, question: "Many Christians give something up during these 40 days before Easter.", answer: "Lent", hint: "It starts on Ash Wednesday.", accept: ["lent"], verse: "Matthew 4:2" },
        { level: 1, question: "Dallas Jenkins created this series about Jesus and his disciples.", answer: "The Chosen", hint: "It was crowdfunded by fans.", accept: ["the chosen","chosen"] },
        { level: 2, question: "This free Bible app from Life.Church is known for its \"Verse of the Day.\"", answer: "YouVersion (The Bible App)", hint: "Its name starts with \"You.\"", accept: ["youversion","you version","bible app","the bible app"] },
        { level: 2, question: "Tim Tebow wrote this verse in his eye black during the 2009 college football title game.", answer: "John 3:16", hint: "It is the most famous verse in the Bible.", accept: ["john 3:16","john 316","john 3 16"], verse: "John 3:16" },
        { level: 2, question: "This author wrote \"The Chronicles of Narnia.\"", answer: "C.S. Lewis", hint: "Aslan the lion is his creation.", accept: ["cs lewis","c s lewis","lewis","clive staples lewis"] },
        { level: 3, question: "This Christian rapper founded Reach Records and has won multiple Grammys.", answer: "Lecrae", hint: "One name, starts with L.", accept: ["lecrae"] },
        { level: 3, question: "The worship song \"Oceans (Where Feet May Fail)\" was recorded by this group.", answer: "Hillsong United", hint: "The group comes from a church in Australia.", accept: ["hillsong united","hillsong"] },
        { level: 4, question: "The Thursday before Easter, remembering the Last Supper, is called this.", answer: "Maundy (Holy) Thursday", hint: "It starts with M.", accept: ["maundy thursday","maundy","holy thursday"], verse: "John 13:34" },
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
        { level: 1, question: "An underdog story is often called this kind of matchup.", answer: "David and Goliath", hint: "A boy against a giant.", accept: ["david and goliath","david vs goliath","david versus goliath"], verse: "1 Samuel 17:49" },
        { level: 2, question: "Someone with huge patience is said to have \"the patience of\" this man.", answer: "Job", hint: "He lost almost everything but kept his faith.", accept: ["job"], verse: "James 5:11" },
        { level: 3, question: "\"The writing on the wall\" comes from a feast in this book.", answer: "Daniel", hint: "The king was Belshazzar.", accept: ["daniel"], verse: "Daniel 5:5" },
        { level: 3, question: "\"Go the extra mile\" comes from this famous teaching of Jesus.", answer: "The Sermon on the Mount", hint: "It starts in Matthew 5.", accept: ["sermon on the mount","the sermon on the mount"], verse: "Matthew 5:41" },
        { level: 3, question: "\"Pride goes before a fall\" comes from this book of wise sayings.", answer: "Proverbs", hint: "Much of it was written by Solomon.", accept: ["proverbs"], verse: "Proverbs 16:18" },
        { level: 4, question: "Lincoln’s \"house divided\" speech quoted words first spoken by him.", answer: "Jesus", hint: "It is in Mark 3:25.", accept: ["jesus","jesus christ","christ"], verse: "Mark 3:25" },
        { level: 4, question: "\"An eye for an eye\" first appears in this book of Moses.", answer: "Exodus", hint: "It is the second book of the Bible.", accept: ["exodus"], verse: "Exodus 21:24" },
        { level: 4, question: "\"The salt of the earth\" comes from this famous teaching of Jesus.", answer: "The Sermon on the Mount", hint: "It is in Matthew 5.", accept: ["sermon on the mount","the sermon on the mount"], verse: "Matthew 5:13" },
        { level: 5, question: "\"A drop in the bucket\" comes from this prophet’s book.", answer: "Isaiah", hint: "See chapter 40.", accept: ["isaiah"], verse: "Isaiah 40:15" },
        { level: 5, question: "\"A leopard can’t change its spots\" comes from this prophet.", answer: "Jeremiah", hint: "He is called the weeping prophet.", accept: ["jeremiah"], verse: "Jeremiah 13:23" },
        { level: 5, question: "\"By the skin of my teeth\" comes from this book.", answer: "Job", hint: "He suffered greatly.", accept: ["job"], verse: "Job 19:20" },
        { level: 6, question: "\"A fly in the ointment\" comes from this book written by \"the Teacher.\"", answer: "Ecclesiastes", hint: "It also says there is \"nothing new under the sun.\"", accept: ["ecclesiastes"], verse: "Ecclesiastes 10:1" },
        { level: 6, question: "\"Feet of clay\" comes from a statue in a king’s dream in this book.", answer: "Daniel", hint: "The king was Nebuchadnezzar.", accept: ["daniel"], verse: "Daniel 2:33" },
        { level: 7, question: "\"The powers that be\" comes from this letter of Paul.", answer: "Romans", hint: "See chapter 13 in the King James Version.", accept: ["romans"], verse: "Romans 13:1" }
      ]
    },
    {
      name: "Women of the Bible",
      questions: [
        { level: 1, question: "The mother of Jesus.", answer: "Mary", hint: "The angel Gabriel visited her.", accept: ["mary"], verse: "Luke 1:30-31" },
        { level: 2, question: "Mary and this sister welcomed Jesus into their home.", answer: "Martha", hint: "She was busy in the kitchen.", accept: ["martha"], verse: "Luke 10:38-40" },
        { level: 2, question: "Abraham’s wife, who had a baby at age 90.", answer: "Sarah", hint: "She laughed when she heard the news.", accept: ["sarah","sarai"], verse: "Genesis 21:2" },
        { level: 2, question: "She was the first to see Jesus after he rose (John 20).", answer: "Mary Magdalene", hint: "She came from Magdala.", accept: ["mary magdalene","magdalene"], verse: "John 20:16" },
        { level: 3, question: "Ruth’s mother-in-law.", answer: "Naomi", hint: "She asked to be called Mara.", accept: ["naomi"], verse: "Ruth 1:20" },
        { level: 3, question: "She prayed for a son, and God gave her Samuel.", answer: "Hannah", hint: "Her name is spelled the same backward.", accept: ["hannah"], verse: "1 Samuel 1:20" },
        { level: 3, question: "The mother of John the Baptist.", answer: "Elizabeth", hint: "She was a relative of Mary.", accept: ["elizabeth","elisabeth"], verse: "Luke 1:57" },
        { level: 4, question: "She hid the Israelite spies in Jericho.", answer: "Rahab", hint: "She hung a scarlet cord from her window.", accept: ["rahab"], verse: "Joshua 2:4" },
        { level: 4, question: "Jacob loved her and worked 14 years to marry her.", answer: "Rachel", hint: "Her sister was Leah.", accept: ["rachel"], verse: "Genesis 29:18" },
        { level: 5, question: "The father of Leah and Rachel.", answer: "Laban", hint: "He tricked Jacob at the wedding.", accept: ["laban"], verse: "Genesis 29:16" },
        { level: 6, question: "An 84-year-old prophetess who saw baby Jesus at the temple.", answer: "Anna", hint: "She appears in Luke 2.", accept: ["anna"], verse: "Luke 2:36-38" },
        { level: 6, question: "This woman killed the army commander Sisera with a tent peg.", answer: "Jael", hint: "It is in Judges 4.", accept: ["jael"], verse: "Judges 4:21" },
        { level: 6, question: "Peter raised this woman, also called Dorcas, from the dead.", answer: "Tabitha", hint: "She was known for making clothes for widows.", accept: ["tabitha","dorcas"], verse: "Acts 9:36-40" },
        { level: 7, question: "The wife of Moses.", answer: "Zipporah", hint: "She was a daughter of Jethro.", accept: ["zipporah"], verse: "Exodus 2:21" }
      ]
    },
    {
      name: "Numbers in the Bible",
      questions: [
        { level: 1, question: "The number of disciples Jesus chose.", answer: "12", hint: "A dozen.", accept: ["12","twelve"], verse: "Mark 3:14" },
        { level: 1, question: "The number of days in the creation week, including the day of rest.", answer: "7", hint: "A full week.", accept: ["7","seven"], verse: "Genesis 2:2" },
        { level: 1, question: "The number of commandments God gave on Sinai.", answer: "10", hint: "Count both hands.", accept: ["10","ten"], verse: "Exodus 20:1-17" },
        { level: 2, question: "The number of days and nights it rained during Noah’s flood.", answer: "40", hint: "It is the same as the years in the wilderness.", accept: ["40","forty"], verse: "Genesis 7:12" },
        { level: 2, question: "Jonah spent this many days inside the great fish.", answer: "3", hint: "Same as the days before Jesus rose.", accept: ["3","three"], verse: "Jonah 1:17" },
        { level: 3, question: "The number of books of Moses at the start of the Bible.", answer: "5", hint: "Think \"Pentateuch.\"", accept: ["5","five"] },
        { level: 3, question: "The number of tribes of Israel.", answer: "12", hint: "One for each son of Jacob.", accept: ["12","twelve"], verse: "Genesis 49:28" },
        { level: 4, question: "Judas was paid this many pieces of silver to betray Jesus.", answer: "30", hint: "It is three tens.", accept: ["30","thirty"], verse: "Matthew 26:15" },
        { level: 4, question: "Gideon defeated the Midianites with this many men.", answer: "300", hint: "It is in the hundreds.", accept: ["300","three hundred"], verse: "Judges 7:7" },
        { level: 5, question: "The number of people saved on Noah’s ark.", answer: "8", hint: "Noah, his wife, their three sons and their wives.", accept: ["8","eight"], verse: "1 Peter 3:20" },
        { level: 5, question: "The number of books in the Old Testament (Protestant).", answer: "39", hint: "It is 66 minus 27.", accept: ["39","thirty nine"] },
        { level: 6, question: "The disciples caught this exact number of large fish in John 21.", answer: "153", hint: "It is between 150 and 160.", accept: ["153","one hundred fifty three"], verse: "John 21:11" },
        { level: 6, question: "Naaman dipped in the Jordan River this many times to be healed.", answer: "7", hint: "The number of days in a week.", accept: ["7","seven"], verse: "2 Kings 5:14" },
        { level: 6, question: "Abraham’s age when Isaac was born.", answer: "100", hint: "It is a round number.", accept: ["100","one hundred"], verse: "Genesis 21:5" },
        { level: 7, question: "Jacob says he worked for Laban this many years in all.", answer: "20", hint: "See Genesis 31:41.", accept: ["20","twenty"], verse: "Genesis 31:41" }
      ]
    },
    {
      name: "Apostles & Disciples",
      questions: [
        { level: 1, question: "The disciple who betrayed Jesus with a kiss.", answer: "Judas Iscariot", hint: "He was paid in silver.", accept: ["judas","judas iscariot"], verse: "Luke 22:47-48" },
        { level: 2, question: "Peter’s brother, also a fisherman, who followed Jesus.", answer: "Andrew", hint: "He first followed John the Baptist.", accept: ["andrew"], verse: "John 1:40" },
        { level: 2, question: "Often called \"the disciple whom Jesus loved.\"", answer: "John", hint: "He wrote a Gospel and three letters.", accept: ["john","the apostle john"], verse: "John 13:23" },
        { level: 2, question: "This disciple was sitting at a tax booth when Jesus called him.", answer: "Matthew", hint: "He was also called Levi.", accept: ["matthew","levi"], verse: "Matthew 9:9" },
        { level: 3, question: "Jesus nicknamed these two brothers the \"Sons of Thunder.\"", answer: "James and John", hint: "Their father was Zebedee.", accept: ["james and john","james","john","sons of zebedee"], verse: "Mark 3:17" },
        { level: 3, question: "Peter’s name before Jesus called him Peter.", answer: "Simon", hint: "It is a common name in the Gospels.", accept: ["simon","simon bar jonah"], verse: "John 1:42" },
        { level: 4, question: "This disciple brought Nathanael to meet Jesus.", answer: "Philip", hint: "He was from Bethsaida.", accept: ["philip"], verse: "John 1:45" },
        { level: 4, question: "This disciple was called \"the Zealot.\"", answer: "Simon", hint: "He shares a first name with Peter.", accept: ["simon","simon the zealot"], verse: "Luke 6:15" },
        { level: 5, question: "He was chosen by casting lots to replace Judas.", answer: "Matthias", hint: "It happened in Acts 1.", accept: ["matthias"], verse: "Acts 1:26" },
        { level: 5, question: "The first of the Twelve to be martyred, killed by Herod with a sword (Acts 12).", answer: "James, son of Zebedee", hint: "He was John’s brother.", accept: ["james","james son of zebedee"], verse: "Acts 12:2" },
        { level: 6, question: "Many scholars think Nathanael is the same person as this apostle.", answer: "Bartholomew", hint: "His name starts with \"Bar.\"", accept: ["bartholomew"], verse: "John 1:45-49" },
        { level: 6, question: "Judas Iscariot was in charge of this for the disciples.", answer: "The money bag", hint: "He sometimes stole from it.", accept: ["money bag","money","money box","the money bag","the purse","treasury"], verse: "John 12:6" },
        { level: 7, question: "In Luke’s list, the apostle called Thaddaeus elsewhere is named this.", answer: "Judas son of James", hint: "Not Judas Iscariot.", accept: ["judas son of james","judas","jude"], verse: "Luke 6:16" }
      ]
    },
    {
      name: "Places in the Bible",
      questions: [
        { level: 1, question: "Jesus grew up in this town in Galilee.", answer: "Nazareth", hint: "People called him a Nazarene.", accept: ["nazareth"], verse: "Matthew 2:23" },
        { level: 1, question: "Its walls fell after the Israelites marched around it and shouted.", answer: "Jericho", hint: "Trumpets were blown.", accept: ["jericho"], verse: "Joshua 6:20" },
        { level: 1, question: "David made this city his capital, and Jesus was crucified just outside it.", answer: "Jerusalem", hint: "It is also called Zion.", accept: ["jerusalem","zion"], verse: "2 Samuel 5:6-7" },
        { level: 2, question: "Jesus called fishermen to follow him beside this sea.", answer: "The Sea of Galilee", hint: "It is also called the Lake of Gennesaret.", accept: ["sea of galilee","galilee","lake of gennesaret","sea of tiberias"], verse: "Matthew 4:18" },
        { level: 2, question: "People built a tower here to reach the heavens, and God confused their language.", answer: "Babel", hint: "It sounds like \"babble.\"", accept: ["babel","tower of babel"], verse: "Genesis 11:9" },
        { level: 3, question: "Noah’s ark came to rest on the mountains of this place.", answer: "Ararat", hint: "It is in modern-day Turkey.", accept: ["ararat","mount ararat","mountains of ararat"], verse: "Genesis 8:4" },
        { level: 3, question: "God sent Jonah to preach to this great city.", answer: "Nineveh", hint: "It was the capital of Assyria.", accept: ["nineveh"], verse: "Jonah 1:2" },
        { level: 4, question: "Jesus was crucified at this place, meaning \"place of the skull.\"", answer: "Golgotha", hint: "In Latin it is called Calvary.", accept: ["golgotha","calvary"], verse: "John 19:17" },
        { level: 4, question: "Jesus turned water into wine in this town.", answer: "Cana", hint: "It is in Galilee.", accept: ["cana"], verse: "John 2:1-11" },
        { level: 5, question: "Abraham’s hometown before God called him to Canaan.", answer: "Ur", hint: "It was \"of the Chaldeans.\"", accept: ["ur","ur of the chaldeans"], verse: "Genesis 11:31" },
        { level: 6, question: "Paul was shipwrecked on this island, where a snake bit him (Acts 28).", answer: "Malta", hint: "It is in the Mediterranean, south of Sicily.", accept: ["malta","melita"], verse: "Acts 28:1-3" },
        { level: 6, question: "Moses looked out over the Promised Land from this mountain before he died.", answer: "Mount Nebo", hint: "It is in Moab.", accept: ["nebo","mount nebo","pisgah"], verse: "Deuteronomy 34:1" },
        { level: 6, question: "Jesus told a blind man to wash in this pool (John 9).", answer: "Siloam", hint: "Its name means \"sent.\"", accept: ["siloam","pool of siloam"], verse: "John 9:7" },
        { level: 7, question: "Paul preached about an \"unknown god\" in this city.", answer: "Athens", hint: "He spoke at the Areopagus.", accept: ["athens"], verse: "Acts 17:23" }
      ]
    },
    {
      name: "The Christmas Story",
      questions: [
        { level: 1, question: "Baby Jesus was laid in this feeding trough.", answer: "A manger", hint: "Animals eat from it.", accept: ["manger","a manger"], verse: "Luke 2:7" },
        { level: 1, question: "The town where Jesus was born.", answer: "Bethlehem", hint: "It was called the town of David.", accept: ["bethlehem"], verse: "Matthew 2:1" },
        { level: 1, question: "Mary’s husband, a carpenter.", answer: "Joseph", hint: "Angels spoke to him in dreams.", accept: ["joseph"], verse: "Matthew 13:55" },
        { level: 1, question: "The wise men followed this to find Jesus.", answer: "A star", hint: "It was seen in the east.", accept: ["star","a star","the star"], verse: "Matthew 2:2" },
        { level: 2, question: "This angel told Mary she would have a son.", answer: "Gabriel", hint: "He also appeared to Zechariah.", accept: ["gabriel"], verse: "Luke 1:26-31" },
        { level: 2, question: "The wise men brought gold, frankincense and this.", answer: "Myrrh", hint: "It was a fragrant resin.", accept: ["myrrh"], verse: "Matthew 2:11" },
        { level: 3, question: "This king tried to kill the baby Jesus.", answer: "Herod", hint: "He is known as Herod the Great.", accept: ["herod","king herod","herod the great"], verse: "Matthew 2:16" },
        { level: 3, question: "Joseph took Mary and Jesus to this country to escape.", answer: "Egypt", hint: "It is where Israel was once enslaved.", accept: ["egypt"], verse: "Matthew 2:13-14" },
        { level: 4, question: "This name for Jesus means \"God with us.\"", answer: "Immanuel", hint: "It comes from Isaiah 7:14.", accept: ["immanuel","emmanuel"], verse: "Matthew 1:23" },
        { level: 5, question: "This Roman emperor ordered the census that sent Joseph to Bethlehem.", answer: "Caesar Augustus", hint: "It is in Luke 2:1.", accept: ["augustus","caesar augustus"], verse: "Luke 2:1" },
        { level: 5, question: "Elizabeth’s husband, a priest who could not speak until John was born.", answer: "Zechariah", hint: "The angel Gabriel appeared to him.", accept: ["zechariah","zacharias"], verse: "Luke 1:20" },
        { level: 5, question: "This old man held baby Jesus in the temple and praised God.", answer: "Simeon", hint: "He had been promised he would see the Messiah.", accept: ["simeon"], verse: "Luke 2:25-28" },
        { level: 6, question: "This prophet foretold that the Messiah would come from Bethlehem.", answer: "Micah", hint: "See chapter 5 of his book.", accept: ["micah"], verse: "Micah 5:2" },
        { level: 7, question: "The governor of Syria at the time of the census in Luke 2.", answer: "Quirinius", hint: "In older Bibles he is called Cyrenius.", accept: ["quirinius","cyrenius"], verse: "Luke 2:2" }
      ]
    },
    {
      name: "Easter Week",
      questions: [
        { level: 1, question: "Jesus rode into Jerusalem on this animal.", answer: "A donkey", hint: "It was a young colt.", accept: ["donkey","a donkey","colt","a colt"], verse: "Matthew 21:7" },
        { level: 1, question: "The crowd waved these as Jesus entered Jerusalem.", answer: "Palm branches", hint: "The day is named after them.", accept: ["palm branches","palms","palm"], verse: "John 12:13" },
        { level: 1, question: "The meal Jesus shared with his disciples the night he was arrested.", answer: "The Last Supper", hint: "It was a Passover meal.", accept: ["last supper","the last supper","passover","passover meal"], verse: "Luke 22:14-20" },
        { level: 1, question: "This disciple denied knowing Jesus three times.", answer: "Peter", hint: "A rooster crowed afterward.", accept: ["peter","simon peter"], verse: "Luke 22:61" },
        { level: 2, question: "The Roman governor who sentenced Jesus to be crucified.", answer: "Pontius Pilate", hint: "He washed his hands before the crowd.", accept: ["pilate","pontius pilate"], verse: "Matthew 27:24-26" },
        { level: 2, question: "Jesus rose from the dead on this day of the week.", answer: "Sunday", hint: "It is the first day of the week.", accept: ["sunday"], verse: "Matthew 28:1" },
        { level: 3, question: "The crowd asked Pilate to release this prisoner instead of Jesus.", answer: "Barabbas", hint: "He was a known criminal.", accept: ["barabbas"], verse: "Matthew 27:21" },
        { level: 4, question: "This rich man placed Jesus’ body in his own new tomb.", answer: "Joseph of Arimathea", hint: "He was a member of the Jewish council.", accept: ["joseph of arimathea","joseph"], verse: "Matthew 27:57-60" },
        { level: 4, question: "Soldiers cast lots to divide this belonging of Jesus.", answer: "His clothes", hint: "He wore it.", accept: ["clothes","his clothes","garments","tunic","robe","his garments"], verse: "John 19:24" },
        { level: 5, question: "The high priest who questioned Jesus at his trial.", answer: "Caiaphas", hint: "He was Annas’ son-in-law.", accept: ["caiaphas"], verse: "Matthew 26:57" },
        { level: 5, question: "Jesus appeared to his followers for this many days before he ascended.", answer: "40", hint: "It is in Acts 1:3.", accept: ["40","forty"], verse: "Acts 1:3" },
        { level: 5, question: "Two disciples met the risen Jesus on the road to this village.", answer: "Emmaus", hint: "It was about seven miles from Jerusalem.", accept: ["emmaus"], verse: "Luke 24:13" },
        { level: 6, question: "The field bought with Judas’ silver became known by this name.", answer: "The Field of Blood", hint: "In Aramaic it is Akeldama.", accept: ["field of blood","akeldama","potters field","potter s field"], verse: "Acts 1:19" },
        { level: 7, question: "One of the two disciples on the road to Emmaus was named this.", answer: "Cleopas", hint: "It is in Luke 24.", accept: ["cleopas"], verse: "Luke 24:18" }
      ]
    },
    {
      name: "Animals in the Bible",
      questions: [
        { level: 1, question: "This animal tempted Eve in the garden.", answer: "The serpent (snake)", hint: "It slithers.", accept: ["serpent","snake","the serpent"], verse: "Genesis 3:1" },
        { level: 1, question: "Noah sent out this bird, and it came back with an olive leaf.", answer: "A dove", hint: "It is a symbol of peace.", accept: ["dove","a dove"], verse: "Genesis 8:11" },
        { level: 2, question: "As a shepherd, David fought off a lion and this animal.", answer: "A bear", hint: "It is big and furry.", accept: ["bear","a bear"], verse: "1 Samuel 17:34-36" },
        { level: 2, question: "A plague of these insects ate everything green in Egypt.", answer: "Locusts", hint: "They are like grasshoppers.", accept: ["locusts","locust","grasshoppers"], verse: "Exodus 10:15" },
        { level: 3, question: "This animal spoke to the prophet Balaam.", answer: "A donkey", hint: "Balaam had been hitting it.", accept: ["donkey","a donkey","ass"], verse: "Numbers 22:28" },
        { level: 3, question: "Jesus sent demons into a herd of these animals.", answer: "Pigs", hint: "They ran into the lake.", accept: ["pigs","pig","swine"], verse: "Mark 5:13" },
        { level: 4, question: "The first bird Noah sent out of the ark.", answer: "A raven", hint: "It is a black bird.", accept: ["raven","a raven"], verse: "Genesis 8:7" },
        { level: 4, question: "These birds brought Elijah bread and meat by a brook.", answer: "Ravens", hint: "They are black birds.", accept: ["ravens","raven"], verse: "1 Kings 17:6" },
        { level: 5, question: "Samson tied torches to the tails of 300 of these animals.", answer: "Foxes", hint: "Some translations say jackals.", accept: ["foxes","fox","jackals"], verse: "Judges 15:4" },
        { level: 5, question: "Job 41 describes this mighty sea creature.", answer: "Leviathan", hint: "It starts with L.", accept: ["leviathan"], verse: "Job 41:1" },
        { level: 5, question: "Samson found honey in the carcass of this animal.", answer: "A lion", hint: "He killed it with his bare hands.", accept: ["lion","a lion"], verse: "Judges 14:8" },
        { level: 6, question: "Noah took this many pairs of every clean animal (Genesis 7:2).", answer: "Seven", hint: "More than the two of unclean animals.", accept: ["7","seven","seven pairs"], verse: "Genesis 7:2" },
        { level: 7, question: "Peter saw a vision of a sheet full of animals while staying in this city.", answer: "Joppa", hint: "Jonah also sailed from there.", accept: ["joppa","jaffa"], verse: "Acts 10:5-12" }
      ]
    },
    {
      name: "Psalms & Proverbs",
      questions: [
        { level: 1, question: "This king wrote many of the Psalms.", answer: "David", hint: "He played the harp.", accept: ["david","king david"], verse: "2 Samuel 23:1" },
        { level: 1, question: "The psalm that begins \"The Lord is my shepherd.\"", answer: "Psalm 23", hint: "It is in the 20s.", accept: ["23","psalm 23"], verse: "Psalm 23:1" },
        { level: 2, question: "The book of wise sayings, mostly from Solomon.", answer: "Proverbs", hint: "It comes after Psalms.", accept: ["proverbs"], verse: "Proverbs 1:1" },
        { level: 3, question: "\"The fear of the Lord is the beginning of\" this.", answer: "Wisdom", hint: "See Proverbs 9:10.", accept: ["wisdom","knowledge"], verse: "Proverbs 9:10" },
        { level: 3, question: "\"A gentle answer turns away\" this.", answer: "Wrath", hint: "See Proverbs 15:1.", accept: ["wrath","anger"], verse: "Proverbs 15:1" },
        { level: 3, question: "Psalm 150 ends: \"Let everything that has ___ praise the Lord.\"", answer: "Breath", hint: "You need it to live.", accept: ["breath"], verse: "Psalm 150:6" },
        { level: 4, question: "The longest chapter in the Bible.", answer: "Psalm 119", hint: "It has 176 verses.", accept: ["119","psalm 119"], verse: "Psalm 119" },
        { level: 4, question: "Proverbs 31 describes a wife of noble this.", answer: "Character", hint: "It is sometimes translated \"a virtuous woman.\"", accept: ["character","noble character","virtuous","virtuous woman"] },
        { level: 4, question: "\"Go to the ___, you sluggard; consider its ways and be wise.\"", answer: "The ant", hint: "It is a tiny, hard-working insect.", accept: ["ant","the ant","ants"], verse: "Proverbs 6:6" },
        { level: 5, question: "The shortest chapter in the Bible.", answer: "Psalm 117", hint: "It has only two verses.", accept: ["117","psalm 117"], verse: "Psalm 117" },
        { level: 6, question: "David wrote Psalm 51 after this prophet confronted him.", answer: "Nathan", hint: "He told David a story about a lamb.", accept: ["nathan"], verse: "2 Samuel 12:1" },
        { level: 6, question: "The book of Psalms is divided into this many \"books.\"", answer: "5", hint: "Like the books of Moses.", accept: ["5","five"] },
        { level: 7, question: "Psalm 119 has 22 sections named after the letters of this alphabet.", answer: "Hebrew", hint: "The Old Testament was written mostly in it.", accept: ["hebrew"], verse: "Psalm 119" },
        { level: 7, question: "Proverbs 31 begins with sayings of this king, taught by his mother.", answer: "Lemuel", hint: "It is not Solomon.", accept: ["lemuel","king lemuel"], verse: "Proverbs 31:1" }
      ]
    },
    {
      name: "Paul’s Letters",
      questions: [
        { level: 1, question: "Paul’s letter to the church in Rome.", answer: "Romans", hint: "It comes right after Acts.", accept: ["romans"], verse: "Romans 1:7" },
        { level: 2, question: "\"Love is patient, love is kind\" is in Paul’s first letter to the church in this city.", answer: "Corinth", hint: "The letters are called Corinthians.", accept: ["corinth","corinthians","1 corinthians"], verse: "1 Corinthians 13:4" },
        { level: 2, question: "Paul describes the \"armor of God\" in his letter to this church.", answer: "Ephesians", hint: "The city was Ephesus.", accept: ["ephesians","ephesus"], verse: "Ephesians 6:11" },
        { level: 3, question: "\"Rejoice in the Lord always. I will say it again: Rejoice!\"", answer: "Philippians", hint: "It was written to the church at Philippi.", accept: ["philippians","philippi"], verse: "Philippians 4:4" },
        { level: 3, question: "\"For all have sinned and fall short of the glory of God\" is in this letter.", answer: "Romans", hint: "It is chapter 3, verse 23.", accept: ["romans"], verse: "Romans 3:23" },
        { level: 3, question: "Paul told this young pastor, \"Don’t let anyone look down on you because you are young.\"", answer: "Timothy", hint: "It is in 1 Timothy 4:12.", accept: ["timothy"], verse: "1 Timothy 4:12" },
        { level: 4, question: "This short letter asks a master to welcome back his runaway slave.", answer: "Philemon", hint: "It has just one chapter.", accept: ["philemon"], verse: "Philemon 1:15-16" },
        { level: 4, question: "Paul’s hometown.", answer: "Tarsus", hint: "It was in Cilicia.", accept: ["tarsus"], verse: "Acts 22:3" },
        { level: 4, question: "Paul lists the \"fruit of the Spirit\" in this letter.", answer: "Galatians", hint: "Chapter 5.", accept: ["galatians"], verse: "Galatians 5:22-23" },
        { level: 5, question: "The runaway slave Paul writes about in Philemon.", answer: "Onesimus", hint: "His name means \"useful.\"", accept: ["onesimus"], verse: "Philemon 1:10" },
        { level: 5, question: "Paul left Titus on this island to appoint elders.", answer: "Crete", hint: "It is a large Greek island.", accept: ["crete"], verse: "Titus 1:5" },
        { level: 5, question: "Paul wrote that he had learned to be content in every situation in this letter.", answer: "Philippians", hint: "He wrote it from prison.", accept: ["philippians"], verse: "Philippians 4:11" },
        { level: 6, question: "The number of New Testament letters traditionally credited to Paul.", answer: "13", hint: "It is a baker’s dozen.", accept: ["13","thirteen"] },
        { level: 6, question: "In 2 Timothy, Paul says only this doctor is with him.", answer: "Luke", hint: "He also wrote Acts.", accept: ["luke"], verse: "2 Timothy 4:11" }
      ]
    },
    {
      name: "Bible or Not?",
      style: "exact",
      questions: [
        { level: 1, question: "Bible or not? “Love thy neighbour as thyself.”", answer: "Bible", hint: "Jesus called it the second greatest commandment.", verse: "Mark 12:31", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 1, question: "Bible or not? “An apple a day keeps the doctor away.”", answer: "Not the Bible", hint: "It’s advice about healthy eating, not scripture.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 1, question: "Bible or not? “In the beginning God created the heaven and the earth.”", answer: "Bible", hint: "It is the very first verse.", verse: "Genesis 1:1", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 2, question: "Bible or not? “God is love.”", answer: "Bible", hint: "It is in one of John’s letters.", verse: "1 John 4:8", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 2, question: "Bible or not? “Honesty is the best policy.”", answer: "Not the Bible", hint: "It’s an old English proverb.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 2, question: "Bible or not? “The truth shall make you free.”", answer: "Bible", hint: "Jesus said it to people who believed in him.", verse: "John 8:32", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 3, question: "Bible or not? “Pride goeth before destruction.”", answer: "Bible", hint: "It is in the book of wise sayings.", verse: "Proverbs 16:18", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 3, question: "Bible or not? “Blood is thicker than water.”", answer: "Not the Bible", hint: "It’s an old saying about family.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 3, question: "Bible or not? “Seek, and ye shall find.”", answer: "Bible", hint: "It is part of the Sermon on the Mount.", verse: "Matthew 7:7", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 3, question: "Bible or not? “Everything happens for a reason.”", answer: "Not the Bible", hint: "It sounds comforting, but it’s a modern saying.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 4, question: "Bible or not? “Cleanliness is next to godliness.”", answer: "Not the Bible", hint: "A famous preacher used it in a 1700s sermon.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 4, question: "Bible or not? “God helps those who help themselves.”", answer: "Not the Bible", hint: "A Founding Father made it famous in his almanac.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 4, question: "Bible or not? “The spirit indeed is willing, but the flesh is weak.”", answer: "Bible", hint: "Jesus said it in the garden of Gethsemane.", verse: "Matthew 26:41", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 4, question: "Bible or not? “Physician, heal thyself.”", answer: "Bible", hint: "Jesus quoted it as a proverb in Nazareth.", verse: "Luke 4:23", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 5, question: "Bible or not? “This too shall pass.”", answer: "Not the Bible", hint: "It’s an old Persian saying about a king’s ring.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 5, question: "Bible or not? “God works in mysterious ways.”", answer: "Not the Bible", hint: "It comes from a 1700s hymn by William Cowper.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 5, question: "Bible or not? “Money is the root of all evil.”", answer: "Not the Bible", hint: "Close, but one word is missing: the Bible says “the love of money” (1 Timothy 6:10).", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 5, question: "Bible or not? “I am escaped with the skin of my teeth.”", answer: "Bible", hint: "It was said by a man who lost almost everything.", verse: "Job 19:20", accept: ["bible", "in the bible", "yes", "its in the bible", "it is in the bible"] },
        { level: 5, question: "Bible or not? “To err is human, to forgive divine.”", answer: "Not the Bible", hint: "It’s from a 1711 poem by Alexander Pope.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] },
        { level: 5, question: "Bible or not? “Spare the rod, spoil the child.”", answer: "Not the Bible", hint: "It’s from a 1600s poem. Proverbs 13:24 has a similar idea in different words.", accept: ["not", "not the bible", "no", "not in the bible", "not bible", "its not", "it is not in the bible"] }
      ]
    },
    {
      name: "Scripture Snapshots",
      questions: [
        { level: 1, question: "What Bible story does this picture show?", image: "art:burning-bush", answer: "Moses and the burning bush", hint: "God spoke to him from it (Exodus 3).", accept: ["moses", "burning bush", "moses and the burning bush"], verse: "Exodus 3:2" },
        { level: 1, question: "What Bible story does this picture show?", image: "art:noahs-ark", answer: "Noah’s ark", hint: "God set a rainbow in the sky afterward (Genesis 9).", accept: ["noah", "noahs ark", "noah s ark", "the flood", "noah and the ark"], verse: "Genesis 9:13" },
        { level: 1, question: "What Bible story does this picture show?", image: "art:big-fish", answer: "Jonah and the big fish", hint: "He spent three days inside it (Jonah 1).", accept: ["jonah", "jonah and the whale", "jonah and the big fish"], verse: "Jonah 1:17" },
        { level: 1, question: "What Bible story does this picture show?", image: "art:manger-star", answer: "The birth of Jesus", hint: "It happened in Bethlehem (Luke 2).", accept: ["jesus birth", "birth of jesus", "christmas", "nativity", "jesus in the manger", "baby jesus"], verse: "Luke 2:7" },
        { level: 1, question: "What Bible story does this picture show?", image: "art:sling-stones", answer: "David and Goliath", hint: "A shepherd boy faced a giant (1 Samuel 17).", accept: ["david and goliath", "david", "goliath"], verse: "1 Samuel 17:40" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:lions-den", answer: "Daniel in the lions’ den", hint: "He kept praying three times a day (Daniel 6).", accept: ["daniel", "daniel in the lions den", "lions den"], verse: "Daniel 6:16" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:tower-babel", answer: "The Tower of Babel", hint: "God confused their language (Genesis 11).", accept: ["tower of babel", "babel"], verse: "Genesis 11:4" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:empty-tomb", answer: "Jesus’ resurrection (the empty tomb)", hint: "The stone was rolled away (Matthew 28).", accept: ["resurrection", "empty tomb", "easter", "jesus rose", "the resurrection"], verse: "Matthew 28:6" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:loaves-fishes", answer: "Feeding of the 5,000", hint: "Five loaves and two fish (John 6).", accept: ["feeding of the 5000", "feeding the 5000", "feeding of the five thousand", "five loaves and two fish", "loaves and fishes"], verse: "John 6:9" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:tree-serpent", answer: "Adam and Eve and the forbidden fruit", hint: "It happened in the Garden of Eden (Genesis 3).", accept: ["adam and eve", "the fall", "forbidden fruit", "garden of eden", "eve and the serpent"], verse: "Genesis 3:1-6" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:red-sea", answer: "Parting of the Red Sea", hint: "Israel crossed on dry ground (Exodus 14).", accept: ["red sea", "parting of the red sea", "crossing the red sea", "moses parts the red sea"], verse: "Exodus 14:21-22" },
        { level: 2, question: "What Bible story does this picture show?", image: "art:last-supper", answer: "The Last Supper", hint: "Jesus shared bread and wine with his disciples the night before he died (Luke 22).", accept: ["last supper", "the last supper", "lords supper", "passover meal"], verse: "Luke 22:19-20" },
        { level: 3, question: "What Bible story does this picture show?", image: "art:coat-colors", answer: "Joseph’s coat of many colors", hint: "A gift from his father Jacob (Genesis 37).", accept: ["joseph", "josephs coat", "coat of many colors", "joseph s coat"], verse: "Genesis 37:3" },
        { level: 3, question: "What Bible story does this picture show?", image: "art:stone-tablets", answer: "The Ten Commandments", hint: "Moses brought them down from Mount Sinai (Exodus 20).", accept: ["ten commandments", "10 commandments", "the law", "moses"], verse: "Exodus 31:18" },
        { level: 3, question: "What Bible story does this picture show?", image: "art:jericho-walls", answer: "The walls of Jericho", hint: "Joshua’s army marched and blew trumpets (Joshua 6).", accept: ["jericho", "walls of jericho", "battle of jericho", "joshua"], verse: "Joshua 6:20" },
        { level: 3, question: "What Bible story does this picture show?", image: "art:water-wine", answer: "Jesus turns water into wine", hint: "His first miracle, at a wedding in Cana (John 2).", accept: ["water into wine", "wedding at cana", "cana", "turning water into wine"], verse: "John 2:9" },
        { level: 3, question: "What Bible story does this picture show?", image: "art:baby-moses", answer: "Baby Moses in the basket", hint: "His mother hid him in the reeds of the Nile, and Pharaoh’s daughter found him (Exodus 2).", accept: ["baby moses", "moses in the basket", "moses in the reeds", "moses in the nile", "moses"], verse: "Exodus 2:3" },
        { level: 3, question: "What Bible story does this picture show?", image: "art:calm-storm", answer: "Jesus calms the storm", hint: "He said, “Quiet! Be still!” and the wind and waves obeyed (Mark 4).", accept: ["jesus calms the storm", "calming the storm", "jesus stills the storm", "calms the sea"], verse: "Mark 4:39" },
        { level: 4, question: "What Bible story does this picture show?", image: "art:ram-thicket", answer: "Abraham and Isaac (the ram in the thicket)", hint: "God provided a sacrifice (Genesis 22).", accept: ["abraham and isaac", "abraham", "isaac", "ram in the thicket", "abraham sacrifices isaac"], verse: "Genesis 22:13" },
        { level: 4, question: "What Bible story does this picture show?", image: "art:golden-calf", answer: "The golden calf", hint: "The people made it while Moses was on the mountain (Exodus 32).", accept: ["golden calf", "the golden calf", "aaron"], verse: "Exodus 32:4" },
        { level: 4, question: "What Bible story does this picture show?", image: "art:fiery-furnace", answer: "The fiery furnace", hint: "A fourth figure appeared with the three friends (Daniel 3).", accept: ["fiery furnace", "shadrach meshach and abednego", "shadrach", "meshach", "abednego", "the furnace"], verse: "Daniel 3:25" },
        { level: 4, question: "What Bible story does this picture show?", image: "art:samson-pillars", answer: "Samson pushing down the pillars", hint: "His strength returned one last time (Judges 16).", accept: ["samson", "samson and the pillars", "samson and delilah"], verse: "Judges 16:29-30" },
        { level: 5, question: "What Bible story does this picture show?", image: "art:gideon-fleece", answer: "Gideon’s fleece", hint: "He asked God for a sign with dew (Judges 6).", accept: ["gideon", "gideons fleece", "gideon s fleece", "the fleece"], verse: "Judges 6:37-38" },
        { level: 5, question: "What Bible story does this picture show?", image: "art:zacchaeus-tree", answer: "Zacchaeus in the sycamore tree", hint: "A short tax collector wanted to see Jesus (Luke 19).", accept: ["zacchaeus", "zaccheus"], verse: "Luke 19:4" },
        { level: 5, question: "What Bible story does this picture show?", image: "art:jacobs-ladder", answer: "Jacob’s ladder", hint: "He dreamed of angels going up and down (Genesis 28).", accept: ["jacobs ladder", "jacob s ladder", "jacob", "jacobs dream"], verse: "Genesis 28:12" },
        { level: 5, question: "What Bible story does this picture show?", image: "art:chariot-fire", answer: "Elijah taken up in a chariot of fire", hint: "Elisha watched him go (2 Kings 2).", accept: ["elijah", "chariot of fire", "elijah and the chariot", "elijah taken to heaven"], verse: "2 Kings 2:11" },
        { level: 5, question: "What Bible story does this picture show?", image: "art:rooster-dawn", answer: "Peter denies Jesus", hint: "Before the rooster crowed, this disciple said three times he didn’t know Jesus (Luke 22).", accept: ["peter denies jesus", "peters denial", "peter s denial", "denial of peter", "peter"], verse: "Luke 22:60-61" },
        { level: 6, question: "What Bible story does this picture show?", image: "art:balaam-donkey", answer: "Balaam’s talking donkey", hint: "An angel stood in the road with a sword (Numbers 22).", accept: ["balaam", "balaams donkey", "balaam s donkey", "talking donkey"], verse: "Numbers 22:28" },
        { level: 6, question: "What Bible story does this picture show?", image: "art:salt-pillar", answer: "Lot’s wife turns into a pillar of salt", hint: "She looked back at a burning city (Genesis 19).", accept: ["lots wife", "lot s wife", "pillar of salt", "sodom and gomorrah", "lot"], verse: "Genesis 19:26" },
        { level: 6, question: "What Bible story does this picture show?", image: "art:pentecost", answer: "Pentecost", hint: "Tongues of fire rested on the believers, and they spoke in other languages (Acts 2).", accept: ["pentecost", "day of pentecost", "holy spirit comes", "tongues of fire"], verse: "Acts 2:3-4" },
        { level: 7, question: "What Bible story does this picture show?", image: "art:bronze-serpent", answer: "The bronze serpent", hint: "People who looked at it were healed (Numbers 21).", accept: ["bronze serpent", "bronze snake", "brass serpent", "moses and the bronze serpent"], verse: "Numbers 21:9" },
        { level: 7, question: "What Bible story does this picture show?", image: "art:handwriting-wall", answer: "The writing on the wall", hint: "King Belshazzar’s feast (Daniel 5).", accept: ["writing on the wall", "handwriting on the wall", "belshazzar", "mene mene tekel", "belshazzars feast"], verse: "Daniel 5:5" }
      ]
    },
    {
      name: "Emoji Testament",
      style: "emoji",
      questions: [
        { level: 1, question: "🌧️🚢🐘🦒🐑🌈", answer: "Noah’s ark", hint: "Genesis 6–9.", accept: ["noahs ark", "noah", "the flood"], verse: "Genesis 7:1" },
        { level: 1, question: "🐋🙏🏙️", answer: "Jonah and the big fish", hint: "He ran from God but ended up in Nineveh.", accept: ["jonah", "jonah and the whale", "jonah and the big fish"], verse: "Jonah 1:17" },
        { level: 1, question: "👶⭐🐑🐄🎁🎁🎁", answer: "The birth of Jesus", hint: "Luke 2.", accept: ["birth of jesus", "christmas", "nativity", "jesus birth"], verse: "Luke 2:7" },
        { level: 1, question: "👦🪨➡️🧔‍♂️⬆️⬆️😵", answer: "David and Goliath", hint: "1 Samuel 17.", accept: ["david and goliath", "david", "goliath"], verse: "1 Samuel 17:49" },
        { level: 1, question: "👫🌳🍎🐍", answer: "Adam and Eve", hint: "The first sin, in the garden.", accept: ["adam and eve", "the fall", "garden of eden"], verse: "Genesis 3:6" },
        { level: 2, question: "🙏🦁🦁🦁😇", answer: "Daniel in the lions’ den", hint: "Daniel 6.", accept: ["daniel", "lions den", "daniel in the lions den"], verse: "Daniel 6:16" },
        { level: 2, question: "🍞🍞🍞🍞🍞🐟🐟➡️👨‍👩‍👧‍👦✖️5️⃣0️⃣0️⃣0️⃣", answer: "Feeding of the 5,000", hint: "Everyone ate and there were leftovers.", accept: ["feeding of the 5000", "feeding the 5000", "loaves and fishes"], verse: "John 6:9-13" },
        { level: 2, question: "🌊🪄🌊🚶‍♂️🚶‍♀️🚶", answer: "Parting of the Red Sea", hint: "Exodus 14.", accept: ["red sea", "parting of the red sea", "crossing the red sea"], verse: "Exodus 14:21-22" },
        { level: 2, question: "🧱🧱🏗️☁️🗣️❓", answer: "The Tower of Babel", hint: "Genesis 11.", accept: ["tower of babel", "babel"], verse: "Genesis 11:4-9" },
        { level: 2, question: "🪨➡️🚪✝️😇🌅", answer: "The resurrection", hint: "Early on the first day of the week.", accept: ["resurrection", "easter", "empty tomb", "jesus rose"], verse: "Matthew 28:6" },
        { level: 2, question: "🍞🍷1️⃣3️⃣🍽️🌙", answer: "The Last Supper", hint: "Jesus’ final meal with his disciples.", accept: ["last supper", "the last supper", "lords supper"], verse: "Luke 22:14-20" },
        { level: 3, question: "🎺🎺🎺🔄7️⃣🧱💥", answer: "The walls of Jericho", hint: "Joshua 6.", accept: ["jericho", "walls of jericho", "battle of jericho"], verse: "Joshua 6:20" },
        { level: 3, question: "👦💰➡️🎉🐖😢➡️🏠🤗", answer: "The prodigal son", hint: "A father welcomes a son home (Luke 15).", accept: ["prodigal son", "the prodigal son", "lost son"], verse: "Luke 15:20" },
        { level: 3, question: "🤕🛣️🚶😒🚶😒🫏🤝", answer: "The Good Samaritan", hint: "Luke 10.", accept: ["good samaritan", "the good samaritan"], verse: "Luke 10:33-34" },
        { level: 3, question: "💍🎉🏺💧➡️🍷", answer: "Water into wine", hint: "The wedding at Cana (John 2).", accept: ["water into wine", "wedding at cana", "cana"], verse: "John 2:9" },
        { level: 3, question: "🪦4️⃣📅➡️🗣️🚶‍♂️", answer: "Jesus raises Lazarus", hint: "John 11.", accept: ["lazarus", "raising of lazarus", "jesus raises lazarus"], verse: "John 11:43-44" },
        { level: 3, question: "🔥🌳🗣️👞⬇️", answer: "Moses and the burning bush", hint: "God told him to take off his sandals.", accept: ["burning bush", "moses"], verse: "Exodus 3:5" },
        { level: 3, question: "👶🧺🌊🌾👸", answer: "Baby Moses in the basket", hint: "Pharaoh’s daughter found him in the Nile.", accept: ["baby moses", "moses in the basket", "moses in the reeds", "moses"], verse: "Exodus 2:3-5" },
        { level: 3, question: "⛵🌊⛈️😱😴➡️🗣️🤫🌤️", answer: "Jesus calms the storm", hint: "“Quiet! Be still!” (Mark 4).", accept: ["jesus calms the storm", "calming the storm", "jesus stills the storm"], verse: "Mark 4:39" },
        { level: 4, question: "💪💇‍♂️✂️😩🏛️💥", answer: "Samson", hint: "Delilah was involved (Judges 16).", accept: ["samson", "samson and delilah"], verse: "Judges 16:29-30" },
        { level: 4, question: "🤏🧔🌳👀➡️🏠🍽️", answer: "Zacchaeus", hint: "A tax collector climbed up to see Jesus (Luke 19).", accept: ["zacchaeus", "zaccheus"], verse: "Luke 19:4-5" },
        { level: 4, question: "🔥🔥🔥🧍🧍🧍➕😇", answer: "The fiery furnace", hint: "Daniel 3.", accept: ["fiery furnace", "shadrach meshach and abednego"], verse: "Daniel 3:25" },
        { level: 4, question: "🌊🚶‍♂️👀😨🫴", answer: "Peter walks on water", hint: "Matthew 14.", accept: ["peter walks on water", "walking on water", "peter"], verse: "Matthew 14:29" },
        { level: 4, question: "🩸🐸🦟🪰🐄🤒🧊🦗🌑👶", answer: "The ten plagues of Egypt", hint: "“Let my people go!”", accept: ["ten plagues", "the plagues", "plagues of egypt", "10 plagues"], verse: "Exodus 7\u201312" },
        { level: 4, question: "🐑✖️9️⃣9️⃣➕1️⃣🔍🎉", answer: "The lost sheep", hint: "A shepherd leaves the ninety-nine to find the one.", accept: ["lost sheep", "the lost sheep", "parable of the lost sheep"], verse: "Luke 15:4" },
        { level: 5, question: "😴🪨🪜👼👼", answer: "Jacob’s ladder", hint: "Genesis 28.", accept: ["jacobs ladder", "jacob", "jacob s ladder"], verse: "Genesis 28:12" },
        { level: 5, question: "🐑🧶💧☀️", answer: "Gideon’s fleece", hint: "Judges 6.", accept: ["gideon", "gideons fleece", "gideon s fleece"], verse: "Judges 6:37-40" },
        { level: 5, question: "🔥🐎🛞🌪️⬆️", answer: "Elijah taken up to heaven", hint: "2 Kings 2.", accept: ["elijah", "chariot of fire"], verse: "2 Kings 2:11" },
        { level: 5, question: "👑👸🙏🎉🪢", answer: "Esther saves her people", hint: "Esther 7.", accept: ["esther", "queen esther"], verse: "Esther 7:3" },
        { level: 5, question: "🧔🙅‍♂️3️⃣🔥🐓😭", answer: "Peter denies Jesus", hint: "The rooster crowed after the third time.", accept: ["peter denies jesus", "peters denial", "peter s denial", "peter"], verse: "Luke 22:60-62" },
        { level: 5, question: "💰3️⃣0️⃣🪙💋🌳", answer: "Judas betrays Jesus", hint: "He was paid thirty pieces of silver.", accept: ["judas", "judas betrays jesus", "judas betrayal", "betrayal of jesus"], verse: "Matthew 26:15" },
        { level: 5, question: "🐴🛣️💡😵‍💫👁️❌➡️👁️✅", answer: "Paul’s conversion", hint: "It happened on the road to Damascus.", accept: ["pauls conversion", "paul s conversion", "saul s conversion", "road to damascus", "saul", "paul"], verse: "Acts 9:3-9" },
        { level: 6, question: "🫏🗣️⚔️👼", answer: "Balaam’s donkey", hint: "Numbers 22.", accept: ["balaam", "balaams donkey", "talking donkey"], verse: "Numbers 22:28" },
        { level: 6, question: "🍷👑✋✍️🧱😱", answer: "The writing on the wall", hint: "Daniel 5.", accept: ["writing on the wall", "belshazzar", "handwriting on the wall"], verse: "Daniel 5:5" },
        { level: 6, question: "⛓️😴👼🔓🚪➡️🚪✊😮", answer: "Peter freed from prison", hint: "Rhoda was too excited to open the door (Acts 12).", accept: ["peter freed from prison", "peter in prison", "peter escapes prison"], verse: "Acts 12:7-14" },
        { level: 6, question: "🌾👩‍🌾👣👵🤝🧔", answer: "Ruth and Boaz", hint: "She gleaned in his field (Ruth 2).", accept: ["ruth", "ruth and boaz", "ruth and naomi"], verse: "Ruth 2:3" },
        { level: 6, question: "🔥🏙️🏃‍♀️🔙👀🧂", answer: "Lot’s wife", hint: "She looked back at Sodom.", accept: ["lots wife", "lot s wife", "pillar of salt", "sodom and gomorrah"], verse: "Genesis 19:26" },
        { level: 6, question: "🍲😋👨‍🦰➡️🎁🧔📜", answer: "Esau sells his birthright", hint: "He traded it for a bowl of stew.", accept: ["esau", "esau sells his birthright", "esau and jacob", "birthright", "jacob and esau"], verse: "Genesis 25:33-34" },
        { level: 6, question: "🌬️🔥👅🗣️🌍🕊️", answer: "Pentecost", hint: "Acts 2.", accept: ["pentecost", "day of pentecost", "holy spirit comes"], verse: "Acts 2:3-4" },
        { level: 6, question: "🤔✋👀🕳️🙌", answer: "Doubting Thomas", hint: "“Unless I see the nail marks in his hands…”", accept: ["doubting thomas", "thomas"], verse: "John 20:25-27" },
        { level: 7, question: "⛰️🐂🐂🔥❓💧💧💧🔥✅", answer: "Elijah on Mount Carmel", hint: "He faced 450 prophets of Baal.", accept: ["elijah on mount carmel", "mount carmel", "elijah and the prophets of baal", "elijah"], verse: "1 Kings 18:38" },
        { level: 7, question: "🌾🌾🙇🌞🌙⭐✖️1️⃣1️⃣🙇", answer: "Joseph’s dreams", hint: "His brothers’ sheaves bowed down to his.", accept: ["josephs dreams", "joseph s dreams", "joseph"], verse: "Genesis 37:7-9" },
        { level: 7, question: "👵🪙🪙⛪💯", answer: "The widow’s offering", hint: "She gave two small coins, all she had.", accept: ["widows offering", "widow s offering", "widows mite", "widow s mite", "the widows mite"], verse: "Mark 12:42-44" },
        { level: 7, question: "☁️🍞⬇️🏜️🌅✖️4️⃣0️⃣", answer: "Manna from heaven", hint: "Israel ate it in the wilderness for forty years.", accept: ["manna", "manna from heaven", "bread from heaven"], verse: "Exodus 16:35" }
      ]
    },
    {
      name: "Old Testament",
      questions: [
        { level: 1, question: "The first man God created.", answer: "Adam", hint: "God formed him from the dust (Genesis 2).", accept: ["adam"], verse: "Genesis 2:7" },
        { level: 1, question: "God gave Moses these on Mount Sinai.", answer: "The Ten Commandments", hint: "They were written on stone tablets.", accept: ["ten commandments", "10 commandments", "the law", "tablets"], verse: "Exodus 20:1-17" },
        { level: 1, question: "The giant that David defeated with a sling.", answer: "Goliath", hint: "He was a Philistine champion.", accept: ["goliath"], verse: "1 Samuel 17:49-50" },
        { level: 1, question: "Adam and Eve’s son who killed his brother Abel.", answer: "Cain", hint: "He was a farmer (Genesis 4).", accept: ["cain"], verse: "Genesis 4:8" },
        { level: 2, question: "The number of days God worked creating the world before resting.", answer: "Six", hint: "He rested on the seventh.", accept: ["6", "six"], verse: "Genesis 2:2" },
        { level: 2, question: "Joseph’s father, who gave him a special coat.", answer: "Jacob", hint: "He was also called Israel.", accept: ["jacob", "israel"], verse: "Genesis 37:3" },
        { level: 2, question: "King David’s son, famous for asking God for wisdom.", answer: "Solomon", hint: "He built the first temple.", accept: ["solomon"], verse: "1 Kings 3:9" },
        { level: 2, question: "This prophet ran from God and ended up in a great fish.", answer: "Jonah", hint: "He was sent to Nineveh.", accept: ["jonah"], verse: "Jonah 1:17" },
        { level: 3, question: "\"Your people will be my people and your God my God.\" Who said it?", answer: "Ruth", hint: "She said it to Naomi.", accept: ["ruth"], verse: "Ruth 1:16" },
        { level: 3, question: "As a boy in the temple, he heard God call his name at night.", answer: "Samuel", hint: "Eli was his teacher.", accept: ["samuel"], verse: "1 Samuel 3:10" },
        { level: 3, question: "This Jewish queen of Persia risked her life to save her people.", answer: "Esther", hint: "Her cousin was Mordecai.", accept: ["esther"], verse: "Esther 4:16" },
        { level: 3, question: "Abraham’s wife, who laughed when told she would have a son.", answer: "Sarah", hint: "Her name used to be Sarai.", accept: ["sarah", "sarai"], verse: "Genesis 18:12" },
        { level: 4, question: "The number of sons Jacob had, who became the tribes of Israel.", answer: "Twelve", hint: "Same as the number of disciples.", accept: ["12", "twelve"], verse: "Genesis 35:22-26" },
        { level: 4, question: "This Babylonian king dreamed of a statue made of gold, silver, bronze, iron and clay.", answer: "Nebuchadnezzar", hint: "Daniel interpreted the dream (Daniel 2).", accept: ["nebuchadnezzar"], verse: "Daniel 2:31-33" },
        { level: 4, question: "Isaac’s wife, mother of Jacob and Esau.", answer: "Rebekah", hint: "She was found at a well.", accept: ["rebekah", "rebecca"], verse: "Genesis 25:20-26" },
        { level: 4, question: "This book tells of a man who lost almost everything but stayed faithful to God.", answer: "Job", hint: "It comes right before Psalms.", accept: ["job"], verse: "Job 1:20-22" },
        { level: 5, question: "The first five books of the Bible are called by this Greek name.", answer: "The Pentateuch", hint: "\"Penta\" means five.", accept: ["pentateuch", "the pentateuch", "torah", "the torah"] },
        { level: 5, question: "The priest who raised young Samuel in the temple at Shiloh.", answer: "Eli", hint: "His sons were Hophni and Phinehas.", accept: ["eli"], verse: "1 Samuel 2:11" },
        { level: 5, question: "King David arranged for this soldier’s death to cover up his sin with Bathsheba.", answer: "Uriah", hint: "He was a Hittite.", accept: ["uriah", "uriah the hittite"], verse: "2 Samuel 11:15" },
        { level: 5, question: "The prophet Elijah confronted King Ahab after Jezebel had this man killed for his vineyard.", answer: "Naboth", hint: "See 1 Kings 21.", accept: ["naboth"], verse: "1 Kings 21:17-19" },
        { level: 6, question: "This Persian king let the Jewish exiles go home to rebuild the temple.", answer: "Cyrus", hint: "Isaiah mentions him by name.", accept: ["cyrus", "cyrus the great"], verse: "Ezra 1:1-3" },
        { level: 6, question: "This scribe read the Law aloud to the people after they returned from exile.", answer: "Ezra", hint: "A book of the Bible is named after him.", accept: ["ezra"], verse: "Nehemiah 8:2-3" },
        { level: 6, question: "Ruth’s husband Boaz was the great-grandfather of this king.", answer: "David", hint: "Ruth’s son was Obed, father of Jesse.", accept: ["david", "king david"], verse: "Ruth 4:17" },
        { level: 6, question: "God told this prophet to lie on his left side for 390 days.", answer: "Ezekiel", hint: "He was a prophet in exile in Babylon.", accept: ["ezekiel"], verse: "Ezekiel 4:4-5" },
        { level: 7, question: "This king of Judah reigned 55 years, the longest of any king of Judah.", answer: "Manasseh", hint: "He was Hezekiah’s son (2 Kings 21).", accept: ["manasseh"], verse: "2 Kings 21:1" },
        { level: 7, question: "Moses’ father, named in Exodus 6.", answer: "Amram", hint: "His mother was Jochebed.", accept: ["amram"], verse: "Exodus 6:20" },
        { level: 7, question: "The left-handed judge who rescued Israel from Moab.", answer: "Ehud", hint: "He made a double-edged sword (Judges 3).", accept: ["ehud"], verse: "Judges 3:15" }
      ]
    },
    {
      name: "New Testament",
      questions: [
        { level: 1, question: "He baptized Jesus in the Jordan River.", answer: "John the Baptist", hint: "He wore camel’s hair and ate locusts.", accept: ["john the baptist", "john"], verse: "Matthew 3:13" },
        { level: 1, question: "The prayer Jesus taught that begins \"Our Father...\"", answer: "The Lord’s Prayer", hint: "It is in Matthew 6.", accept: ["lords prayer", "the lords prayer", "our father"], verse: "Matthew 6:9-13" },
        { level: 1, question: "Jesus rose from the dead on this day after he died.", answer: "The third day", hint: "It was a Sunday.", accept: ["third", "3rd", "the third day", "third day", "3"], verse: "1 Corinthians 15:4" },
        { level: 1, question: "Mary’s husband, Jesus’ earthly father.", answer: "Joseph", hint: "He was a carpenter.", accept: ["joseph"], verse: "Matthew 1:16" },
        { level: 2, question: "The four books that tell the story of Jesus’ life.", answer: "The Gospels", hint: "Matthew, Mark, Luke and John.", accept: ["gospels", "the gospels", "matthew mark luke and john"] },
        { level: 2, question: "The garden where Jesus prayed before he was arrested.", answer: "Gethsemane", hint: "It was on the Mount of Olives.", accept: ["gethsemane", "garden of gethsemane"], verse: "Matthew 26:36" },
        { level: 2, question: "This apostle wrote more New Testament letters than anyone else.", answer: "Paul", hint: "He used to be called Saul.", accept: ["paul"] },
        { level: 2, question: "Jesus called himself the Good ___.", answer: "Shepherd", hint: "He lays down his life for the sheep (John 10).", accept: ["shepherd", "the good shepherd"], verse: "John 10:11" },
        { level: 3, question: "Jesus’ teaching in Matthew 5–7 is known by this name.", answer: "The Sermon on the Mount", hint: "It includes the Beatitudes.", accept: ["sermon on the mount", "the sermon on the mount"], verse: "Matthew 5:1-2" },
        { level: 3, question: "\"Blessed are the poor in ___, for theirs is the kingdom of heaven.\"", answer: "Spirit", hint: "It is the first Beatitude.", accept: ["spirit"], verse: "Matthew 5:3" },
        { level: 3, question: "The two sisters of Lazarus.", answer: "Mary and Martha", hint: "One sat at Jesus’ feet; one served.", accept: ["mary and martha", "martha and mary"], verse: "John 11:1" },
        { level: 3, question: "The Roman governor who sentenced Jesus.", answer: "Pontius Pilate", hint: "He washed his hands before the crowd.", accept: ["pilate", "pontius pilate"], verse: "Matthew 27:26" },
        { level: 4, question: "The doctor who wrote the book of Acts.", answer: "Luke", hint: "He also wrote a Gospel.", accept: ["luke"], verse: "Acts 1:1" },
        { level: 4, question: "This Pharisee came to Jesus at night and heard \"You must be born again.\"", answer: "Nicodemus", hint: "It is in John 3.", accept: ["nicodemus"], verse: "John 3:3" },
        { level: 4, question: "The number of churches Jesus addresses in Revelation 2–3.", answer: "Seven", hint: "Ephesus is the first.", accept: ["7", "seven"], verse: "Revelation 1:11" },
        { level: 4, question: "The Ethiopian official was reading this prophet when Philip met him.", answer: "Isaiah", hint: "The passage was about a lamb led to slaughter.", accept: ["isaiah"], verse: "Acts 8:32" },
        { level: 5, question: "In Revelation, the church that was \"lukewarm.\"", answer: "Laodicea", hint: "Neither hot nor cold (Revelation 3).", accept: ["laodicea"], verse: "Revelation 3:15-16" },
        { level: 5, question: "This tentmaking couple worked with Paul in Corinth and Ephesus.", answer: "Priscilla and Aquila", hint: "They taught Apollos too.", accept: ["priscilla and aquila", "aquila and priscilla", "priscilla", "aquila"], verse: "Acts 18:2-3" },
        { level: 5, question: "The disciple also called Didymus, which means \"twin.\"", answer: "Thomas", hint: "He wanted to see the nail marks.", accept: ["thomas"], verse: "John 11:16" },
        { level: 5, question: "He was chosen as one of the seven to serve and became the first Christian martyr.", answer: "Stephen", hint: "He saw heaven open as he died.", accept: ["stephen"], verse: "Acts 6:5" },
        { level: 6, question: "This respected teacher of the Law told the council to leave the apostles alone (Acts 5).", answer: "Gamaliel", hint: "Paul once studied under him.", accept: ["gamaliel"], verse: "Acts 5:34-39" },
        { level: 6, question: "Paul defended himself before King Agrippa and this Roman governor.", answer: "Festus", hint: "He said, \"Paul, you are out of your mind!\"", accept: ["festus", "porcius festus"], verse: "Acts 26:24" },
        { level: 6, question: "The book that comes right after Philemon.", answer: "Hebrews", hint: "Its author is not named.", accept: ["hebrews"] },
        { level: 7, question: "Paul struck this sorcerer blind on the island of Cyprus.", answer: "Elymas", hint: "He was also called Bar-Jesus (Acts 13).", accept: ["elymas", "bar jesus", "bar-jesus"], verse: "Acts 13:8-11" },
        { level: 7, question: "This prophet tied his own hands and feet with Paul’s belt as a warning (Acts 21).", answer: "Agabus", hint: "He also predicted a famine.", accept: ["agabus"], verse: "Acts 21:10-11" },
        { level: 7, question: "Paul left this co-worker sick in Miletus (2 Timothy 4).", answer: "Trophimus", hint: "He was from Asia.", accept: ["trophimus"], verse: "2 Timothy 4:20" }
      ]
    }
  ],
  finals: [
    { category: "The Disciples", question: "Before following Jesus, this disciple was a tax collector. The first Gospel carries his name.", answer: "Matthew", hint: "He was also called Levi.", accept: ["matthew","levi"], verse: "Matthew 9:9" },
    { category: "Last Words", question: "The apostle John received the vision in the book of Revelation while on this island.", answer: "Patmos", hint: "It is in the Aegean Sea.", accept: ["patmos"], verse: "Revelation 1:9" },
    { category: "Holy Places", question: "Jesus prayed in this garden on the night he was arrested.", answer: "Gethsemane", hint: "It is on the Mount of Olives.", accept: ["gethsemane","garden of gethsemane"], verse: "Matthew 26:36" },
    { category: "Kings", question: "This Babylonian king threw three young men into a fiery furnace.", answer: "Nebuchadnezzar", hint: "He also had a dream about a giant statue.", accept: ["nebuchadnezzar","nebuchadnezzer"], verse: "Daniel 3:19-20" },
    { category: "The Early Church", question: "Followers of Jesus were first called \"Christians\" in this city.", answer: "Antioch", hint: "See Acts 11:26.", accept: ["antioch"], verse: "Acts 11:26" },
    { category: "Prophets", question: "God told this prophet to marry Gomer as a picture of his faithful love.", answer: "Hosea", hint: "His book is the first of the minor prophets.", accept: ["hosea"], verse: "Hosea 1:2-3" },
    { category: "The Cross", question: "This man was forced to carry Jesus’ cross.", answer: "Simon of Cyrene", hint: "His first name matches Peter’s original name.", accept: ["simon of cyrene","simon"], verse: "Mark 15:21" },
    { category: "Long Lives", question: "The oldest person recorded in the Bible, he lived 969 years.", answer: "Methuselah", hint: "He was Noah’s grandfather.", accept: ["methuselah"], verse: "Genesis 5:27" },
    { category: "Bible Firsts", question: "The first person in the Bible to die, killed by his brother.", answer: "Abel", hint: "His brother was Cain.", accept: ["abel"], verse: "Genesis 4:8" },
    { category: "Paul’s Journeys", question: "Paul and Silas sang hymns at midnight in a jail in this city before an earthquake.", answer: "Philippi", hint: "It is in Acts 16.", accept: ["philippi"], verse: "Acts 16:25-26" },
    { category: "Kings", question: "This king of Babylon saw a hand write on the wall during his feast.", answer: "Belshazzar", hint: "It is in Daniel 5.", accept: ["belshazzar"], verse: "Daniel 5:5" },
    { category: "Women of the Bible", question: "A Moabite woman, she is the great-grandmother of King David.", answer: "Ruth", hint: "A book of the Bible is named after her.", accept: ["ruth"], verse: "Ruth 4:13-17" }
  ],
  /*
    SPOTIFY SONGS FROM YOUR PLAYLISTS
    ---------------------------------
    1. Paste your playlist's song links into worshipLinks below.
       Quick way: in the Spotify desktop app, open the playlist, click one song,
       press Ctrl+A (Cmd+A on Mac), then Ctrl+C (Cmd+C), and paste. Keep them in
       playlist order; "n" below is each song's position in the playlist.
       Paste them as one long block of text between the backticks ` `.
    2. Songs with a link turn into these categories:
         Guess That Song          (worship list, plays the chorus area)
         Who Sings It?            (worship list, name the artist)
       Add artistLevel to a worship song to set how hard its artist is to name.
       Each category needs at least 5 songs with links to appear.
    3. Clips start where the most upbeat part usually is: worship songs about 45%
       of the way in (the fuller second chorus). Add start: 65 (seconds) to a song to set its clip start, and
       marks: ["1:05 Chorus", "2:40 Bridge"] to give it saved spots the host can
       jump to during a game.
       Every clip plays for 10 seconds.
  */
  spotify: {
    /* Theme song: plays on a loop in the lobby and on the board (not during questions).
       Paste any Spotify song link here to use a different theme song. */
    theme: "https://open.spotify.com/track/4qkYiZablQoG7f0Qu4Nd1c",

    worshipLinks: `
https://open.spotify.com/track/3s0h3pyKFrS3XX6ZLBPx6s
https://open.spotify.com/track/6VMT3SzIMbNoR5lsUsniQY
https://open.spotify.com/track/4G29gmjS7Z2nEFeM7FA6wx
https://open.spotify.com/track/3ngc7rGlfeFaskU90EWl4R
https://open.spotify.com/track/0lVYRIVjK77Z6uG2GgM8Kl
https://open.spotify.com/track/1oa8QzSaWAQ8zhFbeyqJlH
https://open.spotify.com/track/5Mw9bXG1dLNhbjofkVS2oR
https://open.spotify.com/track/3RBnnfWA4Q2AqNuwTDdDgz
https://open.spotify.com/track/2JEcE2v4tOpKzVZFjpLR59
https://open.spotify.com/track/1Hv54MWloXiAZDam1ez840
https://open.spotify.com/track/5aA2v6AQgFHsmZO87tiaec
https://open.spotify.com/track/1lEk3U3MzbDeL5MNHkE9JU
https://open.spotify.com/track/3QntQwzIBV704yqCHLLmyH
https://open.spotify.com/track/3kCNLcSSrtevQDAQfaWcTO
https://open.spotify.com/track/6eFGvG8mkvZJjhPx9wMZGc
https://open.spotify.com/track/2HFi7awvXr2IPFX1j2D9IA
https://open.spotify.com/track/0HKt9URk2klsxEqbXqAycM
https://open.spotify.com/track/398Dfg7EisARPcvixgrtuI
https://open.spotify.com/track/4YjjNHtEsTX6Af4mCTupT5
https://open.spotify.com/track/6L52op4ykljA5o3u0FSiB7
https://open.spotify.com/track/6WSFMa721PvfnspCRsGOMh
https://open.spotify.com/track/6iha1ZUpCGUJrrQLDSFYux
https://open.spotify.com/track/5C64H6dEsQ15bS9gp0D3Xr
https://open.spotify.com/track/40lKptao1hxVqA7fd1OOGp
https://open.spotify.com/track/40TejHtJdQkd1nIxKf43CL
https://open.spotify.com/track/7i2ZmmyLzE7NcFAJl30mKY
https://open.spotify.com/track/1kQRahBqpKWMAhsoqfEETp
https://open.spotify.com/track/17GmwQ9Q3MTAz05OokmNNB
https://open.spotify.com/track/5VUQsLff8A3ruAyCdTxqzg
https://open.spotify.com/track/7zuwaenG5AF0vG7o7kMduX
https://open.spotify.com/track/1V3eyBz3pfkn9lBOlfle4x
https://open.spotify.com/track/2lrHKMXyu8LTLxMorzJkTQ
https://open.spotify.com/track/6wa4KnRz7LjGeMkpIa1mAI
https://open.spotify.com/track/0jOSpB2zK2O0SNxj8ZT5lp
https://open.spotify.com/track/5t35FJYwzRt9MG3ae2O41L
https://open.spotify.com/track/0A84F87OSiCwAn38VQgNME
https://open.spotify.com/track/0jBu6T5GgOekdHuXA5hVQM
https://open.spotify.com/track/787cootcZRw5Xr47Of97AN
https://open.spotify.com/track/1mWdyqs6Zvg8b1lKjDc8yB
https://open.spotify.com/track/4EHWldZTas5KUyFtT0rQlY
https://open.spotify.com/track/2XEdrmqNM9ZQQ24ViuceB0
https://open.spotify.com/track/0VqMBJyeeRA4I6mSPO5uqZ
https://open.spotify.com/track/6HRU0CPcG0q3Dq8XVBWacL
https://open.spotify.com/track/1dtzjTkNecIRAL4X3u4CtL
https://open.spotify.com/track/2FJYXPlTmFPAjTwPS1bMnw
https://open.spotify.com/track/4908mwb34dqgcaxHeFjitw
https://open.spotify.com/track/6Dkou08rjWrgGijVmoAVZp
https://open.spotify.com/track/4KLj9QjEhJl2WU50mxRF9Z
https://open.spotify.com/track/4YZkx9hCBOdaI71lzKEnOx
https://open.spotify.com/track/6Dkou08rjWrgGijVmoAVZp
https://open.spotify.com/track/0UcyrdirFfmpzEKQJ47Ixr
https://open.spotify.com/track/73ZSUS3WLluxgASR1Hp74B
https://open.spotify.com/track/7zJg7aNCvTKW9EtG1Dvzkl
https://open.spotify.com/track/04ZzbJOLBEhaf8PVQuH96u
https://open.spotify.com/track/4F6KXBE38OBGPZsryUih1x
https://open.spotify.com/track/5y8qfDDccV2kEn4roGPter
https://open.spotify.com/track/0rH0mprtecH3grD9HFM5AD
https://open.spotify.com/track/2YgtXx9OVBOzja9Fckb4FY
https://open.spotify.com/track/4F7GcPH79KzsQfNphjtkGx
https://open.spotify.com/track/1N2fNKIlJJ6PQgcVD1GrBP
https://open.spotify.com/track/27uBwOJbW6kHsCbKGukxMK
https://open.spotify.com/track/3F6bUrxcmguP9Z5TJtA5DO
https://open.spotify.com/track/7HQn99HBIBHWkZfTMR8Kki
https://open.spotify.com/track/4v8GJxLdvUiN7R31cKcmNL
https://open.spotify.com/track/6QbbxQtijqLfUV90Vlm1Xh
https://open.spotify.com/track/0P8ANiSwsjYPx3zrmgN2Pv
https://open.spotify.com/track/4ajsTrCAjWtUPLU6xCy4u4
https://open.spotify.com/track/1sglby2dgYxUyca0wcBRhw
https://open.spotify.com/track/2t8NsMho4AegF1wMGxvgj5
https://open.spotify.com/track/49Z7hZgb3LzDy8RogfApYr
https://open.spotify.com/track/5ELZpvTDGorz9BIE9zaBoZ
https://open.spotify.com/track/5SVARIypUactzhS79rk6x8
https://open.spotify.com/track/0maqaTZLFWYs7Wj31XXtr2
https://open.spotify.com/track/4qxZb7aRiaqeQaRtwZe3S4
https://open.spotify.com/track/7quVSDsO37Qj7DpjbvoNwl
https://open.spotify.com/track/3g7bn09uvp9jkMAW0jXOms
https://open.spotify.com/track/2peHyuWwcc2Jtg6h9Xomu1
https://open.spotify.com/track/4QbRsEV2B7n7lm2EAWvvz4
https://open.spotify.com/track/7M7eanIuxFd9IgaB8rAP7b
https://open.spotify.com/track/3qEOommLiDYvxoZfsB3ONu
https://open.spotify.com/track/0ZpJVWYW5hJKGbpStrsCdD
https://open.spotify.com/track/6oizwmD5yHvlQUw0xvirrY
https://open.spotify.com/track/5GDtkgG9T1BDknHHyDtghv
https://open.spotify.com/track/0lJH7CAlpvdPgxUgGMY0ow
https://open.spotify.com/track/4Uvjwj4KWFlyCULhR9zeTx
https://open.spotify.com/track/5gHwf3DYciXuoFWstFswKj
https://open.spotify.com/track/4ElNxglBjcrASiGn58t9Jm
https://open.spotify.com/track/4ythCnq2XWIHzLqC9GnUE3
https://open.spotify.com/track/0bHcGi6iafYk4TUrqvDYya
https://open.spotify.com/track/5gdTKffU70UAJTlo7DopIs
https://open.spotify.com/track/6Z85UCEueQcgSyChlrEu5G
https://open.spotify.com/track/1B0kLftVGJsZqJZGdHbAWZ
https://open.spotify.com/track/17x1RzAOMVLuNnFqjdal2C
https://open.spotify.com/track/6sToW2vF0y8ZEXuHoMQob9
https://open.spotify.com/track/3x5nSZ4AU8GmneYroBfT1p
https://open.spotify.com/track/1yNInj2X42ZqQG6PUE57QV
https://open.spotify.com/track/2gdSplXjHbjMMfLcwl3Nku
https://open.spotify.com/track/5zuh9HIAzpBM5vqYGjeUYU
https://open.spotify.com/track/58nLgrkgVsVA4w5dWsFgR2
https://open.spotify.com/track/7fovCglnkftOlJmrIidq8r
https://open.spotify.com/track/1L4MQJhKyrw0XiF0n0C2hL
https://open.spotify.com/track/5O306r2a9Nl7rm5ZlaTqka
https://open.spotify.com/track/136M9HS7oXYyL6NGHhmYB9
https://open.spotify.com/track/0H4BGX7L8UfoD0g4wgXd0D
https://open.spotify.com/track/0sMr52Vbn6WMkYLupCmO2h
https://open.spotify.com/track/50f6Sc85lbQgEaOfQm41Zr
https://open.spotify.com/track/3NNm7maZCjauZbXTsbXRj2
https://open.spotify.com/track/0aZFEiDKLK2B4gzPaGCZVm
https://open.spotify.com/track/7yu4816uyIqXiPvALxL44y
https://open.spotify.com/track/0fukHGuIvc2NQEFCkI2owi
https://open.spotify.com/track/3b6yQRfPf0wPiEKCTA46ZO
https://open.spotify.com/track/5QJRT6u1hJuHSE0BeuEEud
https://open.spotify.com/track/46JqDjp4BMbLQrTOUHdspO
https://open.spotify.com/track/6zN6wjHO3ALVCIQQhSqqqN
https://open.spotify.com/track/52stVyuGiZ0QOWAAb27ZY4
https://open.spotify.com/track/0pAPFaE1Iwfvex9EVJuQlG
https://open.spotify.com/track/6UEuIc9374TFQY1dn3pD1j
https://open.spotify.com/track/357bDEZq4rcIFHPiaS8HwP
https://open.spotify.com/track/6YyizHBnH22hpC4R3CwJK5
https://open.spotify.com/track/6SmxhUH6FsflVXIs2xFgJX
https://open.spotify.com/track/0cc2WXV2i8Jl3LhPKlZho1
https://open.spotify.com/track/2W1EsT0BlEnFaPe44Q71N5
https://open.spotify.com/track/1jcxDswcwde8Ffp1yvqSWY
https://open.spotify.com/track/2PLq66Pulj13Ov30kBBxuG
https://open.spotify.com/track/2aMb1asq5acm7cDYlFsYhY
https://open.spotify.com/track/72B1Omo2kmEst4YKO8vOB6
https://open.spotify.com/track/3wfoaC3ApX2Yf30b7Q7P2q
https://open.spotify.com/track/2JHmDpOMBezuF3v36luc9N
https://open.spotify.com/track/6CCZywPBScscwjJbKYmOiZ
https://open.spotify.com/track/0HxKVc6xb4WFhWRDzlj7sS
https://open.spotify.com/track/02RCTBFKyLaECOTgfr0zTM
https://open.spotify.com/track/5o1Ogizb60r5oLh3pXNirN
https://open.spotify.com/track/7rC5fxyrbNDRymrH7OwSxE
https://open.spotify.com/track/3gj2zNkF0yC0MMILQA3Qq5
https://open.spotify.com/track/7AlFRA7zpc30NM8LO3ZcE4
https://open.spotify.com/track/43XS0V4EwZ1X3qFdUfYesE
https://open.spotify.com/track/43uoWZBnf7udX8CReSV9zH
https://open.spotify.com/track/7BTmtN6bP35E54vVASTqao
https://open.spotify.com/track/2MobJagQB0dGJoRqI8OT0m
https://open.spotify.com/track/15eJjGIuCDEtF6ph4Hd3eR
https://open.spotify.com/track/7KT088cs0FVVQum6IyT0X9
https://open.spotify.com/track/3wlpaljKzcvj0YYJAMIwXy
https://open.spotify.com/track/1dN6rm3ywe9rWuANyICuCG
https://open.spotify.com/track/1syFMBjjRvL3uReOM8yWEb
https://open.spotify.com/track/5hOYQACuJVKPsVcTHjaeEH
https://open.spotify.com/track/5MCG4XcVcvCOXWpSg2cfRC
https://open.spotify.com/track/7iuU9NU6rhcWNYJ1KjylTO
https://open.spotify.com/track/728o9uScjpXHDwPEA50DTh
https://open.spotify.com/track/5OpjJ9qy54D3PzQJ1s4Q9X
https://open.spotify.com/track/7KXJLrMlgQbGMY8kr6yJlB
https://open.spotify.com/track/6ukP8PkZshgCEw8u9rPsho
https://open.spotify.com/track/6goM4VNCDajmBCqDNDarVe
https://open.spotify.com/track/2uCLhG4UKRErEUpjsXBaeD
https://open.spotify.com/track/4DpNBNo7QytHQPHMVpFn5T
https://open.spotify.com/track/3wF0rpX1njF2FLFGc45rxV
https://open.spotify.com/track/6z5AXCQoORypVrhV51zZgi
https://open.spotify.com/track/1NZWiuy0mlnsrcYL2dhKt6
https://open.spotify.com/track/5roH4iWb96lJNShiZJDiGj
https://open.spotify.com/track/5c1gWcamTmYP1t3UwN6caS
https://open.spotify.com/track/7IPldKTGN7pssmDl66DrMG
https://open.spotify.com/track/04sHEjOqkVXL0XjEoGXzhV
https://open.spotify.com/track/2dBpNhfNCT1XkBRAOdam5J
https://open.spotify.com/track/7pPLZZRphZu2hxju6oErbS
https://open.spotify.com/track/15IFcZRm4OUEQsIK2LADpq
https://open.spotify.com/track/08shoW0qPqgMDnNQppWAQj
https://open.spotify.com/track/2RQvdhnvPxxLBHkCPd1dnw
https://open.spotify.com/track/3aQKT3ln3OJkBlidLtt8fJ
https://open.spotify.com/track/48UCq5zA1JGprsZgX36aFi
https://open.spotify.com/track/0d2svMT7Gaisn7RY4cJRDN
https://open.spotify.com/track/0PT7AYi17BlmeOdfQAwgGX
https://open.spotify.com/track/7o9Yon8yj55VSpSe4rKEj7
https://open.spotify.com/track/3rXoaocGAOEq6CorwCiI4J
https://open.spotify.com/track/43DVtoypVSY4mQV2JrqY9I
https://open.spotify.com/track/68x16tb33FQdWyiOaZYteP
https://open.spotify.com/track/3ji2WLLlpJmvvSOlAyqB6p
https://open.spotify.com/track/54LhEfBlV82p8zybyTeaIS
https://open.spotify.com/track/0cm4XRYfCCXbIejiqBEu6z
https://open.spotify.com/track/6FVg2subR7uoD80BmTOsdR
https://open.spotify.com/track/066eFvkQXyR9UIYi65GsSu
https://open.spotify.com/track/041qpPpNFBg7UFvQFD1G9R
https://open.spotify.com/track/06yQb4UTUcjerrSKmpA0zp
https://open.spotify.com/track/43yFiQ18Nhnb2YJwk09f3a
https://open.spotify.com/track/053yoApAqzVFYZQUcf60Zv
https://open.spotify.com/track/3Ba5WQizFbQPRN7MtlXoTF
https://open.spotify.com/track/4BhKsrfLowNbN7F3JVhI8i
https://open.spotify.com/track/3gQC0KTBXZeysuzRqMrfbD
https://open.spotify.com/track/3G5Jcjse7TUQJY8HpRVKVN
https://open.spotify.com/track/17LElTdi4b8AV0yro7KM94
https://open.spotify.com/track/0BD6kjnLp2CGYAY3Vb6bUY
https://open.spotify.com/track/3HRfH5dCEmrc4kquT51XgE
https://open.spotify.com/track/68dlSBYa5sLmwjscN4nfhv
https://open.spotify.com/track/5LzQhr1xmjluVGkcR0khbx
https://open.spotify.com/track/0shVQUKS0dOq9lfocUhssI
https://open.spotify.com/track/6InI3ufrydMnYw2PTvcepm
https://open.spotify.com/track/2kFsFo3KVpWqts5wDyzkKx
https://open.spotify.com/track/5cAyzSUlwxoW5P3p5gFzs0
https://open.spotify.com/track/2eRAjiE8dYjBJeaHW5GT53
https://open.spotify.com/track/08JcY8URs5O3rNgCw6wslO
https://open.spotify.com/track/1wV6lCsV2PCeVZlyGTkVPt
https://open.spotify.com/track/3tIosTCaD7OxaqMmNMqK39
https://open.spotify.com/track/4paUjJnRme9F6f1fUejKG6
https://open.spotify.com/track/6hNwggmMPUnO1l79JrlGve
https://open.spotify.com/track/0EQ46ZEXFGXkQ4rXQ9Kcya
https://open.spotify.com/track/1s7FNEGcL7lnF4GTzfQlOf
https://open.spotify.com/track/5pNavG44Qct8Vm5vQDDxYF
https://open.spotify.com/track/7nVkLvG0brftKooCjEluzA
https://open.spotify.com/track/2qNHBHpGQPiCOH9irGM84X
https://open.spotify.com/track/6yqubZF4LsME7BEHvT6kEG
https://open.spotify.com/track/1VUCqKu2rCZWAxoRm3qznB
https://open.spotify.com/track/51SKBQBJa7XuvMYvfUr5aX
https://open.spotify.com/track/7n9QHEiowPHrIWhS9gLCpT
https://open.spotify.com/track/1au0woWoLOVWffU7rolXqF
https://open.spotify.com/track/4ViElQuRwSp33VmXzPURf7
https://open.spotify.com/track/0ezeXzG4Qi5GJGu9E3W4VY
https://open.spotify.com/track/5b0ijoGXz4qPLVlgwJNX1m
https://open.spotify.com/track/6jAAYLKxXPyeEoddXu6Gf7
https://open.spotify.com/track/5N72L6I3YRMCYhGE1dHu4g
https://open.spotify.com/track/66J8DSBxHe5QZPF9rQG98p
https://open.spotify.com/track/2RuUAwOz2vyArTaiMQUL7j
https://open.spotify.com/track/2fV1D2YYFYreZXNDhqxk4D
https://open.spotify.com/track/1hrF6s6kfXuPv14OrD9v6X
https://open.spotify.com/track/6Srgw41KlTpWtu5hbEKeja
https://open.spotify.com/track/2Vgo0mLTvZj6jWFv4Nqgo7
https://open.spotify.com/track/0M1ujzJ1RTvLt13C4GsnaT
https://open.spotify.com/track/33bqWsuJvnjTgAYr8DMadN
https://open.spotify.com/track/0HMWVK0mK1615kUNtGAW3F
https://open.spotify.com/track/6ZhORhQoBD0qndKYvpBTv2
https://open.spotify.com/track/2BTcliAvvJroPJVB8hlfV5
https://open.spotify.com/track/13OeoujtdpmyfhQLpq2lo1
https://open.spotify.com/track/4PP0ZiDaUC1WPf2D0GLRkO
https://open.spotify.com/track/2pMc6SJXAZe1HNwY8lQLby
https://open.spotify.com/track/6SzbbQUOx85hxpqsesoMfx
https://open.spotify.com/track/2VhspIZudDKIFjevS5tcWk
https://open.spotify.com/track/65RTyZesurf9xxf7FZVL1u
https://open.spotify.com/track/6QS8PaLUVZTx1qXRi1iurL
https://open.spotify.com/track/3UUPQ4sAtAVnkcaSr06NBi
https://open.spotify.com/track/7o0U7vAhsDri660NoqFk7t
https://open.spotify.com/track/2LvCsxys4piJxKIMeE4cwT
https://open.spotify.com/track/7u67t6j872bK1tDbMUjnMz
https://open.spotify.com/track/25BV2kcZKrw8FFsKM6gmtx
https://open.spotify.com/track/6O3GXI34itpMqZbBYHNgoX
https://open.spotify.com/track/360aE5q4fclWPlsH73SdHO
https://open.spotify.com/track/2OEnuXApFl7zqqbUY69RdH
https://open.spotify.com/track/3mQZzVY0Tt5VL0obnPwP1V
https://open.spotify.com/track/1r31U6R2caRtedD86GM529
https://open.spotify.com/track/1tzE3LVnFDHWIOpODpvH9X
https://open.spotify.com/track/0jJgHF533Wakrjt1lt6zwz
https://open.spotify.com/track/2YKv2yIRlh1MEtKvw0woqO
https://open.spotify.com/track/5awCuhQfaq13NwTllkfNWE
https://open.spotify.com/track/6qUWiMokzyMYbqa3IXHhPd
https://open.spotify.com/track/0CXu6tPlYg9j3AsQdx2Q7S
https://open.spotify.com/track/4LjGJzjSR48S5zsYGnYZ8q
https://open.spotify.com/track/2tXZxXmknsaVTNTaCvnlx8
https://open.spotify.com/track/06EzKxIt7WUokYpkitiIK2
https://open.spotify.com/track/7nrhv8ZemanddTfXk28rdy
https://open.spotify.com/track/6Px8gSoHxBtBHIzLb964Q2
https://open.spotify.com/track/3IBHk8pwBYyzlKYGVmoWQt
https://open.spotify.com/track/6hv4MN2Knt4Zk2EyeCJ1pb
https://open.spotify.com/track/0cXV6AoJBnrnrXK0toJHpB
https://open.spotify.com/track/1d7RCdfczxJNVSgXL4Gkil
https://open.spotify.com/track/1lF7uD9Yu2CL17a6tm4Tkh
https://open.spotify.com/track/7tTojNH9f7n2MeAO5HaqAS
https://open.spotify.com/track/6StHK5sgz9rjxVZv7CApW2
https://open.spotify.com/track/5AjI1A5a68tyKBVjw22oWI
https://open.spotify.com/track/7BS27vWbRTmCkSEpeFZRRy
https://open.spotify.com/track/3fsfYz4goQbq1NCiAywkIL
https://open.spotify.com/track/2LmpO2bjRDHDLSqxIUCkon
https://open.spotify.com/track/1OoBG6B9674Y1xJLfdl7Vg
https://open.spotify.com/track/7qMRmcVM1ki7z6YgiPmXrU
https://open.spotify.com/track/2masBgZDOTFiuUbKTa7AXu
https://open.spotify.com/track/6uNjCVovbl1hihc8DkbbVI
https://open.spotify.com/track/5oEQFH35W5hoNwbYCf5anq
https://open.spotify.com/track/1drvaTwu7cJkSHNdhVTQZo
https://open.spotify.com/track/4NG3Xw4yu8O2j4UIDLUwCP
https://open.spotify.com/track/3dRuzNZGBlP1pe3Gqn93Dp
https://open.spotify.com/track/0pfm3xmeB1xNdTcKap5Jum
https://open.spotify.com/track/2h1o9D6ZwydtI4XfexJkbn
https://open.spotify.com/track/1oeKqHrG4EGSAQd9PgvPgs
https://open.spotify.com/track/3xOyi75MAC8yELVqWBFGKg
https://open.spotify.com/track/1brnLTvarI9D1hLP6z2Ar8
https://open.spotify.com/track/3zt6T5xcqLJRYnQq0yqQaR
https://open.spotify.com/track/3QT7ruZDodBTndp0q0EpW5
https://open.spotify.com/track/3CwpNu67Qg1Mcl8WNtzUgo
https://open.spotify.com/track/5wb1tQhNeXSOFuVWHeNJLl
https://open.spotify.com/track/1z5YtEopKg5pyjCM3BEsr5
https://open.spotify.com/track/2GpZhpQy0oBFKPy910Kp1r
https://open.spotify.com/track/2c87x3mBYuffK4ihylVwAG
https://open.spotify.com/track/2lgK3q3cnmrHzZwDOgfMdG
https://open.spotify.com/track/670DkKROR8zeyw48fZ51fr
https://open.spotify.com/track/5Gbie78cYLOXrcZoIzsZxy
https://open.spotify.com/track/11IPArPOHGGHFpkfHJZuKZ
https://open.spotify.com/track/11ZqcLaAYU4z9Ox6MLXMVA
https://open.spotify.com/track/684KWncYCyW2o97ZeJmKbC
https://open.spotify.com/track/4EjoSOfFN7HQVzwl5txinM
https://open.spotify.com/track/3JBMyUHHYz30GCpJL99zGX
https://open.spotify.com/track/2nidf7ZSu4eyL0jYpA6vrE
https://open.spotify.com/track/097YWoXrjEEvt4kQvvzkAs
https://open.spotify.com/track/6qWGguLKmE88iJMBxCRH4G
https://open.spotify.com/track/2tw1U7sV7kvAeAGLU6pFkt
https://open.spotify.com/track/5BlTg1Gbxxw2Mz1uZhDycp
https://open.spotify.com/track/2vDJTc0KHHmAWYL9zyBEh4
https://open.spotify.com/track/588PjaWtXos8VZfU6opoxA
https://open.spotify.com/track/3rGriClqmR0c8MzSJ1hhhG
https://open.spotify.com/track/0HiR1fErIN1CgzLyzBFhDw
https://open.spotify.com/track/1B2SJ0QMcmYfgTAp25aqqY
https://open.spotify.com/track/12GtqVYqedEHYnyRZt91ZQ
https://open.spotify.com/track/2oMV6710ZfkU1ZTtZrhyHL
https://open.spotify.com/track/68suEvcTsvGpZ2i2Zw3PVE
https://open.spotify.com/track/2Vf59fzWMGDRtLwolStTGw
https://open.spotify.com/track/2C3euTxP04Szz52drJQGp1
https://open.spotify.com/track/3oXHgV86juSb5wC89RQNDj
https://open.spotify.com/track/3DdQcdK52TKydq5tN3Iehd
https://open.spotify.com/track/4vkeAHQBXmUTgMOfaT94CR
https://open.spotify.com/track/4NttfcvjeRPvDe58UvnuTV
https://open.spotify.com/track/4fvpSvvMoEd9ka3wfMGjKn
https://open.spotify.com/track/5sn2NVwXGfGEQDBbkAIXj6
https://open.spotify.com/track/6FWu5yUk5TlhKDpzVZ5wpF
https://open.spotify.com/track/5jwakA3WYHMeucmgu0tjbD
`,
    worship: [
      { n: 7, level: 1, title: "Oceans (Where Feet May Fail)", artist: "Hillsong UNITED", accept: ["oceans", "where feet may fail"] },
      { n: 48, level: 1, title: "What A Beautiful Name", artist: "Hillsong Worship", accept: ["what a beautiful name"] },
      { n: 57, level: 1, title: "Reckless Love", artist: "Cory Asbury", accept: ["reckless love"] },
      { n: 34, level: 1, title: "How Great Is Our God", artist: "Chris Tomlin", accept: ["how great is our god"] },
      { n: 39, level: 1, title: "Good Good Father", artist: "Chris Tomlin", accept: ["good good father"] },
      { n: 5, level: 1, title: "I Can Only Imagine", artist: "MercyMe", accept: ["i can only imagine"] },
      { n: 4, level: 1, title: "You Say", artist: "Lauren Daigle", accept: ["you say"] },
      { n: 37, level: 2, title: "Who You Say I Am", artist: "Hillsong Worship", accept: ["who you say i am"] },
      { n: 10, level: 2, title: "Great Are You Lord", artist: "All Sons & Daughters", accept: ["great are you lord"] },
      { n: 25, level: 2, title: "Graves Into Gardens", artist: "Elevation Worship", accept: ["graves into gardens"] },
      { n: 24, level: 2, title: "Our God", artist: "Chris Tomlin", accept: ["our god"] },
      { n: 21, level: 2, title: "How He Loves", artist: "David Crowder Band", accept: ["how he loves"] },
      { n: 42, level: 2, title: "Holy Spirit", artist: "Francesca Battistelli", accept: ["holy spirit"] },
      { n: 28, level: 2, title: "Chain Breaker", artist: "Zach Williams", accept: ["chain breaker"] },
      { n: 38, level: 2, title: "Even If", artist: "MercyMe", accept: ["even if"] },
      { n: 40, level: 2, title: "Lord, I Need You", artist: "Matt Maher", accept: ["lord i need you", "i need you"] },
      { n: 84, level: 3, title: "Here I Am To Worship", artist: "Jeremy Camp", accept: ["here i am to worship"] },
      { n: 29, level: 3, title: "Who Am I", artist: "Casting Crowns", accept: ["who am i"] },
      { n: 30, level: 3, title: "Redeemed", artist: "Big Daddy Weave", accept: ["redeemed"] },
      { n: 41, level: 3, title: "Hello, My Name Is", artist: "Matthew West", accept: ["hello my name is"] },
      { n: 91, level: 3, title: "Fear Is a Liar", artist: "Zach Williams", accept: ["fear is a liar"] },
      { n: 59, level: 3, title: "Old Church Choir", artist: "Zach Williams", accept: ["old church choir"] },
      { n: 76, level: 3, title: "Run To The Father", artist: "Cody Carnes", accept: ["run to the father"] },
      { n: 16, level: 3, title: "Death Was Arrested", artist: "North Point Worship", accept: ["death was arrested"] },
      { n: 12, level: 3, title: "O Come to the Altar", artist: "Elevation Worship", accept: ["o come to the altar", "come to the altar"] },
      { n: 61, level: 4, title: "At The Cross (Love Ran Red)", artist: "Chris Tomlin", accept: ["at the cross", "love ran red"] },
      { n: 23, level: 4, title: "This Is Amazing Grace", artist: "Phil Wickham", accept: ["this is amazing grace"] },
      { n: 51, level: 4, title: "Overwhelmed", artist: "Big Daddy Weave", accept: ["overwhelmed"] },
      { n: 31, level: 4, title: "Thy Will", artist: "Hillary Scott & The Scott Family", accept: ["thy will"] },
      { n: 32, level: 4, title: "He Knows My Name", artist: "Francesca Battistelli", accept: ["he knows my name"] },
      { n: 45, level: 4, title: "The Lion and the Lamb", artist: "Big Daddy Weave", accept: ["the lion and the lamb", "lion and the lamb"] },
      { n: 3, level: 4, title: "Voice of Truth", artist: "Casting Crowns", accept: ["voice of truth"] },
      { n: 46, level: 4, title: "Trust In You", artist: "Lauren Daigle", accept: ["trust in you"] },
      { n: 33, level: 4, title: "Flawless", artist: "MercyMe", accept: ["flawless"] },
      { n: 15, level: 4, title: "Greater", artist: "MercyMe", accept: ["greater"] },
      { n: 55, level: 4, title: "Tell Your Heart To Beat Again", artist: "Danny Gokey", accept: ["tell your heart to beat again"] },
      { n: 53, level: 4, title: "Fix My Eyes", artist: "for KING & COUNTRY", accept: ["fix my eyes"] },
      { n: 18, level: 4, title: "Hills and Valleys", artist: "Tauren Wells", accept: ["hills and valleys"] },
      { n: 1, level: 5, title: "Oh My Soul", artist: "Casting Crowns", accept: ["oh my soul"] },
      { n: 35, level: 5, title: "Just Be Held", artist: "Casting Crowns", accept: ["just be held"] },
      { n: 13, level: 5, title: "Sinking Deep", artist: "Hillsong Young & Free", accept: ["sinking deep"] },
      { n: 17, level: 5, title: "Canvas And Clay", artist: "Pat Barrett", accept: ["canvas and clay"] },
      { n: 44, level: 5, title: "We Believe", artist: "Newsboys", accept: ["we believe"] },
      { n: 49, level: 5, title: "God Is on the Move", artist: "7eventh Time Down", accept: ["god is on the move"] },
      { n: 60, level: 5, title: "Where I Belong", artist: "Building 429", accept: ["where i belong"] },
      { n: 63, level: 5, title: "Give Me Your Eyes", artist: "Brandon Heath", accept: ["give me your eyes"] },
      { n: 62, level: 5, title: "Never Too Far Gone", artist: "Jordan Feliz", accept: ["never too far gone"] },
      { n: 65, level: 5, title: "Live Like That", artist: "Sidewalk Prophets", accept: ["live like that"] },
      { n: 89, level: 5, title: "Refiner", artist: "Maverick City Music", accept: ["refiner"] },
      { n: 82, level: 5, title: "There Was Jesus", artist: "Zach Williams & Dolly Parton", accept: ["there was jesus"] },
      { n: 72, level: 5, title: "Only Jesus", artist: "Casting Crowns", accept: ["only jesus"] },
      { n: 93, level: 5, title: "Best News Ever", artist: "MercyMe", accept: ["best news ever"] },
      { n: 92, level: 5, title: "Survivor", artist: "Zach Williams", accept: ["survivor"] },
      { n: 8, level: 6, title: "I Am Not Alone", artist: "Kari Jobe", accept: ["i am not alone"] },
      { n: 9, level: 6, title: "How Can It Be", artist: "Lauren Daigle", accept: ["how can it be"] },
      { n: 36, level: 6, title: "Love on the Radio", artist: "Matthew West", accept: ["love on the radio"] },
      { n: 26, level: 6, title: "Lead Me To The Cross", artist: "Hillsong UNITED", accept: ["lead me to the cross"] },
      { n: 27, level: 6, title: "Because He Lives (Amen)", artist: "Matt Maher", accept: ["because he lives", "amen"] },
      { n: 67, level: 6, title: "First", artist: "Lauren Daigle", accept: ["first"] },
      { n: 68, level: 6, title: "He Knows", artist: "Jeremy Camp", accept: ["he knows"] },
      { n: 69, level: 6, title: "Hope in Front of Me", artist: "Danny Gokey", accept: ["hope in front of me"] },
      { n: 71, level: 6, title: "I Have This Hope", artist: "Tenth Avenue North", accept: ["i have this hope"] },
      { n: 73, level: 6, title: "Never Have I Ever", artist: "Hillsong Young & Free", accept: ["never have i ever"] },
      { n: 75, level: 6, title: "Who Can", artist: "Cochren & Co.", accept: ["who can"] },
      { n: 81, level: 6, title: "Peace Be Still", artist: "Hope Darst", accept: ["peace be still"] },
      { n: 83, level: 6, title: "The Father’s House", artist: "Cory Asbury", accept: ["the fathers house", "fathers house"] },
      { n: 85, level: 6, title: "Eye of the Storm", artist: "Ryan Stevenson", accept: ["eye of the storm"] },
      { n: 87, level: 6, title: "God Only Knows", artist: "for KING & COUNTRY", accept: ["god only knows"] },
      { n: 80, level: 7, title: "Drops In the Ocean", artist: "Hawk Nelson", accept: ["drops in the ocean"] },
      { n: 64, level: 7, title: "Broken Things", artist: "Matthew West", accept: ["broken things"] },
      { n: 94, level: 7, title: "Confidence", artist: "Sanctus Real", accept: ["confidence"] },
      { n: 97, level: 7, title: "Come To the Table", artist: "Sidewalk Prophets", accept: ["come to the table"] },
      { n: 99, level: 7, title: "What Faith Can Do", artist: "Kutless", accept: ["what faith can do"] },
      { n: 56, level: 7, title: "Start A Fire", artist: "Unspoken", accept: ["start a fire"] },
      { n: 47, level: 7, title: "My Story", artist: "Big Daddy Weave", accept: ["my story"] },
      { n: 2, level: 6, title: "Stars", artist: "Skillet", accept: ["stars"] },
      { n: 6, level: 6, title: "Relentless", artist: "Hillsong UNITED", accept: ["relentless"] },
      { n: 14, level: 4, title: "How Deep The Father's Love For Us", artist: "Selah", accept: ["how deep the fathers love for us", "how deep the fathers love", "how deep the father s love"] },
      { n: 22, level: 4, title: "Come As You Are", artist: "Crowder", accept: ["come as you are"] },
      { n: 43, level: 5, title: "Stand In Your Love", artist: "Josh Baldwin", accept: ["stand in your love"] },
      { n: 52, level: 6, title: "Soul On Fire", artist: "Third Day", accept: ["soul on fire"] },
      { n: 54, level: 7, title: "Christ In Me", artist: "Jeremy Camp", accept: ["christ in me"] },
      { n: 66, level: 7, title: "Ever Be", artist: "Aaron Shust", accept: ["ever be"] },
      { n: 70, level: 6, title: "Rise", artist: "Danny Gokey", accept: ["rise"] },
      { n: 77, level: 7, title: "Love", artist: "We Are Messengers", accept: ["love"] },
      { n: 78, level: 7, title: "Even The Impossible", artist: "Mack Brock", accept: ["even the impossible"] },
      { n: 79, level: 6, title: "You Are Loved", artist: "Stars Go Dim", accept: ["you are loved"] },
      { n: 86, level: 6, title: "Breathe", artist: "Jonny Diaz", accept: ["breathe"] },
      { n: 95, level: 6, title: "All In", artist: "Matthew West", accept: ["all in"] },
      { n: 96, level: 7, title: "Mercy Is A Song", artist: "Matthew West", accept: ["mercy is a song"] }
    ]
  }
};
