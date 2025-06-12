const express = require('express');
const app = express();
const port = 3000;

let gardenStates = {}; // In-memory storage

app.use(express.json());

app.post('/updateGarden', (req, res) => {
    const { userId, gardenData } = req.body;
    gardenStates[userId] = gardenData;
    res.send({ status: 'ok' });
});

app.get('/getGarden/:userId', (req, res) => {
    const data = gardenStates[req.params.userId] || {};
    res.send(data);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
