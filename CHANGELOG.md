# Changelog

UNISONE uses **MAJOR.MINOR.PATCH** versions.
- **MAJOR**: a new foundation or a release that changes how the app is used
- **MINOR**: new features
- **PATCH**: fixes and polish

The current version is shown on the About card (Made by Pallab Ghosh, in the footer).

## 1.6.1
- Fix: the "Install app" button in the About card was missing on phones where the browser does not offer the automatic install prompt. It is now always there (unless the app is already installed): it installs straight away when the browser allows it, and otherwise shows the steps for Android, iPhone and desktop
- The browser's install offer is captured as early as possible, so it is never missed

## 1.6.0
- UNISONE can now be installed as an app (manifest, icons, service worker, "Install app" button) and packaged as an Android app
- Faster start: the YouTube player loads only when a room is opened; the app files are cached
- Privacy Policy and Terms of Use pages, linked from the home screen and the About card
- "Room has ended" window is now 2 minutes (the "still here" signal is sent every 30 seconds)
- README rewritten for the people who use UNISONE, with the developer details at the end

## 1.5.4
- Fix: in Dim mode, scrolling hard no longer shows the page behind the black cover (the page is locked and the cover extends past the screen edges)
- Search metadata: better title and description, canonical link, robots rules, structured data (WebApplication), richer link-preview tags
- Added robots.txt, sitemap.xml and the Google Search Console verification file

## 1.5.3
- Fix: the host always stays at the top of the Listening list, also after the screen was turned off and on
- Fix: a room that has ended (everyone left, nobody for 5 minutes) is no longer rejoined automatically, and it says "That room has ended."
- Mini player: more space between the progress bar and the play button

## 1.5.2
- The original favicon (one wave) is back for the browser tab and the touch icon
- The logo in the header and the README keeps the three waves

## 1.5.1
- Logo and favicon now match the logo in the site header (three waves) everywhere: browser tab, touch icon and README

## 1.5.0
- Fix: the app no longer leaves the room when the screen is turned off and on again. It reconnects patiently, re-syncs the song when the screen wakes, remembers the room, and rejoins it automatically if the browser reloaded the page
- Phones that were admitted before can return to locked or approval-only rooms (database rules updated)
- New Dim mode: a black cover keeps the screen on, so the music keeps playing, while using almost no light
- New logo and favicon
- README rewritten from scratch

## 1.4.2
- Fix: the "Allow" button in the join-request list was squashed into a small circle
- Fix: the home wave sometimes drew in only half of the screen after leaving a room
- About card: removed the "Songs belong to their creators" line, version now follows MAJOR.MINOR.PATCH
- Added this changelog

## 1.4.1
- Fix: mini player is fully opaque, and its progress line starts after the video
- Smoother queue animation when the song changes (rows are updated in place)
- Fix: touch highlight no longer sticks on buttons; pressed buttons fade out slowly
- Prettier animation on the +/-10 second buttons

## 1.4.0
- Redesigned floating mini player; smooth "fly" animation between player and search
- +/-10 second buttons beside Play/Pause
- "Queue finished" message when the queue ends
- Song count in the queue heading
- Long-press image saving disabled; text selection disabled on the About card
- Settings: "Done" button in the header
- New tagline font on the home screen
- Fix: home wave disappearing after leaving a room

## 1.3.1
- Fix: the video frame and the toggle switches shared a CSS class and broke each other's size
- Host avatar: calmer glow and a clearly readable letter
- Tidy two-column link tiles in the About card
- New fonts for the developer name and the tagline

## 1.3.0
- Spotify-style search: full-screen sheet, player shrinks into a mini bar
- Fixed header and footer; home screen fits without scrolling
- Developer photo and links on the About card
- Shared clock through the Worker `/time` endpoint, per-device start-delay learning, rate-nudge drift correction
- Red "Live" dot (and "Offline" state)
- Host avatar with a colour-changing ring

## 1.2.0
- Share button and invite links (`?room=CODE`), link preview image
- About / developer card, footer
- Calmer, colourful home wave
- Nicer avatars

## 1.1.0
- Screen stays awake while in a room
- Listeners can pause and resume only for themselves
- Gentle drift correction; new joiners never disturb others
- Hand the room over when the host leaves, automatic host failover
- Drag to reorder the queue
- YouTube interface hidden behind our own player
- Search quota message, no page zoom, no accidental text selection

## 1.0.0
- First public release at unisone.vercel.app
- Create and join rooms by code, synchronized playback, shared queue, host permissions

## 0.3.0
- Firebase Anonymous Auth and Realtime Database rooms, security rules
- Cloudflare Worker for YouTube search
- Shared clock and scheduled playback

## 0.2.0
- Search UI, animated play/pause and progress bar
- Host settings panel

## 0.1.0
- First front-end prototype: home, room, custom player UI, queue, link paste, animated waves
