const fs=require("fs");
// fs.mkdir("new",function(err){
//     console.log(err);
// })
// fs.writeFile("./new/file.txt","This is my file.i worte it with the help of fs core module",function(err){
//     console.log(err);
//     console.log("File is wirtten successfully");
// })

// fs.appendFile("./new/file.txt"," Appended this new sentence",function(err){
//     console.log(err);
// })
// fs.readFile("./new/file.txt","utf-8",function(err,res){
//     console.log(err);
//     console.log(res);
// })
// fs.rename("new/file.txt","new/refile.txt",function(err){
//     console.log(err);
//     console.log("file is renamed");
// })
// fs.unlink("new/refile.txt",function(err){
//     console.log(err);
// })
// fs.rmdir("new",function(err){
//     console.log(err);
// })
fs.unlinkSync("./folder/text.txt");
fs.rmdirSync("folder");
fs.mkdirSync("folder");
fs.writeFileSync("folder/text.txt","Text is written");
fs.appendFileSync("folder/text.txt"," New sentence is added");
const data=fs.readFileSync("folder/text.txt");
console.log(data);

const newdata=data.toString();
console.log(newdata);