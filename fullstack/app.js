const express=require('express');
const path=require('path');
const hbs=require('hbs');
require('./db/conn');
const app=express();

const static_path=path.join(__dirname,"public");
const template_path=path.join(__dirname,"templates","views");
const partials_path=path.join(__dirname,"templates","partials");

hbs.registerPartials(partials_path);


// app.use(express.static(static_path));

app.set("view engine","hbs");
// New path for hbs files
app.set("views",template_path);

app.get('/',(req,res)=>{
    res.render('index');
})

const PORT=process.env.port||80;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})