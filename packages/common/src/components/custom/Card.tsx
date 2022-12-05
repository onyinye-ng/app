import { CardInterface } from "../../"
import { Star, Trash } from "iconsax-react"
import { Zap } from "react-feather"

export const Card: React.FC<{ card: CardInterface; onClick?: Function; showStatus?: boolean }> = ({
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
        {card.orderedFromStore === true && (
          <Star className="absolute top-0 left-0 m-5 w-5 animate-ping text-secondary" />
        )}
        {/* <img
          src={OnyinyeLogo}
          alt="Logo"
          className="lg:w-40 w-32"
        /> */}
        {showStatus === true && (
          <div className="absolute bottom-0 right-0 m-3">
            <span>
              {card?.status === "inactive" && <Star className="w-4 text-neutral500" />}
              {card?.status === "active" && <Star className="w-4 text-secondary" />}
              {card?.status === "used" && <Zap className="w-4 text-success500" />}
              {card?.status === "destroyed" && <Trash className="w-4 text-error50" />}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
