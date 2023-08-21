


const loginController = async (req, res) => {
    if (req.body.email == "marwa@gmail.com" && req.body.password == "123") {
        return res.send({ message: "login success" });
    } else {
        return res.status(401).send({message:"Error not authorized"})
    }
    
} 

module.exports = {loginController}