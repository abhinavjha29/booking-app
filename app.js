const path = require('path') ;
const express = require('express') ;
const bodyparser = require('body-parser') ;
const sequelize = require('./backend/util/database')
const app = express() ;
const cors = require('cors') ;
const data = require('./backend/controller/data');
//console.log('working');
app.use(bodyparser.json()) ;

app.use(cors({
    origin: '*'
}));

app.post('/save' , data.postdata) ;
 app.get('/get' , data.getdata) ;
 app.delete('/delete/:id' , data.deletedata) ;
sequelize.sync()
.then(result=>{
    app.listen(2600)
    console.log("success")
})
.catch(err=>console.log(err))
