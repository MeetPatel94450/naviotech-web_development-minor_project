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
- ✅ Password Hashing using bcrypt
- ✅ JWT-based Authentication
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

├── routes/

│ └── auth.js

└── middleware/

|  └── auth.js

---

### 5️⃣ Run the Server

node server.js

Server will run on:

http://localhost:5000

### 6️⃣ Run Frontend

Open index.html in browser

OR

Use Live Server in VS Code

### 🧠 How It Works
User signs up → password is hashed using bcrypt

User logs in → credentials verified

JWT token is generated

Token is used to access protected routes

Backend fetches user data using token


### 📸 Screenshots

## - Login Page
<img width="1366" height="628" alt="login_page" src="https://github.com/user-attachments/assets/4aa76074-9072-43fd-939f-510cd32296b8" />


## - Signup Page
<img width="1364" height="628" alt="sign_up" src="https://github.com/user-attachments/assets/d9b580df-9757-4c78-aae8-3bb1d6cbdbbc" />


## - Dashboard (with user email)
<img width="1366" height="630" alt="dashboard" src="https://github.com/user-attachments/assets/7b2de44a-1998-4500-b070-7eb03b7cb4d6" />


### ⚠️ Challenges Faced

Handling JWT authentication errors

Frontend-backend integration

Database connection setup


👨‍💻 Author

Meet Patel
