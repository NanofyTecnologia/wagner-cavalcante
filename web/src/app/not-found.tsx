import { TrafficCone } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <TrafficCone className="h-auto w-12" />
        <h1 className="mt-2 text-lg font-semibold">
          Esta página está construção.
        </h1>
        <p className="mt-1 text-sm">Volte em breve.</p>
      </div>
    </>
  )
}
