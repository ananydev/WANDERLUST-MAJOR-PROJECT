# 🎯 **Final Workflow (Diagram Style)**
plaintext
User clicks "New Listing"
        ↓
GET /listings/new
        ↓
Render form (new.ejs)
        ↓
User fills form
        ↓
POST /listings
        ↓
Middleware (auth + upload + validation)
        ↓
Controller saves data in MongoDB
        ↓
Redirect to /listings
---
