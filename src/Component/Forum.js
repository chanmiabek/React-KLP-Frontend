import React, { useState } from 'react';
import './Layout.css';

const initialPosts = [
  { id: 1, author: 'Alice', content: 'Welcome to the forum! Feel free to ask questions.' },
  { id: 2, author: 'Bob', content: 'Does anyone have tips for the upcoming exam?' },
];

const Forum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [form, setForm] = useState({ author: '', content: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.author || !form.content) return;
    setPosts([
      ...posts,
      { id: posts.length + 1, author: form.author, content: form.content },
    ]);
    setForm({ author: '', content: '' });
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: 700 }}>
        <div className="card-body">
          <h3 className="card-title mb-4">Community Forum</h3>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="row g-2">
              <div className="col-md-3">
                <input
                  className="form-control"
                  name="author"
                  placeholder="Your name"
                  value={form.author}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-7">
                <input
                  className="form-control"
                  name="content"
                  placeholder="Write a message..."
                  value={form.content}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100" type="submit">Post</button>
              </div>
            </div>
          </form>
          <ul className="list-group">
            {posts.map((post) => (
              <li key={post.id} className="list-group-item">
                <strong>{post.author}:</strong> {post.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Forum;
