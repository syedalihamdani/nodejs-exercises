// CRUD operation challange 

const fs=require('fs');

fs.mkdirSync("sync");

fs.writeFileSync("sync/bio.txt","My name is Ali");

fs.appendFileSync("sync/bio.txt","new is added");

const read=fs.readFileSync("sync/bio.txt","utf-8");

console.log(read);

fs.renameSync("sync/bio.txt","sync/newbio.txt");

fs.unlinkSync("sync/newbio.txt");

fs.rmdirSync("sync");



