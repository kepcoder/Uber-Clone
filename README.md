# User Authentication API Documentation

This API provides functionality for user registration, login, profile retrieval, and logout. Below is a detailed description of each endpoint, the required parameters, and example responses.

---

## Base URL

```
http://<your-domain-or-localhost>/api/users
```

---

## Endpoints

### 1. **Register User**

#### Endpoint
```
POST /register
```

#### Description
Registers a new user in the system.

#### Parameters (Body)
| Field           | Type   | Required | Description                                      |
|-----------------|--------|----------|--------------------------------------------------|
| fullname        | Object | Yes      | Contains `firstName` and `lastName` of the user.|
| fullname.firstName | String | Yes      | Minimum 3 characters.                           |
| fullname.lastName | String | No       | Minimum 3 characters.                           |
| email           | String | Yes      | A valid and unique email address.               |
| password        | String | Yes      | Minimum 6 characters.                           |

#### Example Request Body
```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response
**Status Code**: 201
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "63f7b2c1e4d88c13a69b",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

---

### 2. **Login User**

#### Endpoint
```
POST /login
```

#### Description
Logs a user into the system and returns a token.

#### Parameters (Body)
| Field    | Type   | Required | Description                  |
|----------|--------|----------|------------------------------|
| email    | String | Yes      | The user's registered email. |
| password | String | Yes      | The user's password.         |

#### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Example Response
**Status Code**: 200
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "63f7b2c1e4d88c13a69b",
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses
- **Invalid Email or Password**:
  **Status Code**: 401
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

### 3. **Get User Profile**

#### Endpoint
```
GET /profile
```

#### Description
Fetches the profile of the currently logged-in user.

#### Headers
| Field           | Type   | Required | Description                                  |
|-----------------|--------|----------|----------------------------------------------|
| Authorization   | String | Yes      | Bearer token obtained during login.         |

#### Example Response
**Status Code**: 200
```json
{
  "_id": "63f7b2c1e4d88c13a69b",
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Error Response
- **Unauthorized**:
  **Status Code**: 401
  ```json
  {
    "message": "unauthorized"
  }
  ```

---

### 4. **Logout User**

#### Endpoint
```
GET /logout
```

#### Description
Logs the user out by clearing their token and blacklisting it.

#### Headers
| Field           | Type   | Required | Description                                  |
|-----------------|--------|----------|----------------------------------------------|
| Authorization   | String | Yes      | Bearer token obtained during login.         |

#### Example Response
**Status Code**: 200
```json
{
  "message": "logout Successfully"
}
```

#### Error Response
- **Unauthorized**:
  **Status Code**: 401
  ```json
  {
    "message": "unauthorized"
  }
  ```

---

## Middleware

### User Authentication
The `userAuth` middleware verifies the user's token and ensures they are authorized to access protected routes.

---

## Notes
- Ensure `process.env.JWT_SECRET` is set in your environment.
- Replace `<your-domain-or-localhost>` with the actual URL where the API is hosted.

---

