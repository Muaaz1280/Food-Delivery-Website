# 🍔 Food Delivery Website – MERN Stack Project

This is a **full-stack web application** for ordering food online, built with the **MERN stack**.

---

## 🛠️ Technologies Used

✅ **MongoDB** – NoSQL database for storing user profiles and orders  
✅ **Express.js** – REST API server framework  
✅ **React.js** – Frontend UI library  
✅ **Node.js** – JavaScript runtime for the backend  
✅ **Bootstrap 5** – Responsive UI styling (with dark mode support)

---

## 🚀 Features

- **User Authentication**
  - Signup and login with secure credentials
- **Place Orders**
  - Select quantity and options (e.g., half/full)
- **Order Summary**
  - View current and past orders
- **Responsive Design**
  - Clean Bootstrap-based layout

---

## 🗂️ Project Structure

food-delivery-website/
├── backend/
│ ├── models/
│ │ ├── Orders.js # Mongoose schema for orders
│ │ └── User.js # Mongoose schema for users
│ └── Routes/
│ ├── CUser.js # Routes for signup/login
│ └── OrderData.js # Routes for placing/viewing orders
├── frontend/
│ └── ... # React application
└── public/
└── index.html # Includes Bootstrap CDN

---

## ⚙️ Installation & Running

### 1️⃣ Backend Setup

Make sure you have **Node.js** and **MongoDB** installed locally.

```bash
cd food-delivery-website/backend
npm install
node index.js
Note:

Update your MongoDB connection string in index.js if needed.

2️⃣ Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm start
This will start the React development server at:

arduino
Copy
Edit
http://localhost:3000
🌐 Bootstrap CDN
Make sure to include the Bootstrap CSS link inside <head> in public/index.html:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
Feel free to fork this repository, open issues, or submit pull requests.
if want working  project you can contact me at muaaz1280@gmail.com

