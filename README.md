# Student Task Manager

A simple full-stack web app where students can add, view, edit, complete and delete tasks.
All tasks are stored in a MongoDB database, so they are still there after refreshing the page.

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js and Express.js
- **Database:** MongoDB (MongoDB Atlas) with Mongoose

## Features

- Add a task with a title
- View all tasks fetched from MongoDB
- Edit a task title
- Delete a task
- Mark a task as completed with a checkbox (bonus)
- Empty tasks are rejected (frontend and backend validation)
- Message shown when there are no tasks

## Folder Structure

```
my/
  backend/
    index.js          <- Express server and API routes
    package.json
    .env.example      <- copy to .env and add your own MongoDB link
  frontend/
    src/
      App.jsx         <- React component
      App.css         <- styling
      main.jsx
    package.json
```

## How to Run

You need Node.js and a MongoDB database (MongoDB Atlas or local MongoDB).

### 1. Backend

```
cd backend
npm install
```

Copy `.env.example` to a new file named `.env` and put your own MongoDB link in it:

```
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

Start the server:

```
npm start
```

You should see:

```
Server is running on port 5000
Connected to MongoDB
```

### 2. Frontend

Open a second terminal:

```
cd frontend
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

Both the backend and the frontend must be running at the same time.

## API Endpoints

| Method | Endpoint         | Description                 | Success Status |
| ------ | ---------------- | --------------------------- | -------------- |
| GET    | /api/tasks       | Get all tasks               | 200            |
| POST   | /api/tasks       | Add a new task              | 201            |
| PUT    | /api/tasks/:id   | Edit a task title           | 200            |
| PATCH  | /api/tasks/:id   | Mark done / not done (bonus)| 200            |
| DELETE | /api/tasks/:id   | Delete a task               | 200            |

### Error responses

| Status | Meaning                                      |
| ------ | -------------------------------------------- |
| 400    | Empty task title or invalid task id          |
| 404    | Task not found                               |
| 500    | Server error                                 |

All responses are in JSON, for example:

```json
{ "message": "Task title cannot be empty" }
```

## Screenshots

Screenshots of the working application are included in the `screenshots` folder:

1. Backend running and connected to MongoDB
2. Tasks displayed on the page
3. Adding a task
4. Task saved in MongoDB Compass
5. Editing a task
6. Marking a task as completed
7. Deleting a task
8. Empty list message
9. Empty title error (API validation)
