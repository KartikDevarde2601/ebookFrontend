# 📚 Book Library App

A modern web application for managing, exploring, and reading books for free. Built with React.js for the frontend and Strapi as a headless CMS backend, deployed on Firebase.

![Book Library Demo](/api/placeholder/800/400)

## ✨ Features

- 📱 Responsive design for all devices
- 📖 Free book reading with built-in e-reader
- 📑 Bookmark and resume reading functionality
- 📊 Book categories and tags
- 📖 Detailed book information pages
- 📝 CRUD operations for books
- 📱 Progressive Web App (PWA) support for offline reading

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - React Router for navigation
  - Redux for state management
  - Tailwind CSS for styling
  - Axios for API requests
  - React-PDF for PDF rendering
  - EPUB.js for EPUB format support

- **Backend:**
  - Strapi Headless CMS
  - PostgreSQL database
  - REST API endpoints
  - Cloud storage for book files

- **Deployment:**
  - Firebase Hosting
  - Firebase Authentication
  - Cloud Storage for books and images

## 📸 Screenshots Web
<p align="center">
  <img src="https://github.com/user-attachments/assets/90472627-4603-45e2-9d9f-6a4c7807f0d9" alt="Screenshot 1" width="400" height="300"/>
  <img src="https://github.com/user-attachments/assets/bf3e1443-4c8a-4a43-9286-fe066419449e" alt="Screenshot 1" width="400" height="300"/>
  <img src="https://github.com/user-attachments/assets/58de9107-0198-4a9f-83e3-20e0a5d45f69" alt="Screenshot 1" width="400" height="300"/>
</p>

## 📸 Screenshots Mob
<p align="center">
  <img src="https://github.com/user-attachments/assets/365425e5-dd6a-41a4-bd3f-438dbed7f20a" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/user-attachments/assets/e93c65d2-b342-46e4-b37e-6f426d760b6b" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/user-attachments/assets/0c6477c3-e480-42f0-806e-c0d628eab983" alt="Screenshot 1" width="200"/>
</p>


## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Strapi setup

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/book-library.git
cd book-library
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install Strapi dependencies:
```bash
cd backend
npm install
```

4. Configure environment variables:
```bash
# Frontend .env
REACT_APP_API_URL=your_strapi_url
REACT_APP_FIREBASE_CONFIG=your_firebase_config

# Backend .env
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

5. Run the development servers:
```bash
# Frontend
npm start

# Backend
npm run develop
```

## 📖 Reading Features

### Supported Formats
- PDF
- EPUB
- Text files
- HTML
- 
### Offline Reading
- Download books for offline access
- Sync reading progress when online
- Automatic bookmarking

## 📝 Configuration

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication and Hosting
3. Set up Cloud Storage for books
4. Configure Firebase configuration in your React app
5. Deploy using Firebase CLI

### Strapi Setup

1. Configure database connection
2. Set up content types for books and user progress
3. Configure permissions
4. Set up file upload providers
5. Deploy Strapi backend

## 🔐 Environment Variables

Create `.env` files in both frontend and backend directories:

```env
# Frontend
REACT_APP_API_URL=
REACT_APP_FIREBASE_CONFIG=
REACT_APP_STORAGE_BUCKET=

# Backend
DATABASE_URL=
JWT_SECRET=
ADMIN_JWT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

## 🚀 Deployment

### Frontend Deployment (Firebase)

```bash
npm run build
firebase deploy
```
## 🙏 Acknowledgments

- Strapi team for the amazing headless CMS
- Firebase team for the hosting and authentication services
- EPUB.js and React-PDF for reader functionality
- All contributors who helped with the project
