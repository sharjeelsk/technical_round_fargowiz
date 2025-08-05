const isAdmin = (req,res,next)=>{
    const {isAdmin} = req.user.role // consider user is already authenticated
    if(isAdmin){
        next()
    }else{
        res.status(403).send('You are not authorized to access this route')
    }
}

module.exports = isAdmin;