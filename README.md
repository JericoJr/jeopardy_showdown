# Scripture Showdown

A free Bible quiz game show for youth groups and young adults. The host runs the game from a tablet or laptop, a TV shows the board, and players join from any phone. No accounts or apps needed.

## Put it online with GitHub Pages (free)

1. Sign in at github.com and create a new **public** repository, for example `jeopardy_showdown`.
2. Click **Add file → Upload files**, upload `index.html`, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set **Source** to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. Wait a minute or two. Your game is live at `https://jericojr.github.io/jeopardy_showdown/`.

To update the game later, upload a new `index.html` to the same repository.

## Running a game

1. **Host (iPad):** open the site, tap **Host a game**, choose your questions and rules, then tap **Create game**.
2. **TV board (laptop on AirPlay):** open the site, tap **Show the board**, enter the 4-letter code, then tap **Full screen**.
3. **Players (any phone):** scan the QR code on the TV, enter a name, and join or create a team.
4. When the teams look right, the host taps **Start the game**.

The host's device runs the game, so keep the host page open and the iPad awake for the whole game. If the host page reloads, tap **Host a game** to resume, and everyone reconnects within a few seconds.

## Good to know

- Live syncing uses PeerJS's free public connection service, so devices connect straight to the host. It works best when everyone is on the same Wi-Fi. Some school or church networks block these direct connections; if phones can't join, try a different network or a phone hotspot for the host.
- Your saved custom games are stored in the host device's browser.
- Anyone with the game code can join while the game is running.
