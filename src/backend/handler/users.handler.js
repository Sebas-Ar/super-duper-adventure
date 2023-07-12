import { createUserServices, getAllUsersServices } from "../services/users.services"


export const getAllUsers = (req, res) => {
    
    const {users, errorService} = getAllUsersServices(req.body)
    if (errorService) throw new Error(errorService)

    return res.status(200).json({
        data: {
            users
        },
        message: 'elemento encontrado satisfactoriamente dentro de la base de datos'
    })
}

export const createUser = (req, res) => {
    try {

        errorValidation = validateUserData(req.body)
        if (errorValidation) throw new Error(errorValidation)
        
        errorService = createUserServices(req.body)
        if (errorService) throw new Error(errorService)
    
        return res.status(200).json({
            data: {
                user: {
                    id: 12344354
                }
            },
            message: 'elemento creado satisfactoriamente dentro de la base de datos'
        })

    } catch (error) {

        return res.status(402).json({
            message: 'datos insuficientes'
        })
        
    }

}