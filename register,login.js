import React, { useState } from "react";

const App = () => {
  const [page, setPage] = useState("register"); // Switch between Register & Login
  const [users, setUsers] = useState([]); // Store registered users
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Register a New User
  const handleRegister = () => {
    if (!username || !password) {
      setMessage("Both fields are required!");
      return;
    }

    // Check if username already exists
    if (users.some(user => user.username === username)) {
      setMessage("Username already exists!");
      return;
    }

    setUsers([...users, { username, password }]); // Add new user
    setMessage("Registration successful! Please log in.");
    setPage("login"); // Switch to login page
  };

  // Login User
  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>{page === "register" ? "Register" : "Login"}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      {page === "register" ? (
        <button onClick={handleRegister} style={styles.button}>Register</button>
      ) : (
        <button onClick={handleLogin} style={styles.button}>Login</button>
      )}
      <p style={styles.message}>{message}</p>
      <button onClick={() => setPage(page === "register" ? "login" : "register")} style={styles.switchButton}>
        {page === "register" ? "Already have an account? Login" : "New user? Register"}
      </button>
    </div>
  );
};

// Inline CSS for styling
const styles = {
  container: { textAlign: "center", padding: "20px", maxWidth: "300px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" },
  input: { display: "block", width: "100%", padding: "10px", margin: "10px 0" },
  button: { backgroundColor: "blue", color: "white", padding: "10px", border: "none", cursor: "pointer", width: "100%" },
  switchButton: { backgroundColor: "gray", color: "white", padding: "10px", border: "none", cursor: "pointer", width: "100%", marginTop: "10px" },
  message: { color: "red" }
};

export default App;
