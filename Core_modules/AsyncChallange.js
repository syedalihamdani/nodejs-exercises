const fs=require("fs");

fs.mkdir("folder",(err)=>{
    console.log("Folder has been created")
    console.log(err)
});

fs.writeFile("folder/challenge.txt","Async Challange file has been created",(err)=>{
    console.log("Challenge is created")
    console.log(err)
});

fs.appendFile("folder/challenge.txt","Something new",(err)=>{
    console.log("new syntence is added")
    console.log(err)
});

fs.readFile("folder/challenge.txt","UTF-8",(err,res)=>{
    console.log(res)
    console.log(err)
});


fs.rename("Async/challenge.txt","Async/hello.txt",(err)=>{
    console.log("Renamed")
    console.log(err)
});

fs.unlink("Async/hello.txt",(err)=>{
    console.log("file is deleted")
    console.log(err)
});

fs.rmdir("Async",(err)=>{
    console.log("folder is deleted")
    console.log(err)
});