import React from "react"
import { Button, DashboardWrapper } from "@onyinye-app/common"

export const Welcome: React.FC<{}> = () => {
  return (
    <DashboardWrapper>
      <div className="w-[413px] flex flex-col justify-center items-center">
        <p>Welcome to the Dashboard app.</p>
        <p>{process.env.REACT_APP_DASHBOARD_URL}</p>
        <Button
          className="bg-primary text-grey-light mt-5 w-52"
          title="continue"
        >
          Continue
        </Button>
      </div>
    </DashboardWrapper>
  )
}
