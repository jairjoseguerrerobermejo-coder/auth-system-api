#  Authentication System API

## Description

REST API for user authentication using JWT, with role-based access control.

## Technologies

* Node.js
* Express
* MongoDB
* JWT
* bcrypt

## Features

* User registration
* Secure login with JWT
* Protected routes
* Role-based authorization (admin/user)
* Password encryption

## Endpoints

### Register

POST /api/auth/register

### Login

POST /api/auth/login

### Profile (protected)

GET /api/auth/profile

### Admin (protected)

GET /api/auth/admin

## Authentication

Send token in headers:

x-auth-token: YOUR_TOKEN

## Run project

* mongod
* npm install
* npm run dev
