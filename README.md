# Todo List API Documentation

## Authentication

### Register
- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Status Code:** 201 (created)
- **Request Body:**
  - `username` (string): User's username.
  - `password` (string): User's password.
- **Example Request:**
  ```json
  {
    "username": "merlin_azizah",
    "password": "password1234"
  }
- **Example Response:**
  {
    "username":"merlin_azizah",
    "password":"$2b$10$x1sMUewIFLS6Y2hZ.xpBheoeYQaFtifCMbJ6EUGM.6jWZnbVSogGS"
  }

  ### Login
- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Description:** Log in an existing user.
- **Status Code:** 200 (ok)
- Request Body:
  - `username` (string): User's username.
  - `password` (string): User's password.
- **Example Request:**
  ```json
  {
    "username": "merlin_azizah",
    "password": "password1234"
  }
- **Example Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lcmxpbl9heml6YWgiLCJpYXQiOjE3MDUzMzAyNDB9.fZRR3wky0U9UeMhidt3JhWFlkbn94UV80Kd5B4Fuo00"
  }

 ## Todo Operations
 
 ### Get All Todos
- **Endpoint:** `/todos`
- **Method:** `GET`
- **Description:** Get a list of all todos.
- **Status Code:** 200 (ok)
- **Example Response:**
  ```json
  {
    "todos": [
        {
            "_id": "65a51c58e1185925a97ebbc2",
            "title": "kerja",
            "description": "ujian",
            "status": "Incomplete",
            "createdAt": "2024-01-15T11:51:52.761Z",
            "updatedAt": "2024-01-15T11:51:52.761Z",
            "__v": 0
        },
        {
            "_id": "65a51c9be1185925a97ebbc8",
            "title": "ngoding",
            "description": "final project",
            "status": "Incomplete",
            "createdAt": "2024-01-15T11:52:59.778Z",
            "updatedAt": "2024-01-15T11:52:59.778Z",
            "__v": 0
        }
    ]
  }

 ### Add Todo
- **Endpoint:** `/add-todo`
- **Method:** `POST`
- **Description:** Add a new todo.
- **Status Code:** 201 (created)
- **Request Body:**
  - `title` (string): Todo title.
  - `description` (string): Todo description (optional).
  - `status` (string): Todo status.
- **Example Request:**
  ```json
  {
    "title": "ngoding",
    "description": "final project",
    "status":"incomplete"
  }
- **Example Response:**
  ```json
  {
    "message": "Todo Added Succesfully"
  }
### Get Detail Todo
- **Endpoint:** `/detail-todo/:id`
- **Method:** `GET`
- **Description:** Retrieve detailed information about a specific Todo.
- **Status Code:** 200 (ok)
- **Example Request:**
  ```http
  GET http://localhost:3030/detail-todo/65a54cd964494554e44ec04d
- **Example Response:**
  ```json
  {
    "_id": "65a54cd964494554e44ec04d",
    "title": "ngoding",
    "description": "final project",
    "status": "Incomplete",
    "createdAt": "2024-01-15T15:18:49.670Z",
    "updatedAt": "2024-01-15T15:18:49.670Z",
    "__v": 0
  }
### Update Todo
- **Endpoint:** `/update-todo/:id`
- **Method:** `PUT`
- **Description:** Update details of a specific Todo.
- **Status Code:** 201 (created)
- **Request Body:**
  - `title` (string): Todo title.
  - `description` (string): Todo description (optional).
  - `status` (string): Todo status.
- **Example Request:**
  ```json
  {
    "title": "makan",
    "description": "di pantai",
    "status": "Selesai"
  }
- **Example Response:**
  ```json
  {
    "message": "Todo updated"
  }
### Delete Todo
- **Endpoint:** `/delete-todo/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific Todo by ID.
- **Status Code:** 200 (ok)
- **Example Request:**
  ```http
  DELETE http://localhost:3030/delete-todo/65a54cd964494554e44ec04d
- **Example Response:**
  ```json
  {
    "message": "Todo deleted succesfully"
  }
### Delete All Todos
- **Endpoint:** `/delete-all`
- **Method:** `DELETE`
- **Description:** Delete a list of all todos.
- **Status Code:** 200 (ok)
- **Example Request:**
  ```http
  DELETE http://localhost:3030/delete-all
- **Example Response:**
  ```json
  {
    "message": "All todo deleted succesfully"
  }
