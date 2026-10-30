# Jeopardy Showdown

A free Bible quiz game show for youth groups and young adults. The host runs the game from a tablet or laptop, a TV shows the board, and players join from any phone. No accounts or apps needed.

## Put it online with GitHub Pages (free)

1. Sign in at github.com and create a new **public** repository, for example `jeopardy_showdown`.
2. Click **Add file → Upload files**, upload `index.html`, `questions.js` and `images.js`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. Wait a minute or two. Your game is live at `https://<githubusername>.github.io/jeopardy_showdown/`.

## Running a game

1. **Host (any device: iPad, iPhone, Android or laptop):** open the site, tap **Host a game**, choose your rules, then tap **Create game**. Every new game picks 5 random categories with random questions. To leave categories out, open **Categories in the mix** and tap any category you don't want. Everything else stays in the random draw (keep at least 5). **Leave out song categories** removes all the music ones at once, and **Include all** brings everything back. Your choices are remembered on that device.
2. **TV board (laptop on AirPlay):** open the site, tap **Show the board**, enter the 4-letter code, then tap **Full screen**. Music and sound effects play from this screen.
3. **Players (any phone):** scan the QR code on the TV and enter a name. Scanning always opens the game for that code, even if the phone was in an earlier game. Each player starts on their own team and can join another team in the lobby.
4. When you're ready, the host taps **Start the game**. You can start with no teams or players; anyone who joins later gets their own team.
5. When you're done, the host taps **End game**, which sends every player and the TV board back to the start screen.

### Difficulty

Every game uses the same scale: **100** is the easiest, **200** easy, **300** medium, **400** a bit harder and **500** somewhat hard. Higher points always means a harder question.

### Teams

- Every player starts on their own team, named Team 1, Team 2, Team 3 in the order they join.
- In the lobby, players can leave their team to join another one, or go back to playing solo. Teams can be any size, and sizes can differ.
- Renaming a team is optional. Any player on the team, or the host, can do it.
- The host can also add or delete teams, move or remove players, and shuffle everyone into random teams.

### Turn order

- Teams take turns in the order they joined: Team 1 → Team 2 → Team 3, then back to Team 1.
- When the host taps **Start the game**, a random team goes first, and a "🎲 Team 3 goes first!" banner shows on the TV, the phones and the host. From there the order stays the same and wraps around (for example Team 3 → Team 1 → Team 2 → Team 3).

### Game styles

Pick one in setup:

- **Classic Jeopardy** (default): a right answer earns the points, and that team picks the next clue. A wrong answer loses the points, and the clue passes to the next team in order. Each team gets one try. If nobody gets it right, nobody earns the points, and the next team in order after the one that picked gets to pick. (On the TV show, the player who picked would keep control. This game passes it on so every team gets turns.)
- **Team Order:** teams take turns in order (Team 1, Team 2, Team 3, then back to Team 1), no matter who answers right. Wrong answers don't lose points unless the host turns that on. If a team misses, the host can pass the clue to any other team, once per clue.

**Turn order graphic:** the iPad, TV and phones show every team in order at the top of the screen. The team picking or answering glows gold, teams that missed are crossed out, a correct team turns green, and the team that's up next has a dashed outline.

In both styles, any player on the picking team can tap a clue on their phone to open it, or the host can tap it. The scoreboard highlights the team that's answering, and the highlight moves when the clue passes.

### Pass and steal

- **Pass** (on by default): the team that's answering can pass with no penalty, from the host screen or any of its players' phones. The question moves on as if they'd missed it, but no points are lost. Passing isn't allowed on a Daily Double. On the TV show nobody passes; contestants just don't buzz, and only a wrong answer costs points, so passing works the same way.
- **Steal** (setup › After a wrong answer):
  - **Next team in order** (default): after a miss or a pass, the next team in turn order gets to answer.
  - **Any team can buzz to steal**: after a miss or a pass, every team that hasn't tried gets a BUZZ button on their phones, and the fastest team answers. This is how the TV show works. The TV board shows "Steal! Buzz in now," and the turn-order graphic marks who can steal.
- A team that steals correctly earns the points and picks next. In Classic Jeopardy a wrong steal still loses the points.

