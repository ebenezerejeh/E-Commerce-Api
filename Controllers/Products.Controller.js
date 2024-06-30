
module.exports = {
    getAllProducts: (req, res, next)=>{
        
        res.send("Getting  list of all products")
    
    },
    getSingleProduct: (req, res, next)=>{
        
        res.send("Getting a single product")
    
    },
    updateSingleProduct: (req, res, next)=>{
        res.send("updating a single product")
    
    
    },
    deleteSingleProduct: (req, res, next)=>{
        res.send("deleting a single product")
    
    }
}