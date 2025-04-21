import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPanel.css"; // Make sure to create a separate CSS file for styling

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user",
    companyName: "",
    companyDescription: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all users from the backend
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data); // Set all users data correctly
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form submission (Add or Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // Update existing user
      await axios.put(`http://localhost:5000/users/${editingId}`, form);
    } else {
      // Add new user
      await axios.post("http://localhost:5000/users", form);
    }
    // Reset form
    setForm({
      username: "",
      password: "",
      role: "user",
      companyName: "",
      companyDescription: "",
    });
    setEditingId(null);
    fetchUsers(); // Reload the users list
  };

  // Handle edit
  const handleEdit = (user) => {
    setForm({
      username: user.username,
      password: user.password,
      role: user.role,
      companyName: user.companyName,
      companyDescription: user.companyDescription,
    });
    setEditingId(user.id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    fetchUsers(); // Reload the users list
  };

  return (
    <div className="admin-panel-container">
      <h2>Admin Panel - Manage Users</h2>

      {/* Form for Adding/Editing Users */}
      <form onSubmit={handleSubmit} className="user-form">
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="company">Company</option>
        </select>
        <input
          placeholder="Company Name"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
        />
        <textarea
          placeholder="Company Description"
          value={form.companyDescription}
          onChange={(e) =>
            setForm({ ...form, companyDescription: e.target.value })
          }
        />
        <button type="submit">{editingId ? "Update" : "Add"} User</button>
      </form>

      {/* Display Users in a Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Company Name</th>
            <th>Company Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.companyName}</td>
              <td>{user.companyDescription}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
