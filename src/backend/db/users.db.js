
export const getAllUsersDB = /* async */ () => {

    try {

        console.log('consulta a la base de datos')

        // await -> ejecuta la consulta a la base de datos
    
        const users = [
            {
                name: 'John Doe',
                age: 40
            },
            {
                name: 'sebas',
                age: 24
            }
        ]
    
        return {users: users}
        
    } catch (error) {
        return {errorDB: error.message}
    }
}