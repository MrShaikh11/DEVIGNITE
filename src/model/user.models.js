import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Car"
    }
}, {timestamps: true})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }

    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.method.isPasswordCorrect=async function(password){
    return await bycrypt.compare(password, this.password);
}

export default mongoose.model("User", userSchema);