'use client'

import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'
import { BiX } from 'react-icons/bi'
import { useState, useEffect } from 'react'

import { api } from '@/lib/axios'
import Container from '@/app/(admin)/components/Container'
import Actions from './components/Actions'

type Post = {
  id: string
  title: string
  content: string
  coverURL: string
  updatedAt: string
  createdAt: string
  published: boolean
}

export default function ListPost() {
  const [post, setPost] = useState<Post | null>(null)
  const [posts, setPosts] = useState<Post[]>([])

  const loadingPosts = async () => {
    try {
      const response = await api.get('/post')

      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingPosts()
  }, [])

  return (
    <>
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Listar postagens</h2>

          <Link
            href="criar-postagem"
            className="rounded-md bg-blue-500 p-2 uppercase text-white"
          >
            Criar postagem
          </Link>
        </div>

        <table className="relative w-full overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-neutral-200">
              <th scope="col" className="p-2 text-start">
                Publicado
              </th>
              <th scope="col" className="p-2 text-center">
                Imagem
              </th>
              <th scope="col" className="p-2 text-start">
                Titulo
              </th>
              <th scope="col" className="p-2 text-start">
                Conteúdo
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
            {posts.map((post, index) => (
              <tr
                key={index}
                className="border-b border-neutral-300 odd:bg-neutral-50"
              >
                <th scope="row" className="px-2 text-center">
                  <span
                    className={`mx-auto block rounded-md py-0.5 text-white ${
                      post.published ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {post.published ? 'Sim' : 'Não'}
                  </span>
                </th>
                <td className="p-2">
                  <Image
                    width={80}
                    height={30}
                    className="mx-auto max-h-12 rounded-md"
                    src={
                      'https://gtreqzctrqppqncegkpw.supabase.co/storage/v1/object/public/monte_cavalcante_bucket/' +
                      post.coverURL
                    }
                    alt=""
                  />
                </td>
                <td className="p-2">{post.title}</td>
                <td className="p-2">
                  <button
                    className="rounded-md bg-gray-400 px-2 py-1 text-sm font-bold uppercase text-white transition-colors hover:bg-gray-500"
                    onClick={() => setPost(post)}
                  >
                    Ver conteúdo
                  </button>
                </td>
                <td className="p-2">
                  {dayjs(post.createdAt).format('DD/MM/YYYY - HH:mm')}
                </td>
                <td className="p-2">
                  {dayjs(post.updatedAt).format('DD/MM/YYYY - HH:mm')}
                </td>
                <th>
                  <Actions post={post} onLoadingPost={loadingPosts} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      {post !== null && (
        <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40">
          <div className="w-full max-w-5xl rounded-md bg-white">
            <div className="flex items-center justify-between px-4 pt-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>

              <button
                onClick={() => setPost(null)}
                className="rounded-md bg-gray-200 p-1 text-2xl transition-colors hover:bg-gray-300"
              >
                <BiX />
              </button>
            </div>
            <div className="p-4">
              <div
                className="tinymce"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
