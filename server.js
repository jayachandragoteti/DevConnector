const express = require('express');
const connectDB = require('./config/db');
//const res = require('express/lib/response');

const app = express();

// Connect DataBase
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);
// app.get('/', (req, res) => {
//   res.send('API');
// });

//  Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

// Server PORT
const PORT = process.env.PORT || 4000;

// Server Start
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
