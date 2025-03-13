# 🚀 WebSocket Chat Application

A simple and stylish group chat application using WebSocket. Users can create rooms, join existing ones, and exchange messages in real-time.

![Chat Preview](materials/chat-demo.gif)

---

## 🌟 Features

- **Real-time messaging**: Instant message delivery.
- **Rooms**: Create and join rooms by ID.
- **Dark theme**: Sleek design in dark tones.
- **Simplicity**: Minimalistic and intuitive interface.

---

## 🛠 Technologies

<div align="center">

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=websocket&logoColor=white)

### Frontend
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Jinja2](https://img.shields.io/badge/Jinja2-B41717?style=for-the-badge&logo=jinja&logoColor=white)

</div>

---

## 🚀 Quick Start

### 1. Install Dependencies

Make sure you have the required dependencies installed for the backend:

```bash
pip install -r requirements.txt
```

### 2. Run the Server

Start the WebSocket server:

```bash
uvicorn app.main:app
```

### 3. Launch the Client
Open Web-browser and go to the page 
**http://localhost:8000/**

## 🖥 Interface

### Home Page

- Enter your username and room ID.
- Click "Join Chat".

![Home page](materials/main%20page.png)

### Chat Page

- Send messages in real-time.
- Messages are displayed with different styles for yourself and others.

![Home page](materials/chat%20page.png)

## 📂 Project Structure

```
|-- README.md
|-- app
|   |-- api
|   |   |-- router_page.py        # Routes for rendering pages
|   |   `-- router_socket.py      # WebSocket routes
|   |-- main.py                   # FastAPI application entry point
|   |-- manager
|   |   `-- connection_manager.py # WebSocket connection manager
|   |-- static
|   |   `-- index.js              # WebSocket logic and message handling
|   `-- templates
|       |-- home.html             # Home page for joining the chat
|       `-- index.html            # Chat page
|-- pyproject.toml                # Project metadata and dependencies
|-- requirements.txt              # Python dependencies
`-- uv.lock                       # Lock file for dependency versions
```
