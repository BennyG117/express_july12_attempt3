const users = require('../models/user.model')
// if we had users still in user model we would need the above to add .users at the end of above^


//take all the call backs from the routes
module.exports = {

hello : (req, res)=> {
    res.json({message: "Hello World"});
},


allUsers : (req, res)=> {
    res.json(users)   
},

oneUser : (req, res)=> {
    //!testing below & found that module.exports in the user.model.js needed to have ".users" removed*
    // console.log("Hi");
    // console.log(users[req.params.id]);
    res.json(users[req.params.id])
},

newUser: (req, res)=> {
    users.push(req.body)
    res.json(req.body)

},

updateUser: (req,res)=> {
    const id = req.params.id
    users[id] = req.body
    res.json({msg: "ok"})
},

deleteUser: (req,res)=> {
    const id = req.params.id
    users.splice(id,1)
    res.json({msg: "ok"})
}


}
