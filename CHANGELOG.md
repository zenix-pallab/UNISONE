# Changelog

UNISONE uses **MAJOR.MINOR.PATCH** versions.
- **MAJOR**: a new foundation or a release that changes how the app is used
- **MINOR**: new features
- **PATCH**: fixes and polish

The current version is shown on the About card (Made by Pallab Ghosh, in the footer).

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
