'use client'

import Link from 'next/link'

import { useState } from 'react'
import { BiSolidEditAlt, BiSolidTrashAlt, BiX } from 'react-icons/bi'
import { toast } from 'react-toastify'

import { api } from '@/lib/axios'

type Post = {
  id: string
  title: string
  content: string
  coverURL: string
  updatedAt: string
  createdAt: string
  published: boolean
}

type ActionsProps = {
  post: Post
  onLoadingPost: () => void
}

export default function Actions({ post, onLoadingPost }: ActionsProps) {
  const [deletePost, setDeletePost] = useState<Post | null>(null)

  const handleDeletePost = async (postId: string) => {
    try {
      await api.delete(`/post/${postId}`)

      toast.success('Postagem excluída com sucesso!')
      onLoadingPost()
    } catch (error) {
      toast.error('Erro ao excluir postagem!')
    }
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href={`/dashboard/editar-postagem/${post.id}`}
          className="block rounded-md bg-yellow-500 p-2 transition-colors hover:bg-yellow-600"
        >
          <BiSolidEditAlt className="text-xl text-white" />
        </Link>

        <button
          onClick={() => setDeletePost(post)}
          className="rounded-md bg-red-500 p-2 transition-colors hover:bg-red-600"
        >
          <BiSolidTrashAlt className="text-xl text-white" />
        </button>
      </div>

      {deletePost && (
        <div className="fixed inset-0 flex h-full w-full items-start justify-center bg-black/40 py-16">
          <div className="w-full max-w-2xl rounded-md bg-white">
            <div className="px-4 pt-4 text-end">
              <button
                onClick={() => setDeletePost(null)}
                className="rounded-md bg-gray-200 p-1 text-2xl transition-colors hover:bg-gray-300"
              >
                <BiX />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 p-4 text-neutral-500">
              <BiSolidTrashAlt className="text-6xl" />

              <h5 className="text-xl">
                Tem certeza de que deseja excluir essa postagem?
              </h5>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={() => setDeletePost(null)}
                  className="rounded-md border border-gray-300 p-2 hover:border-gray-500 hover:text-gray-500"
                >
                  Cancelar
                </button>

                <button
                  onClick={() => handleDeletePost(post.id)}
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
    </>
  )
}
