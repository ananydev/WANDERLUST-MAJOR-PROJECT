🚀 Wanderlust – Adventure & Stay Discovery Platform

📄 (Based on your content — refined & structured)

🌍 Project Overview

Wanderlust is a full-stack web application that allows users to explore, create, and review travel listings.
It is designed to simulate a real-world accommodation platform (similar to Airbnb) while focusing on core backend engineering concepts such as authentication, authorization, database relationships, and cloud integration.

The platform enables users to:

Discover travel destinations
Create and manage listings
Upload images securely
Leave reviews and ratings
View locations on an interactive map
✨ Key Features
🔐 Authentication & Authorization
Secure signup/login using Passport.js
Password hashing using bcrypt (via passport-local-mongoose)
Protected routes using middleware
Owner-based authorization:
Only creators can edit/delete listings & reviews
🏡 Listing Management (CRUD)
Create, Read, Update, Delete listings
Each listing includes:
Title, Description, Price
Location, Country
Image (Cloudinary)
RESTful routing implemented
⭐ Review & Rating System
Users can:
Add ratings (1–5 stars)
Write comments
Reviews linked to:
Listing
User (author)
Only review author can delete
🖼️ Image Upload (Cloud Integration)
Integrated with Cloudinary
Stores images securely in the cloud
Supports:
JPG, PNG, JPEG
🗺️ Interactive Map
Integrated Google Maps API
Geocoding converts location → coordinates
Dynamic marker placement on map
📱 Responsive UI
Built using Bootstrap
Fully responsive:
Desktop
Tablet
Mobile
⚙️ Session Management
express-session for session handling
connect-mongo for persistent session storage
User stays logged in even after server restart
✅ Validation & Error Handling
Joi for server-side validation
Prevents invalid data input
Custom error handling:
404 errors
Validation errors
Unauthorized access
🔐 Security Features
Hashed passwords
Protected routes
Authorization middleware
Environment variables for secrets
💬 Flash Messaging
Real-time feedback:
Login success
Errors
CRUD actions
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

Many travelers struggle to find a platform where they can both discover and share travel experiences with reliable reviews and location visualization.

Wanderlust addresses this by providing a user-driven platform that enables:

Listing creation
Community reviews
Secure access
Map-based exploration
🎯 Objectives
Build a full-stack web application
Implement secure authentication & authorization
Design scalable database schema
Enable image uploads using cloud services
Integrate map-based location visualization
Ensure data validation and error handling
📂 Project Structure
wanderlust/
│
├── models/          # Mongoose schemas (User, Listing, Review)
├── routes/          # Express routes
├── controllers/     # Business logic
├── views/           # EJS templates
├── public/          # Static files (CSS, JS)
├── utils/           # Helper functions (Error, Async wrapper)
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
Secure login/signup system
CRUD-based listing management
Review & rating system
Image uploads via Cloudinary
Map integration with Google Maps
Persistent sessions
Clean error handling
🚀 Future Enhancements
Advanced search filters (price, rating, location)
Booking system (check-in/check-out)
Role-based access (Admin/User)
Recommendation system (ML integration)
Convert frontend to React (SPA)
Deploy on AWS / Render / Vercel
📜 License

This project is licensed under the MIT License.
