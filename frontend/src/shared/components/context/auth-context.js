import { createContext } from "react";

// using context for sharing the data across different components 
// login/logout app state management.

export const AuthContext = createContext({
  userId : null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
