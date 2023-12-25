const usersRouter = require("express").Router();
const ModelAccount = require("../Models/ModelAccount")

usersRouter.get("/login", async (req, res)=> {
  res.send("Worked")
})

usersRouter.post("/register", async (req, res)=> {
  console.log(req.body)
await ModelAccount.create(req.body);
const user = await ModelAccount.find({});
res.json(user).status(201)
})

usersRouter.post("/login", async (req, res)=> {
  const entry = await ModelAccount.findOne({username: req.body.username, password: req.body.password});
  if(entry) {
  res.json(entry).status(201)} else {
    res.status(401).json({message:"Invalid username or password"})
  }
})
module.exports = usersRouter;