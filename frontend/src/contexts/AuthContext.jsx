import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);
  const [message, setMessage] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const storedJwt = localStorage.getItem("jwt");

    if (storedJwt) {
      setJwt(storedJwt);

      fetch(`${API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${storedJwt}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.username) {
            setUser({ username: data.username });
            setMessage(`Welcome back, ${data.username}!`);
          }
        })
        .catch(() => {
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const register = async (username, password) => {
    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Registration successful: user ${data.username} created`);
      } else {
        const data = await response.json();
        setMessage(`Registration failed: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setMessage(`Registration failed: ${JSON.stringify(error)}`);
    }
  };

  const login = async (username, password) => {
    setJwt(null);

    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setJwt(data.token);
      localStorage.setItem("jwt", data.token);

      setUser({ username });
      setMessage(`Login successful: token ${data.token.slice(0, 10)}..., user ${username}`);
    } else {
      const data = await response.json();
      setMessage("Login failed: " + data.detail);
      setUser({ username: null });
    }
  };

  const logout = () => {
    setUser(null);
    setJwt("");
    localStorage.removeItem("jwt");
    setMessage("Logout successful");
  };

  return <AuthContext.Provider value={{ user, jwt, register, login, logout, message, setMessage }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
