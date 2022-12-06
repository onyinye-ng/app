import React from "react"
import { logos, NotificationBar } from "../.."

type props = {
  children: JSX.Element | JSX.Element[]
}

export const CenteredContentWrapper: React.FC<props> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <NotificationBar />

      <div className="bg-white h-full w-full flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full">
          <div className="p-5 lg:pt-12 sm:px-2 mx-auto container">
            <img
              src={logos.OnyinyeLogo}
              alt="Onyinye"
              className="w-[8.3125rem] h-[2.25rem]"
            />
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}
