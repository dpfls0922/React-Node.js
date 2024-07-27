// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const todos = []; // todos 배열 초기화

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// 정적 파일 제공
app.use(express.static('public'));

// todos를 가져오는 라우트
app.get('/todos', (req, res)=>{
    res.json(todos);
});

// 새로운 todo를 추가하는 라우트
app.post('/todos', (req, res)=>{
    const newTodo = req.body.todos;
    todos.push(newTodo);
    res.json({message: 'Todo added', todos:todos});
});

app.listen(port, () =>{
    console.log('Server is running on http://localhost:${port}');
});