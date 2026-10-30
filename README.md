# Jeopardy Showdown

A free Bible quiz game show for youth groups and young adults. The host runs the game from a tablet or laptop, a TV shows the board, and players join from any phone. No accounts or apps needed.

## Put it online with GitHub Pages (free)

1. Sign in at github.com and create a new **public** repository, for example `jeopardy_showdown`.
2. Click **Add file → Upload files**, upload `index.html`, `questions.js` and `images.js`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. Wait a minute or two. Your game is live at `https://<githubusername>.github.io/jeopardy_showdown/`.

## Running a game

1. **Host (iPad):** open the site, tap **Host a game**, choose a difficulty and your rules, then tap **Create game**. Every new game picks 5 random categories with random questions.
2. **TV board (laptop on AirPlay):** open the site, tap **Show the board**, enter the 4-letter code, then tap **Full screen**. Music and sound effects play from this screen.
3. **Players (any phone):** scan the QR code on the TV and enter a name. Scanning always opens the game for that code, even if the phone was in an earlier game. Each player starts on their own team and can join another team in the lobby.
4. When you're ready, the host taps **Start the game**. You can start with no teams or players; anyone who joins later gets their own team.
5. When you're done, the host taps **End game**, which sends every player and the TV board back to the start screen.

### Difficulty modes

| Mode | 100 | 200 | 300 | 400 | 500 | Good for |
|---|---|---|---|---|---|---|
| **All levels** | easy | easy | medium | hard | hard | mixed groups and newcomers |
| **Intermediate** | easy | medium | hard | hard | expert | teens who know their Bible |
| **Expert** | hard | hard | expert | expert | expert | Bible buffs and leaders |

In every mode, higher points always means a harder question.

### Teams

- Every player starts on their own team, named Team 1, Team 2, Team 3 in the order they join.
- In the lobby, players can leave their team to join another one, or go back to playing solo. Teams can be any size, and sizes can differ.
- Renaming a team is optional. Any player on the team, or the host, can do it.
- The host can also add or delete teams, move or remove players, and shuffle everyone into random teams.

### Taking turns

- Any player on the team whose turn it is can tap a clue on their phone to open it, or the host can tap it.
- The scoreboard highlights the team that's answering, and the highlight moves when a question is passed.
- If a team misses, the host can pass the question to any other team, once per question.

### Music and sounds

- **Theme music:** an original, upbeat game-show theme that plays in the lobby and on the board between questions. It goes quiet while a question is open. It's on by default; the host turns it on or off with the **Theme music** button.
- **Timer music:** original suspenseful countdown music that plays while the timer is running and speeds up as time runs out. It stops when the timer is paused or ends. Turn it on or off with the **Timer music** button.
- Music plays on the TV board, or on the host's device if no TV board is connected. Song clips pause the music while they play.
- To use your own theme song instead, choose a music file under **Music on this screen** on the TV board. Use music you have the right to play.
- **Timer:** when the host starts the timer, a big countdown number shows on the TV board and players' phones. At zero, a buzzer sounds and a red **Time's up!** animation plays automatically. The host still decides the points.
- **Sound effects and animations:** correct answers get a chime and a green **Correct!** flash; wrong answers get a buzz and a red **Wrong!** shake. They show on the TV board, the host screen and players' phones.
- Turning **Sounds** off on the host also mutes the TV board.
- Browsers can block sound until someone clicks the page. If the TV board shows **Click to turn on sound**, click it once on the laptop.

### Picture and emoji categories

