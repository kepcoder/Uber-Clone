# Documentation: `/users/register` Endpoint

## Endpoint Description
The `/users/register` endpoint allows users to register by providing their first name, last name, email, and password. It performs server-side validation to ensure the data integrity and returns a token along with user details upon successful registration.

---

## HTTP Method
**POST**

---

## Endpoint URL
`/users/register`

---

## Request Body Format
The endpoint expects a JSON payload with the following structure:

### Required Fields
- **fullname** (object)
  - **firstName** (string, required): Must be at least 3 characters long.
  - **lastName** (string, optional): If provided, must be at least 3 characters long.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 6 characters long.

### Example Request Body
```json
{
    "fullname": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "123456"
}
```

---

## Response

### Success Response
If the registration is successful, the server responds with a **200 OK** status code and returns the following JSON structure:

#### Example Success Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64a7b8c5d4c0c133f8b9e123",
        "fullname": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "johndoe@example.com",
        "socketId": null
    }
}
```

### Error Responses

#### Validation Error
If the input validation fails, the server responds with a **400 Bad Request** status code and an array of validation error messages:

#### Example Validation Error Response
```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "First name must be greater than 3 characters",
            "param": "fullname.firstName",
            "location": "body"
        },
        {
            "msg": "Password must be greater than 6 characters",
            "param": "password",
            "location": "body"
        }
    ]
}
```

#### Missing Fields Error
If required fields are missing, the server responds with a **400 Bad Request** status code:

#### Example Missing Fields Error Response
```json
{
    "errors": [
        {
            "msg": "All fields are required!"
        }
    ]
}
```

---

## Additional Notes
1. Ensure the `Content-Type` header is set to `application/json` when making requests.
2. The `token` provided in the success response is a JWT token and should be stored securely by the client for subsequent authenticated requests.
