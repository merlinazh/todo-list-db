# Todo List API Documentation

## Authentication

### Register
- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
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
