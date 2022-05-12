let jwt = require('jsonwebtoken');
const secret = "sarthaksamarthsahilabhi";

const fetchfaculty = (req, res, next) => {
    // get the user from jwt token and append the id to the req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate with valid token" })
    }

    try {
        const data = jwt.verify(token, secret);
        req.faculty = data.faculty;
        // console.log(req.user);
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate with valid token" })
    }


}
module.exports = fetchfaculty;