### Daily Double

- One hidden clue each game is a Daily Double. It always goes to the team that picked it, and only that team answers.
- Before seeing the clue, the team bets between 5 points and its score, or up to 500 points if its score is lower than that. Anyone on that team can type the wager on their phone, or the host can type it on the iPad. Either can change it until the host taps **Show the clue**.
- The wager shows in big numbers on the TV and on every phone as soon as it's set.
- A right answer adds the bet, and a wrong answer subtracts it. The clue's face value doesn't count.

### Music and sounds

- **Theme music:** the Jeopardy theme song from Spotify plays on a loop in the lobby and on the board between questions, starting the moment you create a game. It goes quiet while a question is open and starts from the top when it comes back. The host turns it on or off with the **Theme music** button.
- **Spotify card (host only):** the host's lobby (and **Music & sounds**) has a Spotify card that only the host sees. Players and the TV never see it.
- **Spotify Premium link (recommended, needs Spotify Premium):** log in once on the host device and the TV board plays the whole theme on repeat through your account, with no login needed on the TV.
  - One-time setup on the host device: go to developer.spotify.com/dashboard, tap **Create app**, paste the **Redirect URI** the card shows (for example `https://<githubusername>.github.io/jeopardy_showdown/`), check **Web API** and **Web Playback SDK**, save, then copy the app's **Client ID** into the card. Then tap **Log in with Spotify**.
  - Your Client ID and login are saved only in that device's browser. Nothing is added to the repo or the game's files, and players' phones never receive them.
  - **Or link Spotify on the TV board itself:** the TV board has its own **🎵 Spotify** dropdown at the top. Log in there (free account) or set up the Premium link on the laptop, with the same steps. This is the way to go when the host is an iPad or iPhone that can't connect to Spotify: the iPad hosts and the laptop plays the full theme. The host's Spotify card shows ✓ once the TV board is linked.
  - On both the host and the TV board, Spotify is a dropdown: one line that shows whether it's linked (✓ or ⚠). Tap it to open or close the details. Everyone watching the TV can see the TV board's dropdown line, so keep it closed during the game.
  - The TV board needs a computer browser (Chrome, Edge, Firefox or Safari). Phones and tablets can't run Spotify's player, so with no TV board connected, an iPhone or iPad host uses the regular Spotify player below.
- **Without Premium:** the screen playing sound must be logged into Spotify (open.spotify.com in the same browser), or Spotify only plays a 30-second preview from the middle of the song.
  - Sound on the host's device: tap **Log in on this device**, log in (free accounts work), come back and tap **Check again**. On iPhone and iPad, also turn off Settings › Apps › Safari › Prevent Cross-Site Tracking.
  - Sound on the TV board: on the TV laptop, log in at open.spotify.com in the same browser (the TV board's code screen has a **Log in to Spotify** link), then tap **Check again** on the host.
  - **Full song only** (on by default) keeps the theme off instead of playing the 30-second preview. Turn it off to allow the preview.
  - If a browser blocks the theme from starting, tap anywhere on that screen once. Its volume follows the device's volume; the volume slider sets the timer music. To use a different song, paste its Spotify link into `theme` in the `spotify` section of `questions.js`.
- **Timer music:** original suspenseful countdown music that plays while the timer is running and speeds up as time runs out. It stops when the timer is paused or ends. Turn it on or off with the **Timer music** button.
- **Where sound plays:** with no TV board connected, everything plays on the host's device: the theme song, timer music, sound effects, song clips and full songs. Otherwise it all plays on the TV board. If the TV board connects or drops out mid-game (even mid-song), sound switches over right away. The host screen shows where sound is playing (**Sound: TV board** or **Sound: this device**). Song clips pause the music while they play.
- **Starts right away:** the Jeopardy theme loads in the background while you're on the setup screen (or the TV board's code screen), so it starts the moment you tap **Create game**.
- **Seamless loop with your own file:** choose an audio file (MP3 or M4A) or a video such as a screen recording under **Music & sounds** on the host (or **Music on this screen** on the TV board). The game plays its sound, trims silence from the start and end, and loops it with no gap at all. The file never leaves that device. It replaces the Spotify theme on that device, and is remembered there next time. **Use the Spotify theme again** switches back.
- **Timer:** when the host starts the timer, a big countdown number shows on the TV board and players' phones. At zero, a buzzer sounds and a red **Time's up!** animation plays automatically. The host still decides the points.
- **Sound effects and animations:** correct answers get a chime and a green **Correct!** flash; wrong answers get a buzz and a red **Wrong!** shake. They show on the TV board, the host screen and players' phones.
- Turning **Sounds** off on the host also mutes the TV board.
- Browsers can block sound until someone clicks the page. If the TV board shows **Click to turn on sound**, click it once on the laptop.

