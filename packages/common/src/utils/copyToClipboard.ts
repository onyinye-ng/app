import { useAppNotificationStore } from "../"

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  useAppNotificationStore.getState().toast.success("Copied to clipboard")
}
