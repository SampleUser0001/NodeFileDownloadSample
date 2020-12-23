const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const template = fs.readFileSync("./index.ejs","utf8");

function getRequest(request, response){

    // ファイル一覧取得
    const itemlist = fs.readdirSync("./tmp", { withFileTypes: true });
    console.log(itemlist);
    
    let content = ejs.render(
        template,
        {
            title: "File Download",
            itemlist: itemlist
        }
    );
    
    response.writeHead(200, {"Content-type":"text/html"});
    response.write(content);
    response.end();
}

http.createServer(getRequest).listen(8080);
console.log('Server start');
