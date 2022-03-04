 const http=require('http');
 const server=http.createServer((req,res)=>{
     if(req.url=='/'){
         res.end("Home page")
     }else if(req.url=='/about'){
         res.end("about page")
     }else{res.writeHead(404,{"content-type":"text/html"})
    res.end("This page does not exist")}
 })

 server.listen(8000,()=>{
     console.log("The server is stated on port 8000");
 })