- **Scripture Snapshots:** an original illustration appears, like a burning bush or a ladder of angels, and players name the Bible story. Easy rows show iconic scenes (Noah's ark, David and Goliath); expert rows show subtler ones (Aaron's budding rod, Ezekiel's wheels). On the 400 and 500 rows, the TV and phones start **zoomed in** on part of the picture and slowly zoom out. The host always sees the whole picture.
- **Emoji Testament:** a Bible story told in emojis, like 🐋🙏🏙️ for Jonah, from Noah's ark at 100 to Ehud and King Eglon at expert.
- The drawings live in `images.js`. To use your own picture, upload it to the repo and add `image: "images/your-photo.jpg"` to a question in `questions.js`. Use pictures you have the right to show.

### Song categories

- **Finish the Lyric** shows a public-domain hymn line with an underlined blank and plays a smooth built-in version of the tune, and players fill in the missing word. Each line is also linked to that hymn's recording in your hymn playlist, so the host can play the full song from the Full song panel.
- Clips play on the TV board (or the host's device if no TV board is connected) when the host taps **Play clip**, then stop after 10 seconds. Every clip on every row is 10 seconds. The host can **Pause**, **Resume**, **Play from the start** or **Stop**, and the TV follows every tap. The host screen shows what the TV is doing, like "Playing on the TV · 6s left." The TV board loads each Spotify song when the clue opens, so it starts right away. To have clips start by themselves when a clue opens, turn on **Clip autoplay** in setup or on the host screen.
- The built-in songs are public-domain hymns and carols, and the game plays their melodies itself.
- **Spotify categories from your playlists:** `questions.js` has a `spotify` section listing songs from your worship and hymn playlists, each with a difficulty level. Paste each playlist's song links into `worshipLinks` and `hymnLinks` (in the Spotify desktop app: open the playlist, click a song, Ctrl+A / Cmd+A, then Ctrl+C / Cmd+C). The game then adds:
  - **Guess That Song** and **Name the Hymn:** a 10-second clip of the song plays on the TV board.
  - **Who Sings It?:** a clip plays and players name the artist.
  - **Name That Intro:** the first few seconds of a worship song or hymn play, and players name the song.
- **Where clips start:** songs you haven't tuned start where the most upbeat part usually is: worship songs about 45% of the way in (typically the fuller second chorus), hymns about a third of the way in. This is a guess based on how most songs are built; for an exact spot, save one or use the Song Tuner.
- **Full song:** every song question (Guess That Song, Name the Hymn, Who Sings It?, Name That Intro and Finish the Lyric) has a **Full song** panel on the host screen. Drag the slider to any part of the song and let go (or tap **Play from here**), and use **Pause** and **Play** whenever you like. The TV board plays from there with no cut-off until the host pauses or stops, and the slider follows along.
- **Saved spots:** in the Full song panel, tap **Save this spot** while a song plays and name it (Chorus, Verse, Bridge, Intro, Ending or Best part). Saved spots show as buttons: tap one to jump there on the TV, or tap **Set as clip start** so that song's clips begin there in every future game. **Use this spot as the clip start** does the same for wherever the song is right now. Spots are saved on the host device and included in the Song Tuner's **Copy all my times**; to keep them for good, add them to the song in `questions.js` as `marks: ["1:05 Chorus"]`.
- **Song Tuner** (in setup and on the host screen): play each song and tap **Chorus starts here** so clips play the part everyone knows. Times are saved on that device and used right away. To keep them for every device, tap **Copy all my times** and add them to `questions.js` as `start`.
- The host sees the song title as the answer on the iPad, and no song audio or video plays on the iPad while a TV board is connected. When the host reveals the answer, the TV board shows the Spotify song card.
- For full songs, the browser on the TV board laptop should be logged into Spotify. Without a login, Spotify plays only 30-second previews, which may not include the part you picked. If a clip doesn't start, tap **Play clip again** on the host screen.

## Adding your own questions

All questions live in **`questions.js`**. To edit it on GitHub, open the file, click the ✏️ pencil icon, make your changes, and click **Commit changes**. The live game updates within a minute or two.

Each category looks like this:

```js
{
  name: "Heroes of the Faith",
  questions: [
    { level: 1, question: "He built an ark to save his family.", answer: "Noah", hint: "Genesis 6", accept: ["noah"] },
    { level: 2, question: "...", answer: "...", hint: "...", accept: [] }
  ]
},
```

- **level** is 1 to 7: 1–2 easy, 3 medium, 4–5 hard, 6–7 expert. "All levels" games use levels 1–5, and Intermediate and Expert games use the harder levels.
- **hint** is optional. The host can show it to players.
- **accept** is optional: other answers that count as correct when players type their answers.
- Give each category at least one question for each level from 1 to 5, plus a few at 6–7 so it can appear in Expert games. Two or more per level means more variety between games.
- Final round questions are in the `finals` list at the bottom of the file.
- **Audio:** add `melody` (notes like `"C4:1 E4:1 G4:2"`) and `bpm`, or `audio` (a sound file you uploaded to the repo, like `"songs/clip.mp3"`) with `start` and `length` in seconds. Use clips you have the right to play.
- **Spotify:** a question can also have a `spotify` song link instead of audio, with `start` in seconds (1:05 = 65) and `length`. For whole categories of songs, use the `spotify` section at the bottom.
- **Lyrics:** write three or more underscores `___` where the missing word goes, and the game shows an underlined blank.
- Keep the commas between items and the "double quotes" around text. If the game stops loading questions after an edit, a missing comma or quote is the usual cause.

You can also edit the questions for a single game from the host screen with **Edit questions**, and save those games on your device.

## Good to know

- **Works on any device, browser and OS:** iPhone, iPad, Android, Windows, Mac, Chromebook and Linux, in a current version of Chrome, Safari, Edge, Firefox or Samsung Internet. Nothing to install, and no accounts needed for players. Very old browsers (from before about 2020) may not work.
- A few small differences by device: iPhones can't go full screen in the browser (iPads and computers can); Firefox lets screens dim during long pauses, so keep the host and TV board awake in settings; and Spotify clips play best on the TV board laptop with a browser logged into Spotify.

- The host's device runs the game, so keep the host page open and the iPad awake. If the host page reloads, tap **Host a game** to resume, and everyone reconnects within a few seconds.
- Live syncing uses PeerJS's free public connection service, so devices connect straight to the host. It works best when everyone is on the same Wi-Fi. Some school or church networks block these direct connections; if phones can't join, try a phone hotspot for the host.
- Anyone with the game code can join while the game is running.
