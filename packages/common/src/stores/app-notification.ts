import create from "zustand"
import { devtools } from "zustand/middleware"

export interface Toast {
  id: string
  message: JSX.Element | string
  color?: string
  autohide?: number | boolean
}

export interface Confirm {
  message: JSX.Element | string
  color?: "success" | "danger" | "warning"
  action: string
  onConfirm?: () => Promise<any>
  onCancel?: () => Promise<any>
}

interface AppNotificationState {
  isLoading?: boolean
  loadingProps: {
    message?: string
    borderColor?: string
    bgColor?: string
  }
  toastList: Toast[]
  confirmProps?: {
    message: Confirm["message"]
    color: string
    colorAlt: string
    action: Confirm["action"]
    onConfirm?: Confirm["onConfirm"]
    onCancel?: Confirm["onCancel"]
  }
}

interface AppNotificationMethods {
  loading: (
    state: boolean,
    message?: AppNotificationState["loadingProps"]["message"],
    borderColor?: AppNotificationState["loadingProps"]["borderColor"],
    bgColor?: AppNotificationState["loadingProps"]["bgColor"]
  ) => void
  toastMachine: (
    message: Toast["message"],
    color: Toast["color"],
    autohide: Toast["autohide"]
  ) => void
  toast: {
    success: (message: Toast["message"], autohide?: Toast["autohide"]) => void
    error: (message: Toast["message"], autohide?: Toast["autohide"]) => void
    warn: (message: Toast["message"], autohide?: Toast["autohide"]) => void
  }
  removeToast: (toast: Toast) => void
  toastId: () => string
  confirmMachine: (
    message: Confirm["message"],
    color: string,
    action: Confirm["action"],
    onConfirm?: Confirm["onConfirm"],
    onCancel?: Confirm["onCancel"]
  ) => void
  confirm: {
    success: (
      message: Confirm["message"],
      action: Confirm["action"],
      onConfirm?: Confirm["onConfirm"],
      onCancel?: Confirm["onCancel"]
    ) => void
    error: (
      message: Confirm["message"],
      action: Confirm["action"],
      onConfirm?: Confirm["onConfirm"],
      onCancel?: Confirm["onCancel"]
    ) => void
    warn: (
      message: Confirm["message"],
      action: Confirm["action"],
      onConfirm?: Confirm["onConfirm"],
      onCancel?: Confirm["onCancel"]
    ) => void
  }
  closeConfirm: () => void
}

export const useAppNotificationStore = create<AppNotificationState & AppNotificationMethods>()(
  devtools((set, get) => ({
    isLoading: false,
    loadingProps: {
      message: "Loading...",
      borderColor: "border-primary-light",
    },
    loading: (state, message = "Processing...", borderColor, bgColor) => {
      set({
        isLoading: state,
        loadingProps: {
          message,
          borderColor,
          bgColor,
        },
      })
    },
    toastList: [],
    toastId: () => {
      return `toast_${Math.floor(Math.random() * 99999)}`
    },
    removeToast(removedToast) {
      set({
        toastList: get().toastList.filter((toast) => removedToast.id !== toast.id),
      })
    },
    toast: {
      success: (message, autohide) => get().toastMachine(message, "success", autohide!),
      error: (message, autohide) => get().toastMachine(message, "danger", autohide!),
      warn: (message, autohide) => get().toastMachine(message, "warning", autohide!),
    },
    toastMachine: (message, color, autohide = true) => {
      const toastId = get().toastId()
      const toast = {
        id: toastId,
        message,
        color:
          color === "success"
            ? "bg-success-light text-success"
            : color === "danger"
            ? "bg-danger-light text-danger"
            : "bg-warning-light text-warning",
      }

      set({
        toastList: [toast, ...get().toastList],
      })

      if (typeof autohide == "boolean" && autohide === true) {
        const lifeTime = 15000
        setTimeout(() => {
          get().removeToast(toast)
        }, lifeTime)
      } else if (typeof autohide == "number") {
        setTimeout(() => {
          get().removeToast(toast)
        }, autohide * 1000)
      }
    },
    confirmProps: undefined,
    confirm: {
      success: (message, action, onConfirm?, onCancel?) =>
        get().confirmMachine(message, "success", action, onConfirm, onCancel),
      error: (message, action, onConfirm?, onCancel?) =>
        get().confirmMachine(message, "danger", action, onConfirm, onCancel),
      warn: (message, action, onConfirm?, onCancel?) =>
        get().confirmMachine(message, "warning", action, onConfirm, onCancel),
    },
    confirmMachine: (message, color, action, onConfirm, onCancel) => {
      set({
        confirmProps: {
          color:
            color === "success"
              ? "bg-success-light text-success"
              : color === "danger"
              ? "bg-danger-light text-danger"
              : "bg-warning-light text-warning",
          colorAlt:
            color === "success"
              ? "bg-success text-success-light"
              : color === "danger"
              ? "bg-danger text-danger-light"
              : "bg-warning text-warning-light",
          message,
          action,
          onConfirm: onConfirm === undefined ? async () => get().closeConfirm() : onConfirm,
          onCancel: onCancel === undefined ? async () => {} : onCancel,
        },
      })
    },
    closeConfirm: () => {
      set({
        confirmProps: undefined,
      })
    },
  }))
)
