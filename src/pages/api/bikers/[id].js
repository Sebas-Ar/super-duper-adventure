import { deleteBiker, updateBiker } from "@/backend/handler/bikers.handler";

const router = (req, res) => {

    switch (req.method) {
        case 'PATCH':
            return updateBiker(req, res)
        
        case 'DELETE':
            return deleteBiker(req, res)
        default:

            res.status(405).json({
                error: 'method not allowed'
            })
    }
    
}

export default router
