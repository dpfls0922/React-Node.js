// Express 라이브러리 사용 예시
const express = require('express');
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello, World!');
});

app.listen(3000, ()=>{
    console.log('Server is runnig on http://localhost:3000')
});