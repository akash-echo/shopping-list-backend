# 🛒 Shopping List Backend API

A simple RESTful API backend for a Shopping List application.  
Built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## ✨ Features

- Add new shopping list items
- Retrieve all shopping list items
- Update an item's "purchased" status
- Delete an item from the list
- RESTful API endpoints
- Type-safe with TypeScript
- Environment-based configuration using `.env`

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** + **Mongoose**
- **dotenv** for environment variables
- **CORS** enabled for frontend integration

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas cloud database)

---

### Installation

1️⃣ **Clone the repository**

```bash
git clone https://github.com/akash-echo/shopping-list-backend.git
cd shopping-list-backend
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Set up environment variables**

Create a .env file in the root directory:

```bash
PORT=<Your PORT>
MONGO_URI=mongodb://127.0.0.1:27017/<Your DB name>
```

Replace MONGO_URI with your MongoDB connection string if using MongoDB Atlas.

### ⚙️ Running the Server

**Development mode (with live reload)**

```bash
npm run dev
```

**Production mode (compiled JS)**

```bash
npm run build
npm start
```

## Notes

- The `dist/` folder is used for the compiled production build and is ignored by Git (via `.gitignore`).
- Do not commit `dist/` to the repository — always build locally using:

```bash
npm run build
```

## 📋 API Endpoints

| Method | Endpoint     | Description                                     |
| ------ | ------------ | ----------------------------------------------- |
| GET    | `/items`     | Retrieve all shopping list items                |
| POST   | `/items`     | Add a new shopping item `{ name: string }`      |
| PUT    | `/items/:id` | Update "purchased" status `{ bought: boolean }` |
| DELETE | `/items/:id` | Delete an item by ID                            |

## 🗂 Example Request & Response

➤ GET /items

Response:

```json
[
  {
    "_id": "6844a9f1701d52acaba34f46",
    "name": "Rolex Land-Dweller 2025",
    "bought": false,
    "createdAt": "2025-06-07T21:06:57.214Z",
    "__v": 0
  }
]
```

➤ POST /items

Request body:

```json
{
  "name": "Rolex Quartz"
}
```

Response:

```json
{
  "_id": "6844a9f1701d52acaba34f46",
  "name": "Rolex Quartz",
  "bought": false,
  "createdAt": "2025-06-07T21:06:57.214Z",
  "__v": 0
}
```

➤ PUT /items/:id

Request body:

```json
{
  "bought": true
}
```

Response:

```json
{
  "_id": "6844a9f1701d52acaba34f46",
  "name": "Rolex Quartz",
  "bought": true,
  "createdAt": "2025-06-07T21:06:57.214Z",
  "__v": 0
}
```

➤ DELETE /items/:id

Response: `204 No Content`

## 📝 Author

### Akash Das

Github Profile: https://github.com/akash-echo/

## 🌟 Acknowledgements

- This backend was built as part of a Full Stack Shopping List App project.
- Inspired by modern REST API best practices.
- Built with ❤️ using Node.js, Express, TypeScript, and MongoDB.
