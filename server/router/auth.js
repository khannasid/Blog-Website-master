import express from "express";
import { signUpDetails, loginDetails } from "../controllers/AuthController.js";

const route = express.Router();

route.post('/signup', signUpDetails);
route.post('/login', loginDetails);



export default route;

