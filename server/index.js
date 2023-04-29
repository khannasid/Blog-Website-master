import express from 'express';
import Connection from './database/db.js'
import dotenv from 'dotenv';
import route from './router/auth.js';
import userRoute from './router/userApi.js';
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();
dotenv.config();

const PORT = 9000;
app.use(cors());


// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', route);
app.use('/user', userRoute);


app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT}`);
});

const user = process.env.DB_Username;
const pass = process.env.DB_Pass;

Connection(user, pass);

