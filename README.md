# MERN Browser Sandbox IDE

A lightweight browser-based sandbox IDE built using the MERN stack.  
The application allows users to create, edit, organize, and run HTML/CSS/JavaScript files directly inside the browser using Monaco Editor.

---

# Features

## File Management
- Create files
- Edit files
- Rename files
- Delete files

## Folder System
- Create folders
- Organize files inside folders
- Folder grouping in sidebar
- Persistent folder structure using MongoDB

## Code Editor
- Monaco Editor integration
- Syntax highlighting
- IDE-like coding experience
- Multiple language support for:
  - HTML
  - CSS
  - JavaScript

## Preview System
- Live browser preview
- Multiple HTML file preview support
- Run button execution system
- iframe-based sandbox preview

## Persistence
- MongoDB project persistence
- Auto-save functionality
- Project restoration after browser refresh

## UI
- Modern IDE-inspired interface
- Explorer sidebar
- Responsive layout
- Professional editor-preview separation

---

# Tech Stack

## Frontend
- React.js
- Bootstrap
- Axios
- Monaco Editor

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Project Architecture

## Monaco Editor
Monaco Editor was integrated to provide a professional code editing experience with syntax highlighting and IDE-like behavior.

## Run Button Architecture
A dedicated Run button was implemented instead of continuous automatic execution.  
This approach simulates real IDE behavior similar to VS Code and Replit.

## Folder System
The folder system uses lightweight folder grouping through metadata inside file objects instead of a fully nested filesystem structure.  
This approach keeps the application architecture simple while satisfying the assignment requirements.

## Live Preview
The application uses iframe `srcdoc` rendering to safely preview HTML, CSS, and JavaScript code directly inside the browser.

## Persistence
MongoDB stores project files and folder structures so the project state persists across browser refreshes and sessions.

---

# Tradeoffs / Limitations

- CSS and JavaScript files are currently shared globally across HTML previews.
- Nested folders are not implemented.
- Package installation support is not included.
- The sandbox currently supports frontend technologies only (HTML/CSS/JavaScript).

---

# AI Usage

AI assistance was used for:
- Architectural guidance
- Debugging support
- MERN integration guidance
- UI improvement suggestions
- State management troubleshooting

The project implementation, integration, testing, and customization were completed manually.

---

# Future Improvements

- Nested folder support
- Independent CSS/JS linking per HTML file
- File tabs
- Resizable panels
- Authentication system
- Cloud project storage
- Package installation support

---

# Setup Instructions

## Frontend Setup

```bash
cd sandbox-client
npm install
npm run dev
```
## Backend Setup

```bash
cd sandbox-server
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend project:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

# Author

Sridhar K
