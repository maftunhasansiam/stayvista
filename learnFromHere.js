/* 

# Developer Study Guide

## 1. **useQuestion() Pattern**
The custom pattern used for understanding code in a structured question-answer approach.

### Questions to ask for understanding code:
1. **What is the function/variable doing?**
2. **What are the imports/exports for this file?**
3. **How does this piece fit into the larger structure of the project?**
4. **What dependencies or hooks are being used?**
5. **Are there any conditional flows or side effects?**

---

## 2. **`axiosSecure`**
A secure instance of `axios` configured for API calls with credentials.

### Key Points:
- **Axios**: A promise-based HTTP client.
- **Interceptors**: Used to handle responses and errors globally.
- **Security**: Sends cookies and manages authentication securely.

### Usage:
- Used for making authenticated API calls.
- Manages errors like `401` and `403` by logging out the user and redirecting to the login page.

---

## 3. **JWT (JSON Web Token)**
JWT is a compact and self-contained way to securely transmit information between parties as a JSON object.

### Why to use:
- To authenticate users without constantly querying the database.
- Ensures secure communication between client and server.

### When to use:
- After logging in, the server generates a JWT token, which the client can store and send back with each request.
  
---

## 4. **Auth Context and useAuth Hook**
`AuthContext` is used to provide authentication details across your application.

### Key Functions:
- `createUser()`: To create a new user with email and password.
- `signIn()`: To log in a user with email and password.
- `signInWithGoogle()`: To log in with Google authentication.
- `logOut()`: To log out the user and clear the session.
- `getToken()`: Fetches the JWT token for the authenticated user.
  
---

## 5. **PrivateRoute**
A route that only allows access to authenticated users.

### Logic:
- Uses `useAuth` to check if the user is logged in.
- If not logged in, redirects to the login page.

---

## 6. **Role-based UI (useRole Hook)**
The `useRole` hook checks the role of the user (guest, host, admin) and renders different UI components based on the role.

### Role Example:
- **Host**: Has access to special host-related menu options.
- **Guest**: Sees a different set of menu options.
- **Admin**: Admin-related content.

---

## 7. **useEffect and onAuthStateChanged**
`useEffect` is used for managing side effects in React, and `onAuthStateChanged` tracks the user's authentication state.

### Logic:
- Watches for changes in the authentication state.
- Updates the `user` state and triggers necessary actions like getting a token or saving the user to the database.

---

## 8. **NavLink with `isActive`**
`NavLink` from `react-router-dom` applies specific styles to links based on whether they match the current URL.

### Example:
```jsx
<NavLink
  to="/dashboard"
  className={({ isActive }) =>
    isActive
      ? 'text-blue-500 font-bold'
      : 'text-gray-500 hover:text-blue-500'
  }
>
  Dashboard
</NavLink>

### 18. Styling NavLinks Based on `isActive` State

**Code:**
```jsx
className={({ isActive }) =>
  isActive ? 'active-styles' : 'inactive-styles'


}*/