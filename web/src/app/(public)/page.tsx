import { Activities } from './_components/activities'
import { Contact } from './_components/contact'
import { Feedback } from './_components/feedback'
import { Introduction } from './_components/introduction'
import { News } from './_components/news'
import { Partner } from './_components/partner'

export default function Home() {
  return (
    <>
      <Introduction />
      <Activities />
      <Partner />
      <Feedback />
      <News />
      <Contact />
    </>
  )
}
