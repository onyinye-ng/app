import React from "react"
import { logos, NotificationBar } from "../.."

type props = {
  children: JSX.Element | JSX.Element[]
  displayImage: string
}

export const TwoSidedContentWrapper: React.FC<props> = ({ children, displayImage }) => {
  return (
    <div className="h-screen w-screen">
      <NotificationBar />

      <div className="bg-white h-full w-full">
        <div className="absolute top-0 left-0 w-full">
          <div className="p-5 lg:pt-12 sm:px-2 mx-auto container">
            <img
              src={logos.OnyinyeLogo}
              alt="Onyinye"
              className="w-[8.3125rem] h-[2.25rem]"
            />
          </div>
        </div>

        <div className="h-full w-full mx-auto container flex justify-between items-center">
          <div className="lg:w-1/2 w-full h-full hidden lg:flex justify-center">
            <img
              src={displayImage}
              alt="Onyinye"
              className="object-contain"
            />
          </div>
          <div className="lg:w-1/2 h-full w-full flex justify-center items-center overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
