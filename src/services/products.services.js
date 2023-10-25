const db = require('../data/models');

const getAllProducts = async (limit, offset) => {
    try {
        
       const {count, rows} = await db.Products.findAndCountAll({
       attributes : {
       exclude : ['createdAt','updatedAt','categoryId']
        
       },
        limit,
        offset,
        include : [
            {
                association : 'category',
                attributes : ['name']
            }
        
        
        ]
       
       })
    return {
        count,
        rows
    }
    }catch (error){
        console.log(error);
        throw {
          status: error.status || 500,
          message: error.message || "ERROR en el servicio",
        };
    }
}

const getProductsById = async (id) => {
    try{
        const product = await db.Product.findByPk(id,{
            attributes : {
                exclude : ['createdAt','updatedAt','categoryId']
                 
                },
                 limit,
                 offset,
                 include : [
                     {
                         association : 'category',
                         attributes : ['name']
                     }
                 ]
        })
        
        if(!id || undefined){
        
            throw {
                status : 400,
                message : 'ID inexistente o corrupto'
            }
        
        }
        
        
    }catch (error) {
        console.log(error);
        throw {
          status: error.status || 500,
          message: error.message || "ERROR en el servicio de productos",
        };
    }
}

const createProduct = async (data) => {

    try {
    
       const newProduct = await db.Product-create(data)
       
       return newProduct
    
    }catch (error) {
        throw {
            status: error.status || 500,
            message: error.message || "ERROR en el servicio de productos",
          };
    }

}

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct

}