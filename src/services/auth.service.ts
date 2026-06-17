import { User } from '@prisma/client';
import { createJWT } from '../libs/jwt'
import { TokenPayload } from '../types/token-payload'
import { getUserById } from './user.service'

export const createToken = (user: User) => {
    return createJWT({ id: user.id})
}

export const verifyRequest = async (req: Request) => {
    const { authorization } = req.headers
    if (authorization) {
        const token = authorization.split('Bearer ')[1]
    }
}