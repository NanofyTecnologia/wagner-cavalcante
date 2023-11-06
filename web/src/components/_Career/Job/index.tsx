'use client'

import React, { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import Container from '@/components/Container'
import Accordion from '@/components/Accordion'
import { BsBuildingFill, BsFillPinMapFill } from 'react-icons/bs'

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
}

export default function Job() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 'a7a56f38-29c5-4458-b733-4f20323318ab',
      title: 'Desenvolvedor Frontend II',
      description:
        '<p>Buscamos um desenvolvedor Full Stack com conhecimentos em React, Next.js, Tailwind CSS, Docker, Node.js e PostgreSQL para integrar nossa equipe. Sua fun&ccedil;&atilde;o ser&aacute; criar solu&ccedil;&otilde;es inovadoras para nossos produtos e plataformas.</p>',
      salary: 4200,
      company: 'Nanofy Tecnologia',
      location: 'São Carlos',
      link: '',
      published: true,
      createdAt: '2023-10-27T20:51:19.508Z',
      updatedAt: '2023-10-28T16:35:46.699Z',
    },
    {
      id: 'f5bb6cc7-bc50-42f5-aba7-92b059d20ce7',
      title: 'Desenvolvedor Full Stack',
      description:
        '<p>&nbsp;&bull; Front-end: React, NextJs, JavaScript, HTML, CSS, TypeScript, SASS<br>&nbsp;&bull; Back-end: NodeJs, TypeScript, PHP, ExpressJS, Restful API, MongoDB, PostgreSQL, MySQL, SQL<br>&nbsp;&bull; Infraestrutura: Docker, AWS<br>&nbsp;&bull; Arquitetura: ORM, Prisma, Layered Architecture (Arquitetura em camadas), Micro-Frontend<br>&nbsp;&bull; Ferramentas: Trello, Asana, Figma, Notion, Slack, Discord, Git, Github</p>',
      salary: 5000,
      company: 'Nanofy Tecnologia',
      location: 'Remoto',
      link: '',
      published: true,
      createdAt: '2023-10-29T02:46:07.574Z',
      updatedAt: '2023-10-29T02:46:07.574Z',
    },
  ])

  // const loadingJobs = async () => {
  //   try {
  //     const response = await api.get('/job/published')

  //     setJobs(response.data)
  //   } catch (error) {}
  // }

  // useEffect(() => {
  //   loadingJobs()
  // }, [])

  return (
    <>
      <section className="mb-20 mt-20">
        <Container>
          <h2 className="text-center font-garamond text-2xl italic">
            Confira nossas vagas disponíveis:
          </h2>

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
            </Accordion>
          ))}
        </Container>
      </section>
    </>
  )
}
