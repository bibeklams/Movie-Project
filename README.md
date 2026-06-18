# 🎬 Movie Booking System

A full-stack Movie Booking Application built with the MERN Stack that allows users to browse movies, book seats, manage bookings, and securely manage their accounts. The application also includes a powerful Admin Dashboard for managing movies, users, and booking statistics.

## 🌐 Live Demo

### Frontend

https://movie-project-two-beta.vercel.app/

### Backend API

https://movie-project-zuez.onrender.com/

---

## ✨ Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* Refresh Token Authentication
* Protected Routes
* Browse Available Movies
* View Movie Details
* Seat Selection System
* Book Movie Tickets
* View My Bookings
* Cancel Bookings
* Change Profile Information
* Change Password
* Forgot Password via Email
* Reset Password via Secure Token

---

### 🛠️ Admin Features

* Admin Dashboard
* View Total Users
* View Total Movies
* View Total Bookings
* View Confirmed Bookings
* View Cancelled Bookings
* View Total Revenue
* View Total Seats Booked
* Add Movies
* Update Movies
* Delete Movies
* Manage Users

---

## 🏗️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Redux Toolkit
* Redux Persist
* Axios
* Formik
* Tailwind CSS
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Nodemailer
* Multer

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📁 Project Structure

### Frontend

```bash
src/
├── components/
├── pages/
├── redux/
├── services/
├── routes/
├── layouts/
└── assets/
```

### Backend

```bash
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── config/
└── uploads/
```

---

## 🔐 Authentication Flow

### Login

* User enters credentials
* Backend verifies user
* Access Token generated
* Refresh Token generated
* User authenticated

### Forgot Password

* User submits email
* Reset Token generated
* Email sent via Nodemailer
* User clicks reset link
* New password saved securely

---

## 🎟️ Seat Booking System

Users can:

* View available seats
* Select multiple seats
* See booked seats
* Calculate total price automatically
* Confirm bookings

Booked seats are disabled to prevent duplicate bookings.

---

## 📊 Admin Dashboard Statistics

The dashboard displays:

* Total Users
* Total Movies
* Total Bookings
* Confirmed Bookings
* Cancelled Bookings
* Total Revenue
* Total Seats Booked

---



### Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=3001

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

RESET_PASSWORD_SECRET=your_reset_secret

EMAIL_USER=your_email

EMAIL_PASSWORD=your_email_password

CLOUDINARY_CLOUD_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_key

CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

## 📸 Screens Included

* Home Page
* Login Page
* Registration Page
* Movie Details Page
* Seat Booking Page
* My Bookings Page
* Admin Dashboard
* Movie Management
* User Management
* Profile Management

---

## 🎯 Future Improvements

* Online Payment Integration (eSewa / Khalti)
* Real-Time Seat Locking with Socket.IO
* Booking History Analytics
* Revenue Charts
* Movie Reviews & Ratings
* Search & Filtering
* Pagination
* Email Booking Tickets with QR Codes

---

## 👨‍💻 Author

**Bibek Tamang**

Built as a full-stack MERN project to practice:

* Authentication & Authorization
* REST APIs
* MongoDB & Mongoose
* Redux Toolkit
* Tailwind CSS
* Email Services
* Deployment & Production Workflows

---

⭐ If you like this project, don't forget to star the repository.
