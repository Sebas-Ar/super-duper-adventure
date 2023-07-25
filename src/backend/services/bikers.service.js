import { createBikerDB, deleteBikerDB, getAllBikersDB, updateBikerDB } from "../db/bikers.db"


export const getAllBikersService = async () => {

    // logica de negocio
    try {
        const {error, bikerList} = await getAllBikersDB()
        if (error) throw new Error(error)

        return {
            bikerList,
        }
        
    } catch (error) {

        return {
            error: error.message
        }
    }

}

export const createBikerService = async (biker) => {

    try {
       const { error, newBiker } = await createBikerDB(biker)
       if (error) throw new Error(error)

       return {
           newBiker
       }

    } catch (error) {
        return {
            error: error.message
        }
    }
}

export const updateBikerService = async (biker, idBiker) => {
    try {

        const { error } = await updateBikerDB(biker, idBiker)
        if (error) throw new Error(error)

        return {}
        
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export const deleteBikerService = async (idBiker) => {
    try {
        const { error } = await deleteBikerDB(idBiker)
        if (error) throw new Error(error)

        return {}
    } catch (error) {
        return {
            error: error.message
        }
    }
}