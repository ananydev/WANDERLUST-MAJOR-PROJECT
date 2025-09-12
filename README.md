https://apna-college-delta-project-xiqv.onrender.com/listings     - DEPLOYMENT LINK


🌍 Wanderlust – Adventure & Stay Discovery Platform
🚀 Project Overview

Wanderlust is a full-stack web application designed for users to explore, list, and review travel destinations and stays. The platform allows users to browse listings, create their own travel spots, leave reviews, and view locations on an interactive map. The project demonstrates core full-stack development concepts such as authentication, CRUD operations, session management, and cloud storage integration.

✅ Features

User Authentication (Signup & Login)

Create, Read, Update, Delete (CRUD) Travel Listings

Add/Delete Reviews for Listings

Image Upload via Cloudinary

Display Listings on Interactive Google Map

Session Management with Express-session & Connect-mongo

Responsive UI design using Bootstrap

Error Handling with Custom Middleware

🛠️ Tech Stack
Technology	Purpose
Node.js	Backend runtime environment
Express.js	Web framework for routing, middleware, session handling
MongoDB	NoSQL database for storing listings, users, and reviews
Mongoose	ODM for MongoDB to interact with the database
EJS Templates	Server-side rendered HTML pages with dynamic content
Cloudinary	Image upload and storage solution
Passport.js	Authentication (Local Strategy for Login & Signup)
Express-session & Connect-mongo	Session management and persistence
Bootstrap	Responsive front-end design
Google Maps API	Display interactive location map
🎯 Problem Statement

Most travel enthusiasts struggle to find a platform where they can both share and explore lesser-known stays and adventure spots, especially with a personalized review system and map visualization. Wanderlust solves this by providing a collaborative platform where users can share experiences and explore travel destinations efficiently.

🎯 Objectives

Build a user-friendly interface to list travel spots

Allow user authentication with secure password hashing

Store and retrieve data from MongoDB

Implement image upload functionality with Cloudinary

Visualize locations using Google Maps API

Enable users to post and delete reviews

Provide session persistence using Mongo Store

Display real-time error handling feedback

📂 Project Structure
wanderlust/
│
├── models/                # Mongoose models (User, Listing, Review)  
├── routes/                # Route handling files (listings, users, reviews)  
├── views/                 # EJS templates (boilerplate, listings, users, error)  
├── public/                # CSS, JS, static assets  
├── utils/                 # Middleware, Error Handler, Cloud Config  
├── app.js                 # Main server file  
├── schema.js              # JOI validation schema  
├── cloudConfig.js         # Cloudinary config  
├── .env                   # Environment variables  
├── .gitignore             # Ignore node_modules and env files  
├── package.json           # Project dependencies and scripts  
└── README.md              # Project description (this file)  

⚡ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/wanderlust.git  


Install dependencies:

npm install  


Setup .env file with the following variables:

CLOUD_NAME=your_cloudinary_cloud_name  
CLOUD_API_KEY=your_cloudinary_api_key  
CLOUD_API_SECRET=your_cloudinary_api_secret  
ATLASDB_URL=your_mongodb_connection_string  
SECRET=your_session_secret  


Run the project locally:

nodemon app.js  

✅ Expected Outcome

A fully functional travel listing web app

Users can sign up, log in, add/edit/delete travel listings

Reviews are posted for listings

Images are uploaded to Cloudinary

Location shown on Google Maps

Session persistence ensures user stays logged in

Input validation prevents malformed data

Clean error handling with informative messages

⚡ Future Improvements

Add advanced search with filters (price, location, rating)

Implement user profile management

Add recommendation system using ML

Convert frontend to React for dynamic SPA

Optimize for performance and security enhancements

📜 License

This project is open-source under the MIT License.
