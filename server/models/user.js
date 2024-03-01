const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstname:{type:String, required: true},
    lastname:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
});

// web token 
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresln:"7d"});
    return token;
}

// creating user model 

const User=mongoose.model('USER',userSchema);

// validating 

const validate=(data)=>{
    const schema=Joi.object({
        firstname:Joi.string().required().label("First Name"),
        lastname:Joi.string().required().label("Last Name"),
        email:Joi.string().email().required().label("Email"),
        pawword:passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}


module.exports={User, validate};