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

---


## 🎯 Objectives  

- Build a full-stack web application  
- Implement secure authentication & authorization  
- Design scalable database schema  
- Enable image uploads using cloud services  
- Integrate map-based location visualization  
- Ensure data validation and error handling  

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



## ⚡ Installation & Setup  

### 1️⃣ Clone Repository  

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust


### ✅ Expected Outcome

- Fully functional **full-stack web application**
- Secure **login & signup authentication system**
- 📝 Complete **CRUD operations** for listing management
- ⭐ Integrated **review & rating system**
- 🖼️ **Image uploads** using Cloudinary
- 🗺️ **Google Maps integration** for location visualization
- 💾 **Persistent user sessions**
- ⚠️ Clean and structured **error handling**


🚀 Future Enhancements
🔍 Advanced search filters (price, rating, location)
🏨 Booking system (check-in/check-out)
👤 Role-based access (Admin/User)
🤖 Recommendation system (ML integration)
⚛️ Convert frontend to React (SPA)



📜 License

This project is licensed under the MIT License.

---



