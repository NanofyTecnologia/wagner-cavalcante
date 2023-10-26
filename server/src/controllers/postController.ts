import { Request, Response } from 'express'
import postServices from '@/services/postServices'
import sendError from '@/utils/sendError'

async function getPost(req: Request, res: Response) {
  try {
    const { postId } = req.params

    const post = await postServices.getPost(postId)

    res.status(200).send(post)
  } catch (error) {
    sendError(res, error)
  }
}

async function createPost(req: Request, res: Response) {
  try {
    const { body } = req
    const userId = res.locals.userId

    const post = await postServices.createPost({ ...body, authorId: userId })

    res.status(201).send(post)
  } catch (error) {
    sendError(res, error)
  }
}

async function updatePost(req: Request, res: Response) {
  try {
    const { body } = req
    const { postId } = req.params

    const post = await postServices.updatePost(postId, body)

    res.status(200).send(post)
  } catch (error) {
    sendError(res, error)
  }
}

async function deletePost(req: Request, res: Response) {
  try {
    const { postId } = req.params

    await postServices.deletePost(postId)

    res.sendStatus(204)
  } catch (error) {
    sendError(res, error)
  }
}

async function getAllPosts(req: Request, res: Response) {
  try {
    const posts = await postServices.getAllPosts()

    res.status(200).send(posts)
  } catch (error) {
    sendError(res, error)
  }
}

async function getPublishedPosts(req: Request, res: Response) {
  try {
    const posts = await postServices.getPublishedPosts()

    res.status(200).send(posts)
  } catch (error) {
    sendError(res, error)
  }
}

export default {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPublishedPosts,
}
