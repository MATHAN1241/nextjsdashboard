// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/signu');


// // router.post('/', async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     // Find the user by email
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     // Check if the password matches
// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ message: 'Invalid password' });
// //     }
// //     const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1m' });
// //     // Password is correct, return user data (you may want to exclude password)
// //     res.status(200).json({ user: { _id: user._id, email: user.email }, token });
// //     // res.status(200).json({ user });
// //   } catch (error) {
// //     console.error('Error logging in:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });
// router.post('/', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     if (!email || !password) {
//       return res.status(400).json({ message: '*Please provide both email and password' });
//     }

//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: '*User Mail not found' });
//     }

//     // Check if the password matches
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: '*Invalid password' });
//     }
//     // const id=req.query.id;
//     // Password is correct, generate and send token
//     const token = jwt.sign({ userId: user._id }, 'secrets', { expiresIn: '1h' });
//     // const payload = {
//     //   userId: {
//     //       id: user.id
//     //   }
//     // };

//     // jwt.sign(payload, 'jwtSecret', { expiresIn: 3600 }, (err, token) => {
//     //   if (err) throw err;
//     //   res.json({ token });
//     // });
//     // Return user data (you may want to exclude password)
    
//     // res.cookie('jwt',token,{
//     //   httpOnly:true,
//     //   nexAge:24*60*60*1000 // 1days
//     // });
//     //res.cookie('token', token, { httpOnly: true },'userData', JSON.stringify({ _id: user._id, email: user.email,category: user.category ,name:user.name }), { maxAge: 3600000 });
//     // console.log('hel:',userData);  
//     // Set cookie for token
// res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Assuming token is generated and available

// // Set cookie for user data
// res.cookie('userData', JSON.stringify({ _id: user._id, email: user.email,category: user.category ,name:user.name }), { maxAge: 3600000 });
// // console.log('hel:',userData); 
// console.log('Cookies set:', res.getHeaders()['set-cookie']);
//     // res.send({message:"success"});
//     res.status(200).json({ user: { _id: user._id, email: user.email,category: user.category ,name:user.name }, message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
// router.get('/:id', async (req, res) => {
//   try {
//     const userId = req.params.id;
//     console.log(userId,"aaaaa");
    
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// // router.get('/', async (req, res) => {
// //   try {
// //     // Fetch all users from the database
// //     const users = await User.find();

// //     // Return user data (you may want to exclude sensitive information like password)
// //     console.log('User:',users);
// //     res.status(200).json({ users });
// //   } catch (error) {
// //     console.error('Error fetching user data:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });
// module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/signu');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// Session setup
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

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: '*Please provide both email and password' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: '*User Mail not found' });
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: '*Invalid password' });
    }

    // Password is correct, generate token (if needed)
    const token = jwt.sign({ userId: user._id }, 'secrets', { expiresIn: '1h' });

    // Store user information in session
    req.session.user = {
      _id: user._id,
      email: user.email,
      category: user.category,
      name: user.name,
      token: token // Include the token if needed
    };

    res.status(200).json({ user: req.session.user, message: 'Login successful' });
    console.log(user);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId, "aaaaa");

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
// router.get('/session-user', (req, res) => {
//   if (req.session.user) {
//     res.status(200).json(req.session.user);
//   } else {
//     res.status(401).json({ message: 'No user logged in' });
//   }
// });

// Ensure you use the router
//app.use('/api', router);

module.exports = router;
