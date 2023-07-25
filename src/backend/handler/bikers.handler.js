import { createBikerService, deleteBikerService, getAllBikersService, updateBikerService } from "../services/bikers.service"
import { validateBikerID, validateNewBiker } from "../validations/bikers.validation"


export const getAllBikers = async (req, res) => {

    // validaciones

    // logica de negocio
    try {
        const { error, bikerList } = await getAllBikersService()
        if (error) throw new Error(error)
        //resupuesta ok
        res.status(200).json({
            data: bikerList,
            message: 'all users'
        })
        
    } catch (error) {
        //resupuesta error
        res.status(404).json({
            error: error.message,
            message: 'error getting all users'
        })
    }
}

export const createBiker = async (req, res) => {

    console.log(req.body)
    try {
        // validaciones
        const validateBikerInfo = validateNewBiker(req.body)
        if (!validateBikerInfo) throw new Error('invalid biker info')
    
        // logica de negocio
        const { error, newBiker } = await createBikerService(req.body)
        if (error) throw new Error(error)
    
        // respuesta
    
        res.status(200).json({
            data: newBiker,
            message: 'biker created'
        })
        
    } catch (error) {
        res.status(422).json({
            error: error.message,
            message: 'biker not created'
        })
        
    }
}

export const updateBiker = async (req, res) => {

    // validacion de datos


    try { 
        // logica de negocio
        const { body, query } = req
        const { error } = await updateBikerService(body, query.id)
        if (error) throw new Error(error)
    
        //respuesta
        res.status(200).json({
            message: 'biker updated'
        })
    } catch (error) {
        res.status(500).json({
            message: 'error en la acutalización del ciclista',
            error: error.message
        })
        
    }

}

export const deleteBiker = async (req, res) => {

    // validacion de datos
    try {
        const { id } = req.query
        const validatedID = validateBikerID(id)
        if (!validatedID) throw new Error('invalid id')

        // logica de negocio
        const { error } = await deleteBikerService(id)
        if (error) throw new Error(error)

        res.status(200).json({
            message: 'biker deleted'
        })

        
    } catch (error) {
        
        res.status(500).json({
            message: 'error en la eliminación del ciclista',
            error: error.message
        })
    }


    // logica de negocio

    //respuesta

}

