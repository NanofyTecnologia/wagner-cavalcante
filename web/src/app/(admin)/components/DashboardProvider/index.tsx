import { ReactNode } from 'react'
import DashboardNavigation from '../DashboardNavigation'

export default function DashboardProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <DashboardNavigation>{children}</DashboardNavigation>
    </>
  )
}
