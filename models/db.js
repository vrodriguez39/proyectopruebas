
const mongoose = require("mongoose");
require ("dotenv").config();
const MONGO_URI = 'mongodb://localhost:27017/crudmongo'


module.exports =()=>{

    const connect = ()=> {
        mongoose.connect(
            MONGO_URI ,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            },
            (err)=>{
                if(err){
                    console.log('Error DB')
                }else{
                    console.log('Conexion Correcta')
                }
            }
        )
    }
    connect();
}
