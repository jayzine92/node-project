import { express } from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("hello this is get")
})

app.listen(3000, "this is a app")