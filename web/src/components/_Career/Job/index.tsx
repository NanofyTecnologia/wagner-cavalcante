'use client'

import React, { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import Container from '@/components/Container'
import Accordion from '@/components/Accordion'
import { BsBuildingFill, BsFillPinMapFill, BsMapFill } from 'react-icons/bs'

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
  const [jobs, setJobs] = useState<Job[]>([])

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
              <div dangerouslySetInnerHTML={{ __html: job.description }} />
            </Accordion>
          ))}
        </Container>
      </section>
    </>
  )
}
