# College Management System (CMS)

A scalable **College Management System (CMS)** built using modern web technologies.  
This system provides a **single login platform** for students, faculty, and administrators with **Role-Based Access Control (RBAC)** and secure authentication using **JWT**.

The project is designed to manage core academic and administrative operations in a college through a centralized dashboard.

---

# Project Overview

The College Management System simplifies management of college data such as users, roles, academic records, and administrative operations.

The system follows an **admin-first architecture**, where administrators create and manage users and assign roles to control system access.

The system supports:

- Single login for all users
- Role based access
- Secure authentication
- Scalable backend architecture
- Modular API design

---

# Features

## Authentication
- Secure user authentication using **JWT (JSON Web Token)**
- Persistent login sessions
- Password-based authentication

## Role Based Access Control (RBAC)
Different users have different permissions depending on their role.

Roles include:
- Admin
- Faculty
- Student

Example permissions:

Admin can:
- Create users
- Assign roles
- Manage system data

Faculty can:
- Manage student records
- Upload academic data

Students can:
- View their academic information
- Access personal dashboard

---

# System Architecture

The project follows a **client-server architecture**.

Frontend → sends requests to backend APIs  
Backend → processes logic and communicates with database  
Database → stores all user and system data
Client (Frontend) | v Node.js + Express API | v PostgreSQL Database
Copy code

---

# Tech Stack

## Frontend
- React.js
- HTML
- CSS
- JavaScript
- Axios

## Backend
- Node.js
- Express.js
- JWT Authentication
- Role Middleware

## Database
- PostgreSQL

## Tools
- Postman (API testing)
- Git & GitHub (version control)
- VS Code

---

# Database Design

The system uses a relational database structure.

## Users Table

Stores all user information.

Fields:

- id
- name
- email
- password
- role_id
- created_at

## Roles Table

Defines system roles.

Fields:

- id
- role_name

Example roles:

- Admin
- Faculty
- Student

Users are linked to roles using **foreign keys**.

---

# Authentication Flow

1. User enters email and password
2. Backend verifies credentials
3. Server generates JWT token
4. Token is returned to the client
5. Client sends token in future requests
6. Middleware verifies token before allowing access

---

# Authorization (RBAC)

After authentication, access control is applied.

Example:

Admin routes:
/admin/create-user /admin/manage-roles
Copy code

Faculty routes:
/faculty/upload-marks /faculty/manage-students
Copy code

Student routes:
/student/profile /student/marks
Copy code

Middleware checks user role before allowing access.

---

# Folder Structure
cms-project │ ├── backend │   ├── controllers │   ├── routes │   ├── middleware │   ├── models │   ├── config │   └── server.js │ ├── frontend │   ├── components │   ├── pages │   ├── services │   └── App.js │ └── README.md
Copy code

---

# Installation Guide

## 1 Clone the Repository
git clone https://github.com/your-username/cms-project.git⁠�
Copy code

## 2 Navigate to Project
cd cms-project
Copy code

## 3 Install Backend Dependencies
npm install
Copy code

## 4 Start Server
node server.js
Copy code

or
nodemon server.js
Copy code

---

# API Endpoints

## Authentication

POST `/login`

Login user and return JWT token.

POST `/register`

Create new user.

---

## Admin Routes

POST `/admin/create-user`

Create new user.

GET `/admin/users`

Get all users.

POST `/admin/assign-role`

Assign roles to users.

---

## Faculty Routes

POST `/faculty/add-student-data`

Add student records.

GET `/faculty/students`

View student list.

---

## Student Routes

GET `/student/profile`

View personal profile.

GET `/student/results`

View academic results.

---

# Security Features

- JWT Authentication
- Role Based Access Control
- Protected API routes
- Backend role verification
- Frontend roles are not trusted

---

# Future Improvements

Possible improvements for the system:

- Attendance management
- Assignment submission system
- Result analytics dashboard
- Notification system
- Mobile responsive UI
- File upload support

---

# Use Cases

This system can be used by:

- Colleges
- Universities
- Training institutes
- Educational organizations

---

# Learning Outcomes

This project demonstrates knowledge of:

- Full Stack Web Development
- Backend API development
- Authentication and Authorization
- Database design
- Scalable project architecture
- Secure web applications

---

# Author

Tejas Jalit

Second Year Engineering Student  
Interested in Web Development, Backend Systems, and Scalable Applications.

GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile

---

# License

This project is open-source and available for learning and educational purposes.
