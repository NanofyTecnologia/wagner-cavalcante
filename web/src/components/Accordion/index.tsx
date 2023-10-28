import { ReactNode } from 'react'
import { AiFillCaretUp } from 'react-icons/ai'

import useToggle from '@/hooks/useToggle'
import { BsDashLg, BsPlusLg } from 'react-icons/bs'

type AccordionProps = {
  title: string
  children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [show, toggleShow] = useToggle()

  return (
    <>
      <div className="mt-6 rounded-md border">
        <button
          onClick={toggleShow}
          className="flex w-full items-center justify-between border-b bg-primary/10 px-4 py-3 hover:bg-primary/30 focus:outline-none"
        >
          {title}

          {show ? <BsDashLg /> : <BsPlusLg />}
        </button>

        {show && <div className="bg-white p-4">{children}</div>}
      </div>
    </>
  )
}
