import "./index.css"

// utils
export { formatDate, formatDateInput } from "./utils/formatDate"
export { formatTime } from "./utils/formatTime"
export { throttle } from "./utils/throttle"
export { clearInput } from "./utils/clearInput"
export { copyToClipboard } from "./utils/copyToClipboard"
export { dateToString } from "./utils/dateToString"

// custom
export { Card } from "./components/custom/Card"
export { UserInitials } from "./components/custom/UserInitials"

// layouts
export { NotificationBar } from "./components/layouts/NotificationBar"
export { CenteredContentWrapper } from "./components/layouts/CenteredContentWrapper"
export { TwoSidedContentWrapper } from "./components/layouts/TwoSidedContentWrapper"
export { DashboardWrapper } from "./components/layouts/DashboardWrapper"

// inputs
export { Input } from "./components/inputs/Input"
export { PrefixInput } from "./components/inputs/PrefixInput"
export { TextareaInput } from "./components/inputs/TextareaInput"
export { CheckboxInput } from "./components/inputs/CheckboxInput"
export { RadioInput } from "./components/inputs/RadioInput"
export { Label } from "./components/inputs/Label"

// links
export { IconLink } from "./components/links/IconLink"
export { TextLink } from "./components/links/TextLink"

// buttons
export { Button } from "./components/buttons/Button"
export { IconButton } from "./components/buttons/IconButton"
export { OutlineButton } from "./components/buttons/OutlineButton"
export { TextButton } from "./components/buttons/TextButton"
export { LinkButton } from "./components/buttons/LinkButton"

// typography
export { Display1 } from "./components/typography/Display1"
export { Display2 } from "./components/typography/Display2"
export { H1 } from "./components/typography/H1"
export { H2 } from "./components/typography/H2"
export { H3 } from "./components/typography/H3"
export { H4 } from "./components/typography/H4"
export { H5 } from "./components/typography/H5"
export { H6 } from "./components/typography/H6"
export { SubHeading } from "./components/typography/SubHeading"
export { FootText } from "./components/typography/FootText"
export { Caption } from "./components/typography/Caption"
export { P1 } from "./components/typography/P1"
export { P2 } from "./components/typography/P2"
export { P3 } from "./components/typography/P3"

// asset logos
import GoogleLogo from "./assets/logos/google-logo.svg"
import FacebookLogo from "./assets/logos/facebook-logo.svg"
import OnyinyeLogo from "./assets/logos/onyinye-logo.svg"

export const logos = {
  GoogleLogo,
  FacebookLogo,
  OnyinyeLogo,
}

// asset images
import LoginImage from "./assets/images/login-image.svg"
import RegisterImage from "./assets/images/register-image.svg"

export const images = {
  LoginImage,
  RegisterImage,
}

// assets custom icons
import CustomEnvelopeIcon from "./assets/icons/custom-envelope-icon.svg"
import CustomKeyIcon from "./assets/icons/custom-envelope-icon.svg"
import CustomPartyPopperIcon from "./assets/icons/custom-party-popper-icon.svg"
import CustomSuccessIcon from "./assets/icons/custom-success-icon.svg"
import LoaderIcon from "./assets/icons/loader-icon.gif"

export const icons = {
  CustomEnvelopeIcon,
  CustomKeyIcon,
  CustomPartyPopperIcon,
  CustomSuccessIcon,
  LoaderIcon,
}

// interfaces
export type { UserInterface } from "./interfaces/user.interface"
export type { ConfigInterface } from "./interfaces/config.interface"
export type { BusinessInterface } from "./interfaces/business.interface"
export type { BusinessUserInterface } from "./interfaces/business-user.interface"
export type { BusinessRoleAndPermissionInterface } from "./interfaces/business-role-and-permission.interface"
export type { BusinessStoreInterface } from "./interfaces/business-store.interface"
export type { BusinessBillingInterface } from "./interfaces/business-billing.interface"
export type { BusinessBranchInterface } from "./interfaces/business-branch.interface"
export type { BusinessAffiliateInterface } from "./interfaces/business-affiliate.interface"
export type { CardInterface } from "./interfaces/card.interface"
export type { CardDesignInterface } from "./interfaces/card-design.interface"
export type { CardOperationInterface } from "./interfaces/card-operation.interface"
export type { CardTransactionInterface } from "./interfaces/card-transaction.interface"
export type { PaymentInterface } from "./interfaces/payment.interface"
export type { PaymentRemitInterface } from "./interfaces/payment-remit.interface"
export type { PayoutInterface } from "./interfaces/payout.interface"
export type { CartInterface } from "./interfaces/cart.interface"
export type { DigitalCardDeliveryInterface } from "./interfaces/digital-card-delivery.interface"
export type { OrderInterface } from "./interfaces/order.interface"
export type { OrderDetailsInterface } from "./interfaces/order-details.interface"
export type { ShippingInterface } from "./interfaces/shipping.interface"
export type { NotificationInterface } from "./interfaces/notification.interface"
export type { Toast, Confirm } from "./stores/app-notification"

// stores
export { useAppNotificationStore } from "./stores/app-notification"
export { useForm } from "./stores/form"
