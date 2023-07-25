// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createBiker, getAllBikers } from "@/backend/handler/bikers.handler"


// Rest Full API
const router = (req, res) => {
    switch (req.method) {
        case 'GET':
            return getAllBikers(req, res)
        case 'POST':
            return createBiker(req, res)
        default:
            return res.status(405).json({
                message: 'method not supported'
            })
    }
}

export default router
