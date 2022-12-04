import { Card as CardType } from "../../stores"
import logo from "../../assets/logo3.svg"
import { SparklesIcon, BoltIcon, TrashIcon } from "@heroicons/react/24/solid"

export const Card: React.FC<{ card: CardType; onClick?: Function; showStatus?: boolean }> = ({
  card,
  onClick,
  showStatus = false,
}) => {
  return (
    <div
      onClick={() => onClick!()}
      className="cursor-pointer py-1 px-1 h-[176px] min-w-[312px] w-full md:w-1/2"
    >
      <div className="bg-primary hover:bg-primary600 w-full h-full rounded-lg relative shadow-sm flex justify-center items-center">
        <span className="absolute top-0 right-0 mt-2 mr-3 font-medium text-neutral100">
          &#8358;{card?.amount}
        </span>
        {card.new === true && (
          <SparklesIcon className="absolute top-0 left-0 m-5 w-5 animate-ping text-secondary" />
        )}
        <img
          src={logo}
          alt="Logo"
          className="lg:w-40 w-32"
        />
        {showStatus === true && (
          <div className="absolute bottom-0 right-0 m-3">
            <span>
              {card?.status === "inactive" && <SparklesIcon className="w-4 text-neutral500" />}
              {card?.status === "active" && <SparklesIcon className="w-4 text-secondary" />}
              {card?.status === "used" && <BoltIcon className="w-4 text-success500" />}
              {card?.status === "destroyed" && <TrashIcon className="w-4 text-error50" />}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
