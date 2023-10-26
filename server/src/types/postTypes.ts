import { Post } from '@prisma/client'

type PostData = Omit<Post, 'id' | 'published' | 'createdAt' | 'updatedAt'>

export { PostData }
