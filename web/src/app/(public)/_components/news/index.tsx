'use client'

import Image from 'next/image'
import Link from 'next/link'

import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'

type News = {
  id: string
  title: string
  content: string
  coverURL: string
  createdAt: string
}

const News = () => {
  const [news, setNews] = useState<News[]>([])

  const onLoading = async () => {
    try {
      const response = await api.get('/post/published')

      setNews(response.data)
    } catch (error) {}
  }

  useEffect(() => {
    onLoading()
  }, [])

  return (
    <>
      {news.length === 0 ? (
        <></>
      ) : (
        <section className="bg-[#F8F9FA] py-12">
          <div className="mx-auto w-full space-y-4 px-5 md:max-w-5xl md:px-0">
            <div className="mb-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold">Nosso Blog</h2>
              <div className="h-1 w-12 bg-[#C89D66]" />
            </div>

            <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/noticias/${item.id}`}
                  className="flex flex-col overflow-hidden rounded-md bg-neutral-100 shadow transition-transform hover:scale-105"
                >
                  <div className="h-56">
                    <Image
                      width={300}
                      height={300}
                      alt={item.title}
                      src={
                        'https://gtreqzctrqppqncegkpw.supabase.co/storage/v1/object/public/monte_cavalcante_bucket/' +
                        item.coverURL
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-4 p-4">
                    <h2 className="text-xl">{item.title}</h2>

                    <div
                      className="text-justify"
                      dangerouslySetInnerHTML={{
                        __html:
                          item.content.split(' ').slice(0, 20).join(' ') +
                          '...',
                      }}
                    ></div>
                  </div>

                  <h5 className="p-4 text-sm">
                    Publicado {dayjs(item.createdAt).format('DD/MM/YYYY HH:mm')}
                  </h5>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export { News }
