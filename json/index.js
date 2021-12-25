const fs=require('fs');
const objjson={
    name:"Ali",
    age:29,
    fullname:"Syed Ali Hamdani"
}

console.log(objjson);
const Cjson=JSON.stringify(objjson);
console.log(Cjson);
const bjson=JSON.parse(Cjson);
console.log(bjson);
fs.writeFile("new.json",Cjson,(err)=>{
    console.log(err);
    console.log("File has been made")
})
fs.readFile("new.json","utf-8",(err,res)=>{
    console.log(err);
    console.log(res);
})