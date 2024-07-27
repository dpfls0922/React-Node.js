const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// 기타 API 엔드포인트
app.post('/api/register', (req, res)=>{
    const {name, email} = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    console.log(`Received: ${name}, ${email}`);
    res.json({message: 'User registered successfuly', user: {name, email}});
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});