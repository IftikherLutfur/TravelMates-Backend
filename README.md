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

----

## Authentication Routes

**Base Path:** `/api/auth`

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/auth/login` | User login |
| POST | `/auth/logout` | User logout |

---

## User Routes

**Base Path:** `/api/user`

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| GET | `/user/me` | Admin, User | Get logged-in user profile |
| GET | `/user/get-all-user` | Admin | Get all users |
| GET | `/user/:email` | Public | Find user by email |
| POST | `/user/userCreate` | Public | Create a new user |
| PATCH | `/user/userStatus/:id` | Admin | Activate or deactivate a user |
| PATCH | `/user/update-profile` | Admin, User | Update user profile |

---

## Travel Routes

**Base Path:** `/api/travel`

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| GET | `/travel` | Public | Get all travel plans |
| GET | `/travel/myTravels` | User | Get logged-in user's travel plans |
| GET | `/travel/:id` | Public | Get a single travel plan |
| POST | `/travel/create` | User | Create a travel plan |
| DELETE | `/travel/:id` | Admin, User | Delete a travel plan |

---

## Payment Routes

**Base Path:** `/api/payment`

| Method | Endpoint | Access | Description |
|------|---------|--------|-------------|
| POST | `/payment/init` | User | Create payment for subscription |

---

## Authorization & Roles

This API uses **JWT-based authentication** with role-based access control.

### Available Roles:
- `ADMIN`
- `USER`

### Middleware:
- `auth(Role.ADMIN)` → Admin-only access
- `auth(Role.USER)` → Logged-in user access
- `auth(Role.ADMIN, Role.USER)` → Both admin & user

---

## Notes

- Most protected routes require a valid **JWT token** sent via headers or cookies.
- Users can create **only one travel plan** by default.
- Subscription payment allows creating **multiple travel plans**.
- Admin users can manage both **users** and **travel plans**.
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
