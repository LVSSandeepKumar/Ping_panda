"use client"

import { ReactNode } from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import Heading from "./heading"
import { useRouter } from "next/navigation"

interface DashboardPageProps {
  title: String
  children?: ReactNode
  hideBackButton?: Boolean
  cta?: ReactNode
}

const DashboardPage = ({
  title,
  children,
  hideBackButton,
  cta,
}: DashboardPageProps) => {

  const router = useRouter()

  return (
    <section className="flex-1 w-full h-full flex flex-col">
      <div className="p-6 sm:p-8 flex justify-between border-b border-gray-200">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-6">
          {hideBackButton ? null : (
            <Button 
            onClick={() => router.push("/dashboard")}
            className="w-fit bg-white" variant="outline">
              <ArrowLeft className="size-4" />
            </Button>
          )}

          <Heading>{title}</Heading>
          </div>

          {cta ? <div>{cta}</div> : null}
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  )
}

export default DashboardPage
