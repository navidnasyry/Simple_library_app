const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {

    let pre_token = req.headers.authorization;
    let token = null;
    if (pre_token){ // if use bearer token
        if(pre_token.toLowerCase().startsWith('bearer')){
            token = req.headers.authorization.slice('bearer'.length).trim();
        }
    }
    else{ // if use token field from body or query or x-access-token field from headers
        token =
            req.body.token || req.query.token || req.headers["x-access-token"];
    }  

    if (!token) {
        return res.status(403).send("A token is required for authentication -_-");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token :(");
    }
    return next();
};

module.exports = verifyToken;