import React from "react"
import { CloseCircle, Warning2 } from "iconsax-react"
import { CheckCircle, X } from "react-feather"
import { Toast, useAppNotificationStore } from "../.."
import { Button, IconButton } from "../.."

export const LoadingIndicator: React.FC<{ borderColor: string }> = ({ borderColor }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`inline-block w-5 h-5 border-2 ${borderColor} border-r-transparent animate-spin rounded-full`}
        role="status"
      />
    </div>
  )
}

export const NotificationBar: React.FC<{}> = () => {
  const { isLoading, loadingProps, toastList, removeToast, confirmProps, closeConfirm } =
    useAppNotificationStore()

  return (
    <>
      {isLoading === true ? (
        <div
          className={`absolute w-fit ${loadingProps.bgColor} opacity-80 z-50 h-[5%] top-3 left-3 right-3 flex justify-between`}
        >
          <div className="h-full w-fit p-3 flex items-center gap-2 text-primary50">
            <LoadingIndicator borderColor={loadingProps.borderColor!} />
            <span>{loadingProps.message}</span>
          </div>
        </div>
      ) : (
        <span />
      )}

      {toastList.length > 0 && (
        <div
          className={`absolute z-50 h-fit flex flex-col gap-3 w-[90%] md:w-[40%] lg:w-[20%] top-0 right-0 ${
            toastList.length > 0 && "p-3 h-screen overflow-y-clip"
          }`}
        >
          {toastList.length > 0 &&
            toastList.map((toast: Toast) => (
              <div
                key={toast.id}
                className={`relative h-fit w-full flex items-start ${toast.color} p-3 gap-2 shadow-md`}
              >
                <IconButton
                  title="remove"
                  isLoading={false}
                  onClick={() => removeToast(toast)}
                  className={`absolute right-0 top-0 m-1 opacity-20 hover:opacity-100 hover:bg-opacity-70 ${toast.color}`}
                >
                  <X className="w-5" />
                </IconButton>

                {toast.color?.includes("success") === true && (
                  <CheckCircle className="w-7 h-7 min-w-min" />
                )}
                {toast.color?.includes("danger") === true && (
                  <CloseCircle className="w-7 h-7 min-w-min" />
                )}
                {toast.color?.includes("warning") === true && (
                  <Warning2 className="w-7 h-7 min-w-min" />
                )}

                <span className="mt-0.5">{toast.message}</span>
              </div>
            ))}
        </div>
      )}

      {confirmProps !== undefined && (
        <div className="absolute z-40 h-full flex justify-center top-0 bottom-0 left-0 right-0 backdrop-blur-sm">
          <div className="mt-[70%] md:mt-[40%] lg:mt-[10%] w-[90%] md:w-[50%] lg:w-[25%] h-fit">
            <div
              className={`h-full ${confirmProps.color} rounded-md p-4 shadow-lg flex flex-col justify-between gap-7`}
            >
              <p className="text-lg font-medium">{confirmProps.message}</p>
              <div className="flex gap-2 justify-end">
                <Button
                  onClick={async () => {
                    await confirmProps.onCancel!()
                    closeConfirm()
                  }}
                  title="cancel"
                  className={`${confirmProps.color} p-2`}
                >
                  Cancel
                </Button>
                <Button
                  onClick={async () => {
                    await confirmProps.onConfirm!()
                  }}
                  title={confirmProps.action}
                  className={`${confirmProps.colorAlt} py-2 m-0`}
                >
                  {confirmProps.action}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
