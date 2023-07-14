// const users = require('../models/user.model')

const User = require("../models/user.model");

// if we had users still in user model we would need the above to add .users at the end of above^

//TODO: update for all controllers to only have res.json(users) - updated for mongoose // lost after trying to update controllers*

//take all the call backs from the routes
module.exports = {
  hello: (req, res) => {
    res.json({ message: "Hello World" });
  },

  allUsers: (req, res) => {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  //getting the id from the route param
  oneUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => {
        //DO NOT USE - console.res.json(err);
        res.json(err);
      });
  },
  newUser: (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        res.json(newUser);
      })
      .catch((err) => {
        console.log("New User Error", err);
        //! updated error for client side added below:
        res.status(400).json(err)
        res.json(err);
      });
  },
  updateUser: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res?.json(err?.errors?.message || err);
        // res?.json(err?.errors?.last?.message || err); <<GIVES ERROR MESSAGE TO FRONT END>>
      });
  },

  deleteUser: (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.res.json(err);
      });
  },
};
// allUsers : (req, res)=> {
//     res.json(req)
// },

// oneUser : (req, res)=> {
//!testing below & found that module.exports in the user.model.js needed to have ".users" removed*
//     // console.log("Hi");
//     // console.log(users[req.params.id]);
//     res.json(users[req.params.id])
// },

// newUser: (req, res)=> {
//     users.push(req.body)
//     res.json(req.body)

// },

// updateUser: (req,res)=> {
//     const id = req.params.id
//     users[id] = req.body
//     res.json({msg: "ok"})
// },

// deleteUser: (req,res)=> {
//     const id = req.params.id
//     users.splice(id,1)
//     res.json({msg: "ok"})
// }
