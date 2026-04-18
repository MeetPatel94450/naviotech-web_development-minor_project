# naviotech-web_development-minor_project
Basic Authentication System 
- Signup, login, logout.
- Password hashing with bcrypt.
- JWT authentication for protected routes.


# 🔐 Basic Authentication System

A full-stack authentication system built using **Node.js, Express, MySQL, and JWT**.  
This project demonstrates secure user authentication with signup, login, and protected routes.

---

## 🚀 Features

- ✅ User Signup
- ✅ Secure Login
- ✅ Password Hashing using bcrypt
- ✅ JWT-based Authentication
- ✅ Protected Routes
- ✅ Display Logged-in User Email
- ✅ Responsive Frontend UI

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS (Grid + Google Fonts)
- JavaScript (Fetch API)

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Security
- bcrypt (password hashing)
- JSON Web Tokens (JWT)

---

## 📁 Project Structure
NavioProject/
│

├── server.js

├── db.js

├── .env

├── index.html

│

├── routes/

│ └── auth.js
│
└── middleware/
└── auth.js

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

cd auth-project
### 2️⃣ Install dependencies
npm install
### 3️⃣ Setup MySQL Database

Run the following SQL in MySQL:

CREATE DATABASE auth_db;
USE auth_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

### 4️⃣ Configure Environment Variables

## Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=auth_db
JWT_SECRET=supersecretkey
### 5️⃣ Run the Server
node server.js

Server will run on:

http://localhost:5000

### 6️⃣ Run Frontend
Open index.html in browser
OR
Use Live Server in VS Code
🔐 API Endpoints
➤ Signup
POST /api/auth/signup
➤ Login
POST /api/auth/login
➤ Get User (Protected)
GET /api/user
Authorization: Bearer <token>
🧠 How It Works
User signs up → password is hashed using bcrypt
User logs in → credentials verified
JWT token is generated
Token is used to access protected routes
Backend fetches user data using token
📸 Screenshots
Login Page

Signup Page
Dashboard (with user email)

(Add screenshots here if needed)

### ⚠️ Challenges Faced
Handling JWT authentication errors
Frontend-backend integration
Database connection setup
### 🔮 Future Enhancements
Email verification system
Password reset feature
Role-based authentication (Admin/User)
Deployment (Render / Vercel)
👨‍💻 Author

Meet Patel

📄 License

This project is for educational purposes.
