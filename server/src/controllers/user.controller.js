import { User} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"


// R=Read
const Read = async (req,res)=>{
  const user = await User.find({})
   /* 
   .then(user=>res.json(user))
    .catch(err=>res.json(err))
    */

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "all User Fetched successfully")
    )

    /*
    User.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
    */
}

export { 
    Read
}