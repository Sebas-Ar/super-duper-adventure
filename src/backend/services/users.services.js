import { getAllUsersDB } from "../db/users.db"


export const getAllUsersServices = () => {

    try {
        const {users, errorDB} = getAllUsersDB()
        if (errorDB) throw new Error(errorDB)

        console.log('desde la capa de servicio',users)
    
        // cada uno de los servicios
        return {users: users}

    } catch (error) {
        return {errorService: error.message}
        
    }
}

export const createUserServices = () => {




    return null
}