// // pages/api/auth/signup.ts

// import { NextApiRequest, NextApiResponse } from "../../../node_modules/next";
// import bcrypt from "bcrypt";
// import User from "../../../Users";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { name, email, password } = req.body;

//     try {
//       // Check if the email already exists
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: "Email already exists" });
//       }

//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Create a new user
//       await User.create({ name, email, password: hashedPassword });

//       res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
// pages/api/signup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import User from '../../../Users'; // Adjust the path to your User model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('hello');
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { name, email, password, confirmPassword } = req.body;

    // Verify if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    console.log("User details sucessfully")
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

