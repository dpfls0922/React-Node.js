// http 모듈을 가져온다
const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => {
    // 기본 경로("/")에 대한 GET 요청을 처리함
    if (req.method === 'GET' && req.url === '/'){
        // 응답 헤더 설정
        res.writeHead(200, {'Content-Type': 'text/plain'});
        // 응답 본문 작성
        res.end('Hello, World!');
    } else {
        // 기본 경로가 아닌 경우 404 오류 반환
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

// 서버를 포트 3000에서 실행
server.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000')
});