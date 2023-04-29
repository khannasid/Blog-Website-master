import User from "../model/user.js"
import bcrypt from 'bcrypt';
import generateToken from '../util/generatetoken.js';


// SignUp Start 

export const signUpDetails = async (req, res) => {
    let { email, user, pass } = req.body;

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(202).json({ msg: "The Email is already have account" });
        }

        pass = await bcrypt.hash(pass, 12);
        const newUser = new User({ email, user, pass });
        await newUser.save();
        const token = generateToken(User._id);

        return res.status(200).json({ user: res.body, token: token, msg: "SignUp Successfully!" });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'signUp Failed!' });
    }

};




// login Start

export const loginDetails = async (req, res) => {


    let { email, pass } = req.body;
    console.log(res.body);
    try {
        const userExist = await User.findOne({ email: email });

        if (!userExist) {

            return res.status(400).json({ msg: "wrong Credentials" });
        }

        const isValid = await bcrypt.compare(pass, userExist.pass);

        if (!isValid) {
            return res.status(401).json({ msg: "Enter right Credentials" });
        }

        const token = generateToken(User._id);

        return res.status(202).json({ user: userExist, token: token, msg: "Login Successfully!" });
    } catch (err) {

        console.log(err);
        return res.status(500).json({ msg: 'login Failed!' });
    }
}



