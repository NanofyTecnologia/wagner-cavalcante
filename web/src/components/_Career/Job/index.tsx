'use client'

import React, { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import Container from '@/components/Container'
import Accordion from '@/components/Accordion'
import { BsBuildingFill, BsFillPinMapFill } from 'react-icons/bs'
import { useModal } from '@/hooks/useModal'
import { BiX } from 'react-icons/bi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input'
import uploadFile from '@/utils/upload-file'
import { toast } from 'react-toastify'

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

type FormData = {
  name: string
  email: string
  phone: string
  file: FileList | undefined
}

export default function Job() {
  const {
    open: handleOpenModal,
    close: handleCloseModal,
    opened: modalIsOpened,
    data: job,
  } = useModal<Job>()

  const [jobs, setJobs] = useState<Job[]>([])

  const { register, handleSubmit } = useForm<FormData>()

  const registerWithMask = useHookFormMask(register)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const fileURL = await uploadFile(data.file)

      delete data.file

      await api.post('/applicant/' + job?.id, { ...data, resume: fileURL })

      toast.success('Currículo enviado com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  const loadingJobs = async () => {
    try {
      const response = await api.get('/job/published')

      setJobs(response.data)
    } catch (error) {}
  }

  useEffect(() => {
    loadingJobs()
  }, [])

  return (
    <>
      <section className="mb-20 mt-20">
        <Container>
          <h2 className="text-center text-2xl italic">
            Confira nossas vagas disponíveis:
          </h2>

          {jobs.length === 0 ? (
            <>
              <div className="mt-12 flex items-center justify-center">
                <p className="text-center">
                  No momento não temos vagas disponíveis.
                </p>
              </div>
            </>
          ) : (
            <>
              {jobs.map((job) => (
                <Accordion title={job.title} key={job.id}>
                  <div className="my-4 flex items-center justify-end gap-12">
                    <span className="flex items-center gap-2">
                      <BsBuildingFill /> {job.company}
                    </span>

                    <span className="flex items-center gap-2">
                      <BsFillPinMapFill /> {job.location}
                    </span>
                  </div>
                  <div
                    className="tinymce"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => handleOpenModal(job)}
                      className="cursor-pointer rounded-md bg-primary p-2 font-semibold text-white hover:bg-primary/80"
                    >
                      Enviar currículo
                    </button>
                  </div>
                </Accordion>
              ))}
            </>
          )}
        </Container>
      </section>

      {modalIsOpened && (
        <div className="fixed left-0 top-0 z-50 h-full w-full overflow-hidden bg-black/60">
          <div className="mx-auto flex h-full w-full max-w-md items-center justify-center">
            <div className="relative w-full rounded bg-white p-6">
              <button
                onClick={handleCloseModal}
                className="absolute right-2 top-2 rounded-full p-1 text-2xl hover:bg-neutral-100"
              >
                <BiX />
              </button>
              <div className="mb-4 flex items-center justify-between text-neutral-600">
                <h1 className="text-lg">
                  Preencha as informações abaixo para se inscrever na vaga
                </h1>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Nome"
                  {...register('name')}
                  className="block w-full rounded-md border border-neutral-300 bg-neutral-200 p-3 outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="E-mail"
                  {...register('email')}
                  className="block w-full rounded-md border border-neutral-300 bg-neutral-200 p-3 outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Celular"
                  {...registerWithMask('phone', ['(99) 99999-9999'], {
                    showMaskOnFocus: false,
                    showMaskOnHover: false,
                  })}
                  className="block w-full rounded-md border border-neutral-300 bg-neutral-200 p-3 outline-none focus:border-primary"
                />

                <input id="file" type="file" {...register('file')} hidden />

                <label
                  htmlFor="file"
                  className="block w-full rounded-md border border-neutral-300 bg-neutral-200 p-3 text-neutral-500 outline-none focus:border-primary"
                >
                  Anexar currículo
                </label>

                <input
                  type="submit"
                  value="Enviar"
                  className="w-full cursor-pointer rounded-md bg-blue-500 p-3 text-white hover:bg-blue-600"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
