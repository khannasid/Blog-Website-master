import db from "mongoose";


db.set('strictQuery', false);

const Connection = async (user, pass) => {

    const url = `mongodb+srv://${user}:${pass}@blog-app.qkrdmft.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await db.connect(url, { useNewUrlParser: true });
        console.log('DataBase Connected Sucessfully!')
    } catch (error) {
        console.log(error);
    }
}

export default Connection;