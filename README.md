# Scripture Showdown

A free Bible quiz game show for youth groups and young adults. The host runs the game from a tablet or laptop, a TV shows the board, and players join from any phone. No accounts or apps needed.

## Put it online with GitHub Pages (free)

1. Sign in at github.com and create a new **public** repository, for example `jeopardy_showdown`.
2. Click **Add file → Upload files**, upload `index.html` and `questions.js`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. Wait a minute or two. Your game is live at `https://<githubusername>.github.io/jeopardy_showdown/`.

## Running a game

1. **Host (iPad):** open the site, tap **Host a game**, choose your rules, then tap **Create game**. Every new game picks 5 random categories with random questions.
2. **TV board (laptop on AirPlay):** open the site, tap **Show the board**, enter the 4-letter code, then tap **Full screen**. Music and sound effects play from this screen.
3. **Players (any phone):** scan the QR code on the TV and enter a name. In the lobby, each player can join a team, play solo, or create a team.
4. When the teams look right, the host taps **Start the game**.
5. When you're done, the host taps **End game**, which sends every player and the TV board back to the start screen.

### Teams

- Teams can be any size: 1, 2, 3 or more players, and sizes can differ.
- Teams of 1 or 2 don't need a name; they're named after their players, like "Ana" or "Ana & Ben".
- Teams of 3 or more need a name before the game can start. Any player on the team, or the host, can set it.
- In the lobby the host can add or delete teams, move or remove players, and shuffle everyone into random teams.

### Music and sounds

- The host turns background music on or off with the **Music** button. It plays on the TV board, or on the host's device if no TV board is connected.
- The built-in music is an original loop. To use your own song, choose a music file under **Music on this screen** on the TV board. Use music you have the right to play.
- The only sound effects are for correct and wrong answers.

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

- **level** is 1 to 5: 1 is easiest (the 100 row) and 5 is hardest (the 500 row).
- **hint** is optional. The host can show it to players.
- **accept** is optional: other answers that count as correct when players type their answers.
- Give each category at least one question per level. Two or more per level means more variety between games.
- Final round questions are in the `finals` list at the bottom of the file.
- Keep the commas between items and the "double quotes" around text. If the game stops loading questions after an edit, a missing comma or quote is the usual cause.

You can also edit the questions for a single game from the host screen with **Edit questions**, and save those games on your device.

## Good to know

- The host's device runs the game, so keep the host page open and the iPad awake. If the host page reloads, tap **Host a game** to resume, and everyone reconnects within a few seconds.
- Live syncing uses PeerJS's free public connection service, so devices connect straight to the host. It works best when everyone is on the same Wi-Fi. Some school or church networks block these direct connections; if phones can't join, try a phone hotspot for the host.
- Anyone with the game code can join while the game is running.
