
const handler = (req, res) => {
    switch (req.method) {
        case 'GET': // obtiene un usuario por id

            console.log(req.query)

            return res.status(200).json({
                message: 'hola'
            })
        case 'DELETE': // elimina un usuario por id

            return res.status(200).json({
                message: 'hola'
            })
        default:
            return res.status(405).json({
                message: 'method not allowed'
            })
    }
}

export default handler
