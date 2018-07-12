require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const EasyPost = require('node-easypost');


const port = 3001;

const app = express();
const apiKey = process.env.API_KEY;
const api = new EasyPost(apiKey);

app.use(bodyParser.json());
app.use(cors());



const getShipments = (req, res, next) => {
    api.Shipment.all({
    }).then(response => {
        res.json(response);
    })
};
app.get("/getShipments", getShipments);

// module.exports = {
//     getShipments: getShipments,
// }

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
