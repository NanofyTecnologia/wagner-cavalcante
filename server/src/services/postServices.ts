import postRepository from '@/repositories/postRepository'
import { PostData } from '@/types/postTypes'

async function getPost(postId: string) {
  return await postRepository.findById(postId)
}

async function createPost(data: PostData) {
  return await postRepository.create(data)
}

async function updatePost(postId: string, data: Partial<PostData>) {
  return await postRepository.update(postId, data)
}

async function deletePost(postId: string) {
  return await postRepository.destroy(postId)
}

async function getAllPosts() {
  return await postRepository.findAll()
}

async function getPublishedPosts() {
  return await postRepository.findAllPublished()
}

export default {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPublishedPosts,
}
