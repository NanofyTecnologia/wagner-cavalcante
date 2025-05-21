'use client'

import Link from 'next/link'

import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { BiX } from 'react-icons/bi'

import Container from '@/app/(admin)/components/Container'
import { api } from '@/lib/axios'

import Actions from './components/Actions'

type Job = {
  id: string
  link: string
  title: string
  company: string
  location: string
  updatedAt: string
  createdAt: string
  description: string
  salary?: number
  published: boolean
  Applicant: {
    id: string
    name: string
    phone: string
    resume: string
    email: string
    createdAt: Date
  }[]
}

export default function ListVacancies() {
  const [job, setJob] = useState<Job | null>(null)
  const [jobs, setJobs] = useState<Job[]>([])

  const loadingJobs = async () => {
    try {
      const response = await api.get('/job')

      setJobs(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingJobs()
  }, [])

  return (
    <>
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Listar vagas</h2>

          <Link
            href="criar-emprego"
            className="rounded-md bg-blue-500 p-2 text-white uppercase"
          >
            Criar vaga
          </Link>
        </div>

        <table className="relative w-full overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-neutral-200">
              <th scope="col" className="p-2 text-start">
                Publicado
              </th>
              <th scope="col" className="p-2 text-start">
                Cargo
              </th>
              <th scope="col" className="p-2 text-start">
                Empresa
              </th>
              <th scope="col" className="p-2 text-start">
                Localização
              </th>
              <th scope="col" className="p-2 text-start">
                Salário
              </th>
              <th scope="col" className="p-2 text-start">
                Criado em
              </th>
              <th scope="col" className="p-2 text-start">
                Atualizado em
              </th>
              <th scope="col" className="p-2 text-start">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="border-b border-neutral-300 odd:bg-neutral-50"
              >
                <th scope="row" className="px-2 text-center">
                  <span
                    className={`mx-auto block rounded-md py-0.5 text-center text-white ${
                      job.published ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {job.published ? 'Sim' : 'Não'}
                  </span>
                </th>
                <td className="p-2">{job.title}</td>
                <td className="p-2">{job.company}</td>
                <td className="p-2">{job.location}</td>
                <td className="p-2">{job.salary}</td>
                <td className="p-2">
                  {dayjs(job.createdAt).format('DD/MM/YYYY - HH:mm')}
                </td>
                <td className="p-2">
                  {dayjs(job.updatedAt).format('DD/MM/YYYY - HH:mm')}
                </td>

                <Actions job={job} onLoadingJob={loadingJobs} />
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      {job !== null && (
        <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40">
          <div className="w-full max-w-5xl rounded-md bg-white">
            <div className="flex items-center justify-between px-4 pt-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>

              <button
                onClick={() => setJob(null)}
                className="rounded-md bg-gray-200 p-1 text-2xl transition-colors hover:bg-gray-300"
              >
                <BiX />
              </button>
            </div>
            <div className="p-4">
              <div
                className="tinymce"
                dangerouslySetInnerHTML={{ __html: job.description }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
