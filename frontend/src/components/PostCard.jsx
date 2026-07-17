import React, { useState } from 'react';

const PostCard = ({ post, user }) => {
  const [liked, setLiked] = useState(post.likes?.includes(user?.id));
  const [likesCount, setLikesCount] = useState(post.likes?.length || 0);

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${post._id}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id })
      });
      const data = await response.json();
      setLiked(!liked);
      setLikesCount(data.likes.length);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.avatar}>
          {post.author?.username?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 style={styles.username}>{post.author?.username || 'Unknown'}</h3>
          <p style={styles.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      <p style={styles.content}>{post.content}</p>
      
      {post.image && (
        <img src={post.image} alt="Post" style={styles.image} />
      )}
      
      <div style={styles.actions}>
        <button onClick={handleLike} style={styles.likeBtn}>
          {liked ? '❤️' : '🤍'} {likesCount} Likes
        </button>
        <button style={styles.commentBtn}>
          💬 {post.comments?.length || 0} Comments
        </button>
      </div>
    </div>  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#0f3460',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  username: {
    margin: 0,
    fontSize: '1rem',
    color: '#1a1a2e'
  },
  date: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#888'
  },
  content: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1rem',
    lineHeight: '1.5'
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '1rem'
  },
  actions: {    display: 'flex',
    gap: '1rem',
    borderTop: '1px solid #eee',
    paddingTop: '1rem'
  },
  likeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    color: '#555'
  },
  commentBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.95rem',
    color: '#555'
  }
};

export default PostCard;
