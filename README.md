🚀 Wanderlust – Adventure & Stay Discovery Platform
🌍 Project Overview

Wanderlust is a full-stack web application that enables users to explore, create, and review travel listings.

It simulates a real-world accommodation platform (similar to Airbnb) while focusing on core backend engineering concepts such as:

Authentication & Authorization
Database Relationships
Cloud Integration
Scalable Architecture
✨ Key Features
🔐 Authentication & Authorization
Secure signup/login using Passport.js
Password hashing via bcrypt (passport-local-mongoose)
Protected routes using middleware
Owner-based authorization:
Only listing creators can edit/delete listings
Only review authors can delete reviews
🏡 Listing Management (CRUD)
Create, Read, Update, Delete listings
Each listing includes:
Title, Description, Price
Location & Country
Image (Cloudinary)
RESTful routing implemented
⭐ Review & Rating System
Add ratings (1–5 stars)
Write comments
Reviews linked to:
Listing
User (author)
Only review author can delete reviews
🖼️ Image Upload (Cloud Integration)
Integrated with Cloudinary
Secure image storage
Supports:
JPG, PNG, JPEG
🗺️ Interactive Map
Integrated Google Maps API
Geocoding: location → coordinates
Dynamic marker placement
📱 Responsive UI
Built using Bootstrap
Fully responsive across:
Desktop
Tablet
Mobile
⚙️ Session Management
express-session for session handling
connect-mongo for persistent sessions
Users remain logged in after server restart
✅ Validation & Error Handling
Server-side validation using Joi
Prevents invalid inputs
Custom error handling:
404 errors
Validation errors
Unauthorized access
🔐 Security Features
Hashed passwords
Protected routes
Authorization middleware
Environment variables for sensitive data
💬 Flash Messaging
Real-time feedback for:
Login success/failure
Errors
CRUD operations
🧱 Scalable Architecture
MVC-like structure:
Models
Routes
Controllers
Middleware
Clean and maintainable codebase
🛠️ Tech Stack
Technology	Purpose
Node.js	Backend runtime
Express.js	Routing & middleware
MongoDB	NoSQL database
Mongoose	ODM for MongoDB
EJS + ejs-mate	Server-side templating
Cloudinary	Image storage
Passport.js	Authentication
express-session	Session management
connect-mongo	Session persistence
Bootstrap	UI & responsiveness
Google Maps API	Map integration
🎯 Problem Statement

Many travelers lack a platform where they can both discover destinations and share experiences with reliable reviews and map-based visualization.

Wanderlust solves this by providing:

User-generated listings
Community-driven reviews
Secure authentication
Map-based exploration
🎯 Objectives
Build a full-stack web application
Implement secure authentication & authorization
Design scalable database schema
Enable cloud-based image uploads
Integrate map-based visualization
Ensure validation & error handling
📂 Project Structure
wanderlust/
│
├── models/          # Mongoose schemas (User, Listing, Review)
├── routes/          # Express routes
├── controllers/     # Business logic
├── views/           # EJS templates
├── public/          # Static files (CSS, JS)
├── utils/           # Helper functions
├── middleware.js    # Auth & validation middleware
├── schema.js        # Joi validation schemas
├── cloudConfig.js   # Cloudinary setup
├── app.js           # Main server file
├── .env             # Environment variables
├── package.json     # Dependencies
└── README.md        # Documentation
⚡ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables (.env)
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
ATLASDB_URL=your_mongodb_url
SECRET=your_session_secret
4️⃣ Run Application
nodemon app.js
✅ Expected Outcome
Fully functional full-stack web app
Secure authentication system
CRUD-based listing management
Review & rating system
Image uploads via Cloudinary
Google Maps integration
Persistent sessions
Clean error handling
🚀 Future Enhancements
Advanced search filters (price, rating, location)
Booking system (check-in/check-out)
Role-based access (Admin/User)
Recommendation system (ML integration)
Convert frontend to React (SPA)
Deployment (AWS / Render / Vercel)
📜 License

This project is licensed under the MIT License.
