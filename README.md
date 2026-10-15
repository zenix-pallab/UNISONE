<p align="center">
  <img src="og.png" alt="UNISONE · The Sound of Togetherness" width="100%">
</p>

<p align="center">
  <img src="logo.svg" alt="UNISONE logo" width="84" height="84">
</p>

<h1 align="center">UNISONE</h1>

<p align="center"><b>The Sound of Togetherness</b></p>

<p align="center">
  Listen to the same YouTube song as your friends, at the very same moment,<br>
  each on your own phone, wherever you are.
</p>

<p align="center">
  <a href="https://unisone.vercel.app"><b>Open UNISONE</b></a>
  &nbsp;·&nbsp;
  <a href="#install-it-as-an-app">Install the app</a>
  &nbsp;·&nbsp;
  <a href="https://unisone.vercel.app/privacy.html">Privacy</a>
  &nbsp;·&nbsp;
  <a href="https://unisone.vercel.app/terms.html">Terms</a>
</p>

---

## What is UNISONE?

You and your friends are in different places, but you want to enjoy a song together. Open UNISONE, start a room, send the code, and press play. The song starts on every phone at the same moment, and it stays together from the first beat to the last.

There is nothing to sign up for. Pick a name and you are in.

---

## Start in three steps

| | |
| :---: | --- |
| **1** | **Start a room.** Open UNISONE, type your name and tap **Start a room**. |
| **2** | **Invite your friends.** Tap the share button next to your room code. Your friends tap the link and join in one tap. |
| **3** | **Add songs and press play.** Search for a song or paste a YouTube link, and everyone listens together. |

Joining a friend's room instead? Open their link, or type their six-character code and tap **Join room**.

---

## What you can do

<table>
  <tr>
    <td width="33%" valign="top">
      <b>Listen together</b><br><br>
      Find songs with search, or paste any YouTube link<br>
      Build a queue and drag songs to reorder them<br>
      Jump 10 seconds back or forward<br>
      See who is listening
    </td>
    <td width="33%" valign="top">
      <b>Stay in your own flow</b><br><br>
      Pause just for yourself and rejoin the shared song with one tap<br>
      Search in full screen while the mini player keeps playing<br>
      Keep the screen on while you listen
    </td>
    <td width="33%" valign="top">
      <b>Easy on your phone</b><br><br>
      Dim mode: a black screen that saves light while the music plays<br>
      Come back to your room after your screen sleeps<br>
      Install it like any other app
    </td>
  </tr>
</table>

---

## You are the host

Whoever starts a room is its host. Tap the settings button to decide how the room works.

| Setting | What it does |
| --- | --- |
| **Max listeners** | Limits how many people can be in the room |
| **Who can play and pause** | Only you, chosen people, or everyone |
| **Everyone can add songs** | Lets your friends fill the queue, or keeps it to you |
| **Approve new people** | Asks you before anyone joins |
| **Lock room** | Stops anyone new from joining |

You can also remove someone from the room. If you need to leave, you can hand the room over to a friend so the music keeps going.

---

## Install it as an app

UNISONE works in your browser, and you can also keep it on your home screen so it opens like an app.

