import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo3.svg"
import { StatusBar } from "./NotificationBar"

const Header: React.FC<{}> = () => {
  return (
    <div className="flex justify-center items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="lg:w-40 w-32"
        />
      </Link>
    </div>
  )
}

const Footer: React.FC<{}> = () => {
  return (
    <div className="text-center text-primary50">
      &copy;&nbsp;Onyinye&nbsp;Technologies&nbsp;{new Date().getFullYear()}
    </div>
  )
}

type props = {
  children: JSX.Element | JSX.Element[]
}

export const OnboardingWrapper: React.FC<props> = ({ children }) => {
  return (
    <div className="h-screen bg-blend-multiply bg-business-store bg-no-repeat bg-center bg-cover bg-primary flex justify-center items-center">
      <div className="h-full w-full py-10 flex flex-col justify-between items-center">
        <StatusBar />
        <Header />

        <div className="h-full w-full">{children}</div>

        <Footer />
      </div>
    </div>
  )
}
