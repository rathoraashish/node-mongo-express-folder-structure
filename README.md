# Node + MongoDB + Express API

This project is a simple API built with Node.js, Express, and MongoDB using Mongoose as the ODM.

## Features
- Basic CRUD operations for users
- Express for routing
- Mongoose ODM for MongoDB interaction

## Prerequisites
- Node.js (v16 or above)
- MongoDB database

node-mongo-express-folder-structure/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── services/
│   │   └── userService.js
│   ├── utils/
│   │   └── errorHandler.js
│   ├── validations/
│   │   └── userValidation.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md

