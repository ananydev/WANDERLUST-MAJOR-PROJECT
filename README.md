# 🚀 Wanderlust – Adventure & Stay Discovery Platform  

## 📄 Project Overview  

**Wanderlust** is a full-stack web application that allows users to **explore, create, and review travel listings**.  

It is designed to simulate a real-world accommodation platform (similar to Airbnb) while focusing on core backend engineering concepts such as:  

- Authentication & Authorization  
- Database Relationships  
- Cloud Integration  

The platform enables users to:  

- 🌍 Discover travel destinations  
- 🏡 Create and manage listings  
- 🖼️ Upload images securely  
- ⭐ Leave reviews and ratings  
- 🗺️ View locations on an interactive map  

---


## HLD
<img width="1077" height="1028" alt="image" src="https://github.com/user-attachments/assets/dd044aa8-2ffd-4a1e-ae92-58065b8e5f4a" />




## 🏗️ Architecture Overview

This project follows a 3-tier architecture:

```text
Client (Browser / EJS UI)
        ↓
HTTP Requests (GET/POST/PUT/DELETE)
        ↓
Backend (Node.js + Express)
        ↓
Database (MongoDB Atlas)
        ↓
External Services (Cloudinary, Google Maps)
```

# 🧩 1. Client Layer (Frontend)

The client layer is responsible for rendering the UI and collecting user input.

## 🛠️ Technologies Used

- **EJS Templates** → Dynamic HTML rendering  
- **Bootstrap** → Responsive UI  
- **Client-side JavaScript** → Form validation  

## 📦 Components

- **Views** → listings, users, reviews  
- **Layouts** → boilerplate, navbar, footer  
- **UI Elements** → cards, forms, responsive design  

## 🎯 Responsibilities

- Display listings, reviews, and images  
- Handle form submissions (Create/Edit)  
- Show flash messages  

---

# ⚙️ 2. Backend Layer (Node.js + Express)

This layer handles all business logic and request processing.

## 🌐 Routing Layer

Defines RESTful API endpoints:

```text
GET     /listings
POST    /listings
PUT     /listings/:id
DELETE  /listings/:id

POST    /reviews

POST    /signup
POST    /login
GET     /logout
```

👉 Uses **method-override** to support `PUT` & `DELETE` requests.

---

## 🧠 Controllers

Handle business logic:

- **listings.js** → CRUD operations for listings  
- **reviews.js** → Review management  
- **users.js** → Authentication handling  

---

## 🛡️ Middleware

Used for request preprocessing:

- **isLoggedIn** → Authentication check  
- **isOwner** → Authorization check  
- **validateListing** → Joi validation  
- **validateReview** → Joi validation  

---

## 🔐 Authentication & Sessions

- **Passport.js (Local Strategy)** → Login & Signup authentication  
- **passport-local-mongoose** → Password hashing  
- **express-session** → Session management  
- **connect-mongo** → Session storage in MongoDB  
- **connect-flash** → Success/Error flash messages  

### 🔑 Security Features

- Password hashing using **bcrypt (passport-local-mongoose)**  
- Protected routes using middleware  

### 👤 Owner-based Authorization

- Only creators can edit/delete listings & reviews  

---

## 📤 File Upload System

- **multer** → Handles file uploads  
- **Cloudinary** → Stores images in the cloud  
- **multer-storage-cloudinary** → Connects Multer with Cloudinary  

👉 Only the **image URL** is stored in the database, not the actual file.

---

# 🗄️ 3. Data Layer (MongoDB Atlas)

Data is stored using **Mongoose ODM** with 3 main collections.

## 👤 Users Collection

```text
_id, username, email, password (hash + salt)
```

## 🏡 Listings Collection

```text
_id, title, description, price, location
image { url, filename }
owner → ObjectId (User)
reviews → [ObjectId]
```

## ⭐ Reviews Collection

