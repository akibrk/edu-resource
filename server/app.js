const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const app = express();

const port = process.env.PORT || 3300;



// Middleware
app.use(cors());
app.use(helmet());

app.use(express.static(path.join(__dirname, '/public')));

app.all('/ping', (req, res) => {
    res.json(Date.now());
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.listen(port, () => {
    console.log(`✔ Server running on port ${port}`);
})