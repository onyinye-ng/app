import React from "react"
import { Button, images, TwoSidedContentWrapper } from "@onyinye-app/common"

export const Welcome: React.FC<{}> = () => {
  return (
    <TwoSidedContentWrapper displayImage={images.LoginImage}>
      <div className="w-[413px] flex flex-col justify-center items-center">
        <p>Welcome to the Accounts app.</p>
        <p>{process.env.REACT_APP_ACCOUNTS_URL}</p>
        <Button
          className="bg-primary text-grey-light mt-5 w-52"
          title="continue"
        >
          Continue
        </Button>
      </div>
    </TwoSidedContentWrapper>
  )
}
