const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Faculty = require("../models/Faculty");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "sarthaksamarthsahilabhi";
const fetchuser = require("../Middleware/fetchuser");

//ROUTE 1:Create a user using: POST "/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("firstName", "Enter a valid name").isLength({ min: 3 }),
    body("lastName", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //  if there are errors return them and bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether a user with same credentials already exists
    try {
      let user = await User.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        // success = false;
        return res
          .status(400)
          .json({ success, error: "Sorry a user with same credentials already exists" });
      }
      const salt = await bcrypt.genSaltSync(10);
      let securedPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: securedPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const AuthToken = jwt.sign(data, secret);
      success = true;
      res.json({ success, AuthToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);



//ROUTE 1.1 Authenticate a user using POST:"/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //  if there are errors return them and bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let { email, password } = req.body;
      // check whether a user with same credentials already exists
      let user = await User.findOne({ email });
      // console.log(user);
      if (!user) {
        // success = false;

        return res
          .status(400)
          .json({ success, error: "Please login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        // success = false;
        return res
          .status(400)
          .json({ success, error: "Please login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const AuthToken = jwt.sign(data, secret);
      success = true;
      res.json({ success, AuthToken });
      // console.log(AuthToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);



//ROUTE 2:Create a faculty using: POST "/api/auth/"
router.post(
  "/createfaculty",
  [
    body("firstName", "Enter a valid name").isLength({ min: 3 }),
    body("lastName", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //  if there are errors return them and bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    // check whether a user with same credentials already exists
    try {
      let faculty = await Faculty.findOne({ email: req.body.email });
      // console.log(user);
      if (faculty) {
        // success = false;
        return res
          .status(400)
          .json({ success, error: "Sorry a user with same credentials already exists" });
      }
      const salt = await bcrypt.genSaltSync(10);
      let securedPass = await bcrypt.hash(req.body.password, salt);
      faculty = await Faculty.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: securedPass,
      });
      const data = {
        faculty: {
          id: faculty.id,
        },
      };
      const AuthToken = jwt.sign(data, secret);
      success = true;
      res.json({ success, AuthToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }

    // console.log(AuthToken);
  }
);

//ROUTE 2.1 Authenticate a user using POST:"/api/auth/login". No login required
router.post(
  "/facultylogin",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //  if there are errors return them and bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let { email, password } = req.body;
      // check whether a user with same credentials already exists
      let faculty = await Faculty.findOne({ email });
      // console.log(user);
      if (!faculty) {
        // success = false;
        return res
          .status(400)
          .json({ success, error: "Please login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, faculty.password);
      if (!passwordCompare) {
        // success = false;
        return res
          .status(400)
          .json({ success, error: "Please login with correct credentials" });
      }
      const data = {
        faculty: {
          id: faculty.id,
        },
      };
      const AuthToken = jwt.sign(data, secret);
      success = true;
      res.json({ success, AuthToken });
      // console.log(AuthToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// ROUTE 3: Get loggedin user information using: POST "/api/auth/getuser". login required.
router.post("/getuser", fetchuser, async (req, res) => {
  //  if there are errors return them and bad request
  const errors = validationResult(req);
  let success = true;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user, success);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
