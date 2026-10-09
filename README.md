# UNISONE 🎵
> *The Sound of Togetherness*

UNISONE is a lightweight, mobile-first web application designed to turn multiple smartphones into a unified, synchronized sound system. By synchronizing YouTube playback across devices with sub-millisecond precision, UNISONE eliminates the need for external Bluetooth speakers during hangouts and parties.

---

## ⚡ Overview

When friends hang out, playing music simultaneously from separate phones usually results in distracting delays and echoes. UNISONE solves this by introducing virtual listening rooms where participants can join via a simple room code or link to listen to the exact same track in real-time harmony.

> **Project Status:**  
> 🟡 **Frontend Ready / In Active Development**  
> The UI/UX, responsive mobile design, and player interfaces are complete. Real-time WebSocket synchronization and backend services are currently being integrated and will be deployed soon.

---

## ✨ Features

- **Virtual Listening Rooms:** Create or join synchronized listening sessions using simple room codes or direct links.
- **YouTube Media Integration:** Stream and control tracks seamlessly using the official YouTube Player API.
- **Zero-Friction Mobile UI:** Fast, intuitive, and responsive interface optimized for mobile browsers.
- **Microsecond Clock Sync (Upcoming):** Network-adjusted scheduling algorithm to keep audio in sync across multiple mobile connections.
- **Shared Queue & Host Controls (Upcoming):** Host moderation, collaborative track queue, and unified playback controls.

---

## 🛠️ Tech Stack

### Frontend
- **Framework / UI:** HTML5, CSS3, JavaScript (or React / Vite)
- **Audio Engine:** YouTube IFrame Player API
- **Styling:** Mobile-first, responsive CSS / modern dark UI

### Backend & Sync *(Coming Soon)*
- **Runtime:** Node.js & Express
- **Real-Time Protocol:** WebSockets (Socket.io)
- **Sync Architecture:** NTP-style offset calculation & scheduled playback engine

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and `git` installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/unisone.git](https://github.com/your-username/unisone.git)
   cd unisone
