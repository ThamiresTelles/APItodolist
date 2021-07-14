const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());
app.options("*", cors());

app.listen(8080, () => {
    console.log(`Servido iniciado na porta: http://localhost:8080`);
})