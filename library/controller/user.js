const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.register = async function (req, res){

    console.log("Post request to /status/register");
    try{
    

        //get data from request
        const {username, first_name, last_name, email, password} = req.body;

        //verify data
        if(!(first_name && last_name, email, password)){
            res.status(400).send("You must fill all blanks :)");
        }

        const old_user_email = await User.findOne({ email });
        const old_user_username = await User.findOne({ username });

        if(old_user_email){
            res.status(409).send("This email already exist.");

        }
        if(old_user_username){
            res.status(409).send("This Username is already exits. please use another username. :)");
        }

        //encrypt password
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            first_name,
            last_name,
            email : email.toLowerCase(),
            password: encryptedPassword,

        });


    // Create token
    const token = jwt.sign(
            {
                user_id: user._id, username 
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        // save user token
        user.token = token;
        user.save();
        console.log("new user registered sucessfully...:)")
        // return new user
        res.status(201).json(user);
        // Our register logic ends here
    } catch(err){
        console.log(err);
    }

}


exports.login = async function (req, res){
    console.log("Post request to /status/login");


    try{
        
        const {username, password} = req.body;

        // Validate user input
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }

        // Validate if user exist in our database
        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { 
                    user_id: user._id, username
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            )
            // save user token
            user.token = token;
            user.save();

            // user
            console.log("new user login sucessfully...:)")
            res.status(200).json(user);
        }

        res.status(400).send("Invalid Credentials");

    } catch(err){
        console.log(err);
    }



}