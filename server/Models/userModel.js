const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User schema
const userSchema = new mongoose.Schema ({
    fullname: {
        firstname: {
            type:String,
            required:true,
            minlenght:[3,'First name must be atleast of 3 characters']
        },
        lastname: {
            type:String,
            required:true,
            minlenght:[3, 'Last name must be  atleast of 3 characters']

        },
    },
        email:{
            type:string,
            minlenght:[5 ,'Email must contain atleast 5 characters'],
            required:true,
            unique:true,
        },
       password:{
        type:string,
        required:true,
        select:false,

       },

       socketId:{
        type:string,
        default:null,
       },
    
})

// Methods for Auth

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id} ,proccess.env.JWT_SECRET)
    return token;

}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password , this.password);

}

 userSchema.methods.hashPassword = async function (password){
    return await bcrypt.hash(password , 10);

 }

 const userModel = mongoose.model('model' , userSchema)

 module.exports = userModel ;