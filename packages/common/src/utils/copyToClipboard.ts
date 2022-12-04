import { useStatusStore } from "../stores"

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  useStatusStore.getState().toast.success("Copied to clipboard")
}
