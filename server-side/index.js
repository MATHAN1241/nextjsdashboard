// // index.js
// const passport=require('passport')
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const User = require('./Users')

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(passport.initialize());
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/lyzooattendance', {

// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const passport = require('passport');
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const User = require('./Users');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors);
// app.use(express.urlencoded({ extended: true }));
// app.use(passport.initialize());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/lyzooattendance', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//   console.log('MongoDB connected successfully');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// server.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/lyzooattendance', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a schema for user
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model('users', userSchema);

// // Routes
// app.post('/api/signup', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const newUser = new User({ name, email, password });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const employeeAdd= require('./routes/employeeAdd');
const leaveform = require('./routes/leaveRequestform');
const leaveRequestRoutes = require('./routes/leaverequests');
const dashboard= require('./routes/dashboard');
const Bankdtls=require('./routes/BankDetails');
const attendance=require('./routes/attendanceForm')
const verifyToken = require('./middleware/auth');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const PORT = process.env.PORT || 5000;
const multer = require('multer');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Session setup
app.use(session({
  secret: 'your_secret_key', // Replace with your own secret key
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/lyzooattendance', // Replace with your MongoDB URL
    ttl: 60 * 60, // 1 hour session timeout
  }),
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour session timeout
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/lyzooattendance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(error => {
  console.error('MongoDB connection error:', error);
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images'); // Specify the folder where images will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Use unique filename for the image
//   }
// });
// const upload = multer({ storage: storage });

// Routes
app.use('/api/auth/signup', signupRoute);
app.use('/api/auth/login',loginRoute);
app.use('/api/employees',employeeAdd);
app.use(express.static('public'));
// app.use('/api/auth/verifyToken',verifyToken);
app.use('/api/requests', leaveRequestRoutes);
app.use('/api/leaverequests',leaveform);
app.use('/api/home',dashboard);
app.use('/api/Bankdtls',Bankdtls);
app.use('/api/attendance',attendance);
// app.use('/api/attendanceregister', registerRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
