const db = require("../models");
const Transaction = db.transaction;
const User = db.user;

exports.addTransaction = (req, res) => {
  User.findById(req.params.id, function(err, result) {
    if (!err) {
      if (!result){
        res.sendStatus(404).send('User was not found').end();
      }
      else{
        const transaction = new Transaction({
          amount: req.body.amount,
          date: req.body.date,
          discription: req.body.discription,
          catagory: req.body.catagory,
          type: req.body.type,
        });
        transaction.save((err, tran) => {
          if (!!err) {
            res.status(500).send({ message: err });
            return;
          }
        });

        result.transactions.push(transaction);
        result.markModified('transactions');
        result.save((saveerr, saveresult) => {
          if (!saveerr) {
            User.findById(result.id)
            .populate('transactions')
            .exec((err, user) => {
              if (!!err) {
                res.status(500).send({ message: err });
                return;
              }
              user.id = user._id;
              delete user._id;
              res.status(200).send({...user._doc, accessToken: req.headers["x-access-token"]});
              return;
            });
          } else {
            res.status(400).send(saveerr.message);
          }
        });
      }
    } else {
      res.status(400).send(err.message);
    }
  });

  // console.log(req.body);
  // const { id } = req.params;
  // const { username, email, password, firstName, lastName, balance, badget, transactions } = req.body;
    
  // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  // const user = new User({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 8),
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   balance: req.body.balance,
  //   budget: req.body.badget,
  //   transactions: req.body.transactions,
  //   _id: id
  // });
  // const updatedUser = { username, email, password, firstName, lastName, balance, badget, transactions, _id: id };

  // User.updateOne({id: id}, user, (err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }

  //   res.send({ message: "User was updated successfully!" });
  // });
  // user.findOneAndUpdate((err, user) => {
  //   if (err) {
  //     res.status(500).send({ message: err });
  //     return;
  //   }

  //   res.send({ message: "User was updated successfully!" });
  // });

  // await User.findByIdAndUpdate(id, updatedUser, { new: true });

  // res.json(updatedPost);
};