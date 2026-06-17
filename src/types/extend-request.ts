import { User } from  '@prisma/client'
import { Request } from 'express'

type UserWithoutPassword = Omit<User, 'password'>

export type ExtendRequest = Request & {
    user?: UserWithoutPassword;
}