### Bible knowledge categories

- **Old Testament** and **New Testament:** general questions on each testament, from easy (the first man God created) to expert (the longest-reigning king of Judah).

### Bible or Not?

A quote or saying appears, and players decide whether it's really in the Bible. Easy rows mix famous verses ("Love thy neighbour as thyself") with obvious sayings ("An apple a day keeps the doctor away"); harder rows use sayings people often think are Bible verses, like "God helps those who help themselves" or "Cleanliness is next to godliness." Bible quotes use King James wording, and their hints include the verse. Typed answers need to be exactly "Bible" (or "yes") or "Not the Bible" (or "no", "not"), so "not the Bible" never counts as "Bible."

### Picture and emoji categories

- **Scripture Snapshots:** an original illustration appears, like a burning bush or a ladder of angels, and players name the Bible story. Easy rows show iconic scenes (Noah's ark, David and Goliath); expert rows show stories that are harder to spot in a picture (the writing on the wall, Moses' bronze serpent). On the 400 and 500 rows, the TV and phones start **zoomed in** on part of the picture and slowly zoom out. The host always sees the whole picture.
- **Emoji Testament:** a Bible story told in emojis, like 🐋🙏🏙️ for Jonah, from Noah's ark at 100 to Elijah on Mount Carmel at expert. Every question is a well-known story; harder rows use stories that are a bit less familiar or emojis that take more decoding.
- Pictures show on the iPad, the TV and every phone, including older iPhones and iPads.
- The drawings live in `images.js`. To use your own picture, upload it to the repo and add `image: "images/your-photo.jpg"` to a question in `questions.js`. Use pictures you have the right to show.

### Song categories

