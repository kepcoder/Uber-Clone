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

---

# Captain API Documentation

This documentation provides an overview of the Captain API, including details about endpoints, request formats, response formats, and status codes.

---

## Table of Contents
1. [Register Captain](#register-captain)
2. [Login Captain](#login-captain)
3. [Get Captain Profile](#get-captain-profile)
4. [Logout Captain](#logout-captain)

---

## 1. Register Captain

**Endpoint:**
```
POST /register
```

**Description:** Registers a new captain with their personal and vehicle details.

### Request Body
```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "colour": "Blue",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response
- **201 Created**:
```json
{
  "token": "jwt-token",
  "captain": {
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "colour": "Blue",
      "plate": "XYZ1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

- **400 Bad Request**: Validation errors or email already registered.

### Example Error
```json
{
  "errors": [
    { "msg": "Firstname must be greater than 3 characters", "param": "fullname.firstName" }
  ]
}
```

---

## 2. Login Captain

**Endpoint:**
```
POST /login
```

**Description:** Logs in a captain and returns an authentication token.

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Response
- **200 OK**:
```json
{
  "token": "jwt-token",
  "captain": {
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

- **400 Bad Request**: Invalid email or password.

---

## 3. Get Captain Profile

**Endpoint:**
```
GET /profile
```

**Description:** Retrieves the authenticated captain's profile.

### Headers
```
Authorization: Bearer <jwt-token>
```

### Response
- **200 OK**:
```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "vehicle": {
    "colour": "Blue",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

- **400 Bad Request**: Unauthorized or token is invalid/blacklisted.

---

## 4. Logout Captain

**Endpoint:**
```
GET /logout
```

**Description:** Logs out the authenticated captain and blacklists the token.

### Headers
```
Authorization: Bearer <jwt-token>
```

### Response
- **200 OK**:
```json
{
  "message": "Logout successfully"
}
```

- **400 Bad Request**: Unauthorized or token not provided.

---

## Error Handling

Common validation errors:
1. Firstname must be greater than 3 characters.
2. Email is not valid.
3. Password must be greater than 6 characters.
4. Invalid vehicle type (allowed: car, motorCycle, Auto).

## Notes
- All endpoints requiring authentication must include the JWT token in the Authorization header.
- Tokens are valid for 24 hours and must be refreshed after expiration.
- Blacklisted tokens are automatically invalidated after 24 hours.



