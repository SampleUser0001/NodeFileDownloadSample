const fs = require("fs");
const ejs = require("ejs");

const template = fs.readFileSync("./index.ejs","utf8");

function init(request, response){
    console.log("Request handler 'init' was called." );

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
    
    response.writeHead(200, {"Content-type": "text/html"});
    response.write(content);
    response.end();

}

function download(request, response){
    console.log("Request handler 'download' was called.");
    
}

exports.init = init;
exports.download = download;