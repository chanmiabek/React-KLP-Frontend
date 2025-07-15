import React, { useState } from 'react';
import './Layout.css';

const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Passionate learner and community member.',
};

const Account = () => {
  const [user, setUser] = useState(mockUser);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setForm(user);
    setEditing(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    setUser(form);
    setEditing(false);
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: 500 }}>
        <div className="card-body">
          <h3 className="card-title mb-3">Account Profile</h3>
          {!editing ? (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Bio:</strong> {user.bio}</p>
              <button className="btn btn-primary" onClick={handleEdit}>Edit Profile</button>
            </>
          ) : (
            <form onSubmit={handleSave}>
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input className="form-control" name="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input className="form-control" name="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="mb-2">
                <label className="form-label">Bio</label>
                <textarea className="form-control" name="bio" value={form.bio} onChange={handleChange} />
              </div>
              <button className="btn btn-success me-2" type="submit">Save</button>
              <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancel</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
