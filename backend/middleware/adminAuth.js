// import jwt from 'jsonwebtoken'

// const adminAuth = async (req,res,next) => {
//     try {
//         const { token } = req.headers
//         if (!token) {
//             return res.json({success:false,message:"Not Authoried Login Again"})
//         }
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
//             return res.json({success:false,message:"Not Authoried Login Again"})
//         }
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

// export default adminAuth

import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // FIX: Properly check the payload properties
        if (token_decode.role !== 'admin' || token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Invalid token"})
    }
}

export default adminAuth