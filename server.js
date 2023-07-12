const express = require('express')
const app = express()
const port = 8000


//! make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//TODO: won't function as intended??


//!import routes function: (attaches all our routes to our app)
const routeAttacher = require('./routes/user.routes')


routeAttacher(app)

//! moved to models file:
// const users = [
//     {first: "Kyle", last: "Marymee"},
//     {first: "Aleksey", last: "Kashubin"},
//     {first: "Ben", last: "Gomez"},
//     {first: "Austin", last: "Serb"},
//     {first: "Kurt", last: "Clausen"}
// ]



//! Executed routes through routes.js
// app.get("/api", (req, res)=> {
//     res.json({message: "Hello World"});
// });


// app.get("/api/users", (req, res)=> {
//     res.json(users)
    
// })


// app.get("/api/users/:id", (req, res)=> {
//     // res.json(req.params.id)
//     res.json(users[req.params.id])
// })

// //post differentiats the same /api/users*
// app.post("/api/users", (req, res)=> {
//     //log their request then send it back
//     // console.log(req.body);

//     //this is now a basic create:
//     users.push(req.body)
//     res.json(req.body)
// })

// //update using put
// app.put("/api/users/:id",(req,res)=> {
//     const id = req.params.id
//     users[id] = req.body
//     res.json({msg: "ok"})
// })


// //delete example
// app.delete("/api/users/:id",(req,res)=> {
//     const id = req.params.id
//     users.splice(id,1)
//     res.json({msg: "ok"})
// })

app.listen( port, () => console.log(`<<Server Online>> ${port}`) );
