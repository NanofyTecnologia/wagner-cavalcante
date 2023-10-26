import { User } from '@prisma/client'

type UserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

type SignInData = Omit<UserData, 'name'>

export { UserData, SignInData }
