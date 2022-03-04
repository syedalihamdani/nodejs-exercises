 import express from 'express';
 import bodyParser from 'body-parser';
 import usersRouter from './router/users.js';
 import path from 'path';

 const app=express();

 
// initalize body parser
app.use(bodyParser.json());

app.use('/users',usersRouter);

 app.get('/',(req,res)=>{
     console.log("strted");
     res.send("This is a Home page");
 })



 const PORT=process.env.prot||80;

 app.listen(PORT,()=>console.log(`The server is runing on port: http://localhosh:${PORT}`));  