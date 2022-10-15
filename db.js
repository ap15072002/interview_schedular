// For setting up mongoDB call this file in server.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.set("useFindAndModify", false);

// mongoose.connect("mongodb+srv://AbhayPratap:AbhayPratap@cluster0.hf3biwk.mongodb.net/Interviews?retryWrites=true&w=majority", {
//         useNewUrlParser: true,
//     },
//     () => {
//         console.log("Connected to DB!");
//     }
// );

// mongoose.connect("mongodb+srv://AbhayPratap:AbhayPratap@cluster0.hf3biwk.mongodb.net/?retryWrites=true&w=majority",).then(()=>{
//     console.log(`successfully connected`);
//     }).catch((e)=>{
//     console.log(`not connected`);
//     }); 

mongoose.connect("mongodb+srv://AbhayPratap:AbhayPratap@cluster0.hf3biwk.mongodb.net/Interviews?retryWrites=true&w=majority",{useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true}).then(()=>{
console.log(`successfully connected`);
}).catch((e)=>{
console.log(`not connected`);
})