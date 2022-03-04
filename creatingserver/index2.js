const http=require("http");

const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        res.end("This is Home page")
} else if (req.url=="/about"){
    res.end("About page")
} else{res.writeHead(404,{"content-type":"text/html"});
res.end("<h1>404 error the page does not exist</h1>"); }
});

server.listen(80,"127.0.0.1",()=>{
    console.log("Listening on port 80");
});