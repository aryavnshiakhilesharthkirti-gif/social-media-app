# 📱 Social Media App

A modern, full-stack social media application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). This app allows users to connect, share posts, like, comment, and interact with each other in real-time.

## 🌟 Features

- ✅ **User Authentication** - Secure Login/Register with JWT
- 📝 **Create Posts** - Share your thoughts with the community
- ❤️ **Like & React** - Engage with posts
- 💬 **Comments** - Leave meaningful comments on posts
- 👤 **User Profiles** - View and manage your profile
- 🔍 **Search & Explore** - Find users and posts easily
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔒 **Secure Passwords** - Bcrypt password hashing
- 🌙 **Modern UI** - Clean and intuitive interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing and security
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling
- **HTML5** - Markup

## 📋 Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (Local or Atlas account)
- **Git**

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/aryavnshiakhilesharthkirti-gif/social-media-app.git
cd social-media-app
```

### 2️⃣ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/social-media-app
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

**For MongoDB Atlas**, replace `MONGODB_URI` with:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/social-media-app
```

Start the backend server:

```bash
npm start
```

The server will run on `http://localhost:5000`

### 3️⃣ Frontend Setup

In a new terminal, navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the frontend folder:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000`

## 🚀 Usage

1. **Register** - Create a new account with email and password
2. **Login** - Sign in with your credentials
3. **Create Posts** - Click "Create Post" to share your thoughts
4. **Interact** - Like, comment, and follow other users
5. **View Profile** - Click on any profile to see posts and info
6. **Logout** - Sign out from your account

## 📁 Project Structure

```
social-media-app/
├── backend/
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── controllers/      # Business logic
│   ├── middleware/      # Custom middleware
│   ├── config/          # Configuration files
│   ├── .env             # Environment variables
│   └── server.js        # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── styles/      # CSS files
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   ├── public/          # Static files
│   └── package.json     # Dependencies
│
└── README.md            # This file
```

## 🔐 Security

- All passwords are hashed using **Bcrypt**
- Authentication uses **JWT tokens**
- CORS is configured to allow safe cross-origin requests
- Environment variables store sensitive data
- Input validation on both frontend and backend

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

Please ensure your code follows the project's coding standards.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Support

- **GitHub Issues** - Report bugs or suggest features
- **Email** - aryavnshiakhilesharthkirti@example.com
- **Twitter** - [@YourHandle](https://twitter.com)

## 🙏 Acknowledgments

- Thanks to the MERN stack community
- Inspired by modern social media platforms
- Special thanks to all contributors

---

**Made with ❤️ by [Your Name]**

Happy coding! 🚀
