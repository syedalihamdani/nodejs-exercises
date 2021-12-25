const name="Hafiz Sayyed Ali Hamdani";
console.log(name);

const fs=require("fs");
fs.writeFileSync("newfile.txt","Congraulations to myself I have created a new file.");

fs.appendFileSync("newfile.txt","This new sentance has been added to the file");

const data=fs.readFileSync("newfile.txt");
console.log(data);

const newdata=data.toString();
console.log(newdata);
