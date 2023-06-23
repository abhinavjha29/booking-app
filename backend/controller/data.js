const User  = require('../model/info')

exports.postdata = async (req , res, next)=>{
    try {
        
        const name = req.body.name ;
        const email = req.body.email ;
         const data = User.create({
            name: name ,
            email : email
        }) ;

        res.status(201).json({newuserdetail : data}) ;

    }
    catch(err) {
        res.status(500).json({
                error : err
        })
    }

}

exports.getdata = async (req , res , next)=>{
        try{const users = await User.findAll() ;
                console.log(users) ;
                res.status(200).json({allusers: users}) ;

        }
        catch(err) {
                res.status(500).json({
                        error:err
                })
        }

//console.log(users) ;

}

exports.deletedata = async (req , res , next)=>{
       // console.log(req) ;
        const data_id= req.params.id ;
       // console.log(req)
        User.findByPk(data_id)
        
        .then(result=>{
                console.log(data_id)
         return result.destroy()
        }) 
        //.then(res.status(200))
        .catch(err=>console.log(err))

}
   
