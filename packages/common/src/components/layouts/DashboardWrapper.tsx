import React from "react"
import { NotificationBar } from "../.."
import { SideNavigationBar } from "./SideNavigationBar"
import { TopNavigationBar } from "./TopNavigationBar"

type props = {
  children: JSX.Element | JSX.Element[]
}

export const DashboardWrapper: React.FC<props> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <NotificationBar />

      <div className="bg-white h-full w-full">
        <div className="h-full w-full flex justify-start items-center">
          <SideNavigationBar />

          <div className="h-full w-full overflow-y-auto">
            <TopNavigationBar />

            <div className="h-[calc(100%-4.1rem)] w-full mx-auto container flex justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