```text
_id, rating, comment, createdAt
author → ObjectId (User)
```

---

## 🔗 Relationships

```text
User (1) ────> (Many) Listings
User (1) ────> (Many) Reviews
Listing (1) ────> (Many) Reviews
```

---

# 🔁 4. Request Flow (Example: Create Listing)

```text
User submits form
        ↓
POST /listings
        ↓
Middleware (Auth + Multer + Joi Validation)
        ↓
Controller (createListing)
        ↓
Mongoose saves data
        ↓
MongoDB stores listing
        ↓
Redirect response
        ↓
Frontend renders updated page
```

---

# 🔐 5. Authentication Flow

```text
User logs in
        ↓
Passport verifies credentials
        ↓
Session created (stored in MongoDB)
        ↓
Session ID sent as cookie
        ↓
Subsequent requests include cookie
        ↓
User remains logged in
```

---

# 🌐 6. External Services

- **Cloudinary** → Image storage & CDN  
- **Google Maps API** → Location display  

---

# ⚡ 7. Key Features

✔ MVC Architecture  
✔ Session-based authentication  
✔ RESTful API design  
✔ File upload with cloud storage  
✔ Server-side validation using Joi  
✔ Centralized error handling  
✔ Flash messaging  
✔ Google Maps integration  
✔ Responsive UI using Bootstrap  

---

# 🧠 8. Folder Structure

```text
project/
 ├── routes/        → API routes
 ├── controllers/   → Business logic
 ├── models/        → Database schemas
 ├── middleware/    → Authentication & validation
 ├── views/         → EJS templates
 ├── public/        → Static assets
 ├── utils/         → Helper functions
 └── app.js         → Entry point
```

---

# 🚀 9. Scalability Considerations

- Sessions stored in MongoDB (**persistent & scalable**)  
- Cloudinary used as an image CDN  
- Modular MVC architecture for maintainability  

## 🔮 Future Enhancements

- Load balancing  
- Redis caching  
- Microservices architecture  
- JWT-based authentication  
- Docker deployment

---

## ✨ Key Features  

### 🔐 Authentication & Authorization  

- Secure signup/login using **Passport.js**  
- Password hashing using **bcrypt (passport-local-mongoose)**  
- Protected routes using middleware  

**Owner-based authorization:**  
- Only creators can edit/delete listings & reviews  

---

### 🏡 Listing Management (CRUD)  

- Create, Read, Update, Delete listings  

Each listing includes:  
- Title  
- Description  
- Price  
- Location  
- Country  
- Image (Cloudinary)  

- RESTful routing implemented  

---

### ⭐ Review & Rating System  

Users can:  
- Add ratings (1–5 stars)  
- Write comments  

Reviews are linked to:  
- Listing  
- User (author)  

- Only review author can delete reviews  

---

### 🖼️ Image Upload (Cloud Integration)  

- Integrated with **Cloudinary**  
- Stores images securely in the cloud  

Supports:  
- JPG  
- PNG  
- JPEG  

---

### 🗺️ Interactive Map  

- Integrated **Google Maps API**  
- Geocoding converts location → coordinates  
- Dynamic marker placement on map  

---

### 📱 Responsive UI  

- Built using **Bootstrap**  
- Fully responsive:  
  - Desktop  
  - Tablet  
  - Mobile  

---

### ⚙️ Session Management  

- **express-session** for session handling  
- **connect-mongo** for persistent session storage  
- Users stay logged in even after server restart  

---

### ✅ Validation & Error Handling  

- **Joi** for server-side validation  
- Prevents invalid data input  

Custom error handling:  
- 404 errors  
- Validation errors  
- Unauthorized access  

---

### 🔐 Security Features  

- Hashed passwords  
- Protected routes  
- Authorization middleware  
- Environment variables for secrets  

---

### 💬 Flash Messaging  

Real-time feedback for:  
- Login success  
- Errors  
- CRUD actions  

