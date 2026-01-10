# TravelBuddy Backend 🚀

This is the **backend** for the TravelBuddy web application — a travel buddy and meetup platform. It handles authentication, user and travel plan management, payments, and admin controls.  

---

## Features

- **User Authentication & Authorization**  
  - JWT-based authentication  
  - Password hashing with `bcryptjs`  
- **Travel Plans Management**  
  - Create, read, update, delete (CRUD) operations for travel plans  
  - Single travel plan per user by default, subscription-based multiple plans  
- **Admin Dashboard**  
  - Manage users and travel plans  
  - Admin access with specific credentials  
- **Payments**  
  - Integration with SSLCommerz for subscriptions  
- **Filtering & Sorting**  
  - Filter travel plans by destination  
  - Sort by budget range  

---

## Tech Stack

- **Runtime & Framework**: Node.js, Express.js  
- **Language**: TypeScript  
- **ORM & Database**: Prisma ORM (PostgreSQL or your preferred DB)  
- **Authentication**: JWT, bcryptjs  
- **Payments**: SSLCommerz  
- **Media**: Cloudinary  
- **Utilities**: uuid, dotenv, cors, cookie-parser  

---
