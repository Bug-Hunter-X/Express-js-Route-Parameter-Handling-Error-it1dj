const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operations to fetch user data based on userId
  if (!userData) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(userData);
});
//Always handle the error properly and return proper status code