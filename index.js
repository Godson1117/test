const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.post('/api/User/register', (req, res) => {
    console.log(req.body)
    res.json({
        "success": true,
    });
});

app.get('/', (req, res) => {
    res.json({ "sucess": true, "message": "Welcome to the API...." });
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});