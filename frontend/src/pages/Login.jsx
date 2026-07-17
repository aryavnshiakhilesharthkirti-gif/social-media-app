import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = isLogin ? '/login' : '/register';
      const response = await fetch(`http://localhost:5000/api${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (isLogin) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        navigate('/');
      } else {
        alert('Registration successful! Please login.');
        setIsLogin(true);
        setFormData({ username: '', email: '', password: '' });
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>
        
        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required={!isLogin}
              style={styles.input}
            />
          )}
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={styles.input}
          />
          
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            style={styles.input}
          />

          <button type="submit" style={styles.submitBtn}>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p style={styles.toggleText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);              setError('');
            }}
            style={styles.toggleLink}
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    textAlign: 'center',
    color: '#1a1a2e',
    marginBottom: '1.5rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#0f3460',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '1rem',    cursor: 'pointer',
    marginTop: '0.5rem'
  },
  error: {
    backgroundColor: '#ffe6e6',
    color: '#d32f2f',
    padding: '0.75rem',
    borderRadius: '4px',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  toggleText: {
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#666'
  },
  toggleLink: {
    color: '#0f3460',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Login;
