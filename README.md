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
- **Endpoint:** /auth/login
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
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lcmxpbl9heml6YWgiLCJpYXQiOjE3MDUzMzAyNDB9.fZRR3wky0U9UeMhidt3JhWFlkbn94UV80Kd5B4Fuo00"
  }
