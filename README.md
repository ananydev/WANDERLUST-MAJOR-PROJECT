https://apna-college-delta-project-xiqv.onrender.com/listings     - DEPLOYMENT LINK


🌍# Wanderlust – Adventure & Stay Discovery Platform
🚀 Project Overview

Wanderlust is a full-stack web application designed for users to explore, list, and review travel destinations and stays. The platform allows users to browse listings, create their own travel spots, leave reviews, and view locations on an interactive map. The project demonstrates core full-stack development concepts such as authentication, CRUD operations, session management, and cloud storage integration.

✅ Features

Features of Wanderlust

User Authentication & Authorization

Secure signup and login using Passport.js.

Passwords are hashed before storage for security.

Only logged-in users can create listings and reviews.

Only the owner of a listing/review can edit or delete it.

Travel Listings (CRUD Operations)

Create, view, update, and delete travel/adventure listings.

Each listing contains a title, description, location, country, price, and images.

Review & Rating System

Users can leave star ratings (1–5) and comments on listings.

Reviews are displayed with reviewer details.

Review deletion is allowed only by the author.

Image Upload & Storage

Images uploaded by users are stored securely using Cloudinary.

Supports formats like JPG, PNG, and JPEG.

Interactive Map Integration

Each listing shows its location on a Google Map.

Dynamic geocoding displays accurate marker placement.

Responsive UI

Designed with Bootstrap for responsiveness.

Works smoothly across desktops, tablets, and mobile devices.

Session Management

User sessions handled using express-session.

connect-mongo ensures sessions persist even after server restarts.

Data Validation & Error Handling

JOI schema validation ensures clean and secure data input.

Custom error handling for 404, validation errors, and unauthorized access.

Search & Explore

Browse listings based on location and details.

Can be extended with filters (price, country, rating).

Security Enhancements

Hashed passwords prevent misuse of sensitive data.

Flash messages guide users with feedback on actions.

Authorization middleware ensures role-based access.

Flash Messaging System

Provides instant success/error feedback to users after actions like login, logout, creating/deleting listings, etc.

Middleware for Security & Access Control

Custom middleware ensures only logged-in users can access protected routes.

Ownership checks prevent unauthorized edits/deletions.

Scalable Session Store

Sessions stored in MongoDB using connect-mongo, ensuring scalability across deployments (not just in-memory).

Templating with EJS + ejs-mate

Dynamic rendering of pages with reusable layouts and partials.

Cleaner code with template inheritance.

Validation at Multiple Levels

Server-side validation with JOI for listings & reviews.

Prevents invalid data (e.g., empty title, rating > 5).

Modular Project Structure

MVC-like separation with routes, models, middleware, and utils.

Improves maintainability and scalability.

Error Handling System

Custom ExpressError class for consistent error responses.

Catch-all for unknown routes (404 handling).

Environment Configuration

Sensitive data (DB URL, Cloudinary keys, secret keys) stored in .env file.

Keeps credentials safe and project deployment-ready.

RESTful Routes

Clean, REST-style URLs for listings, reviews, and user actions.

Example:

GET /listings → View all listings

POST /listings → Create listing

DELETE /listings/:id → Delete listing

Deployment Readiness

Configured with production and development environments.

Uses environment variables to switch DB/keys easily.


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
