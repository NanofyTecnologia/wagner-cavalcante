'use client'

import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  BiSolidEditAlt,
  BiSolidTrashAlt,
  BiUserCheck,
  BiX,
} from 'react-icons/bi'

import { api } from '@/lib/axios'
import dayjs from 'dayjs'

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

type ActionsProps = {
  job: Job
  onLoadingJob: () => void
}

export default function Actions({ job, onLoadingJob }: ActionsProps) {
  const [showModal, setShowModal] = useState(false)
  const [deleteJob, setDeleteJob] = useState<Job | null>(null)

  const handleDeleteJob = async (jobId: string) => {
    try {
      await api.delete(`/job/${jobId}`)

      toast.success('Vaga excluída com sucesso!')
      onLoadingJob()
    } catch (error) {
      toast.error('Erro ao excluir vaga!')
    }
  }

  return (
    <>
      <td className="p-2">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="block rounded-md bg-blue-500 p-2 transition-colors hover:bg-blue-600"
          >
            <BiUserCheck className="text-xl text-white" />
          </button>

          <Link
            href={`/dashboard/editar-emprego/${job.id}`}
            className="block rounded-md bg-yellow-500 p-2 transition-colors hover:bg-yellow-600"
          >
            <BiSolidEditAlt className="text-xl text-white" />
          </Link>

          <button
            onClick={() => setDeleteJob(job)}
            className="rounded-md bg-red-500 p-2 transition-colors hover:bg-red-600"
          >
            <BiSolidTrashAlt className="text-xl text-white" />
          </button>
        </div>

        {deleteJob && (
          <div className="fixed inset-0 flex h-full w-full items-start justify-center bg-black/40 py-16">
            <div className="w-full max-w-2xl rounded-md bg-white">
              <div className="px-4 pt-4 text-end">
                <button
                  onClick={() => setDeleteJob(null)}
                  className="rounded-md bg-gray-200 p-1 text-2xl transition-colors hover:bg-gray-300"
                >
                  <BiX />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 p-4 text-neutral-500">
                <BiSolidTrashAlt className="text-6xl" />

                <h5 className="text-xl">
                  Tem certeza de que deseja excluir essa vaga?
                </h5>

                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => setDeleteJob(null)}
                    className="rounded-md border border-gray-300 p-2 hover:border-gray-500 hover:text-gray-500"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="flex items-center gap-2 rounded-md bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
                  >
                    <BiSolidTrashAlt />
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed left-0 top-0 z-50 h-full w-full overflow-hidden bg-black/60">
            <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center">
              <div className="relative w-full rounded bg-white p-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-2 top-2 rounded-full p-1 text-2xl hover:bg-neutral-100"
                >
                  <BiX />
                </button>
                <div className="mb-4  text-neutral-600">
                  <h1 className="text-lg">Candidatos</h1>

                  <table className="relative w-full overflow-hidden rounded-lg">
                    <thead>
                      <tr className="bg-neutral-200">
                        <th scope="col" className="p-2 text-start">
                          Nome
                        </th>
                        <th scope="col" className="p-2 text-start">
                          E-mail
                        </th>
                        <th scope="col" className="p-2 text-start">
                          Celular
                        </th>
                        <th scope="col" className="p-2 text-start">
                          Currículo
                        </th>
                        <th scope="col" className="p-2 text-start">
                          Enviado
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {job.Applicant.map((applicant, index) => (
                        <tr
                          key={index}
                          className="border-b border-neutral-300 odd:bg-neutral-50"
                        >
                          <td className="p-2">{applicant.name}</td>
                          <td className="p-2">{applicant.email}</td>
                          <td className="p-2">{applicant.phone}</td>
                          <td className="p-2">
                            <a
                              href={
                                'https://gtreqzctrqppqncegkpw.supabase.co/storage/v1/object/public/monte_cavalcante_bucket/' +
                                applicant.resume
                              }
                              download
                              target="_blank"
                            >
                              Ver currículo
                            </a>
                          </td>
                          <td className="p-2">
                            {dayjs(applicant.createdAt).format(
                              'DD/MM/YYYY - HH:mm',
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </td>
    </>
  )
}
