# 🏀 Nike E-Commerce Store Clone

A fully functional replica of the Nike online store, built using **React**, **Redux**, and **CSS**, designed to deliver a seamless and dynamic user experience. This project closely mirrors the design and functionality of Nike’s official website, including product listings, cart management, and authentication features.

## 🔥 Features

- **Landing Page**: Custom-designed landing page to boost user engagement.
- **Authentication**: Firebase Authentication for secure user login using Google Sign-In.
- **Session Persistence**: Automatically restores user cart and favorites across sessions.
- **Dynamic Product Filtering**:
  - Filter by gender, category, and price range.
  - Responsive and optimized for various devices.
- **Product Management**:
  - View detailed product information.
  - Add/remove items to/from cart and favorites.
- **Real-time Database**:
  - Firebase Firestore for storing user data and product details.
  - Updates reflect instantly in the UI.

## 🛠 Tech Stack

- **Frontend**: React, Redux, React Router
- **State Management**: Redux Toolkit
- **Authentication & Database**: Firebase (Auth + Firestore)
- **Styling**: CSS (modular and responsive)


## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Firebase project (for authentication and Firestore)
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nike-clone.git
   cd nike-clone
Install dependencies:

bash
Copy
Edit
npm install
Firebase Setup:

Create a Firebase project at Firebase Console.

Enable Authentication (Google Sign-In).

Set up Firestore Database.

Create a .env file in the root and add your Firebase config:

ini
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
