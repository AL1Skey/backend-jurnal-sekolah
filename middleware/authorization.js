const {User} = require('../models/index');

class Authorization {
    static async admin(req,res,next){
        try{
            if(req.user.role === 'admin'){
                next()
            }
            else{
                throw {name: 'User is not admin'}
            }
        }
        catch(err){
            next(err)
        }
    }
    static async teacher(req,res,next){
        try{
            if(req.user.role === 'teacher'){
                next()
            }
            else{
                throw {name: 'User is not teacher'}
            }
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = Authorization