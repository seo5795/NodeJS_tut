var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href = "/create">create</a>
    ${body}
  </body>
  </html>
  `;
}
function templateList(filelist){
  var list = `<ul>`;

        var i = 0;
        while (i < filelist.length) {
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i = i + 1;
        }
        list = list + `</ul>`;
        return list;
}
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  //url.parse(_url, true): url을 분석하는 코드, 주어진 url정보를 분석해서 쉽게 쓸 수 있도록 해줌(추후 알려줄 예정)
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    // pathname === '/': /?형식일때
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateList(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2> 
            <p>${description}</p>`);
        response.writeHead(200);
        response.end(template);
      })


    } else {
      fs.readdir('./data', function (error, filelist) {
       
        fs.readFile(`data/${queryData.id}`, `utf8`, function (err, description) {
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2> 
        <p>${description}</p>`);

          response.writeHead(200);
          response.end(template);



        });
      });
    }
  }else if(pathname === '/create'){
    fs.readdir('./data', function (error, filelist) {
      var title = 'WEB - create';
      var description = 'Hello, Node.js';
      var list = templateList(filelist);
      var template = templateHTML(title, list, `
        <form action="http://localhost:3000/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p><textarea name="description" placeholder="description"></textarea></p>
          <p><input type="submit"></p>
        </form>

      `);
      response.writeHead(200);
      response.end(template);
    })

  }
    else if(pathname==='/create_process'){
      var body = '';
      request.on('data', function(data){//데이터를 전송할 때 데이터를 한번에 처리하면 무리가 생기므로 조각조각의 정보를 수신할 때마다 서버가 콜백함수를 호출 하도록 약속 
        body = body + data;
      });
      request.on('end', function(){
        //정보수신이 끝났을 때 콜백함수 호출
        //정보수신이 끝남
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`,description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});//페이지를 REDIRECTION하라는 뜻:302
          response.end('success');
        })
      })
      
    }
   else {
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
