var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    //url.parse(_url, true): url을 분석하는 코드, 주어진 url정보를 분석해서 쉽게 쓸 수 있도록 해줌(추후 알려줄 예정)
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    
    console.log(url.parse(_url, true).pathname);
    
    if(pathname === '/'){
      // pathname === '/': /?형식일때
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`, `utf8`, function(err,description){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var template = `<!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200);
        response.end(template);
      });
    } else{
      fs.readFile(`data/${queryData.id}`, `utf8`, function(err,description){
        var title = queryData.id;
        var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
      //변수에다 한 페이지의 코드 전체를 넣어 실행시킴
      //a태그를 이용해 queryData에 값을 넣어주어 동적인 페이지 만들기
      response.writeHead(200);
      response.end(template);
    
      
   
  });
}
    }else{
      // /?형식이 아닐때
      // ex)/favicon.ico
      response.writeHead(404);
      //200: 파일을 성공적으로 전송했다
      response.end('Not found');
    }
   
    
    
    });
    
    
    
app.listen(3000);


// var url = require('url');
// var queryData = url.parse(_url, true).query; query data의 값을 추출해줌
