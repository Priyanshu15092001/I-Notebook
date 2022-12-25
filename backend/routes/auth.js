const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//Create a user using: POST "/api/auth/" Doesnt require auth
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be min 5 length.").isLength({ min: 5 }),
  ],
  (req, res) => {
    console.log("abc")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,}).then(user=>res.json(user)).catch(err=>{console.log(err)
        res.json({error:'Already registered mail'})});
    // const user=User(req.body);
    // user.save();
    //res.send();
    })
  // const data= user.save()
     // const data ={}

  //  res.json({data});
  
module.exports = router;
