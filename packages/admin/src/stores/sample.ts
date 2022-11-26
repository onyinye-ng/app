import create from "zustand"
import { devtools, persist } from "zustand/middleware"

interface SampleState {}
interface SampleMethods {
  restoreDefault: () => void
  helloWorld: () => any
}

export const useCardStore = create<SampleState & SampleMethods>()(
  devtools(
    persist(
      (set, get) => ({
        restoreDefault: () => {
          set({})
        },
        helloWorld: () => {
          return "Hello World"
        },
      })
      // {
      //   name: `${appId}.sample`,
      // }
    )
  )
)
