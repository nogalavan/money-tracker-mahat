// import express from 'express';
// import mongoose from 'mongoose';
// import PostMessage from '../models/postMessage.js';

// const router = express.Router();

// export const signin = async (req, res) => { 
//     try {
//         const postMessages = await PostMessage.find();
                
//         res.status(200).json(postMessages);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const signup = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);
        
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }

//     console.log(req.body);

//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, 8),
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       balance: req.body.balance,
//       budget: req.body.badget,
//     });
  
//     user.save((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }
  
//       res.send({ message: "User was registered successfully!" });
//     });
// }


// export default router;