const config = require("../config/auth.config");
const db = require("../models");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const User = db.user;
const Transaction = db.transaction;

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    balance: req.body.balance,
    budget: req.body.budget,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("transactions")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        balance: user.balance,
        budget: user.budget,
        transactions: user.transactions,
        accessToken: token
      });
    });
};

exports.update = (req, res) => {
  User.findOneAndUpdate({'username': req.body.username}, 
    {'budget': req.body.budget, 'email': req.body.email})
    .populate('transactions')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: req.body.email,
        firstName: user.firstName,
        lastName: user.lastName,
        balance: user.balance,
        budget: req.body.budget,
        transactions: user.transactions,
        accessToken: req.headers["x-access-token"]
      });
    })
};