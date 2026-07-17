import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

const Home = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: user.id,
          content: newPost,
          image: ''
        })
      });
      const data = await response.json();
      setPosts([data, ...posts]);
      setNewPost('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.createPost}>
        <h2>Create Post</h2>        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            style={styles.textarea}
            rows="3"
          />
          <button type="submit" style={styles.submitBtn}>
            Post
          </button>
        </form>
      </div>

      <div style={styles.feed}>
        <h2>Feed</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p>No posts yet. Be the first to post!</p>
        ) : (
          posts.map(post => (
            <PostCard key={post._id} post={post} user={user} />
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  createPost: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '1rem',
    fontSize: '1rem',    resize: 'vertical'
  },
  submitBtn: {
    backgroundColor: '#0f3460',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  feed: {
    backgroundColor: '#f5f5f5',
    padding: '1.5rem',
    borderRadius: '8px'
  }
};

export default Home;
