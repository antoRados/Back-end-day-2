const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const {
    getHouses,
    createHouse,
    updateHouse,
    deleteHouse
} = require('./controller');

app.get(`/api/houses`, getHouses);
app.post(`/api/houses`, createHouse);
app.put(`/api/houses/:id`, updateHouse);
app.delete(`/api/houses/:id`, deleteHouse);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`SERVER LIVE ON PORT ${SERVER_PORT}`));