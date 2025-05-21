'use client'

import { useRouter } from 'next/navigation'

import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Container from '@/app/(admin)/components/Container'
import Editor from '@/app/(admin)/components/Editor'
import { api } from '@/lib/axios'

type FieldValues = {
  link: string
  title: string
  company: string
  location: string
  updatedAt: string
  createdAt: string
  content?: string
  salary?: number
  published: boolean
}

export default function CreateJob() {
  const router = useRouter()

  const { handleSubmit, register, setValue } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const newData = {
        ...data,
        description: data.content,
        salary: Number(data.salary),
        published: Boolean(data.published),
      }

      delete newData.content

      toast.success('Emprego criado com sucesso!')

      await api.post('/job', newData)

      router.push('/dashboard/listar-empregos')
    } catch (error) {
      console.log(error)
    }
  }

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
            <Editor setContent={setValue} />
          </div>

          <div className="col-span-2 px-0.5 text-end">
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-14 py-3 font-bold text-white transition-colors hover:bg-blue-600"
            >
              Criar emprego
            </button>
          </div>
        </form>
      </Container>
    </>
  )
}