- Clips play on the TV board (or the host's device if no TV board is connected) when the host taps **Play clip**, then stop after 10 seconds. Every clip on every row is 10 seconds. The host can **Pause**, **Resume**, **Play from the start** or **Stop**, and the TV follows every tap. The host screen shows what the TV is doing, like "Playing on the TV · 6s left." The TV board loads each Spotify song when the clue opens, so it starts right away. To have clips start by themselves when a clue opens, turn on **Clip autoplay** in setup or on the host screen.
- **Spotify categories from your playlists:** `questions.js` has a `spotify` section listing songs from your worship playlist, each with a difficulty level. Paste the playlist's song links into `worshipLinks` (in the Spotify desktop app: open the playlist, click a song, Ctrl+A / Cmd+A, then Ctrl+C / Cmd+C). The game then adds:
  - **Guess That Song:** a 10-second clip of the song plays on the TV board.
  - **Who Sings It?:** a clip plays and players name the artist.
- **Where clips start:** songs you haven't tuned start where the most upbeat part usually is: about 45% of the way in (typically the fuller second chorus). This is a guess based on how most songs are built; for an exact spot, save one or use the Song Tuner.
- **Song player in every song question:** next to the question, answer and hint, the host screen shows a Spotify-style player for the whole song: a big **▶ / ❚❚** button, **⟲ 10** and **10 ⟳** to skip, **■** to stop, and a timeline to drag to any part of the song. It shows the song's length as soon as the question opens. This is separate from the 10-second clip, for when the clip isn't enough. The TV board plays from there with no cut-off until the host pauses or stops, and the slider follows along. When you drag, the slider stays where you let go, and the TV board checks that the song actually jumped there.
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
- **verse** is optional: the Bible passage the question comes from, like `verse: "Daniel 6:16"`. It shows with the hint as 📖 Daniel 6:16, so players can look it up. Almost every built-in Bible question has one.
- **accept** is optional: other answers that count as correct when players type their answers.
- Give each category at least one question for each level from 1 to 5, plus a few at 6–7 so it can appear in Expert games. Two or more per level means more variety between games.
- Final round questions are in the `finals` list at the bottom of the file.
- **Audio:** add `melody` (notes like `"C4:1 E4:1 G4:2"`) and `bpm`, or `audio` (a sound file you uploaded to the repo, like `"songs/clip.mp3"`) with `start` and `length` in seconds. Use clips you have the right to play.
- **Spotify:** a question can also have a `spotify` song link instead of audio, with `start` in seconds (1:05 = 65) and `length`. For whole categories of songs, use the `spotify` section at the bottom.
- **Lyrics:** write three or more underscores `___` where the missing word goes, and the game shows an underlined blank.
- Keep the commas between items and the "double quotes" around text. If the game stops loading questions after an edit, a missing comma or quote is the usual cause.

You can also edit the questions for a single game from the host screen with **Edit questions**, and save those games on your device.

## Good to know

- **Volume:** the host has a **🔊 Volume** dropdown (lobby, board and question screens) with three sliders: **Theme & timer music**, **Songs & clips** and **Sound effects**. They set the volume on whichever screen plays the sound, usually the TV board. Spotify's regular player doesn't let websites change its volume, so Spotify songs follow the device's own volume unless Spotify Premium is linked on that screen; with Premium linked, the theme and song clips follow the sliders (and clips play the full song through your account).
- **Timer auto-start:** the **⏱ Auto-start timer** switch on the host board (and next to the timer on each question) turns the automatic countdown on or off. With it off, the timer waits until you tap **Start timer**.

- **TV board fits any screen:** the board, scores and questions size themselves to the screen's height, so the whole board fits on a TV, laptop or tablet, including over AirPlay. Picture questions show the picture beside the question on widescreen TVs. The TV board's top bar has a **Size** control (**−** and **+**, or the − and = keys on the laptop) that shrinks the whole board evenly with a margin around it, from 70% to 100%. It starts at 90% so nothing gets cut off when a TV or AirPlay crops the edges, and the laptop remembers your choice. The host can also change it from the iPad with **📺 TV −/+** in the lobby and on the board, and the TV board's code screen has the size control too, so you can set it before the game starts.

- **Full screen:** the host, the TV board and players' phones have a **⛶ Full screen** button during the game (tap again to exit). iPhones don't allow web pages to go full screen, so the button doesn't show there; iPads, Android phones and computers are fine.

- **AirPlay to a TV (for example a Roku TV):** on a Mac, mirroring sends the picture but keeps the sound on the Mac until you pick the TV: open **Control Center › Sound** and choose your TV. On iPhone or iPad, turn the volume up; the game plays sound even when the silent switch is on. On a Roku TV, make sure AirPlay is turned on and the TV volume is up. The TV board's code screen has these tips too.

- **Hosting from a phone:** the host screen fits an iPhone or Android phone. On a phone, the question screen keeps **Correct**, **Wrong** and **Board** pinned at the bottom so you never have to scroll to score, and pictures shrink so the answer stays in view.

- **Works on any device, browser and OS:** iPhone, iPad, Android, Windows, Mac, Chromebook and Linux, in a current version of Chrome, Safari, Edge, Firefox or Samsung Internet. Nothing to install, and no accounts needed for players. Very old browsers (from before about 2020) may not work.
- A few small differences by device: iPhones can't go full screen in the browser (iPads and computers can); Firefox lets screens dim during long pauses, so keep the host and TV board awake in settings; and Spotify clips play best on the TV board laptop with a browser logged into Spotify.

- The host's device runs the game, so keep the host page open and the iPad awake. If the host page reloads, tap **Host a game** to resume, and everyone reconnects within a few seconds.
- Live syncing uses PeerJS's free public connection service, so devices connect straight to the host. It works best when everyone is on the same Wi-Fi. Some school or church networks block these direct connections; if phones can't join, try a phone hotspot for the host.
- Anyone with the game code can join while the game is running.
