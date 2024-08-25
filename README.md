# Firebase Authentication

A simple Firebase Authentication project that demonstrates how to implement user sign-up, sign-in, and sign-out functionalities using Firebase Authentication.

## Features

- User sign-up with email and password
- User sign-in with email and password
- User sign-out
- Integration with Firebase

## Prerequisites

- Node.js and npm installed on your machine
- A Firebase project setup (get your API keys from Firebase Console)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nandu-99/Firebase-auth.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Firebase-auth
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up Firebase configuration:**

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Select your project.
   - Go to Project Settings > General > Your apps > Firebase SDK snippet > Config.
   - Copy the configuration details and create a `.env` file in the root of your project directory with the following content:

     ```plaintext
     REACT_APP_FIREBASE_API_KEY="YOUR_API_KEY"
     REACT_APP_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
     REACT_APP_FIREBASE_DATABASE_URL="YOUR_DATABASE_URL"
     REACT_APP_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
     ```

5. **Start the development server:**

   ```bash
   npm start
   ```

6. **Open your browser and navigate to:**

   ```bash
   http://localhost:3000
   ```

## Usage

- **Sign Up:** Users can create an account by providing an email and password.
- **Sign In:** Users can log in using their email and password.
- **Sign Out:** Users can log out of their account.

## Contributing

Feel free to open issues or submit pull requests to improve the project. Please ensure that your code follows the existing style.
