import React from "react"
import { Button } from "@onyinye-app/common"

export const Welcome: React.FC<{}> = () => {
  return (
    <>
      <div className="bg-primary-light text-grey-dark h-screen w-screen flex flex-col items-center justify-center">
        <p>Welcome to the Website app.</p>
        <p>{process.env.REACT_APP_WEBSITE_URL}</p>
        <Button
          className="bg-primary text-grey-light mt-5"
          title="continue"
        >
          Continue
        </Button>
      </div>
    </>
  )
}
