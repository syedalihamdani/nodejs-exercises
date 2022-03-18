const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true        This line is not supporting that is why commented.
}).then(()=>{
    console.log("Data base connection successful");
}).catch((err)=>{
    console.log(err);
})
