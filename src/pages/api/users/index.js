// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createUser, getAllUsers } from '@/backend/handler/users.handler'

// Rest Full API
const router = (req, res) => {
    switch (req.method) {
        case 'GET': // traiga todos lo usuario

            return getAllUsers(req, res)

        case 'POST': // solo para crear elementos dentro de los servicios

            return createUser(req, res)

        default:
            return res.status(405).json({
                message: 'method not supported'
            })
    }
}

export default router
