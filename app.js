const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const api = require("./src/routes/api");
app.use("/api", api)

app.listen(4001, () => {
    console.log("App listening on port 4001");
})