# 🐍 Snake Board Game

A classic Snake Game built using **HTML, CSS, and JavaScript**, featuring smooth grid-based movement, score tracking, a timer, and persistent high scores using Local Storage.

Control the snake, collect food to grow longer, beat your highest score, and avoid crashing into the walls.

🌐 Live Demo: https://snake-board-game-sooty.vercel.app/

---

## ✨ Features

### 🎮 Classic Snake Gameplay

* Smooth grid-based snake movement
* Random food generation
* Snake grows after eating food
* Real-time score updates

### 🏆 Score System

* Live score tracking
* Persistent high score using Local Storage
* High score saved even after refreshing the browser

### ⏱ Game Timer

* Real-time gameplay timer
* Tracks how long you survive

### 🎨 Clean User Interface

* Responsive game board
* Simple and modern design
* Start Game and Game Over modals
* Easy-to-read scoreboard

### ⚡ Lightweight Performance

* Pure Vanilla JavaScript
* No external libraries or frameworks
* Fast rendering with DOM manipulation

---

# 🧠 How the Game Works

The game uses a grid-based board where the snake moves automatically at a fixed interval.

Each game loop performs the following steps:

```
Move Snake
      ↓
Check Wall Collision
      ↓
Check Food Collision
      ↓
Increase Score & Snake Length
      ↓
Render Updated Board
```

Food is generated at random positions, and every time the snake eats food:

* Score increases
* Snake length grows
* A new food item appears at a random location

The game ends when the snake collides with the wall.

---

# 🛠 Tech Stack

* **Frontend:** HTML5
* **Styling:** CSS3
* **Logic:** JavaScript (ES6)
* **Storage:** Local Storage

---

# 📂 Project Structure

```
Snake-Board-Game/

│── index.html
│── style.css
│── script.js
│── README.md
```

---

# 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/Snake-Board-Game.git
```

### Open the Project

Simply open

```
index.html
```

in your preferred browser.

No installation or build process is required.

---

# 🎮 Controls

| Key                | Action                  |
| ------------------ | ----------------------- |
| Enter              | Start Game              |
| Click Start Button | Start Game              |
| Restart Button     | Restart after Game Over |

---

# 🏆 Gameplay Features

* Grid-based movement
* Random food spawning
* Increasing score
* Persistent high score
* Survival timer
* Game Over screen
* Restart functionality

---

# 🎯 Future Improvements

* Snake self-collision detection
* Keyboard arrow key controls
* Touch controls for mobile devices
* Difficulty levels
* Pause and Resume feature
* Sound effects and background music
* Animated food effects
* Power-ups and special items
* Multiple game themes
* Leaderboard system

---

# 📦 Deployment

The project can be deployed easily using:

* GitHub Pages
* Netlify
* Vercel

Since it is a static website, no backend configuration is required.

---

# 🙌 Credits

Built as a fun JavaScript project to practice:

* DOM Manipulation
* Game Logic
* Event Handling
* Timers
* Local Storage
* Grid-based Rendering

---

# 📜 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and learn from the source code.
