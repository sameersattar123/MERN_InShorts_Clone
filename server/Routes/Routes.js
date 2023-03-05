import express from "express"
import { NewsControllers } from "../Controllers/NewsControllers.js";

const route = express.Router();

route.get("/news" , NewsControllers) 

export default route;