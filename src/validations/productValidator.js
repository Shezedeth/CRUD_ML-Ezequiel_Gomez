const {check} = require('express-validator')



module.exports = [
    check('name')
        .notEmpty().withMessage('El campo es obligatorio')
        .notEmpty().withMessage('El campo es obligatorio')
        .notEmpty().withMessage('El campo es obligatorio')
    


]