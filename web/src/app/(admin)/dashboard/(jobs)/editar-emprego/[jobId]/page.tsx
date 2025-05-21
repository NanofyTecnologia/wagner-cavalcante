'use client'

import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Container from '@/app/(admin)/components/Container'
import Editor from '@/app/(admin)/components/Editor'
import { api } from '@/lib/axios'

type FieldValues = {
  id: string
  link: string
  title: string
  company: string
  location: string
  updatedAt: string
  createdAt: string
  content?: string
  salary?: number
  published: string
}

type UpdateJobProps = {
  params: {
    jobId: string
  }
}

export default function UpdateJob({ params }: UpdateJobProps) {
  const { jobId } = params
  const router = useRouter()

  const [initialContent, setInitialContent] = useState<string>('')
  const { handleSubmit, register, setValue } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const newData = {
        ...data,
        description: data.content,
        published: data.published === 'true',
        salary: Number(data.salary),
      }

      console.log(data.published === 'true')

      delete newData.content

      await api.put(`/job/${jobId}`, newData)

      toast.success('Emprego editado com sucesso!')

      router.push('/dashboard/listar-empregos')
    } catch (error) {
      console.log(error)
    }
  }

  const loadingSelectedJob = async () => {
    try {
      const response = await api.get(`/job/${jobId}`)

      setValue('title', response.data.title)
      setValue('company', response.data.company)
      setValue('location', response.data.location)
      setValue('salary', response.data.salary)
      setValue('link', response.data.link)
      setValue('published', response.data.published.toString())
      setInitialContent(response.data.description)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingSelectedJob()
  }, [])

  return (
    <>
      <Container>
        <h2 className="mb-6 text-xl font-bold">Criar vaga</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 rounded-md border border-gray-300 bg-gray-50 p-4"
        >
          <div className="col-span-1">
            <label htmlFor="title" className="mb-2 block font-bold">
              Título
            </label>

            <input
              id="title"
              type="text"
              {...register('title')}
              placeholder="Título da vaga"
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="published" className="mb-2 block font-bold">
              Tornar vaga visível?
            </label>
            <select
              id="published"
              {...register('published')}
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <div className="col-span-1">
            <label htmlFor="company" className="mb-2 block font-bold">
              Empresa
            </label>

            <input
              id="company"
              type="text"
              {...register('company')}
              placeholder="Empresa"
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="location" className="mb-2 block font-bold">
              Localização
            </label>

            <input
              id="location"
              type="text"
              {...register('location')}
              placeholder="Localização"
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="salary" className="mb-2 block font-bold">
              Salário
            </label>

            <input
              id="salary"
              type="text"
              {...register('salary')}
              placeholder="Salário"
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="link" className="mb-2 block font-bold">
              Link
            </label>

            <input
              id="link"
              type="text"
              {...register('link')}
              placeholder="Link da vaga (opcional)"
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            />
          </div>

          <div className="col-span-2">
            <Editor
              content={initialContent || '<p>Escreva a descrição de sua vaga'}
              setContent={setValue}
            />
          </div>

          <div className="col-span-2 px-0.5 text-end">
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-14 py-3 font-bold text-white transition-colors hover:bg-blue-600"
            >
              Atualizar emprego
            </button>
          </div>
        </form>
      </Container>
    </>
  )
}
