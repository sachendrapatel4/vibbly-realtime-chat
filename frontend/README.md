# Vibbly – Real-time Chat & Video Calling Platform 💬

## 🌍 Overview

**Vibbly** is a modern communication platform where people can **practice conversations, make friends, and improve their language skills together.**
It brings together **instant messaging, high-quality video calls, and community features** in one place with a **clean, responsive design.**

Built for **hackathons, teams, learners, and personal use,** Vibbly ensures **seamless communication, security, and scalability.**

<br/>

## 🎯 Objectives

- **Improve Language Skills:** Help users practice conversations and enhance communication skills.

- **Seamless Communication:** Real-time messaging & video calling in a single platform.

- **User-Centric Design:** Clean, modern, and easy-to-use web interface.

- **Privacy & Security:** JWT-based authentication & secure data handling.

- **Future Ready:** Built with extensibility in mind for features like group calls, AI chat partners, and gamification.

<br/>

## ✨ Features

**💬 Real-Time Messaging (Powered by Stream API)**

- 1-to-1 and group chat
- Typing indicators & read receipts
- Online/offline presence
- Emoji & media sharing support

**🎥 Video Calling (Powered by Stream API)**

- High-quality 1-to-1 video calls
- Call controls: mute/unmute,react,record end call
- Screen sharing during video calls
- Low-latency, real-time performance

**🎨 User Experience**

- Modern responsive UI (React + Bootstrap)
- Sidebar for quick navigation
- Notifications for new messages & missed calls
- Light & Dark theme support

**🔐 Security & Reliability**

- JWT Authentication for secure login/signup
- MongoDB Atlas for cloud-based storage
- Stream API ensures reliable real-time communication

<br/>


## 🛠️ Tech Stack

- **Frontend:** React.js, Bootstrap

- **Backend:** Node.js, Express.js

- **Real-Time Messaging & Calls:** Stream API

- **Database:** MongoDB Atlas

- **Authentication:** JWT (JSON Web Tokens)

- **Deployment:** Render

- **Version Control:** Git & GitHub

<br/>

## 🏗️ Architecture

- **Workflow**

![Vibbly Workflow Architecture](https://raw.githubusercontent.com/ShalleySharma/vibbly-realtime-communication/refs/heads/main/frontend/public/media/workflow.png)

- **🚀 Live Demo**
Try Vibbly now 👉 (https://vibbly-realtime-communication.onrender.com)
 
<br/>

## 🔮 Future Enhancements

- Group video calls 
- Voice messages & reactions
- Gamification features (badges, streaks, points)
- AI-powered language practice partner

<br/>

## ⚡ Installation & Setup

**Clone the repository**
- git clone https://github.com/ShalleySharma/vibbly-realtime-communication.git

**Navigate to project folder**
- cd vibbly  

**Install dependencies (frontend + backend)**
- npm install
    
**Setup environment variables (create a .env file in backend)**
- MONGO_URI=your-mongodb-atlas-uri  
- JWT_SECRET=your-secret-key  
- STREAM_API_KEY=your-stream-api-key  
- STREAM_API_SECRET=your-stream-api-secret  

**Setup environment variables (create a .env file in frontend)**
- REACT_APP_STREAM_API_KEY=your-stream-api-secret

**Run backend server**
- npm run build
  
**Run frontend**
- npm start  

<br/>
