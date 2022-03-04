const path=require("path");
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));
console.log(path.extname(__filename));
console.log(path.isAbsolute("//Nodejs\\"));
console.log(path.parse(__filename));
console.log(path.normalize("//Node\\folder///////"));
console.log(path.join("..Nodejs","/new","hello","love.txt"));
