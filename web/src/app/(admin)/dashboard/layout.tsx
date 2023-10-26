import { ReactNode } from 'react'

import DashboardNavigation from '../components/DashboardNavigation'

export default function LayoutDashboard({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col">
        <DashboardNavigation>
          <div className="flex-1 p-4">{children}</div>
        </DashboardNavigation>
      </div>
    </>
  )
}
