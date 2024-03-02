import User from '../model/user.models.js'
import asyncHandler from '../utils/asyncHandler.js'
import ApiResponse from '../utils/ApiResponse.js'
const creaUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body

    const user=await User.create({
        name,
        email,
        password
    })

    res
    .status(201)
    .json(
        new ApiResponse(
            201,
            {
                user
            }
        )
    )
    
})