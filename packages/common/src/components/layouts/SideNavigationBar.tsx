import React from "react"
import { logos } from "../.."

export const SideNavigationBar: React.FC<{}> = () => {
  return (
    <div className="lg:w-[20rem] h-full hidden md:flex justify-center border-r border-neutral400">
      <div className="h-28 w-full flex justify-center items-center">
        <img
          src={logos.OnyinyeLogo}
          alt="Onyinye"
          className="w-[8.3125rem] h-[2.25rem]"
        />
      </div>
    </div>
  )
}
