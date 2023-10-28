import { Request, Response } from 'express'
import jobServices from '@/services/jobServices'
import sendError from '@/utils/sendError'

async function getJob(req: Request, res: Response) {
  try {
    const { jobId } = req.params

    const job = await jobServices.getJob(jobId)

    res.status(200).send(job)
  } catch (error) {
    sendError(res, error)
  }
}

async function getJobs(req: Request, res: Response) {
  try {
    const jobs = await jobServices.getJobs()

    res.status(200).send(jobs)
  } catch (error) {
    sendError(res, error)
  }
}

async function createJob(req: Request, res: Response) {
  try {
    const { body } = req

    const post = await jobServices.createJob(body)

    res.status(201).send(post)
  } catch (error) {
    sendError(res, error)
  }
}

async function updateJob(req: Request, res: Response) {
  try {
    const { body } = req
    const { jobId } = req.params

    const post = await jobServices.updateJob(jobId, body)

    res.status(200).send(post)
  } catch (error) {
    sendError(res, error)
  }
}

async function deleteJob(req: Request, res: Response) {
  try {
    const { jobId } = req.params

    await jobServices.deleteJob(jobId)

    res.sendStatus(204)
  } catch (error) {
    sendError(res, error)
  }
}

export default {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
}
