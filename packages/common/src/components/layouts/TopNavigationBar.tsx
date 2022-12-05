import { ArrowDown2, HambergerMenu, Location } from "iconsax-react"
import React from "react"
import { Bell, BellOff } from "react-feather"
import { Button, Caption, FootText, IconButton, UserInitials } from "../.."

const BusinessBranchComponent: React.FC<{}> = () => {
  return (
    <div
      title="Business Branch"
      className="cursor-pointer w-40 h-8 flex gap-1 justify-between items-center"
    >
      <Location
        variant="Bold"
        size={29}
        className="text-neutral400 drop-shadow-md"
      />

      <div className="h-full w-8/12 flex flex-col justify-center items-start">
        <Caption className="text-neutral600 w-full text-left whitespace-nowrap text-ellipsis overflow-hidden">
          Main Branch
        </Caption>

        <FootText className="text-neutral500 w-full">Lagos</FootText>
      </div>

      <ArrowDown2
        size={14}
        className="text-neutral70"
      />
    </div>
  )
}

const UserProfileComponent: React.FC<{}> = () => {
  return (
    <div className="cursor-pointer w-56 h-8 flex gap-3 justify-between items-center">
      <div
        title="User Profile"
        className="h-full w-40 flex gap-1 justify-between items-center"
      >
        <UserInitials
          firstname="Ebuka"
          lastname="Odini"
          size={32}
        />

        <div className="h-full w-8/12 flex flex-col justify-center items-start">
          <Caption className="text-neutral600 w-full text-left whitespace-nowrap text-ellipsis overflow-hidden">
            Ebuka Odini
          </Caption>

          <FootText className="text-neutral500 w-full">Admin</FootText>
        </div>

        <ArrowDown2
          size={14}
          className="text-neutral70"
        />
      </div>

      <div className="h-full w-[1px] border border-neutral400" />

      <Bell
        size={24}
        className="text-neutral500"
      />
    </div>
  )
}

export const TopNavigationBar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[4.1rem] border-b border-secondary400">
      <div className="h-full w-full mx-auto container px-5 flex justify-between items-center">
        <IconButton title="Toggle Menu">
          <HambergerMenu className="text-neutral700" />
        </IconButton>

        <div className="w-auto flex gap-12">
          <BusinessBranchComponent />

          <UserProfileComponent />
        </div>
      </div>
    </div>
  )
}
