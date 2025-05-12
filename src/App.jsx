import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/user/register", form);
      alert("User Registred");
      setForm({ name: "", email: "", password: "" });
      fetchUserslist()
    } catch (error) {
      alert("Error Registering user");
    }
  };

  const fetchUserslist = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user/all");
      setUsers(res.data);
    } catch (error) {
      alert("Failed");
    }
  };


  useEffect(() => {
   fetchUserslist()
  }, [])
  

  return (
    <div style={{ padding: "25px" }}>
      <h1>User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="enter name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="enter email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="enter password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>



      <h3>User List</h3>
      <ul>
       {users.map((user,i)=>(
        <li key={i}>{user.name} ({user.email})</li>
       ))}
      </ul>
    </div>
  );
}

export default App;