---

### 🧱 Scalable Architecture  

Follows **MVC-like structure:**  

- Models  
- Routes  
- Controllers  
- Middleware  

Ensures clean and maintainable codebase  

---

## 🛠️ Tech Stack  

| Technology        | Purpose                          |
|------------------|----------------------------------|
| Node.js          | Backend runtime                 |
| Express.js       | Routing & middleware            |
| MongoDB          | NoSQL database                  |
| Mongoose         | ODM for MongoDB                 |
| EJS + ejs-mate   | Server-side templating          |
| Cloudinary       | Image storage                   |
| Passport.js      | Authentication                 |
| express-session  | Session management              |
| connect-mongo    | Session persistence             |
| Bootstrap        | UI & responsiveness             |
| Google Maps API  | Map integration                 |

---

## 🎯 Problem Statement  

Many travelers struggle to find a platform where they can both:  

- Discover destinations  
- Share travel experiences  
- Trust reviews  
- Visualize locations  

---

## 💡 Solution  

Wanderlust addresses this by providing:  

- User-generated listings  
- Community reviews  
- Secure access  
- Map-based exploration  

---


## 🚀 Combined Flow: New + Create Listing

### 🔁 Step-by-Step Flow

User clicks "New Listing"  
↓  
GET /listings/new  
↓  
Render form  
↓  
User submits form  
↓  
POST /listings  
↓  
Middleware (auth + upload + validation)  
↓  
Controller creates listing  
↓  
Saved in MongoDB  
↓  
Redirect to listings page  


### 🎤 Interview Summary

“The new route renders the listing creation form using a GET request, while the create route handles form submission using a POST request. The request passes through authentication, file upload, and validation middleware, after which the controller saves the listing in MongoDB with the logged-in user as owner and redirects to the listings page.”

---



## 🚀 Combined Flow: Create + Show Review

### 🔁 Step-by-Step Flow
User fills form
        ↓
POST /listings/:id/reviews
        ↓
isLoggedIn middleware
        ↓
Joi validation (validateReview)
        ↓
Controller runs
        ↓
Create review document
        ↓
Add author to review
        ↓
Push review into listing.reviews[]
        ↓
Save review + listing
        ↓
Redirect to listing page



User opens listing page
        ↓
GET /listings/:id
        ↓
Fetch listing from DB
        ↓
Populate reviews + authors
        ↓
Send to EJS
        ↓
Loop through reviews
        ↓
Display on UI

## IMPORTANT CONCEPTS USED
✅ 1. Reference Relationship
Listing stores review IDs
Reviews stored in a separate collection
✅ 2. Populate
Converts ObjectId → full document data
✅ 3. Middleware
Authentication → isLoggedIn
Validation → Joi
✅ 4. MVC Architecture
Route → Controller → Model → View


---




## 🎯 Objectives  

- Build a full-stack web application  
- Implement secure authentication & authorization  
- Design scalable database schema  
- Enable image uploads using cloud services  
- Integrate map-based location visualization  
- Ensure data validation and error handling  

---

## Installation & Setup  

### 1️⃣ Clone Repository  

bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

---


## Expected Outcome

- Fully functional **full-stack web application**
- Secure **login & signup authentication system**
- 📝 Complete **CRUD operations** for listing management
- ⭐ Integrated **review & rating system**
- 🖼️ **Image uploads** using Cloudinary
- 🗺️ **Google Maps integration** for location visualization
- 💾 **Persistent user sessions**
- ⚠️ Clean and structured **error handling**

---



## 🚀 Future Enhancements
🔍 Advanced search filters (price, rating, location)
🏨 Booking system (check-in/check-out)
👤 Role-based access (Admin/User)
🤖 Recommendation system (ML integration)
⚛️ Convert frontend to React (SPA)

---




## 📂 Project Structure  

```bash
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

---







📜 License

This project is licensed under the MIT License.

---



