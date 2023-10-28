'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BsUpload } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import useFilePreview from '@/hooks/useFilePreview'
import uploadFile from '@/utils/uploadFile'
import { api } from '@/lib/axios'

import Editor from '@/app/(admin)/components/Editor'
import Container from '@/app/(admin)/components/Container'

type FieldValues = {
  file?: FileList
  title: string
  content: string
  published: string
}

type EditPost = {
  params: {
    postId: string
  }
}

export default function UpdatePost({ params }: EditPost) {
  const router = useRouter()

  const { handleSubmit, register, watch, setValue } = useForm<FieldValues>()

  const [initialContent, setInitialContent] = useState<string>('')
  const [preview, setPreview] = useFilePreview(watch('file'))

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      let coverURL = preview
      const regexBlob = /^blob:/

      if (regexBlob.test(preview)) {
        coverURL = await uploadFile(data.file)
      }

      const newData = {
        ...data,
        coverURL,
        published: data.published === 'true',
      }

      delete newData.file

      await api.put(`/post/${params.postId}`, newData)

      toast.success('Postagem editada com sucesso!')

      router.push('/dashboard/listar-postagens')
    } catch (error) {
      console.log(error)
    }
  }

  const loadingSelectedPost = async () => {
    try {
      const response = await api.get(`/post/${params.postId}`)

      const { title, content, coverURL, published } = response.data

      setValue('title', title)
      setPreview(coverURL)
      setInitialContent(content)
      setValue('published', published.toString())
    } catch (error) {}
  }

  useEffect(() => {
    loadingSelectedPost()
  }, [])

  return (
    <>
      <Container>
        <h2 className="mb-6 text-xl font-bold">Criar postagem</h2>

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
              placeholder="Título do Conteúdo"
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="title" className="mb-2 block font-bold">
              Tornar postagem visível?
            </label>
            <select
              {...register('published')}
              className="w-full rounded-md border border-gray-300 bg-white p-2 outline-blue-500"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <div className="col-span-2">
            <Editor
              content={
                initialContent || '<p>Escreva o conteúdo de seu blog</p>'
              }
              setContent={setValue}
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="file"
              className="m-0.5 flex h-96 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white text-gray-500 hover:bg-gray-100"
            >
              {preview ? (
                <Image
                  width={1920}
                  height={1080}
                  src={preview}
                  className="h-full w-full rounded-md object-cover"
                  alt=""
                />
              ) : (
                <>
                  <BsUpload className="text-3xl" />
                  <span className="mt-2 block font-bold">
                    Clique para fazer upload de uma imagem
                  </span>
                </>
              )}
            </label>
            <input id="file" {...register('file')} type="file" hidden />
          </div>

          <div className="col-span-2 px-0.5 text-end">
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-14 py-3 font-bold text-white transition-colors hover:bg-blue-600"
            >
              Atualizar postagem
            </button>
          </div>
        </form>
      </Container>
    </>
  )
}
