const express = require('express');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/games', gameRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
