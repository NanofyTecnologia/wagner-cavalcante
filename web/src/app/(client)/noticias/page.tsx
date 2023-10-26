'use client'

import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

type News = {
  id: string
  title: string
  content: string
  coverURL: string
  authorId: string
  createdAt: string
  updatedAt: string
  published: boolean
}

export default function News() {
  const [news, setNews] = useState<News[]>([])

  const loadingNews = async () => {
    try {
      const response = await api.get('/post/published')

      setNews(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingNews()
  }, [])

  return (
    <section className="h-screen">
      <Container>
        <div className="grid w-full grid-cols-1 gap-6 py-8 sm:grid-cols-2 md:grid-cols-3">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/noticias/${item.id}`}
              className="block rounded-lg border border-neutral-200 p-4 shadow transition-all hover:scale-105"
            >
              <Image
                width={500}
                height={350}
                src={item.coverURL}
                alt=""
                className="h-52 rounded-lg"
              />
              <h1 className="my-2 font-bold">{item.title}</h1>
              <div
                className="text-sm text-neutral-600"
                dangerouslySetInnerHTML={{
                  __html:
                    item.content.split(' ').slice(0, 20).join(' ') + '...',
                }}
              ></div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
