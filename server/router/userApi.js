import express from "express";
import { addBlogDetails } from "../controllers/apiController.js";

const route = express.Router();

route.post('/addDetail', addBlogDetails);


export default route;