**Android (Chrome)**
1. Open [unisone.vercel.app](https://unisone.vercel.app).
2. Tap the menu (three dots), then **Install app** (or **Add to Home screen**).
   You can also tap the name at the bottom of the screen and choose **Install app**.

**iPhone (Safari)**
1. Open [unisone.vercel.app](https://unisone.vercel.app).
2. Tap the share button, then **Add to Home Screen**.

---

## Good to know

**Do I need an account?**
No. Choose a name and start.

**Is it free?**
Yes.

**Can I listen with my screen off?**
Not reliably. When a phone locks, YouTube pauses its player. Use **Dim mode** (the moon button in the room): the screen goes black and uses almost no light, but the music keeps playing.

**How close is the sync?**
Phones usually stay within a fraction of a second of each other. The small label at the top of the room shows how close you are right now, for example *Synced · 40 ms*.

**It says "Tap to join the music". Why?**
Some phones need your permission before a page can play sound. Tap once and you are in.

**A song won't play.**
Some creators don't allow their videos to be played outside YouTube. Try another version of the song.

**Search says the limit is reached.**
Search has a daily limit. Paste a YouTube link instead and it will work as usual.

**It says a room has ended.**
A room ends when its host closes it, or when nobody has been in it for 2 minutes. If other people are still in the room, you can come back to it at any time.

**I closed my browser. Can I come back?**
Yes. Open UNISONE again and you will return to your room automatically.

**Is my information safe?**
UNISONE keeps only the name you type and what is needed to run a room. Read the [Privacy Policy](https://unisone.vercel.app/privacy.html) and the [Terms of Use](https://unisone.vercel.app/terms.html).

---

## What's new

See the [changelog](CHANGELOG.md) for everything that has changed in each version.

---

<details>
<summary><b>For developers: run your own copy</b></summary>

<br>

UNISONE is a single `index.html` (vanilla JavaScript, no build step) with a Firebase Realtime Database, a small Cloudflare Worker for search and a shared clock, and static hosting on Vercel. Songs play through YouTube's official IFrame Player.

### How the sync works

| Step | What happens |
| --- | --- |
| **Shared state** | A controller's action is stored as `{ cur, playing, pos, at }`: the song, whether it is playing, the position, and the shared-clock time at which that position holds. |
| **Shared clock** | Each phone makes 8 quick round trips to the Worker's `/time` endpoint and keeps the fastest. |
| **Scheduled start** | Play and resume are scheduled 450 ms ahead, a new song 1800 ms ahead. |
| **Start-delay learning** | Each phone measures how long `playVideo()` takes and starts that much earlier next time. |
| **Drift correction** | Within 0.12 s nothing happens. Up to 1.2 s the phone plays briefly at 1.25x or 0.75x speed. Beyond that, one seek. |

### Project structure

```
.
├── index.html                    the whole app: interface, logic and styles
├── worker.js                     Cloudflare Worker: YouTube search proxy and /time clock
├── database.rules.json           Firebase Realtime Database security rules
├── manifest.webmanifest          app details for installing
├── sw.js                         service worker: fast start and offline-ready shell
├── privacy.html, terms.html      Privacy Policy and Terms of Use
├── logo.svg                      logo
├── favicon.svg, favicon.png      favicon
├── icon-192.png, icon-512.png, icon-maskable-512.png   app icons
├── dev.jpg                       developer photo for the About card
├── og.png                        link-preview image
├── robots.txt, sitemap.xml       search-engine files
├── google4bac51bffc979ddf.html   Search Console site verification
├── README.md
└── CHANGELOG.md
```

### Setup

**1. Firebase**
1. Create a project in the [Firebase console](https://console.firebase.google.com).
2. **Authentication**, Sign-in method: enable **Anonymous**.
3. **Realtime Database**: create a database in locked mode, then paste `database.rules.json` under **Rules** and publish.
4. Add your site's domain under **Authentication**, Settings, **Authorized domains**.
5. Copy the web app's `firebaseConfig` into the top of the script in `index.html`.

**2. Cloudflare Worker**
1. In Google Cloud, enable **YouTube Data API v3** and create an API key restricted to that API.
2. Create a Worker, paste in `worker.js`, and add these under **Variables and Secrets**:

| Name | Type | Value |
| --- | --- | --- |
| `YT_API_KEY` | Secret | your YouTube Data API key |
| `ALLOWED_ORIGINS` | Variable | comma-separated sites allowed to call the Worker, for example `https://unisone.vercel.app,http://localhost:3000` |

3. Set `CONFIG.SEARCH_URL` in `index.html` to the Worker's URL, keeping the trailing `/`.

**3. Deploy**

Push the repository to GitHub and import it in [Vercel](https://vercel.com) with the **Other** framework preset. Add the Vercel domain to the Worker's `ALLOWED_ORIGINS` and to Firebase's authorized domains.

**Run locally:** `npx serve`, then add the printed address to `ALLOWED_ORIGINS`.

### Data model

```
rooms/{CODE}/
├── host              uid of the host
├── lastSeen          when someone was last in the room
├── settings/         max, control (host | selected | everyone), approve, locked, add
├── members/{uid}/    name, joinedAt, dj
├── seen/{uid}        phones that have been admitted before
├── queue/{key}/      id, title, author, ord
├── state/            cur, playing, pos, at
├── requests/{uid}/   name
└── kicked/{uid}      "kicked" or "denied"
```

</details>

---

## About the developer

<table>
  <tr>
    <td valign="middle"><b>Pallab Ghosh</b></td>
    <td valign="middle">
      <a href="https://zenix-pallab.netlify.app">Portfolio</a> ·
      <a href="https://github.com/zenix-pallab">GitHub</a> ·
      <a href="https://www.instagram.com/zenix_pallab">Instagram</a> ·
      <a href="https://x.com/zenix_pallab">X</a> ·
      <a href="https://www.facebook.com/share/18Mc2tV4Ag/">Facebook</a> ·
      <a href="https://linktr.ee/zenix_pallab">Linktree</a> ·
      <a href="mailto:zenix.pallab@gmail.com">Email</a>
    </td>
  </tr>
</table>

---

<p align="center">
  <img src="logo.svg" alt="" width="28" height="28"><br>
  <sub>Made with care by Pallab Ghosh · Songs play through YouTube's official player</sub>
</p>
