# Task Manager API

A simple RESTful API for managing tasks, built with Express.js and TypeScript. Supports in-memory storage, validation, pagination, and filtering.

## Features
- CRUD operations for tasks
- Input validation using Zod
- Pagination and filtering for GET /tasks
- TypeScript for strong typing

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/anshum12345/synegrow_anshumdwivedi.git
   cd synegrow_anshumdwivedi
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Build the project:**
   ```sh
   npx tsc
   ```
4. **Start the server:**
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

## API Documentation & Thunder Client Examples

### 1. GET all tasks
- **Method:** GET
- **URL:**
  ```
  http://localhost:3000/tasks
  ```
- **Description:** Returns all tasks (optionally with pagination and filters).

---

### 2. POST (create a new task)
- **Method:** POST
- **URL:**
  ```
  http://localhost:3000/tasks
  ```
- **Body (JSON):**
  ```json
  {
    "title": "My Task",
    "description": "This is a sample task",
    "status": "PENDING"
  }
  ```
- **Description:** Creates a new task.

---

### 3. GET a task by ID
- **Method:** GET
- **URL:**
  ```
  http://localhost:3000/tasks/<taskId>
  ```
  Replace `<taskId>` with the actual ID of the task.
- **Description:** Returns the task with the specified ID.

---

### 4. PUT (update a task by ID)
- **Method:** PUT
- **URL:**
  ```
  http://localhost:3000/tasks/<taskId>
  ```
  Replace `<taskId>` with the actual ID of the task.
- **Body (JSON):**
  ```json
  {
    "title": "Updated Task",
    "description": "Updated description",
    "status": "COMPLETED"
  }
  ```
- **Description:** Updates the task with the specified ID.

---

### 5. DELETE a task by ID
- **Method:** DELETE
- **URL:**
  ```
  http://localhost:3000/tasks/<taskId>
  ```
  Replace `<taskId>` with the actual ID of the task.
- **Description:** Deletes the task with the specified ID.

---

**Tip:**
- For POST and PUT, use the "Body" tab in Thunder Client, select "JSON", and paste the JSON body.
- For GET and DELETE, you do not need a request body.

