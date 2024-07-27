// fs 모듈 가져오기
const fs = require('fs');

// "input.txt" 파일에서 텍스트 읽어오기
fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err){
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);

    // "output.txt" 파일에 텍스트 작성하기
    fs.writeFile('output.txt', data, (err)=>{
        if(err){
            console.error('Error writing the file:', err);
            return;
        }
        console.log('File has been written successfully');
    });
});