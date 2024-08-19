import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import User from './User';
import { UserProvider } from './UserContext';

const domNode = document.getElementById('root');

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </UserProvider>,
  );
} else {
  console.error('Root element not found');
}
