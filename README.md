# 🚲 Bike Servicing Management Server

# https://assignment-8-tau-tawny.vercel.app

#To Run Local

```bash
# Clone this project
$ git clone  https://github.com/morshidulrahman/assignment-8.git

# Access
$ cd BikeServiceAssignment-8-backend

# Install dependencies
$ bun i

# Run the project
$ bun dev

# The server will initialize in the <http://localhost:3000>
```

# 🚲 Bike Servicing Management System - Backend API

This is a RESTful backend API for managing bike servicing operations. It allows servicing centers to manage customers, their bikes, and service records. The API supports full CRUD operations and includes custom endpoints for assigning and completing servicing jobs.

---

## 📌 Features

- 🔧 Manage Customers (Create, Read, Update, Delete)
- 🏍️ Manage Bikes linked to Customers
- 📋 Track Service Records for each Bike
- 🛠️ Assign Service Jobs to staff/mechanics
- ✅ Mark Service Jobs as Completed
- 🔐 Secure endpoints (Authentication & Authorization – if implemented)

---

## 🛠️ Tech Stack

- **Backend Framework**: Node.js / Express / Prisma
- **Database**: PostgreSQL

---

## 🔗 API Endpoints Overview

| Method | Endpoint                     | Description                 |
| ------ | ---------------------------- | --------------------------- |
| GET    | `/api/customers`             | Get all customers           |
| POST   | `/api/customers`             | Create new customer         |
| PUT    | `/api/customers/:id`         | Update customer             |
| DELETE | `/api/customers/:id`         | Delete customer             |
| GET    | `/api/bikes`                 | Get all bikes               |
| POST   | `/api/bikes`                 | Register new bike           |
| PUT    | `/api/bikes/:id`             | Update bike info            |
| DELETE | `/api/bikes/:id`             | Remove bike                 |
| GET    | `/api/services`              | List all service records    |
| POST   | `/api/services`              | Create a new service record |
| PUT    | `/api/services/:id/assign`   | Assign a job to staff       |
| PUT    | `/api/services/:id/complete` | Mark job as completed       |

---
