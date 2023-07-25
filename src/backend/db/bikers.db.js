import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

// configurando el acceso a la db
const dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10', region: 'us-east-1'})

export const getAllBikersDB = async () => {
    // llamando a la db

    try {

        const { Items } = await dynamoDB.query({
            TableName: 'hello-world-roda-1',
            KeyConditionExpression: 'entity = :entity',
            ExpressionAttributeValues: {
                ':entity': { 'S': 'biker' }
            },
            ProjectionExpression: 'id'
        }).promise()
    
    
        return {
            bikerList: Items,
            error: null
        }
        
    } catch (error) {
        return {
            bikerList: null,
            error: error.message
        }
    }
    
}

export const createBikerDB = async (biker) => {

    try {
        const newBiker = await dynamoDB.putItem({
            TableName: 'hello-world-roda-1',
            Item: {
                entity: { 'S': 'biker' },
                id: { 'S': uuidv4() },
                name: { 'S': biker.name },
                lastname: { 'S': biker.lastname },
                email: { 'S': biker.email }
            }

        }).promise()

        return {
            newBiker
        }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export const updateBikerDB = async (biker, idBiker) => {

    try {
        await dynamoDB.updateItem({
            TableName: 'hello-world-roda-1',
            Key: {
                entity: { 'S': 'biker'},
                id: { 'S': idBiker }
            },
            UpdateExpression: 'set #name = :something',
            ExpressionAttributeNames: {
                '#name': 'name'
            },
            ExpressionAttributeValues: {
                ':something': { 'S': biker.name }
            }
        }).promise()

        return {}
        
    } catch (error) {
        return {
            error: error.message
        }
    }
}


export const deleteBikerDB = async (idBiker) => {
    try {
        await dynamoDB.deleteItem({
            TableName: 'hello-world-roda-1',
            Key: {
                entity: { 'S': 'biker'},
                id: { 'S': idBiker }
            }
        }).promise()

        return {}
        
    } catch (error) {
        return {
            error: error.message
        }
    }
}