import express from "express"
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import Default from "./default.js";
import Route from "./Routes/Routes.js";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));      
app.use("/" , Route)

const PORT = 8000;
Connection();

app.listen(PORT , () => console.log(`server connected successfully on ${PORT}`)) 

Default()