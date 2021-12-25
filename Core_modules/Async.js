const fs=require("fs");
fs.writeFile("file.txt","hello, It is me.",(err)=>{
    console.log("file is created")
    console.log(err)})


fs.appendFile("file.txt","this is new sentence.",(err)=>{
    console.log("task completed")
console.log(err)});

fs.readFile("file.txt","utf-8",(err,res)=>{
    console.log(res)
    console.log(err);
});
